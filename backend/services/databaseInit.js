const { getPool } = require('./db');

async function initializeDatabase() {
  try {
    const pool = getPool();

    // Create app_settings table
    await pool.execute(`
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

    // Check if default settings exist
    const [existing] = await pool.execute("SELECT value FROM app_settings WHERE `key` = 'frontend_settings' LIMIT 1");
    
    if (!existing || existing.length === 0) {
      const defaultSettings = {
        sections: {
          hero: true,
          categories: true,
          featured: true,
          collections: true,
          testimonials: true
        },
        theme: {
          primaryColor: '#9d3d9d',      // Purple from image
          secondaryColor: '#64748b',
          accentColor: '#d97706'
        }
      };

      await pool.execute(
        "INSERT INTO app_settings (`key`, value) VALUES (?, ?)",
        ['frontend_settings', JSON.stringify(defaultSettings)]
      );
      console.log('✅ Default theme settings initialized');
    }

    console.log('✅ Database initialization complete');
  } catch (error) {
    console.error('❌ Database initialization error:', error.message);
  }
}

module.exports = { initializeDatabase };
