-- Divara Craft MySQL schema
-- Date: 2026-03-28

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
);

CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100) UNIQUE
);

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
);

CREATE TABLE IF NOT EXISTS product_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  image_url TEXT,
  is_primary TINYINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_product (product_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

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
);

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
);

CREATE TABLE IF NOT EXISTS ai_search_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  upload_id INT,
  product_id INT,
  score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_upload (upload_id),
  INDEX idx_product (product_id)
);

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
);

CREATE TABLE IF NOT EXISTS cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  quantity INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_cart (user_id, product_id),
  INDEX idx_user (user_id)
);

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
);

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
);

CREATE TABLE IF NOT EXISTS wallets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNIQUE,
  balance DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_user (user_id)
);

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
);

CREATE TABLE IF NOT EXISTS countries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  code VARCHAR(10) UNIQUE,
  currency_code VARCHAR(10),
  price_multiplier DECIMAL(5,2) DEFAULT 1.00,
  INDEX idx_code (code)
);

CREATE TABLE IF NOT EXISTS currencies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10) UNIQUE,
  symbol VARCHAR(10),
  name VARCHAR(50),
  exchange_rate DECIMAL(12,6),
  is_base TINYINT DEFAULT 0,
  INDEX idx_code (code)
);
