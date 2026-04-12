const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const homeSectionsService = require('../services/homeSectionsService');

/**
 * Get a specific home section
 */
exports.getSection = asyncHandler(async (req, res) => {
  const { section } = req.params;

  if (!section || typeof section !== 'string') {
    throw new AppError('Section name is required', 400);
  }

  const data = await homeSectionsService.getHomeSectionByName(section);

  if (!data) {
    return res.status(404).json({ error: 'Section not found' });
  }

  res.status(200).json(data);
});

/**
 * Get all home sections (admin)
 */
exports.getAllSections = asyncHandler(async (req, res) => {
  const sections = await homeSectionsService.getAllHomeSections();
  res.status(200).json(sections);
});

/**
 * Get active home sections (public/frontend)
 */
exports.getActiveSections = asyncHandler(async (req, res) => {
  const sections = await homeSectionsService.getActiveHomeSections();
  res.status(200).json(sections);
});

/**
 * Update a home section (admin only)
 */
exports.updateSection = asyncHandler(async (req, res) => {
  const { section } = req.params;

  if (!section || typeof section !== 'string') {
    throw new AppError('Section name is required', 400);
  }

  // Check if section exists
  const existing = await homeSectionsService.getHomeSectionByName(section);
  if (!existing) {
    throw new AppError('Section not found', 404);
  }

  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url: imageUrlFromBody,
    is_active
  } = req.body || {};

  // Prepare update data
  const updateData = {};

  if (top_label !== undefined) updateData.top_label = top_label;
  if (main_title !== undefined) updateData.main_title = main_title;
  if (description !== undefined) updateData.description = description;
  if (button_text !== undefined) updateData.button_text = button_text;
  if (button_link !== undefined) updateData.button_link = button_link;
  if (is_active !== undefined) updateData.is_active = is_active;

  // Handle image upload
  let imageUrl = imageUrlFromBody ? String(imageUrlFromBody).trim() : undefined;

  if (req.file) {
    imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    // Delete old image if it exists
    if (existing.image_url) {
      try {
        await deleteImageByUrl(existing.image_url);
      } catch (err) {
        console.warn('Image cleanup failed:', err.message);
      }
    }
  }

  if (imageUrl !== undefined) {
    updateData.image_url = imageUrl;
  }

  // Update section
  const updated = await homeSectionsService.updateHomeSection(section, updateData);

  res.status(200).json({
    message: 'Section updated successfully',
    data: updated
  });
});

/**
 * Get New Arrivals (convenience method)
 */
exports.getNewArrivals = asyncHandler(async (req, res) => {
  const data = await homeSectionsService.getNewArrivals();

  if (!data) {
    return res.status(404).json({ error: 'New Arrivals section not found' });
  }

  res.status(200).json(data);
});

/**
 * Update New Arrivals (convenience method)
 */
exports.updateNewArrivals = asyncHandler(async (req, res) => {
  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url: imageUrlFromBody,
    is_active
  } = req.body || {};

  const existing = await homeSectionsService.getNewArrivals();
  if (!existing) {
    throw new AppError('New Arrivals section not found', 404);
  }

  const updateData = {};

  if (top_label !== undefined) updateData.top_label = top_label;
  if (main_title !== undefined) updateData.main_title = main_title;
  if (description !== undefined) updateData.description = description;
  if (button_text !== undefined) updateData.button_text = button_text;
  if (button_link !== undefined) updateData.button_link = button_link;
  if (is_active !== undefined) updateData.is_active = is_active;

  let imageUrl = imageUrlFromBody ? String(imageUrlFromBody).trim() : undefined;

  if (req.file) {
    imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    if (existing.image_url) {
      try {
        await deleteImageByUrl(existing.image_url);
      } catch (err) {
        console.warn('Image cleanup failed:', err.message);
      }
    }
  }

  if (imageUrl !== undefined) {
    updateData.image_url = imageUrl;
  }

  const updated = await homeSectionsService.updateNewArrivals(updateData);

  res.status(200).json({
    message: 'New Arrivals updated successfully',
    data: updated
  });
});

/**
 * Get Our Story (convenience method)
 */
exports.getOurStory = asyncHandler(async (req, res) => {
  const data = await homeSectionsService.getOurStory();

  if (!data) {
    return res.status(404).json({ error: 'Our Story section not found' });
  }

  res.status(200).json(data);
});

/**
 * Update Our Story (convenience method)
 */
exports.updateOurStory = asyncHandler(async (req, res) => {
  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url: imageUrlFromBody,
    is_active
  } = req.body || {};

  const existing = await homeSectionsService.getOurStory();
  if (!existing) {
    throw new AppError('Our Story section not found', 404);
  }

  const updateData = {};

  if (top_label !== undefined) updateData.top_label = top_label;
  if (main_title !== undefined) updateData.main_title = main_title;
  if (description !== undefined) updateData.description = description;
  if (button_text !== undefined) updateData.button_text = button_text;
  if (button_link !== undefined) updateData.button_link = button_link;
  if (is_active !== undefined) updateData.is_active = is_active;

  let imageUrl = imageUrlFromBody ? String(imageUrlFromBody).trim() : undefined;

  if (req.file) {
    imageUrl = await uploadImage(req.file.buffer, req.file.mimetype);
    if (existing.image_url) {
      try {
        await deleteImageByUrl(existing.image_url);
      } catch (err) {
        console.warn('Image cleanup failed:', err.message);
      }
    }
  }

  if (imageUrl !== undefined) {
    updateData.image_url = imageUrl;
  }

  const updated = await homeSectionsService.updateOurStory(updateData);

  res.status(200).json({
    message: 'Our Story updated successfully',
    data: updated
  });
});
