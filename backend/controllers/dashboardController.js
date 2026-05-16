'use strict';

const { getPool } = require('../services/db');

/**
 * GET /api/dashboard/sales-summary
 *
 * Returns today's revenue, monthly revenue, total orders (this month), and AOV.
 * Only 'paid' orders are counted (payment_status = 'paid').
 */
async function getSalesSummary(req, res) {
  let conn;
  try {
    conn = await getPool().getConnection();

    // ── Today's revenue ───────────────────────────────────────────────────────
    const [todayRows] = await conn.execute(`
      SELECT COALESCE(SUM(total_amount), 0) AS todayRevenue
      FROM orders
      WHERE payment_status = 'paid'
        AND DATE(created_at) = CURDATE()
    `);

    // ── Monthly revenue + order count ─────────────────────────────────────────
    const [monthRows] = await conn.execute(`
      SELECT
        COALESCE(SUM(total_amount), 0) AS monthlyRevenue,
        COUNT(*)                       AS totalOrders
      FROM orders
      WHERE payment_status = 'paid'
        AND YEAR(created_at)  = YEAR(CURDATE())
        AND MONTH(created_at) = MONTH(CURDATE())
    `);

    const monthlyRevenue = Number(monthRows[0].monthlyRevenue) || 0;
    const totalOrders    = Number(monthRows[0].totalOrders)    || 0;
    const aov            = totalOrders > 0
      ? Math.round(monthlyRevenue / totalOrders)
      : 0;

    return res.json({
      todayRevenue:   Number(todayRows[0].todayRevenue) || 0,
      monthlyRevenue,
      totalOrders,
      aov
    });
  } catch (err) {
    console.error('[dashboard] getSalesSummary:', err);
    return res.status(500).json({ error: 'Failed to fetch sales summary' });
  } finally {
    if (conn) conn.release();
  }
}

/**
 * GET /api/dashboard/sales-trend?type=daily|monthly
 *
 * Returns revenue grouped by day (last 7 days) or month (last 12 months).
 */
async function getSalesTrend(req, res) {
  const { type = 'daily' } = req.query;

  if (!['daily', 'monthly'].includes(type)) {
    return res.status(400).json({ error: 'type must be "daily" or "monthly"' });
  }

  let conn;
  try {
    conn = await getPool().getConnection();

    if (type === 'daily') {
      // Last 7 days (today included)
      const [rows] = await conn.execute(`
        SELECT
          DATE_FORMAT(DATE(created_at), '%Y-%m-%d') AS \`date\`,
          COALESCE(SUM(total_amount), 0)            AS revenue
        FROM orders
        WHERE payment_status = 'paid'
          AND created_at >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
        GROUP BY DATE(created_at)
        ORDER BY DATE(created_at) ASC
      `);

      return res.json(fillDailyGaps(rows, 7));
    }

    // ── Monthly: last 12 months ──────────────────────────────────────────────
    const [rows] = await conn.execute(`
      SELECT
        DATE_FORMAT(created_at, '%b %Y') AS month,
        YEAR(created_at)                 AS yr,
        MONTH(created_at)                AS mo,
        COALESCE(SUM(total_amount), 0)   AS revenue
      FROM orders
      WHERE payment_status = 'paid'
        AND created_at >= DATE_SUB(CURDATE(), INTERVAL 11 MONTH)
      GROUP BY YEAR(created_at), MONTH(created_at)
      ORDER BY yr ASC, mo ASC
    `);

    return res.json(fillMonthlyGaps(rows, 12));

  } catch (err) {
    console.error('[dashboard] getSalesTrend:', err);
    return res.status(500).json({ error: 'Failed to fetch sales trend' });
  } finally {
    if (conn) conn.release();
  }
}

// ─── Gap-fill helpers ─────────────────────────────────────────────────────────

/**
 * Ensures we always return exactly `days` data points for the daily trend,
 * inserting 0 for any day with no paid orders.
 */
function fillDailyGaps(dbRows, days) {
  const map = {};
  for (const row of dbRows) {
    map[row.date] = Number(row.revenue);
  }

  const result = [];
  for (let i = days - 1; i >= 0; i--) {
    const d   = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10); // 'YYYY-MM-DD'
    result.push({ date: key, revenue: map[key] ?? 0 });
  }
  return result;
}

/**
 * Ensures we always return exactly `months` data points for the monthly trend,
 * inserting 0 for any month with no paid orders.
 */
function fillMonthlyGaps(dbRows, months) {
  const SHORT_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun',
                        'Jul','Aug','Sep','Oct','Nov','Dec'];
  const map = {};
  for (const row of dbRows) {
    map[`${row.yr}-${row.mo}`] = { label: row.month, revenue: Number(row.revenue) };
  }

  const now    = new Date();
  const result = [];
  for (let i = months - 1; i >= 0; i--) {
    const d     = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const yr    = d.getFullYear();
    const mo    = d.getMonth() + 1;
    const key   = `${yr}-${mo}`;
    const label = `${SHORT_MONTHS[d.getMonth()]} ${yr}`;
    result.push({
      month:   map[key] ? map[key].label : label,
      revenue: map[key] ? map[key].revenue : 0
    });
  }
  return result;
}

module.exports = { getSalesSummary, getSalesTrend };
