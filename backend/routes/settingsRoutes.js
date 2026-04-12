const express = require('express');
const { getPool } = require('../services/db');
const authService = require('../services/authService');

const router = express.Router();

// Middleware: check if admin is authenticated
async function requireAdmin(req, res, next) {
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

    req.adminId = adminId;
    next();
  } catch (err) {
    res.status(500).json({ error: 'Auth check failed' });
  }
}

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

// GET /api/admin/settings — get frontend visibility and theme settings
router.get('/admin/settings', async (req, res) => {
  try {
    const db = getPool();
    const [rows] = await db.execute(
      "SELECT value FROM app_settings WHERE `key` = 'frontend_settings' LIMIT 1"
    );

    if (rows.length > 0) {
      try {
        const settings = JSON.parse(rows[0].value);
        return res.json(settings);
      } catch (e) {
        // Invalid JSON, return defaults
      }
    }

    // Return defaults
    res.json({
      sections: {
        hero: true,
        aiMatch: true,
        categories: true,
        featured: true,
        testimonials: true,
        newsletter: true
      },
      theme: {
        primaryColor: '#2563eb',
        secondaryColor: '#64748b',
        accentColor: '#d97706'
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch frontend settings' });
  }
});

// POST /api/settings/admin/settings — save frontend visibility and theme settings (public)
router.post('/admin/settings', async (req, res) => {
  try {
    const { sections, theme } = req.body;

    // Validate structure
    if (!sections || typeof sections !== 'object' || !theme || typeof theme !== 'object') {
      return res.status(400).json({ error: 'Invalid settings structure' });
    }

    // Validate colors are hex
    const colorRegex = /^#[0-9A-F]{6}$/i;
    const colors = [theme.primaryColor, theme.secondaryColor, theme.accentColor];
    if (!colors.every(color => colorRegex.test(color))) {
      return res.status(400).json({ error: 'Invalid color format. Use hex colors (e.g., #2563eb)' });
    }

    const settings = { sections, theme };
    const db = getPool();

    // Get admin ID from token if available, otherwise use 0 (system)
    let adminId = 0;
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const match = token.match(/^admin-token-(\d+)$/);
    if (match) {
      adminId = Number(match[1]);
    }

    await db.execute(
      "INSERT INTO app_settings (`key`, value, updated_by) VALUES ('frontend_settings', ?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value), updated_by = VALUES(updated_by)",
      [JSON.stringify(settings), adminId]
    );

    res.json(settings);
  } catch (err) {
    console.error('Settings save error:', err);
    res.status(500).json({ error: 'Could not save frontend settings' });
  }
});

// GET /api/settings/theme/public — get theme colors for public frontend
router.get('/theme/public', async (req, res) => {
  try {
    const db = getPool();
    const [rows] = await db.execute(
      "SELECT value FROM app_settings WHERE `key` = 'theme_colors' LIMIT 1"
    );

    if (rows.length && rows[0].value) {
      try {
        const theme = JSON.parse(rows[0].value);
        return res.json({ theme });
      } catch (parseErr) {
        console.error('Theme parse error:', parseErr);
      }
    }

    // Return default theme
    res.json({
      theme: {
        primaryGradientStart: '#D946EF',
        primaryGradientEnd: '#9333EA',
        primaryPurple: '#9333EA',
        deepPurple: '#7E22CE',
        pink: '#D946EF',
        gold: '#C9A45C',
        textMain: '#111827',
        textSecondary: '#1F2937',
        textBody: '#6B7280',
        textLight: '#9CA3AF',
        borderLight: '#E5E7EB',
        bgLight: '#F9FAFB'
      }
    });
  } catch (err) {
    console.error('Theme fetch error:', err);
    res.status(500).json({ error: 'Could not fetch theme' });
  }
});

// PUT /api/settings/theme — update theme colors (admin only)
router.put('/theme', requireAdmin, async (req, res) => {
  try {
    const { theme } = req.body;

    // Validate theme object
    if (!theme || typeof theme !== 'object') {
      return res.status(400).json({ error: 'Invalid theme object' });
    }

    // Validate all hex colors
    const colorRegex = /^#[0-9A-F]{6}$/i;
    const colorKeys = [
      'primaryGradientStart',
      'primaryGradientEnd',
      'primaryPurple',
      'deepPurple',
      'pink',
      'gold',
      'textMain',
      'textSecondary',
      'textBody',
      'textLight',
      'borderLight',
      'bgLight'
    ];

    for (const key of colorKeys) {
      if (!theme[key] || !colorRegex.test(theme[key])) {
        return res.status(400).json({
          error: `Invalid color for ${key}. Use hex format (e.g., #D946EF)`
        });
      }
    }

    const db = getPool();

    // Save theme colors
    await db.execute(
      "INSERT INTO app_settings (`key`, value, updated_by) VALUES ('theme_colors', ?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value), updated_by = VALUES(updated_by)",
      [JSON.stringify(theme), req.adminId]
    );

    res.json({ theme, message: 'Theme updated successfully' });
  } catch (err) {
    console.error('Theme update error:', err);
    res.status(500).json({ error: 'Could not update theme' });
  }
});

module.exports = router;
