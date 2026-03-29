const bcrypt = require('bcrypt');
const { getPool } = require('./db');

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
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [result] = await db.query(
      'INSERT INTO admin_users (email, password, user_type) VALUES (?, ?, ?)',
      [email, hashedPassword, userType]
    );
    return { id: result.insertId, email, userType, created_at: new Date() };
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
    'SELECT id, email, password, user_type FROM admin_users WHERE email = ?',
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
    userType: user.user_type
  };
}

async function getAdminUserById(userId) {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, email, user_type, created_at, last_login FROM admin_users WHERE id = ?',
    [userId]
  );

  return rows.length > 0 ? rows[0] : null;
}

async function getAllAdminUsers() {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, email, user_type, created_at, last_login FROM admin_users ORDER BY created_at DESC'
  );
  return rows;
}

async function deleteAdminUser(userId) {
  const db = getPool();
  const [result] = await db.query(
    'DELETE FROM admin_users WHERE id = ?',
    [userId]
  );
  return result.affectedRows > 0;
}

module.exports = {
  createCustomerUser,
  loginCustomerUser,
  getCustomerUserById,
  updateCustomerProfile,
  createAdminUser,
  loginAdminUser,
  getAdminUserById,
  getAllAdminUsers,
  deleteAdminUser
};
