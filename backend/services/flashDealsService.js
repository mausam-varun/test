const { getPool } = require('./db');

const TABLE = 'flash_deals_banner';

/**
 * Get flash deals banner (public)
 */
async function getBanner() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(`SELECT * FROM ${TABLE} LIMIT 1`);
    return rows[0] || getDefault();
  } catch (err) {
    console.error('getBanner error:', err);
    throw err;
  }
}

/**
 * Update flash deals banner (admin)
 */
async function updateBanner(data) {
  try {
    const pool = getPool();
    const { main_title, description, shop_link, background_image_url } = data;

    // Ensure banner exists
    await ensureExists();

    // Update banner
    await pool.execute(
      `UPDATE ${TABLE}
       SET main_title = ?, description = ?, shop_link = ?, background_image_url = ?, updated_at = NOW()
       WHERE id = 1`,
      [main_title || '', description || '', shop_link || '', background_image_url || '']
    );

    return getBanner();
  } catch (err) {
    console.error('updateBanner error:', err);
    throw err;
  }
}

/**
 * Ensure banner record exists (create if not)
 */
async function ensureExists() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(`SELECT id FROM ${TABLE} LIMIT 1`);

    if (rows.length === 0) {
      await pool.execute(
        `INSERT INTO ${TABLE} (main_title, description, shop_link, background_image_url)
         VALUES (?, ?, ?, ?)`,
        ['Festive Offers You\'ll Love', 'Exclusive Deals on Our Most Loved Bangles', '/shop', '']
      );
    }
  } catch (err) {
    console.error('ensureExists error:', err);
    throw err;
  }
}

function getDefault() {
  return {
    id: 1,
    main_title: 'Festive Offers You\'ll Love',
    description: 'Exclusive Deals on Our Most Loved Bangles',
    shop_link: '/shop',
    background_image_url: ''
  };
}

module.exports = {
  getBanner,
  updateBanner,
  ensureExists
};
