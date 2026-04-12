const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const {
  getHomeCategories,
  getAdminCategorySettings,
  saveAdminCategorySettings,
  getCategoryById,
  setCategoryImage,
  clearCategoryImage
} = require('../services/categoryService');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');

exports.getHomeCategoryCards = asyncHandler(async (_req, res) => {
  const data = await getHomeCategories();
  res.status(200).json(data);
});

exports.getAdminCategoryCards = asyncHandler(async (_req, res) => {
  const data = await getAdminCategorySettings();
  res.status(200).json(data);
});

exports.updateAdminCategoryCards = asyncHandler(async (req, res) => {
  const displayCount = Number(req.body?.display_count);
  const categories = Array.isArray(req.body?.categories) ? req.body.categories : [];

  if (!Number.isInteger(displayCount) || displayCount < 1 || displayCount > 12) {
    throw new AppError('display_count must be an integer between 1 and 12', 400);
  }

  const hasValidCategory = categories.every((category) => typeof category?.name === 'string');
  if (!hasValidCategory) {
    throw new AppError('Each category must include a valid name', 400);
  }

  const data = await saveAdminCategorySettings({ displayCount, categories });
  res.status(200).json({
    message: 'Home categories updated successfully.',
    ...data
  });
});

exports.uploadCategoryImage = asyncHandler(async (req, res) => {
  const categoryId = Number(req.params.id);
  if (!Number.isInteger(categoryId) || categoryId <= 0) {
    throw new AppError('invalid category id', 400);
  }

  if (!req.file?.buffer) {
    throw new AppError('Category image is required', 400);
  }

  const existingCategory = await getCategoryById(categoryId);
  if (!existingCategory) {
    throw new AppError('category not found', 404);
  }

  const imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);

  if (existingCategory.image_url) {
    try {
      await deleteImageByUrl(existingCategory.image_url);
    } catch (error) {
      console.warn('Could not delete previous category image:', error.message);
    }
  }

  const data = await setCategoryImage(categoryId, imageUrl);
  res.status(200).json({
    message: 'Category image updated successfully.',
    ...data
  });
});

exports.deleteCategoryImage = asyncHandler(async (req, res) => {
  const categoryId = Number(req.params.id);
  if (!Number.isInteger(categoryId) || categoryId <= 0) {
    throw new AppError('invalid category id', 400);
  }

  const existingCategory = await getCategoryById(categoryId);
  if (!existingCategory) {
    throw new AppError('category not found', 404);
  }

  if (existingCategory.image_url) {
    try {
      await deleteImageByUrl(existingCategory.image_url);
    } catch (error) {
      console.warn('Could not delete category image:', error.message);
    }
  }

  const data = await clearCategoryImage(categoryId);
  res.status(200).json({
    message: 'Category image removed successfully.',
    ...data
  });
});
