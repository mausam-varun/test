const express = require('express');
const { requireAdminAuth } = require('../middlewares/adminAuth');
const {
  listAdminReviews,
  updateAdminReviewSupportFlag
} = require('../controllers/adminReviewController');

const router = express.Router();

router.get('/', requireAdminAuth, listAdminReviews);
router.patch('/:reviewId/support', requireAdminAuth, updateAdminReviewSupportFlag);

module.exports = router;
