/**
 * Database Migration for Color-Enhanced Matching
 * Run this to add color metadata tables and update existing schema
 */

const { getPool, initializeDatabase } = require('./db');
const path = require('path');

// Load environment variables
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

/**
 * Migration: Add color_metadata table to store normalized color families
 */
async function addColorMetadataTable() {
  const pool = getPool();
  
  try {
    const [result] = await pool.query(`
      SELECT COUNT(*) as count FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'product_color_metadata'
    `);

    if (result[0]?.count > 0) {
      console.log('✓ product_color_metadata table already exists');
      return;
    }

    await pool.execute(`
      CREATE TABLE product_color_metadata (
        id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT NOT NULL UNIQUE,
        primary_color_family VARCHAR(50),
        secondary_color_families JSON,
        compatible_color_families JSON,
        color_group VARCHAR(100),
        extracted_colors JSON,
        user_provided_colors JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        INDEX idx_primary_color (primary_color_family),
        INDEX idx_color_group (color_group)
      )
    `);

    console.log('✓ Created product_color_metadata table');
  } catch (error) {
    console.error('Error creating color_metadata table:', error);
    throw error;
  }
}

/**
 * Migration: Create bangleAiMatches table for color match tracking
 */
async function addColorSimilarityColumn() {
  const pool = getPool();
  
  try {
    // Check if table exists
    const [result] = await pool.query(`
      SELECT COUNT(*) as count FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'bangleAiMatches'
    `);

    if (result[0]?.count > 0) {
      console.log('✓ bangleAiMatches table already exists');
      return;
    }

    // Create table if it doesn't exist
    await pool.execute(`
      CREATE TABLE bangleAiMatches (
        id INT PRIMARY KEY AUTO_INCREMENT,
        dress_product_id INT,
        bangle_product_id INT NOT NULL,
        color_similarity_score DECIMAL(3,2) DEFAULT 0.00,
        matched_color_families JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY unique_match (dress_product_id, bangle_product_id),
        INDEX idx_bangle (bangle_product_id),
        INDEX idx_color_similarity (color_similarity_score),
        FOREIGN KEY (bangle_product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `);

    console.log('✓ Created bangleAiMatches table');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('✓ bangleAiMatches table already exists');
    } else {
      console.error('Error creating bangleAiMatches table:', error);
      throw error;
    }
  }
}

/**
 * Migration: Store color metadata for existing products
 */
async function migrateExistingProductColors() {
  const pool = getPool();
  const { extractColorMetadata } = require('./colorMatchingService');
  
  try {
    const [products] = await pool.query(`
      SELECT p.id, COALESCE(pam.colors, '[]') as colors 
      FROM products p
      LEFT JOIN product_ai_metadata pam ON p.id = pam.product_id
      WHERE p.id NOT IN (
        SELECT product_id FROM product_color_metadata
      ) LIMIT 1000
    `);

    if (!products || products.length === 0) {
      console.log('✓ No products to migrate for color metadata');
      return;
    }

    console.log(`Migrating color metadata for ${products.length} products...`);

    for (const product of products) {
      let userColors = [];
      
      // Parse colors from JSON if it exists
      if (product.colors) {
        try {
          const parsed = JSON.parse(product.colors);
          userColors = Array.isArray(parsed) ? parsed : [];
        } catch {
          // Fall back to empty array if JSON parsing fails
          userColors = [];
        }
      }

      const colorMetadata = extractColorMetadata([], userColors);

      await pool.execute(`
        INSERT INTO product_color_metadata 
        (product_id, primary_color_family, secondary_color_families, compatible_color_families, color_group, user_provided_colors)
        VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          primary_color_family = VALUES(primary_color_family),
          secondary_color_families = VALUES(secondary_color_families),
          compatible_color_families = VALUES(compatible_color_families),
          color_group = VALUES(color_group)
      `, [
        product.id,
        colorMetadata.primary_color_family,
        JSON.stringify(colorMetadata.secondary_color_families),
        JSON.stringify(colorMetadata.compatible_color_families),
        colorMetadata.color_group,
        JSON.stringify(colorMetadata.user_provided_raw)
      ]);
    }

    console.log('✓ Migrated color metadata for existing products');
  } catch (error) {
    console.error('Error migrating color metadata:', error);
    // Non-fatal, continue
  }
}

/**
 * Run all migrations
 */
async function runMigrations() {
  console.log('\n📦 Running color matching migrations...\n');

  try {
    // Initialize database first
    await initializeDatabase();
    
    await addColorMetadataTable();
    await addColorSimilarityColumn();
    await migrateExistingProductColors();

    console.log('\n✓ All migrations completed successfully\n');
  } catch (error) {
    console.error('\n✗ Migration failed:', error.message);
    process.exit(1);
  }
}

// Export for manual running
module.exports = {
  addColorMetadataTable,
  addColorSimilarityColumn,
  migrateExistingProductColors,
  runMigrations
};

// Auto-run if called directly
if (require.main === module) {
  runMigrations()
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
