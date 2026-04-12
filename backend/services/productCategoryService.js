const { getPool } = require('./db');

async function listProductCategories() {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT id, name FROM product_category ORDER BY name ASC'
  );
  return rows;
}

module.exports = { listProductCategories };
