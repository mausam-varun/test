'use strict';

const { getPool } = require('../services/db');

/**
 * GET /api/dashboard/product/top-selling?days=7
 * Returns top 10 products by total quantity sold
 */
async function getTopSellingProducts(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        p.id,
        p.title,
        COALESCE(SUM(oi.quantity), 0)           AS totalQuantity,
        COALESCE(SUM(oi.quantity * oi.price), 0) AS totalRevenue
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
      WHERE o.payment_status = 'paid'
        AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      GROUP BY p.id, p.title
      HAVING totalQuantity > 0
      ORDER BY totalQuantity DESC
      LIMIT 10
    `, [numDays]);

    return res.json(rows || []);
  } catch (err) {
    console.error('[productPerformance] getTopSellingProducts:', err);
    return res.status(500).json({ error: 'Failed to fetch top selling products' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * GET /api/dashboard/product/low-selling?days=30
 * Returns bottom 10 products (including zero sales)
 */
async function getLowSellingProducts(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        p.id,
        p.title,
        COALESCE(SUM(oi.quantity), 0)           AS totalQuantity,
        COALESCE(SUM(oi.quantity * oi.price), 0) AS totalRevenue
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
        AND o.payment_status = 'paid'
        AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      WHERE p.is_active = 1
      GROUP BY p.id, p.title
      ORDER BY totalQuantity ASC
      LIMIT 10
    `, [numDays]);

    return res.json(rows || []);
  } catch (err) {
    console.error('[productPerformance] getLowSellingProducts:', err);
    return res.status(500).json({ error: 'Failed to fetch low selling products' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * GET /api/dashboard/product/revenue?days=30
 * Returns top 10 products by revenue
 */
async function getProductRevenue(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        p.id,
        p.title,
        COALESCE(SUM(oi.quantity), 0)           AS totalQuantity,
        COALESCE(SUM(oi.quantity * oi.price), 0) AS totalRevenue
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
      WHERE o.payment_status = 'paid'
        AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      GROUP BY p.id, p.title
      HAVING totalRevenue > 0
      ORDER BY totalRevenue DESC
      LIMIT 10
    `, [numDays]);

    return res.json(rows || []);
  } catch (err) {
    console.error('[productPerformance] getProductRevenue:', err);
    return res.status(500).json({ error: 'Failed to fetch product revenue' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * GET /api/dashboard/product/inventory-status
 * Returns out-of-stock and low-stock products
 */
async function getInventoryStatus(req, res) {
  const LOW_STOCK_THRESHOLD = 5;

  let conn;
  try {
    conn = await getPool().getConnection();

    // Out of stock (stock = 0)
    const [outOfStock] = await conn.execute(`
      SELECT id, title, stock
      FROM products
      WHERE stock = 0
        AND is_active = 1
      ORDER BY title ASC
    `);

    // Low stock (0 < stock < threshold)
    const [lowStock] = await conn.execute(`
      SELECT id, title, stock
      FROM products
      WHERE stock > 0 
        AND stock < ?
        AND is_active = 1
      ORDER BY stock ASC
    `, [LOW_STOCK_THRESHOLD]);

    return res.json({
      outOfStock: outOfStock || [],
      lowStock:   lowStock   || [],
      threshold:  LOW_STOCK_THRESHOLD
    });
  } catch (err) {
    console.error('[productPerformance] getInventoryStatus:', err);
    return res.status(500).json({ error: 'Failed to fetch inventory status' });
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getTopSellingProducts,
  getLowSellingProducts,
  getProductRevenue,
  getInventoryStatus
};
