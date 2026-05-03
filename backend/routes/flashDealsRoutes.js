const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const authService = require('../services/authService');
const { getBanner, updateBanner } = require('../services/flashDealsService');
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

// Public: get flash deals banner settings
router.get('/flash-deals-banner', async (req, res) => {
  try {
    const banner = await getBanner();
    res.json(banner);
  } catch (err) {
    console.error('Error fetching flash deals banner:', err);
    res.status(500).json({ error: 'Failed to fetch banner' });
  }
});

// Admin: update flash deals banner settings
router.post('/admin/flash-deals-banner', requireAdmin, upload.single('image'), async (req, res) => {
  try {
    const { main_title, description, shop_link } = req.body;
    let background_image_url = req.body.background_image_url || '';

    // Upload image if provided
    if (req.file) {
      background_image_url = await uploadImage(req.file.buffer, req.file.mimetype);
    }

    // Update banner
    const banner = await updateBanner({
      main_title: main_title || 'Festive Offers You\'ll Love',
      description: description || 'Exclusive Deals on Our Most Loved Bangles',
      shop_link: shop_link || '/shop',
      background_image_url
    });

    res.json({ message: 'Flash deals banner updated successfully', banner });
  } catch (err) {
    console.error('Error updating flash deals banner:', err);
    res.status(500).json({ error: 'Failed to update banner' });
  }
});

module.exports = router;
