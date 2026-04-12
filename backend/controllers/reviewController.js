const asyncHandler = require('../utils/asyncHandler');
const {
  getPendingRatingPopupForUser,
  getRatingEligibilityForOrder,
  createReview,
  uploadReviewImages
} = require('../services/reviewService');

exports.getPendingReview = asyncHandler(async (req, res) => {
  const response = await getPendingRatingPopupForUser(req.user);
  res.json(response);
});

exports.getRatingEligibility = asyncHandler(async (req, res) => {
  const response = await getRatingEligibilityForOrder(req.user, req.params.orderId);
  res.json(response);
});

exports.submitReview = asyncHandler(async (req, res) => {
  const response = await createReview(req.user, req.body || {});
  res.status(201).json(response);
});

exports.uploadReviewImages = asyncHandler(async (req, res) => {
  const imageUrls = await uploadReviewImages(req.files || []);
  res.status(201).json({ images: imageUrls });
});
