const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const homeSectionsController = require('../controllers/homeSectionsController');

// Middleware: Check if admin is authenticated
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

// Public routes (GET only)
router.get('/home-sections/public', homeSectionsController.getActiveSections);
router.get('/home-sections/public/:section', homeSectionsController.getSection);

// Admin routes (protected)
router.get('/home-sections', requireAdmin, homeSectionsController.getAllSections);
router.put('/home-sections/:section', requireAdmin, upload.single('image'), homeSectionsController.updateSection);

// Convenience routes for New Arrivals
router.get('/home-sections/new-arrivals/public', homeSectionsController.getNewArrivals);
router.put('/home-sections/new-arrivals', requireAdmin, upload.single('image'), homeSectionsController.updateNewArrivals);

// Convenience routes for Our Story
router.get('/home-sections/our-story/public', homeSectionsController.getOurStory);
router.put('/home-sections/our-story', requireAdmin, upload.single('image'), homeSectionsController.updateOurStory);

module.exports = router;
