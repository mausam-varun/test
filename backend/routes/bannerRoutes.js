const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const bannerController = require('../controllers/bannerController');

// Middleware: Check if admin is authenticated
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

// Public routes (GET only)
router.get('/banners', bannerController.getAllActiveBanners);
router.get('/banners/:id', bannerController.getBannerById);

// Admin routes (CRUD with image upload)
router.get('/admin/banners', requireAdmin, bannerController.getAllBannersAdmin);
router.post('/admin/banners', requireAdmin, upload.single('image'), bannerController.createBanner);
router.put('/admin/banners/:id', requireAdmin, upload.single('image'), bannerController.updateBanner);
router.delete('/admin/banners/:id', requireAdmin, bannerController.deleteBanner);

module.exports = router;
