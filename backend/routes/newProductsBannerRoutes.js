const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const { getBanner, updateBanner } = require('../services/newProductsBannerService');
const { uploadImage } = require('../services/cloudinaryService');

// ── Admin auth middleware ────────────────────────────────────────
async function requireAdmin(req, res, next) {
  try {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (!token) return res.status(401).json({ error: 'Authorization token required' });
    const match = token.match(/^admin-token-(\d+)$/);
    if (!match) return res.status(401).json({ error: 'Invalid token format' });
    const adminId = Number(match[1]);
    const admin = await authService.getAdminUserById(adminId);
    if (!admin) return res.status(401).json({ error: 'Admin not found' });
    req.adminId = adminId;
    next();
  } catch (err) {
    res.status(500).json({ error: 'Auth check failed' });
  }
}

// Public: get banner image URL
router.get('/new-products-banner', async (req, res) => {
  try {
    const banner = await getBanner();
    res.json(banner);
  } catch (err) {
    console.error('Error fetching new-products banner:', err);
    res.status(500).json({ error: 'Failed to fetch banner' });
  }
});

// Admin: update banner image
router.post('/admin/new-products-banner', requireAdmin, upload.single('image'), async (req, res) => {
  try {
    let imageUrl = req.body.image_url || '';

    if (req.file) {
      imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    }

    if (!imageUrl) {
      return res.status(400).json({ error: 'Either upload an image file or provide an image_url' });
    }

    const banner = await updateBanner(imageUrl);
    res.json({ message: 'Banner updated successfully', banner });
  } catch (err) {
    console.error('Error updating new-products banner:', err);
    res.status(500).json({ error: 'Failed to update banner' });
  }
});

module.exports = router;
