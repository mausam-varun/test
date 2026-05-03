const { getPool } = require('./db');

const TABLE = 'new_products_banner';

async function ensureTable() {
  const db = getPool();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS ${TABLE} (
      id INT PRIMARY KEY DEFAULT 1,
      image_url VARCHAR(1000) NOT NULL DEFAULT '',
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  // Ensure the single row exists
  await db.execute(`INSERT IGNORE INTO ${TABLE} (id, image_url) VALUES (1, '')`);
}

async function getBanner() {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(`SELECT * FROM ${TABLE} WHERE id = 1`);
  return rows[0] || { id: 1, image_url: '' };
}

async function updateBanner(imageUrl) {
  await ensureTable();
  const db = getPool();
  await db.execute(`UPDATE ${TABLE} SET image_url = ? WHERE id = 1`, [imageUrl]);
  return getBanner();
}

module.exports = { getBanner, updateBanner };
