const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const home3BannerService = require('../services/home3BannerService');

/**
 * GET /api/home3-banners
 * Public — returns active banners for the home3 page
 */
exports.getActiveBanners = asyncHandler(async (req, res) => {
  const banners = await home3BannerService.getActiveBanners();
  res.status(200).json(banners);
});

/**
 * GET /api/admin/home3-banners
 * Admin — returns all banners including inactive
 */
exports.getAllBannersAdmin = asyncHandler(async (req, res) => {
  const banners = await home3BannerService.getAllBanners();
  res.status(200).json(banners);
});

/**
 * POST /api/admin/home3-banners
 * Admin — create a new banner
 */
exports.createBanner = asyncHandler(async (req, res) => {
  const {
    eyebrow = '',
    heading,
    description = '',
    view_more_url = '/shop',
    image_url: bodyImageUrl,
    sort_order = 0,
    is_active = true
  } = req.body || {};

  if (!heading || !heading.trim()) {
    throw new AppError('Heading is required', 400);
  }

  let image_url = (bodyImageUrl || '').trim();

  if (req.file) {
    image_url = await uploadImage(req.file.buffer, req.file.mimetype);
  }

  if (!image_url) {
    throw new AppError('An image URL or uploaded image is required', 400);
  }

  const banner = await home3BannerService.createBanner({
    eyebrow: eyebrow.trim(),
    heading: heading.trim(),
    description: description.trim(),
    view_more_url: view_more_url.trim() || '/shop',
    image_url,
    sort_order,
    is_active: is_active === true || is_active === 'true' || is_active === 1
  });

  res.status(201).json({ message: 'Banner created', data: banner });
});

/**
 * PUT /api/admin/home3-banners/:id
 * Admin — update existing banner
 */
exports.updateBanner = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw new AppError('Valid banner ID required', 400);

  const existing = await home3BannerService.getBannerById(id);
  if (!existing) return res.status(404).json({ error: 'Banner not found' });

  const {
    eyebrow,
    heading,
    description,
    view_more_url,
    image_url: bodyImageUrl,
    sort_order,
    is_active
  } = req.body || {};

  let image_url = bodyImageUrl !== undefined ? bodyImageUrl.trim() : existing.image_url;

  if (req.file) {
    image_url = await uploadImage(req.file.buffer, req.file.mimetype);
    // Optionally delete old image from Cloudinary if it was a Cloudinary URL
    if (existing.image_url && existing.image_url.includes('cloudinary')) {
      try { await deleteImageByUrl(existing.image_url); } catch (_) { /* non-fatal */ }
    }
  }

  const updated = await home3BannerService.updateBanner(id, {
    eyebrow:      eyebrow      !== undefined ? eyebrow.trim()      : existing.eyebrow,
    heading:      heading      !== undefined ? heading.trim()      : existing.heading,
    description:  description  !== undefined ? description.trim()  : existing.description,
    view_more_url: view_more_url !== undefined ? view_more_url.trim() : existing.view_more_url,
    image_url,
    sort_order:   sort_order   !== undefined ? sort_order          : existing.sort_order,
    is_active:    is_active    !== undefined
      ? (is_active === true || is_active === 'true' || is_active === 1)
      : Boolean(existing.is_active)
  });

  res.status(200).json({ message: 'Banner updated', data: updated });
});

/**
 * DELETE /api/admin/home3-banners/:id
 * Admin — delete banner
 */
exports.deleteBanner = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) throw new AppError('Valid banner ID required', 400);

  const existing = await home3BannerService.getBannerById(id);
  if (!existing) return res.status(404).json({ error: 'Banner not found' });

  if (existing.image_url && existing.image_url.includes('cloudinary')) {
    try { await deleteImageByUrl(existing.image_url); } catch (_) { /* non-fatal */ }
  }

  await home3BannerService.deleteBanner(id);
  res.status(200).json({ message: 'Banner deleted' });
});
