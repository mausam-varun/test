const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

async function createTestAdmin() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mausam@123456',
    database: 'divara_craft'
  });

  const email = 'admin@divaracraft.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if admin already exists
    const [rows] = await connection.query(
      'SELECT id FROM admin_users WHERE email = ?',
      [email]
    );

    if (rows.length > 0) {
      console.log('✅ Admin already exists with ID:', rows[0].id);
      return rows[0].id;
    }

    // Create new admin
    const [result] = await connection.query(
      'INSERT INTO admin_users (email, password_hash, user_type, preferred_currency, created_at) VALUES (?, ?, ?, ?, NOW())',
      [email, hashedPassword, 'super_admin', 'USD']
    );

    console.log('✅ Admin created successfully!');
    console.log('📧 Email:', email);
    console.log('🔑 Password:', password);
    console.log('🆔 Admin ID:', result.insertId);
    console.log('🎟️  Test Token: admin-token-' + result.insertId);

    return result.insertId;
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await connection.end();
  }
}

createTestAdmin();
