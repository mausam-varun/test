const AppError = require('../utils/AppError');

const ALLOWED_EMOTIONS = new Set(['Loved it', 'Happy', 'Okay', 'Disappointed']);

function isValidStar(value) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 1 && number <= 5;
}

function validateReviewSubmission(req, res, next) {
  const {
    order_id,
    overall_rating,
    material_quality,
    design_rating,
    craftsmanship,
    comfort,
    value_for_money,
    emotion,
    review_text,
    images
  } = req.body || {};

  const numericOrderId = Number(order_id);
  if (!Number.isInteger(numericOrderId) || numericOrderId <= 0) {
    return next(new AppError('A valid order_id is required', 400));
  }

  if (!isValidStar(overall_rating)) {
    return next(new AppError('overall_rating must be an integer between 1 and 5', 400));
  }

  const normalizedEmotion = String(emotion || '').trim();
  if (!ALLOWED_EMOTIONS.has(normalizedEmotion)) {
    return next(new AppError('emotion must be one of: Loved it, Happy, Okay, Disappointed', 400));
  }

  if (Number(overall_rating) >= 3) {
    const detailedRatings = {
      material_quality,
      design_rating,
      craftsmanship,
      comfort,
      value_for_money
    };

    const invalidKey = Object.entries(detailedRatings).find(([, value]) => !isValidStar(value))?.[0];
    if (invalidKey) {
      return next(new AppError(`${invalidKey} must be an integer between 1 and 5`, 400));
    }
  }

  const normalizedReviewText = String(review_text || '').trim();
  if (Number(overall_rating) <= 2 && !normalizedReviewText) {
    return next(new AppError('Please share what went wrong for low ratings', 400));
  }

  if (normalizedReviewText.length > 2000) {
    return next(new AppError('review_text must be 2000 characters or fewer', 400));
  }

  if (images !== undefined) {
    if (!Array.isArray(images)) {
      return next(new AppError('images must be an array of uploaded image URLs', 400));
    }

    if (images.length > 4) {
      return next(new AppError('You can attach up to 4 review images', 400));
    }
  }

  return next();
}

module.exports = {
  validateReviewSubmission,
  ALLOWED_EMOTIONS
};
