const mysql = require('mysql2/promise');

let pool;

function env(primaryKey, fallbackKey, defaultValue = '') {
  return process.env[primaryKey] || process.env[fallbackKey] || defaultValue;
}

function buildPoolConfig(preferSocket = true) {
  const config = {
    user: env('DB_USER', 'MYSQL_USER', 'root'),
    password: env('DB_PASSWORD', 'MYSQL_PASSWORD', ''),
    database: env('DB_NAME', 'MYSQL_DATABASE', 'divara_craft'),
    waitForConnections: true,
    connectionLimit: Number(env('DB_CONNECTION_LIMIT', 'MYSQL_CONNECTION_LIMIT', '10')) || 10,
    queueLimit: 0
  };

  const socketPath = env('DB_SOCKET', 'MYSQL_SOCKET', '');
  if (preferSocket && socketPath) {
    config.socketPath = socketPath;
    return config;
  }

  config.host = env('DB_HOST', 'MYSQL_HOST', 'localhost');
  config.port = Number(env('DB_PORT', 'MYSQL_PORT', '3306')) || 3306;
  return config;
}

function getPool() {
  if (!pool) {
    pool = mysql.createPool(buildPoolConfig(true));
  }
  return pool;
}

async function ensureColumnExists(db, tableName, columnName, definition) {
  const [rows] = await db.execute(
    `SELECT 1
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = ?
       AND COLUMN_NAME = ?
     LIMIT 1`,
    [tableName, columnName]
  );

  if (rows.length) {
    return;
  }

  await db.query(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${definition}`);
}

async function initializeDatabase() {
  let db = getPool();

  try {
    await db.query('SELECT 1');
  } catch (error) {
    const socketConfigured = Boolean(env('DB_SOCKET', 'MYSQL_SOCKET', ''));
    const socketError = error && (error.code === 'ENOENT' || error.code === 'EACCES');

    if (!socketConfigured || !socketError) {
      throw error;
    }

    // Fallback to TCP if configured unix socket path does not exist.
    await db.end().catch(() => {});
    pool = mysql.createPool(buildPoolConfig(false));
    db = pool;
    await db.query('SELECT 1');
  }

  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(150),
      email VARCHAR(150) UNIQUE,
      password VARCHAR(255),
      phone VARCHAR(20),
      role ENUM('user','admin') DEFAULT 'user',
      country_code VARCHAR(10),
      currency_code VARCHAR(10),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_country (country_code)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      slug VARCHAR(100) UNIQUE
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      slug VARCHAR(255) UNIQUE,
      description TEXT,
      base_price DECIMAL(10,2),
      stock INT DEFAULT 0,
      category_id INT,
      is_active TINYINT DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_category (category_id),
      INDEX idx_price (base_price),
      INDEX idx_created (created_at),
      CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE SET NULL
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      image_url TEXT,
      is_primary TINYINT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_product (product_id),
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_ai_metadata (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      colors JSON,
      pattern VARCHAR(100),
      style VARCHAR(100),
      material VARCHAR(100),
      ai_description TEXT,
      embedding_id VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_product (product_id),
      INDEX idx_pattern (pattern),
      INDEX idx_style (style),
      INDEX idx_embedding (embedding_id),
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS user_uploads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      image_url TEXT,
      colors JSON,
      pattern VARCHAR(100),
      style VARCHAR(100),
      embedding TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_user (user_id),
      INDEX idx_pattern (pattern),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS ai_search_results (
      id INT AUTO_INCREMENT PRIMARY KEY,
      upload_id INT,
      product_id INT,
      score FLOAT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_upload (upload_id),
      INDEX idx_product (product_id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS generated_designs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      upload_id INT,
      prompt TEXT,
      image_url TEXT,
      status ENUM('generated','approved','rejected') DEFAULT 'generated',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_user (user_id),
      INDEX idx_upload (upload_id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS cart (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      product_id INT,
      quantity INT DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY unique_cart (user_id, product_id),
      INDEX idx_user (user_id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      base_amount DECIMAL(10,2),
      display_amount DECIMAL(10,2),
      currency_code VARCHAR(10),
      exchange_rate DECIMAL(12,6),
      price_multiplier DECIMAL(5,2),
      payment_status ENUM('pending','paid','failed'),
      payment_method ENUM('online','cod'),
      order_status ENUM('placed','processing','shipped','delivered','cancelled'),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_user (user_id),
      INDEX idx_status (order_status),
      INDEX idx_payment (payment_status),
      INDEX idx_created (created_at)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT,
      product_id INT,
      price DECIMAL(10,2),
      quantity INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_order (order_id),
      INDEX idx_product (product_id),
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    )
  `);

  await ensureColumnExists(db, 'orders', 'order_number', 'VARCHAR(40)');
  await ensureColumnExists(db, 'orders', 'customer_name', 'VARCHAR(150)');
  await ensureColumnExists(db, 'orders', 'customer_email', 'VARCHAR(200)');
  await ensureColumnExists(db, 'orders', 'customer_phone', 'VARCHAR(40)');
  await ensureColumnExists(db, 'orders', 'address_line1', 'VARCHAR(255)');
  await ensureColumnExists(db, 'orders', 'address_line2', 'VARCHAR(255)');
  await ensureColumnExists(db, 'orders', 'city', 'VARCHAR(120)');
  await ensureColumnExists(db, 'orders', 'state', 'VARCHAR(120)');
  await ensureColumnExists(db, 'orders', 'postal_code', 'VARCHAR(40)');
  await ensureColumnExists(db, 'orders', 'country', 'VARCHAR(120)');
  await ensureColumnExists(db, 'orders', 'subtotal_amount', 'DECIMAL(10,2)');
  await ensureColumnExists(db, 'orders', 'shipping_amount', 'DECIMAL(10,2)');
  await ensureColumnExists(db, 'orders', 'tax_amount', 'DECIMAL(10,2)');
  await ensureColumnExists(db, 'orders', 'total_amount', 'DECIMAL(10,2)');

  await db.query(`
    CREATE TABLE IF NOT EXISTS wallets (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT UNIQUE,
      balance DECIMAL(10,2) DEFAULT 0,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_user (user_id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS wallet_transactions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      type ENUM('credit','debit'),
      amount DECIMAL(10,2),
      purpose ENUM('add_money','design_generation','refund'),
      reference_id VARCHAR(255),
      status ENUM('pending','success','failed'),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_user (user_id),
      INDEX idx_status (status),
      INDEX idx_created (created_at)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS countries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      code VARCHAR(10) UNIQUE,
      currency_code VARCHAR(10),
      price_multiplier DECIMAL(5,2) DEFAULT 1.00,
      INDEX idx_code (code)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS currencies (
      id INT AUTO_INCREMENT PRIMARY KEY,
      code VARCHAR(10) UNIQUE,
      symbol VARCHAR(10),
      name VARCHAR(50),
      exchange_rate DECIMAL(12,6),
      is_base TINYINT DEFAULT 0,
      INDEX idx_code (code)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      user_type ENUM('super_admin', 'admin') NOT NULL DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      last_login TIMESTAMP NULL,
      INDEX idx_admin_users_email (email)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_slider (
      id INT AUTO_INCREMENT PRIMARY KEY,
      image_url TEXT NOT NULL,
      title VARCHAR(255) DEFAULT '',
      subtitle VARCHAR(255) DEFAULT '',
      sort_order INT DEFAULT 0,
      is_active TINYINT DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slider_active_sort (is_active, sort_order)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_slider_settings (
      id TINYINT PRIMARY KEY,
      display_count TINYINT NOT NULL DEFAULT 5,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await db.query(`
    INSERT INTO product_slider_settings (id, display_count)
    VALUES (1, 5)
    ON DUPLICATE KEY UPDATE id = id
  `);
}

module.exports = {
  getPool,
  initializeDatabase
};
