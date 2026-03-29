const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const {
  getSliderSettings,
  updateSliderDisplayCount,
  listSliderItems,
  createSliderItem,
  getSliderItemById,
  updateSliderItemById,
  deleteSliderItemById,
  getPublicSliderPayload
} = require('../services/sliderService');

function parseDisplayCount(value) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 2 || parsed > 5) {
    return null;
  }
  return parsed;
}

exports.getPublicSlider = asyncHandler(async (req, res) => {
  const payload = await getPublicSliderPayload();
  res.status(200).json(payload);
});

exports.getAdminSlider = asyncHandler(async (req, res) => {
  const [settings, items] = await Promise.all([
    getSliderSettings(),
    listSliderItems({ onlyActive: false })
  ]);

  res.status(200).json({
    display_count: settings.display_count,
    items
  });
});

exports.createSlider = asyncHandler(async (req, res) => {
  const { image_url: imageUrlFromBody, title = '', subtitle = '', sort_order = 0, is_active = true } = req.body || {};

  let imageUrl = String(imageUrlFromBody || '').trim();

  if (req.file) {
    imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
  }

  if (!imageUrl) {
    throw new AppError('image file or image_url is required', 400);
  }

  const created = await createSliderItem({
    imageUrl,
    title,
    subtitle,
    sortOrder: sort_order,
    isActive: is_active
  });

  res.status(201).json(created);
});

exports.updateSlider = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('invalid slider id', 400);
  }

  const existing = await getSliderItemById(id);
  if (!existing) {
    throw new AppError('slider item not found', 404);
  }

  const updates = {};

  if (req.body.title !== undefined) updates.title = req.body.title;
  if (req.body.subtitle !== undefined) updates.subtitle = req.body.subtitle;
  if (req.body.sort_order !== undefined) updates.sort_order = req.body.sort_order;
  if (req.body.is_active !== undefined) updates.is_active = req.body.is_active;
  if (req.body.image_url !== undefined) updates.image_url = String(req.body.image_url || '').trim();

  if (req.file) {
    const uploadedUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    updates.image_url = uploadedUrl;
  }

  if (updates.image_url === '') {
    throw new AppError('image_url cannot be empty', 400);
  }

  const updated = await updateSliderItemById(id, updates);

  if (updates.image_url && updates.image_url !== existing.image_url) {
    try {
      await deleteImageByUrl(existing.image_url);
    } catch (error) {
      console.warn('Slider image cleanup failed:', error.message);
    }
  }

  res.status(200).json(updated);
});

exports.deleteSlider = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('invalid slider id', 400);
  }

  const deleted = await deleteSliderItemById(id);
  if (!deleted) {
    throw new AppError('slider item not found', 404);
  }

  try {
    await deleteImageByUrl(deleted.image_url);
  } catch (error) {
    console.warn('Slider image cleanup failed:', error.message);
  }

  res.status(200).json({ message: 'slider item deleted successfully' });
});

exports.updateSliderSettings = asyncHandler(async (req, res) => {
  const displayCount = parseDisplayCount(req.body?.display_count);
  if (displayCount === null) {
    throw new AppError('display_count must be an integer between 2 and 5', 400);
  }

  const settings = await updateSliderDisplayCount(displayCount);
  res.status(200).json(settings);
});
