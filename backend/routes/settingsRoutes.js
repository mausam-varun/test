const express = require('express');
const { getPool } = require('../services/db');
const authService = require('../services/authService');

const router = express.Router();

// Middleware: require super_admin token
async function requireSuperAdmin(req, res, next) {
  try {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token) {
      return res.status(401).json({ error: 'Authorization token required' });
    }

    // Token format: "admin-token-<id>"
    const match = token.match(/^admin-token-(\d+)$/);
    if (!match) {
      return res.status(401).json({ error: 'Invalid token format' });
    }

    const adminId = Number(match[1]);
    const admin = await authService.getAdminUserById(adminId);

    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }

    if (admin.user_type !== 'super_admin') {
      return res.status(403).json({ error: 'Only super_admin can change currency settings' });
    }

    req.adminId = adminId;
    next();
  } catch (err) {
    res.status(500).json({ error: 'Auth check failed' });
  }
}

// GET /api/settings/currency-multiplier — public, used by frontend
router.get('/currency-multiplier', async (req, res) => {
  try {
    const db = getPool();
    const [rows] = await db.execute(
      "SELECT value FROM app_settings WHERE `key` = 'usd_display_multiplier' LIMIT 1"
    );

    const multiplier = rows.length ? Number(rows[0].value) : 1;
    const safeMultiplier = Number.isFinite(multiplier) && multiplier >= 1 && multiplier <= 10
      ? multiplier
      : 1;

    res.json({ multiplier: safeMultiplier });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch multiplier' });
  }
});

// PUT /api/settings/currency-multiplier — super_admin only
router.put('/currency-multiplier', requireSuperAdmin, async (req, res) => {
  try {
    const raw = Number(req.body.multiplier);

    if (!Number.isInteger(raw) || raw < 1 || raw > 10) {
      return res.status(400).json({ error: 'Multiplier must be an integer between 1 and 10' });
    }

    const db = getPool();
    await db.execute(
      "INSERT INTO app_settings (`key`, value, updated_by) VALUES ('usd_display_multiplier', ?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value), updated_by = VALUES(updated_by)",
      [String(raw), req.adminId]
    );

    res.json({ multiplier: raw });
  } catch (err) {
    res.status(500).json({ error: 'Could not save multiplier' });
  }
});

module.exports = router;
