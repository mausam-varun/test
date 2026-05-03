const express = require('express');
const { getPool } = require('../services/db');
const { optionalCustomerAuth, requireCustomerAuth } = require('../middlewares/customerAuth');

const router = express.Router();

/**
 * POST /api/users/recently-viewed
 * Record a product view (requires auth)
 */
router.post('/users/recently-viewed', requireCustomerAuth, async (req, res) => {
  const userId = req.user.id;
  const productId = Number(req.body.product_id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ error: 'Invalid product_id' });
  }

  try {
    const pool = getPool();
    // Upsert: insert or refresh viewed_at timestamp
    await pool.execute(
      `INSERT INTO user_recently_viewed (user_id, product_id, viewed_at)
       VALUES (?, ?, NOW())
       ON DUPLICATE KEY UPDATE viewed_at = NOW()`,
      [userId, productId]
    );

    // Keep only last 20 entries per user
    await pool.execute(
      `DELETE FROM user_recently_viewed
       WHERE user_id = ?
         AND id NOT IN (
           SELECT id FROM (
             SELECT id FROM user_recently_viewed
             WHERE user_id = ?
             ORDER BY viewed_at DESC
             LIMIT 20
           ) AS keep
         )`,
      [userId, userId]
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('recently-viewed POST error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/users/recently-viewed?limit=10
 * Fetch recently viewed products for logged-in user
 */
router.get('/users/recently-viewed', requireCustomerAuth, async (req, res) => {
  const userId = req.user.id;
  const limit = Math.min(20, Math.max(1, Number(req.query.limit) || 10));

  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT p.id, p.name, p.price, p.category, p.image_url, p.stock,
              urv.viewed_at
       FROM user_recently_viewed urv
       JOIN products p ON p.id = urv.product_id
       WHERE urv.user_id = ?
       ORDER BY urv.viewed_at DESC
       LIMIT ${limit}`,
      [userId]
    );

    return res.status(200).json(rows);
  } catch (err) {
    console.error('recently-viewed GET error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/products/by-ids?ids=1,2,3
 * Fetch product details for a list of IDs (used for guest localStorage flow)
 */
router.get('/products/by-ids', async (req, res) => {
  const raw = String(req.query.ids || '');
  const ids = raw
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isInteger(n) && n > 0)
    .slice(0, 20);

  if (ids.length === 0) {
    return res.status(200).json([]);
  }

  try {
    const pool = getPool();
    const placeholders = ids.map(() => '?').join(',');
    const [rows] = await pool.execute(
      `SELECT id, name, price, category, image_url, stock
       FROM products
       WHERE id IN (${placeholders})`,
      ids
    );

    // Preserve original order from the ids array
    const byId = Object.fromEntries(rows.map((r) => [r.id, r]));
    const ordered = ids.map((id) => byId[id]).filter(Boolean);

    return res.status(200).json(ordered);
  } catch (err) {
    console.error('products/by-ids error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
