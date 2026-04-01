const bcrypt = require('bcrypt');
const { getPool } = require('./db');

const DEFAULT_ADMIN_CURRENCY = 'USD';
const ADMIN_USER_TYPES = new Set(['admin', 'super_admin', 'partner']);

function normalizeAdminCurrency(currency) {
  const value = String(currency || DEFAULT_ADMIN_CURRENCY).trim().toUpperCase();
  if (value !== 'USD' && value !== 'INR') {
    throw new Error('Unsupported currency. Allowed values: USD, INR');
  }
  return value;
}

function normalizeAdminUserType(userType) {
  const value = String(userType || 'admin').trim().toLowerCase();
  if (!ADMIN_USER_TYPES.has(value)) {
    throw new Error('Unsupported user type. Allowed values: admin, super_admin, partner');
  }
  return value;
}

async function createCustomerUser({ name, email, password, phone }) {
  const db = getPool();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPhone = String(phone || '').trim();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
      [name, normalizedEmail, hashedPassword, normalizedPhone || null, 'user']
    );

    return {
      id: result.insertId,
      name,
      email: normalizedEmail,
      phone: normalizedPhone,
      role: 'user',
      created_at: new Date()
    };
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

async function loginCustomerUser(email, password) {
  const db = getPool();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const [rows] = await db.query(
    'SELECT id, name, email, password, phone, role, created_at FROM users WHERE email = ? LIMIT 1',
    [normalizedEmail]
  );

  if (rows.length === 0) {
    throw new Error('Invalid email or password');
  }

  const user = rows[0];
  const isPasswordValid = await bcrypt.compare(password, user.password || '');

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    created_at: user.created_at
  };
}

async function updateCustomerProfile(userId, { name, email, phone }) {
  const db = getPool();

  if (!userId) {
    throw new Error('User id is required');
  }

  const normalizedName = String(name || '').trim();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPhone = String(phone || '').trim();

  if (!normalizedName || !normalizedEmail) {
    throw new Error('Name and email are required');
  }

  try {
    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
      [normalizedName, normalizedEmail, normalizedPhone || null, Number(userId)]
    );

    if (!result.affectedRows) {
      throw new Error('User not found');
    }

    const [rows] = await db.query(
      'SELECT id, name, email, phone, role, created_at FROM users WHERE id = ? LIMIT 1',
      [Number(userId)]
    );

    return rows[0] || null;
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

async function getCustomerUserById(userId) {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, name, email, phone, role, created_at FROM users WHERE id = ? LIMIT 1',
    [Number(userId)]
  );

  return rows[0] || null;
}

async function createAdminUser(email, password, userType = 'admin') {
  const db = getPool();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedUserType = normalizeAdminUserType(userType);
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [result] = await db.query(
      'INSERT INTO admin_users (email, password, user_type) VALUES (?, ?, ?)',
      [normalizedEmail, hashedPassword, normalizedUserType]
    );
    return {
      id: result.insertId,
      email: normalizedEmail,
      userType: normalizedUserType,
      preferred_currency: DEFAULT_ADMIN_CURRENCY,
      created_at: new Date()
    };
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

async function loginAdminUser(email, password) {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, email, password, user_type, preferred_currency FROM admin_users WHERE email = ?',
    [email]
  );

  if (rows.length === 0) {
    throw new Error('Invalid email or password');
  }

  const user = rows[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Update last_login
  await db.query(
    'UPDATE admin_users SET last_login = NOW() WHERE id = ?',
    [user.id]
  );

  return {
    id: user.id,
    email: user.email,
    userType: user.user_type,
    preferred_currency: user.preferred_currency || DEFAULT_ADMIN_CURRENCY
  };
}

async function getAdminUserById(userId) {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, email, user_type, preferred_currency, created_at, last_login FROM admin_users WHERE id = ?',
    [userId]
  );

  return rows.length > 0 ? rows[0] : null;
}

async function getAllAdminUsers() {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, email, user_type, preferred_currency, created_at, last_login FROM admin_users ORDER BY created_at DESC'
  );
  return rows;
}

async function getAdminCurrencyPreference(userId) {
  const db = getPool();
  const numericUserId = Number(userId);
  if (!Number.isInteger(numericUserId) || numericUserId <= 0) {
    throw new Error('Valid admin id is required');
  }

  const [rows] = await db.query(
    'SELECT preferred_currency FROM admin_users WHERE id = ? LIMIT 1',
    [numericUserId]
  );

  if (!rows.length) {
    throw new Error('Admin user not found');
  }

  return normalizeAdminCurrency(rows[0].preferred_currency || DEFAULT_ADMIN_CURRENCY);
}

async function updateAdminCurrencyPreference(userId, currency) {
  const db = getPool();
  const numericUserId = Number(userId);
  if (!Number.isInteger(numericUserId) || numericUserId <= 0) {
    throw new Error('Valid admin id is required');
  }

  const normalizedCurrency = normalizeAdminCurrency(currency);
  const [result] = await db.query(
    'UPDATE admin_users SET preferred_currency = ? WHERE id = ?',
    [normalizedCurrency, numericUserId]
  );

  if (!result.affectedRows) {
    throw new Error('Admin user not found');
  }

  return {
    adminId: numericUserId,
    preferred_currency: normalizedCurrency
  };
}

async function deleteAdminUser(userId) {
  const db = getPool();
  const [result] = await db.query(
    'DELETE FROM admin_users WHERE id = ?',
    [userId]
  );
  return result.affectedRows > 0;
}

async function loginOrCreateGoogleUser(googleToken) {
  const db = getPool();

  try {
    // Validate token format
    if (!googleToken || typeof googleToken !== 'string') {
      throw new Error('Invalid token format: token must be a non-empty string');
    }

    const parts = googleToken.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format: expected 3 parts (header.payload.signature)');
    }

    // Decode payload (JWT format: header.payload.signature)
    let payload;
    try {
      const decodedPayload = Buffer.from(parts[1], 'base64').toString('utf-8');
      payload = JSON.parse(decodedPayload);
    } catch (error) {
      throw new Error('Failed to decode JWT payload: ' + error.message);
    }

    if (!payload || !payload.email) {
      throw new Error('Email not found in Google token payload');
    }

    const email = String(payload.email).trim().toLowerCase();
    const name = payload.name || payload.email.split('@')[0];
    const picture = payload.picture || null;

    // Validate email format
    if (!email.includes('@')) {
      throw new Error('Invalid email in Google token');
    }

    // Check if user already exists
    const [existingUsers] = await db.query(
      'SELECT id, name, email, phone, role, created_at FROM users WHERE email = ? LIMIT 1',
      [email]
    );

    if (existingUsers.length > 0) {
      // User exists, return existing user
      const existingUser = existingUsers[0];
      return {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        phone: existingUser.phone,
        role: existingUser.role,
        created_at: existingUser.created_at
      };
    }

    // Create new user with Google OAuth data
    try {
      const [result] = await db.query(
        'INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)',
        [name, email, null, 'user']
      );

      return {
        id: result.insertId,
        name,
        email,
        phone: null,
        role: 'user',
        created_at: new Date().toISOString()
      };
    } catch (dbError) {
      if (dbError.code === 'ER_DUP_ENTRY') {
        throw new Error('Email already registered. Please use normal login instead.');
      }
      throw new Error('Database error creating user: ' + dbError.message);
    }
  } catch (error) {
    console.error('Google OAuth authentication error:', error);
    throw new Error(error.message || 'Failed to authenticate with Google');
  }
}

async function loginOrCreateGoogleProfileUser({ email, name, picture }) {
  const db = getPool();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedName = String(name || '').trim() || normalizedEmail.split('@')[0];

  if (!normalizedEmail || !normalizedEmail.includes('@')) {
    throw new Error('Valid email is required');
  }

  const [existingUsers] = await db.query(
    'SELECT id, name, email, phone, role, created_at FROM users WHERE email = ? LIMIT 1',
    [normalizedEmail]
  );

  if (existingUsers.length > 0) {
    return existingUsers[0];
  }

  const [result] = await db.query(
    'INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)',
    [normalizedName, normalizedEmail, null, 'user']
  );

  return {
    id: result.insertId,
    name: normalizedName,
    email: normalizedEmail,
    phone: null,
    role: 'user',
    created_at: new Date().toISOString(),
    picture: picture || null
  };
}

module.exports = {
  createCustomerUser,
  loginCustomerUser,
  getCustomerUserById,
  updateCustomerProfile,
  loginOrCreateGoogleUser,
  loginOrCreateGoogleProfileUser,
  createAdminUser,
  loginAdminUser,
  getAdminUserById,
  getAllAdminUsers,
  deleteAdminUser,
  getAdminCurrencyPreference,
  updateAdminCurrencyPreference
};
