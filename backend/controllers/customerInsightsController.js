'use strict';

const { getPool } = require('../services/db');

/**
 * Get total customer count
 */
async function getCustomerSummary(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT COUNT(DISTINCT c.id) as totalCustomers
      FROM customers c
      WHERE c.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
    `, [numDays]);

    const totalCustomers = rows[0]?.totalCustomers || 0;
    res.json({ totalCustomers });
  } catch (error) {
    console.error('Error in getCustomerSummary:', error);
    res.status(500).json({ error: 'Failed to fetch customer summary' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get new vs returning customers
 */
async function getNewVsReturning(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    // Get customers who made purchases in the given date range
    const [rows] = await conn.execute(`
      SELECT
        c.id,
        COUNT(o.id) as orderCount
      FROM customers c
      LEFT JOIN orders o ON c.id = o.customer_id AND o.payment_status = 'paid'
      WHERE c.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      GROUP BY c.id
    `, [numDays]);

    // Categorize customers
    let newCustomers = 0;
    let returningCustomers = 0;

    rows.forEach(row => {
      if (row.orderCount <= 1) {
        newCustomers++;
      } else {
        returningCustomers++;
      }
    });

    res.json({
      newCustomers,
      returningCustomers
    });
  } catch (error) {
    console.error('Error in getNewVsReturning:', error);
    res.status(500).json({ error: 'Failed to fetch new vs returning customers' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * Get top 10 customers by total spend
 */
async function getTopCustomers(req, res) {
  const { days = 30 } = req.query;
  const numDays = Math.min(Math.max(1, Number(days)), 365);

  let conn;
  try {
    conn = await getPool().getConnection();

    const [rows] = await conn.execute(`
      SELECT
        c.id,
        c.name,
        c.email,
        COUNT(o.id) as totalOrders,
        SUM(o.total_amount) as totalSpend
      FROM customers c
      LEFT JOIN orders o ON c.id = o.customer_id 
        AND o.payment_status = 'paid' 
        AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      WHERE c.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
      GROUP BY c.id, c.name, c.email
      HAVING totalSpend > 0
      ORDER BY totalSpend DESC
      LIMIT 10
    `, [numDays, numDays]);

    const topCustomers = rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      totalOrders: row.totalOrders || 0,
      totalSpend: Number(row.totalSpend || 0)
    }));

    res.json(topCustomers);
  } catch (error) {
    console.error('Error in getTopCustomers:', error);
    res.status(500).json({ error: 'Failed to fetch top customers' });
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getCustomerSummary,
  getNewVsReturning,
  getTopCustomers
};
