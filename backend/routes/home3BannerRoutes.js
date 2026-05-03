const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const home3BannerController = require('../controllers/home3BannerController');

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
router.get('/home3-banners', home3BannerController.getActiveBanners);

// ── Admin CRUD routes ─────────────────────────────────────────────────────────
router.get('/admin/home3-banners', requireAdmin, home3BannerController.getAllBannersAdmin);
router.post('/admin/home3-banners', requireAdmin, upload.single('image'), home3BannerController.createBanner);
router.put('/admin/home3-banners/:id', requireAdmin, upload.single('image'), home3BannerController.updateBanner);
router.delete('/admin/home3-banners/:id', requireAdmin, home3BannerController.deleteBanner);

module.exports = router;
