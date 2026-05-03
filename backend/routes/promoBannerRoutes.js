const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const promoBannerController = require('../controllers/promoBannerController');

// ── Admin auth middleware ─────────────────────────────────────────────────────
async function requireAdmin(req, res, next) {
  try {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();

    if (!token) {
      return res.status(401).json({ error: 'Authorization token required' });
    }

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
    return res.status(401).json({ error: 'Authentication failed' });
  }
}

// ── Public routes ─────────────────────────────────────────────────────────────
router.get('/hero-promo-banners',      promoBannerController.getAll);
router.get('/hero-promo-banners/:key', promoBannerController.getByKey);

// ── Admin routes ──────────────────────────────────────────────────────────────
router.post('/admin/hero-promo-banners/:key', requireAdmin, upload.single('image'), promoBannerController.upsert);

module.exports = router;
