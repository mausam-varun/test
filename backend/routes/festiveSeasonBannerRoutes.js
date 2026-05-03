const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const festiveSeasonBannerController = require('../controllers/festiveSeasonBannerController');

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
    res.status(500).json({ error: 'Auth check failed' });
  }
}

// ── Public route ──────────────────────────────────────────────────────────────
router.get('/festive-season-banner', festiveSeasonBannerController.getActiveBanner);

// ── Admin CRUD routes ─────────────────────────────────────────────────────────
router.get('/admin/festive-season-banners', requireAdmin, festiveSeasonBannerController.getAllBannersAdmin);
router.post('/admin/festive-season-banners', requireAdmin, upload.single('image'), festiveSeasonBannerController.createBanner);
router.put('/admin/festive-season-banners/:id', requireAdmin, upload.single('image'), festiveSeasonBannerController.updateBanner);
router.delete('/admin/festive-season-banners/:id', requireAdmin, festiveSeasonBannerController.deleteBanner);

module.exports = router;
