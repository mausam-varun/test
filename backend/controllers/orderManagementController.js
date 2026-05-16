'use strict';

const { getPool } = require('../services/db');

/**
 * Get order summary: counts by status
 */
async function getOrderSummary(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        COALESCE(SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END), 0) as pending,
        COALESCE(SUM(CASE WHEN status = 'shipped' THEN 1 ELSE 0 END), 0) as shipped,
        COALESCE(SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END), 0) as delivered,
        COALESCE(SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END), 0) as cancelled
      FROM orders
    `);

    const summary = rows[0] || {
      pending: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0
    };

    res.json({
      pending: Number(summary.pending || 0),
      shipped: Number(summary.shipped || 0),
      delivered: Number(summary.delivered || 0),
      cancelled: Number(summary.cancelled || 0)
    });
  } catch (error) {
    console.error('Error in getOrderSummary:', error);
    res.status(500).json({ error: 'Failed to fetch order summary' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get orders grouped by status for chart
 */
async function getOrdersByStatus(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        status,
        COUNT(*) as count
      FROM orders
      GROUP BY status
      ORDER BY status ASC
    `);

    const statusMap = {
      pending: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0
    };

    rows.forEach(row => {
      if (statusMap.hasOwnProperty(row.status)) {
        statusMap[row.status] = Number(row.count || 0);
      }
    });

    const result = [
      { status: 'pending', count: statusMap.pending },
      { status: 'shipped', count: statusMap.shipped },
      { status: 'delivered', count: statusMap.delivered },
      { status: 'cancelled', count: statusMap.cancelled }
    ];

    res.json(result);
  } catch (error) {
    console.error('Error in getOrdersByStatus:', error);
    res.status(500).json({ error: 'Failed to fetch orders by status' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get recent orders with customer names
 */
async function getRecentOrders(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        o.id,
        c.name as customer_name,
        o.total_amount,
        o.status,
        o.created_at
      FROM orders o
      LEFT JOIN customers c ON o.customer_id = c.id
      WHERE o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      ORDER BY o.created_at DESC
      LIMIT 20
    `, [numDays]);

    const orders = (rows || []).map(row => ({
      id: row.id,
      customer_name: row.customer_name || 'Unknown',
      total_amount: Number(row.total_amount || 0),
      status: row.status,
      created_at: row.created_at
    }));

    res.json(orders);
  } catch (error) {
    console.error('Error in getRecentOrders:', error);
    res.status(500).json({ error: 'Failed to fetch recent orders' });
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getOrderSummary,
  getOrdersByStatus,
  getRecentOrders
};
