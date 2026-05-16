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

function parseColorValues(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return [...new Set(value.map((item) => String(item || '').trim()).filter(Boolean))];
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return [...new Set(parsed.map((item) => String(item || '').trim()).filter(Boolean))];
      }
    } catch {
      // fall back to delimiter parsing
    }

    return [...new Set(
      value
        .split(/[,\n|/]+/)
        .map((item) => item.trim())
        .filter(Boolean)
    )];
  }

  return [];
}

async function backfillProductColorsFromMetadata(db) {
  const [rows] = await db.query(
    `SELECT product_id, colors
     FROM product_ai_metadata
     WHERE product_id IS NOT NULL
       AND colors IS NOT NULL`
  );

  for (const row of rows) {
    const colors = parseColorValues(row.colors);
    for (const [index, colorName] of colors.entries()) {
      await db.execute(
        `INSERT INTO product_colors (product_id, color_name, sort_order, is_primary_color)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE sort_order = LEAST(sort_order, VALUES(sort_order))`,
        [row.product_id, colorName, index, index === 0 ? 1 : 0]
      );
    }
  }
}

async function backfillMasterColors(db) {
  await db.query(`
    INSERT INTO colors (color_name, color_code)
    SELECT DISTINCT LOWER(TRIM(pc.color_name)) AS color_name,
           MAX(COALESCE(NULLIF(pc.color_code, ''), NULLIF(pc.color_hex, ''))) AS color_code
    FROM product_colors pc
    WHERE COALESCE(TRIM(pc.color_name), '') <> ''
    GROUP BY LOWER(TRIM(pc.color_name))
    ON DUPLICATE KEY UPDATE
      color_code = COALESCE(NULLIF(VALUES(color_code), ''), colors.color_code)
  `);

  await db.query(`
    UPDATE product_colors pc
    LEFT JOIN colors c ON LOWER(TRIM(c.color_name)) = LOWER(TRIM(pc.color_name))
    SET pc.color_id = COALESCE(pc.color_id, c.id),
        pc.color_code = COALESCE(NULLIF(pc.color_code, ''), c.color_code, pc.color_hex),
        pc.color_hex = COALESCE(NULLIF(pc.color_hex, ''), pc.color_code, c.color_code)
  `);

  await db.query('UPDATE product_colors SET is_primary_color = 0');
  await db.query(`
    UPDATE product_colors pc
    INNER JOIN (
      SELECT product_id, MIN(sort_order) AS first_sort_order
      FROM product_colors
      GROUP BY product_id
    ) first_color ON first_color.product_id = pc.product_id
    SET pc.is_primary_color = CASE WHEN pc.sort_order = first_color.first_sort_order THEN 1 ELSE 0 END
  `);
}

function detectColorKeywords(text) {
  const source = String(text || '').toLowerCase();
  if (!source) {
    return [];
  }

  const knownColors = [
    'red', 'maroon', 'pink', 'rose', 'purple', 'lavender', 'blue', 'navy', 'teal', 'green',
    'olive', 'yellow', 'mustard', 'orange', 'peach', 'gold', 'silver', 'black', 'white',
    'ivory', 'cream', 'beige', 'brown', 'bronze', 'grey', 'gray'
  ];

  return knownColors.filter((color) => source.includes(color));
}

async function backfillProductColorsFromProductText(db) {
  const [productColumns] = await db.query('SHOW COLUMNS FROM products');
  const hasTitleColumn = productColumns.some((column) => column.Field === 'title');
  const titleField = hasTitleColumn ? 'title' : 'name';

  const [rows] = await db.query(
    `SELECT p.id, COALESCE(p.${titleField}, '') AS product_name, COALESCE(p.description, '') AS description
     FROM products p
     WHERE NOT EXISTS (
       SELECT 1
       FROM product_colors pc
       WHERE pc.product_id = p.id
     )`
  );

  for (const row of rows) {
    const colors = detectColorKeywords(`${row.product_name} ${row.description}`);
    for (const [index, colorName] of colors.entries()) {
      await db.execute(
        `INSERT INTO product_colors (product_id, color_name, sort_order)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE sort_order = LEAST(sort_order, VALUES(sort_order))`,
        [row.id, colorName, index]
      );
    }
  }
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
      avatar_url MEDIUMTEXT,
      country_code VARCHAR(10),
      currency_code VARCHAR(10),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_country (country_code)
    )
  `);

  await ensureColumnExists(db, 'users', 'avatar_url', 'MEDIUMTEXT');

  await db.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      slug VARCHAR(100) UNIQUE
    )
  `);

  await ensureColumnExists(db, 'categories', 'description', 'TEXT');
  await ensureColumnExists(db, 'categories', 'image_url', 'TEXT');
  await ensureColumnExists(db, 'categories', 'is_home_visible', 'TINYINT(1) NOT NULL DEFAULT 1');
  await ensureColumnExists(db, 'categories', 'sort_order', 'INT NOT NULL DEFAULT 0');

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
    CREATE TABLE IF NOT EXISTS colors (
      id INT AUTO_INCREMENT PRIMARY KEY,
      color_name VARCHAR(100) NOT NULL UNIQUE,
      color_code VARCHAR(20) DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_colors_name (color_name)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_colors (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      color_id INT DEFAULT NULL,
      color_name VARCHAR(100) NOT NULL,
      color_code VARCHAR(20) DEFAULT NULL,
      color_hex VARCHAR(20) DEFAULT NULL,
      is_primary_color TINYINT(1) NOT NULL DEFAULT 0,
      sort_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uq_product_color (product_id, color_name),
      INDEX idx_product_color_product (product_id),
      INDEX idx_product_color_name (color_name),
      INDEX idx_product_color_color_id (color_id),
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
      FOREIGN KEY (color_id) REFERENCES colors(id) ON DELETE SET NULL
    )
  `);

  await ensureColumnExists(db, 'product_colors', 'color_id', 'INT DEFAULT NULL');
  await ensureColumnExists(db, 'product_colors', 'color_code', 'VARCHAR(20) DEFAULT NULL');
  await ensureColumnExists(db, 'product_colors', 'is_primary_color', 'TINYINT(1) NOT NULL DEFAULT 0');

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_attributes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT NOT NULL,
      attribute_key VARCHAR(100) NOT NULL,
      attribute_value VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uq_product_attribute (product_id, attribute_key, attribute_value),
      INDEX idx_product_attribute_product (product_id),
      INDEX idx_product_attribute_key (attribute_key),
      INDEX idx_product_attribute_key_value (attribute_key, attribute_value),
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

  await ensureColumnExists(db, 'products', 'seo_title', 'VARCHAR(255) DEFAULT NULL');
  await ensureColumnExists(db, 'products', 'seo_meta_description', 'TEXT');
  await ensureColumnExists(db, 'products', 'tags', 'TEXT');
  await ensureColumnExists(db, 'products', 'total_added_quantity', 'INT NOT NULL DEFAULT 0');
  await ensureColumnExists(db, 'products', 'stock', 'INT NOT NULL DEFAULT 0');

  await backfillProductColorsFromMetadata(db);
  await backfillProductColorsFromProductText(db);
  await backfillMasterColors(db);

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
  await ensureColumnExists(db, 'orders', 'delivered_at', 'DATETIME DEFAULT NULL');
  await ensureColumnExists(db, 'orders', 'is_rating_eligible', 'TINYINT(1) NOT NULL DEFAULT 0');
  await ensureColumnExists(db, 'orders', 'is_rated', 'TINYINT(1) NOT NULL DEFAULT 0');

  await db.query(`
    CREATE TABLE IF NOT EXISTS product_reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      user_id INT NOT NULL,
      overall_rating TINYINT UNSIGNED NOT NULL,
      material_quality TINYINT UNSIGNED DEFAULT NULL,
      design_rating TINYINT UNSIGNED DEFAULT NULL,
      craftsmanship TINYINT UNSIGNED DEFAULT NULL,
      comfort TINYINT UNSIGNED DEFAULT NULL,
      value_for_money TINYINT UNSIGNED DEFAULT NULL,
      emotion ENUM('Loved it', 'Happy', 'Okay', 'Disappointed') NOT NULL,
      review_text TEXT,
      images JSON,
      support_follow_up_required TINYINT(1) NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uq_product_reviews_order (order_id),
      INDEX idx_product_reviews_user (user_id),
      INDEX idx_product_reviews_rating (overall_rating),
      INDEX idx_product_reviews_support (support_follow_up_required),
      CONSTRAINT fk_product_reviews_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      CONSTRAINT fk_product_reviews_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

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
      preferred_currency VARCHAR(10) NOT NULL DEFAULT 'USD',
      user_type ENUM('super_admin', 'admin', 'partner') NOT NULL DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      last_login TIMESTAMP NULL,
      INDEX idx_admin_users_email (email)
    )
  `);

  await ensureColumnExists(db, 'admin_users', 'preferred_currency', "VARCHAR(10) NOT NULL DEFAULT 'USD'");

  const [adminUserTypeRows] = await db.execute(
    `SELECT COLUMN_TYPE
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = 'admin_users'
       AND COLUMN_NAME = 'user_type'
     LIMIT 1`
  );

  const adminUserTypeColumn = String(adminUserTypeRows?.[0]?.COLUMN_TYPE || '');
  if (!adminUserTypeColumn.includes("'partner'")) {
    await db.query(
      "ALTER TABLE admin_users MODIFY COLUMN user_type ENUM('super_admin', 'admin', 'partner') NOT NULL DEFAULT 'admin'"
    );
  }

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
  await db.query(`
    CREATE TABLE IF NOT EXISTS app_settings (
      \`key\` VARCHAR(100) PRIMARY KEY,
      value TEXT NOT NULL,
      updated_by INT DEFAULT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await db.query(`
    INSERT INTO app_settings (\`key\`, value)
    VALUES ('usd_display_multiplier', '1')
    ON DUPLICATE KEY UPDATE \`key\` = \`key\`
  `);
  await db.query(`
    INSERT INTO app_settings (\`key\`, value)
    VALUES ('home_category_display_count', '4')
    ON DUPLICATE KEY UPDATE \`key\` = \`key\`
  `);
  // Shiprocket shipment tracking columns (migration-safe)
  await ensureColumnExists(db, 'orders', 'shiprocket_order_id', 'VARCHAR(100) DEFAULT NULL');
  await ensureColumnExists(db, 'orders', 'shiprocket_shipment_id', 'VARCHAR(100) DEFAULT NULL');
  await ensureColumnExists(db, 'orders', 'awb_code', 'VARCHAR(100) DEFAULT NULL');
  await ensureColumnExists(db, 'orders', 'courier_name', 'VARCHAR(150) DEFAULT NULL');
  await ensureColumnExists(db, 'orders', 'tracking_url', 'TEXT DEFAULT NULL');

  // App Settings table for theme colors and general configuration
  await db.query(`
    CREATE TABLE IF NOT EXISTS app_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      \`key\` VARCHAR(255) UNIQUE NOT NULL,
      value LONGTEXT,
      updated_by INT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_key (\`key\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Initialize default theme colors if not exists
  try {
    const [existing] = await db.execute("SELECT value FROM app_settings WHERE \`key\` = 'theme_colors' LIMIT 1");
    if (!existing || existing.length === 0) {
      const defaultTheme = {
        primaryGradientStart: '#D946EF',
        primaryGradientEnd: '#9333EA',
        primaryPurple: '#9333EA',
        deepPurple: '#7E22CE',
        pink: '#D946EF',
        gold: '#C9A45C',
        textMain: '#111827',
        textSecondary: '#1F2937',
        textBody: '#6B7280',
        textLight: '#9CA3AF',
        borderLight: '#E5E7EB',
        bgLight: '#F9FAFB'
      };
      await db.execute(
        "INSERT INTO app_settings (\`key\`, value) VALUES (?, ?)",
        ['theme_colors', JSON.stringify(defaultTheme)]
      );
    }
  } catch (err) {
    console.warn('Theme initialization note:', err.message);
  }

  // Create home_sections table for managing home page sections (New Arrivals, Our Story, etc.)
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS home_sections (
        id INT AUTO_INCREMENT PRIMARY KEY,
        \`section\` VARCHAR(50) NOT NULL UNIQUE,
        image_url TEXT,
        top_label VARCHAR(100),
        main_title VARCHAR(255),
        \`description\` TEXT,
        button_text VARCHAR(100),
        button_link VARCHAR(500),
        is_active TINYINT DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_section_active (\`section\`, is_active)
      )
    `);

    // Initialize with default sections
    const defaultSections = [
      { section: 'new_arrivals', label: 'New Arrivals' },
      { section: 'our_story', label: 'Our Story' }
    ];

    for (const sec of defaultSections) {
      await db.execute(
        "INSERT IGNORE INTO home_sections (\`section\`, top_label, is_active) VALUES (?, ?, 1)",
        [sec.section, sec.label]
      );
    }
  } catch (err) {
    console.warn('Home sections table note:', err.message);
  }
}

module.exports = {
  getPool,
  initializeDatabase
};
