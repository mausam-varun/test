const express = require('express');
const upload = require('../middlewares/upload');
const { requireCustomerAuth } = require('../middlewares/customerAuth');
const { validateReviewSubmission } = require('../middlewares/validateReview');
const {
  getPendingReview,
  submitReview,
  uploadReviewImages
} = require('../controllers/reviewController');

const router = express.Router();

router.get('/pending', requireCustomerAuth, getPendingReview);
router.post('/uploads', requireCustomerAuth, upload.array('images', 4), uploadReviewImages);
router.post('/', requireCustomerAuth, validateReviewSubmission, submitReview);

module.exports = router;
