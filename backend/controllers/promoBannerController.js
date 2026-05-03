const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage } = require('../services/cloudinaryService');
const promoBannerService = require('../services/promoBannerService');

const VALID_KEYS = ['bridal', 'festive'];

/**
 * GET /api/hero-promo-banners
 * Public — returns all active hero promo banners
 */
exports.getAll = asyncHandler(async (req, res) => {
  const banners = await promoBannerService.getAll();
  res.status(200).json(banners);
});

/**
 * GET /api/hero-promo-banners/:key
 * Public — returns single active banner by key
 */
exports.getByKey = asyncHandler(async (req, res) => {
  const { key } = req.params;
  const banner = await promoBannerService.getByKey(key);
  res.status(200).json(banner || {});
});

/**
 * POST /api/admin/hero-promo-banners/:key
 * Admin — create or update a hero promo banner by key
 */
exports.upsert = asyncHandler(async (req, res) => {
  const { key } = req.params;

  if (!VALID_KEYS.includes(key)) {
    throw new AppError(`Invalid banner key "${key}". Allowed keys: ${VALID_KEYS.join(', ')}`, 400);
  }

  let image_url = (req.body.image_url || '').trim() || undefined;

  if (req.file) {
    image_url = await uploadImage(req.file.buffer, req.file.mimetype);
  }

  const data = {
    title:       req.body.title,
    subtitle:    req.body.subtitle,
    button_text: req.body.button_text,
    link:        req.body.link,
    ...(image_url !== undefined && { image_url })
  };

  const banner = await promoBannerService.upsert(key, data);
  res.status(200).json({ success: true, banner });
});
