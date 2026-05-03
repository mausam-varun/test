const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const festiveSeasonBannerService = require('../services/festiveSeasonBannerService');

/**
 * GET /api/festive-season-banner
 * Public — returns active festive season banner
 */
exports.getActiveBanner = asyncHandler(async (req, res) => {
  const banner = await festiveSeasonBannerService.getActiveBanner();
  
  if (!banner) {
    return res.status(200).json({
      message: 'No active festive season banner found',
      data: null
    });
  }
  
  res.status(200).json(banner);
});

/**
 * GET /api/admin/festive-season-banners
 * Admin — returns all festive season banners including inactive
 */
exports.getAllBannersAdmin = asyncHandler(async (req, res) => {
  const banners = await festiveSeasonBannerService.getAllBanners();
  res.status(200).json(banners);
});

/**
 * POST /api/admin/festive-season-banners
 * Admin — create a new festive season banner
 */
exports.createBanner = asyncHandler(async (req, res) => {
  const {
    top_label = 'FESTIVE SEASON',
    main_title,
    description = '',
    button_text = 'SHOP NOW',
    button_link = '/shop',
    image_url: bodyImageUrl,
    banner_color = '#FF6B6B',
    accent_color = '#FFD700',
    sort_order = 0,
    is_active = true
  } = req.body || {};

  if (!main_title || !main_title.trim()) {
    throw new AppError('Main title is required', 400);
  }

  let image_url = (bodyImageUrl || '').trim();

  if (req.file) {
    image_url = await uploadImage(req.file.buffer, req.file.mimetype);
  }

  const banner = await festiveSeasonBannerService.createBanner({
    top_label: top_label.trim(),
    main_title: main_title.trim(),
    description: description.trim(),
    button_text: button_text.trim(),
    button_link: button_link.trim(),
    image_url: image_url || null,
    banner_color: banner_color.trim(),
    accent_color: accent_color.trim(),
    sort_order,
    is_active: is_active === true || is_active === 'true' || is_active === '1' || is_active === 1
  });

  res.status(201).json({ 
    message: 'Festive season banner created', 
    data: banner 
  });
});

/**
 * PUT /api/admin/festive-season-banners/:id
 * Admin — update existing festive season banner
 */
exports.updateBanner = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw new AppError('Valid banner ID required', 400);

  const existing = await festiveSeasonBannerService.getBannerById(id);
  if (!existing) {
    return res.status(404).json({ error: 'Banner not found' });
  }

  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url: bodyImageUrl,
    banner_color,
    accent_color,
    sort_order,
    is_active
  } = req.body || {};

  let image_url = bodyImageUrl !== undefined ? bodyImageUrl.trim() : existing.image_url;

  if (req.file) {
    image_url = await uploadImage(req.file.buffer, req.file.mimetype);
    // Delete old image from Cloudinary if it was a Cloudinary URL
    if (existing.image_url && existing.image_url.includes('cloudinary')) {
      try { await deleteImageByUrl(existing.image_url); } catch (_) { /* non-fatal */ }
    }
  }

  const updated = await festiveSeasonBannerService.updateBanner(id, {
    top_label: top_label !== undefined ? top_label.trim() : existing.top_label,
    main_title: main_title !== undefined ? main_title.trim() : existing.main_title,
    description: description !== undefined ? description.trim() : existing.description,
    button_text: button_text !== undefined ? button_text.trim() : existing.button_text,
    button_link: button_link !== undefined ? button_link.trim() : existing.button_link,
    image_url,
    banner_color: banner_color !== undefined ? banner_color.trim() : existing.banner_color,
    accent_color: accent_color !== undefined ? accent_color.trim() : existing.accent_color,
    sort_order: sort_order !== undefined ? Number(sort_order) : existing.sort_order,
    is_active: is_active !== undefined ? (is_active === true || is_active === 'true' || is_active === '1' || is_active === 1) : existing.is_active
  });

  res.status(200).json({ 
    message: 'Festive season banner updated', 
    data: updated 
  });
});

/**
 * DELETE /api/admin/festive-season-banners/:id
 * Admin — delete festive season banner
 */
exports.deleteBanner = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw new AppError('Valid banner ID required', 400);

  const existing = await festiveSeasonBannerService.getBannerById(id);
  if (!existing) {
    return res.status(404).json({ error: 'Banner not found' });
  }

  // Delete image from Cloudinary if it exists
  if (existing.image_url && existing.image_url.includes('cloudinary')) {
    try { await deleteImageByUrl(existing.image_url); } catch (_) { /* non-fatal */ }
  }

  await festiveSeasonBannerService.deleteBanner(id);
  res.status(200).json({ message: 'Festive season banner deleted' });
});
