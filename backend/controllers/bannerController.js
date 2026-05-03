const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const bannerService = require('../services/bannerService');

/**
 * Get all active promotional banners (public/frontend)
 */
exports.getAllActiveBanners = asyncHandler(async (req, res) => {
  const banners = await bannerService.getAllActiveBanners();
  res.status(200).json(banners);
});

/**
 * Get banner by ID (public)
 */
exports.getBannerById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    throw new AppError('Valid banner ID is required', 400);
  }

  const banner = await bannerService.getBannerById(id);

  if (!banner) {
    return res.status(404).json({ error: 'Banner not found' });
  }

  res.status(200).json(banner);
});

/**
 * Get all banners (admin - including inactive)
 */
exports.getAllBannersAdmin = asyncHandler(async (req, res) => {
  const banners = await bannerService.getAllBanners();
  res.status(200).json(banners);
});

/**
 * Create new promotional banner (admin only)
 */
exports.createBanner = asyncHandler(async (req, res) => {
  const {
    label,
    title,
    cta_text = 'Shop Now',
    cta_link = '#',
    background_color,
    display_order = 0,
    is_active = true
  } = req.body || {};

  // Validate required fields
  if (!label || !title) {
    throw new AppError('Label and title are required', 400);
  }

  // Handle image upload
  let imageUrl = null;

  if (req.file) {
    imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
  }

  const banner = await bannerService.createBanner({
    label,
    title,
    cta_text,
    cta_link,
    image_url: imageUrl,
    background_color,
    display_order: parseInt(display_order) || 0,
    is_active: is_active === true || is_active === 'true' || is_active === 1
  });

  res.status(201).json({
    message: 'Banner created successfully',
    data: banner
  });
});

/**
 * Update promotional banner (admin only)
 */
exports.updateBanner = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    throw new AppError('Valid banner ID is required', 400);
  }

  // Check if banner exists
  const existing = await bannerService.getBannerById(id);
  if (!existing) {
    throw new AppError('Banner not found', 404);
  }

  const {
    label,
    title,
    cta_text,
    cta_link,
    background_color,
    display_order,
    is_active
  } = req.body || {};

  // Prepare update data
  const updateData = {};

  if (label !== undefined) updateData.label = label;
  if (title !== undefined) updateData.title = title;
  if (cta_text !== undefined) updateData.cta_text = cta_text;
  if (cta_link !== undefined) updateData.cta_link = cta_link;
  if (background_color !== undefined) updateData.background_color = background_color;
  if (display_order !== undefined) updateData.display_order = parseInt(display_order) || 0;
  if (is_active !== undefined) updateData.is_active = is_active === true || is_active === 'true' || is_active === 1;

  // Handle image upload
  if (req.file) {
    const imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    updateData.image_url = imageUrl;

    // Delete old image if it exists
    if (existing.image_url) {
      try {
        await deleteImageByUrl(existing.image_url);
      } catch (err) {
        console.warn('Image cleanup failed:', err.message);
      }
    }
  }

  const updated = await bannerService.updateBanner(id, updateData);

  res.status(200).json({
    message: 'Banner updated successfully',
    data: updated
  });
});

/**
 * Delete promotional banner (admin only)
 */
exports.deleteBanner = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    throw new AppError('Valid banner ID is required', 400);
  }

  const existing = await bannerService.getBannerById(id);
  if (!existing) {
    throw new AppError('Banner not found', 404);
  }

  // Delete image from Cloudinary if exists
  if (existing.image_url) {
    try {
      await deleteImageByUrl(existing.image_url);
    } catch (err) {
      console.warn('Image cleanup failed:', err.message);
    }
  }

  const deleted = await bannerService.deleteBanner(id);

  if (!deleted) {
    throw new AppError('Failed to delete banner', 500);
  }

  res.status(200).json({
    message: 'Banner deleted successfully'
  });
});
