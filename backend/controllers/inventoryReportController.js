'use strict';

const { getPool } = require('../services/db');

/**
 * Get inventory summary: total products, total stock quantity, total inventory value
 */
async function getInventorySummary(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        COUNT(*) as totalProducts,
        COALESCE(SUM(stock), 0) as totalStockQuantity,
        COALESCE(SUM(stock * price), 0) as inventoryValue
      FROM products
    `);

    const summary = rows[0] || {
      totalProducts: 0,
      totalStockQuantity: 0,
      inventoryValue: 0
    };

    res.json({
      totalProducts: summary.totalProducts || 0,
      totalStockQuantity: Number(summary.totalStockQuantity || 0),
      inventoryValue: Number(summary.inventoryValue || 0)
    });
  } catch (error) {
    console.error('Error in getInventorySummary:', error);
    res.status(500).json({ error: 'Failed to fetch inventory summary' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get low stock products (stock > 0 and stock < threshold)
 */
async function getLowStockProducts(req, res) {
  const { threshold = 5 } = req.query;
  const thresholdNum = Math.max(1, Math.min(100, parseInt(threshold) || 5));

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        id as product_id,
        name,
        stock,
        price as base_price
      FROM products
      WHERE stock > 0
        AND stock < ?
      ORDER BY stock ASC
      LIMIT 100
    `, [thresholdNum]);

    const products = (rows || []).map(row => ({
      product_id: row.product_id,
      name: row.name,
      stock: row.stock,
      basePrice: Number(row.base_price || 0),
      costPrice: Number(row.base_price || 0)
    }));

    res.json(products);
  } catch (error) {
    console.error('Error in getLowStockProducts:', error);
    res.status(500).json({ error: 'Failed to fetch low stock products' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get out of stock products (stock = 0)
 */
async function getOutOfStockProducts(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        id as product_id,
        name,
        stock,
        price as base_price
      FROM products
      WHERE stock = 0
      ORDER BY name ASC
      LIMIT 200
    `);

    const products = (rows || []).map(row => ({
      product_id: row.product_id,
      name: row.name,
      stock: 0,
      basePrice: Number(row.base_price || 0),
      costPrice: Number(row.base_price || 0)
    }));

    res.json(products);
  } catch (error) {
    console.error('Error in getOutOfStockProducts:', error);
    res.status(500).json({ error: 'Failed to fetch out of stock products' });
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getInventorySummary,
  getLowStockProducts,
  getOutOfStockProducts,
  getAllProductsInventory
};

/**
 * GET /api/dashboard/inventory/all-products
 * Returns every product with: total_added_quantity, current stock, sold_quantity
 */
async function getAllProductsInventory(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        p.id,
        COALESCE(p.name, '') AS name,
        COALESCE(p.image_url, '') AS image_url,
        COALESCE(p.category, '') AS category,
        COALESCE(p.total_added_quantity, 0) AS total_added_quantity,
        COALESCE(p.stock, 0) AS current_stock,
        COALESCE(SUM(oi.quantity), 0) AS sold_quantity
      FROM products p
      LEFT JOIN order_items oi ON oi.product_id = p.id
      GROUP BY p.id, p.name, p.image_url, p.category,
               p.total_added_quantity, p.stock
      ORDER BY p.id DESC
    `);

    res.json({
      total: rows.length,
      products: rows.map(r => ({
        id: r.id,
        name: r.name,
        image_url: r.image_url,
        category: r.category,
        total_added_quantity: Number(r.total_added_quantity),
        current_stock: Number(r.current_stock),
        sold_quantity: Number(r.sold_quantity)
      }))
    });
  } catch (error) {
    console.error('Error in getAllProductsInventory:', error);
    res.status(500).json({ error: 'Failed to fetch inventory data' });
  } finally {
    if (conn) conn.release();
  }
}
