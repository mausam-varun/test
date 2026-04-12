const asyncHandler = require('../utils/asyncHandler');
const { listReviewsForAdmin, updateReviewSupportFlag } = require('../services/reviewService');

exports.listAdminReviews = asyncHandler(async (req, res) => {
  const response = await listReviewsForAdmin({
    rating: req.query.rating,
    supportOnly: req.query.supportOnly,
    limit: req.query.limit
  });

  res.json(response);
});

exports.updateAdminReviewSupportFlag = asyncHandler(async (req, res) => {
  const reviewId = req.params.reviewId;
  const supportRequired = Boolean(req.body?.supportRequired);

  const response = await updateReviewSupportFlag(reviewId, supportRequired);
  res.json({
    message: supportRequired ? 'Review marked for support follow-up.' : 'Support follow-up resolved.',
    review: response
  });
});
