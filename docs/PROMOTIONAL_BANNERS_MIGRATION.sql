-- Create promotional_banners table for dynamic home page banners
CREATE TABLE IF NOT EXISTS promotional_banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  label VARCHAR(100) NOT NULL COMMENT 'e.g., SPECIAL PRODUCTS, 30% OFF THIS WEEK',
  title VARCHAR(255) NOT NULL COMMENT 'e.g., Keep Your Feet Cool And Comfy',
  cta_text VARCHAR(100) DEFAULT 'Shop Now' COMMENT 'Call-to-action button text',
  cta_link VARCHAR(500) DEFAULT '#' COMMENT 'Call-to-action button link',
  image_url VARCHAR(500) COMMENT 'Cloudinary image URL',
  background_color VARCHAR(100) COMMENT 'Gradient background, e.g., linear-gradient(135deg, #F5E6D3 0%, #E8D4BF 100%)',
  display_order INT DEFAULT 0 COMMENT 'Sort order for banners',
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_is_active (is_active),
  INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample promotional banners
INSERT INTO promotional_banners (label, title, cta_text, cta_link, image_url, background_color, display_order, is_active) VALUES
(
  'SPECIAL PRODUCTS',
  'Keep Your Feet Cool And Comfy',
  'Shop Now',
  '/shop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
  'linear-gradient(135deg, #F5E6D3 0%, #E8D4BF 100%)',
  1,
  1
),
(
  '30% OFF THIS WEEK',
  'Sunglasses New Collection',
  'Shop Now',
  '/shop?category=accessories',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80',
  'linear-gradient(135deg, #FFD9E8 0%, #FFB6D9 100%)',
  2,
  1
),
(
  'SPECIAL PRODUCTS',
  'Prepare For Your Latest Season',
  'Shop Now',
  '/shop?category=fashion',
  'https://images.unsplash.com/photo-1529260830369-e490ebb3658b?auto=format&fit=crop&w=400&q=80',
  'linear-gradient(135deg, #B8D9F1 0%, #7DB3E8 100%)',
  3,
  1
);
