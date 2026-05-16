const express = require('express');
const router = express.Router();
const { requireAdminAuth } = require('../middlewares/adminAuth');
const customerInsightsController = require('../controllers/customerInsightsController');

// Get total customer count
router.get('/customer-summary', requireAdminAuth, customerInsightsController.getCustomerSummary);

// Get new vs returning customers
router.get('/new-vs-returning', requireAdminAuth, customerInsightsController.getNewVsReturning);

// Get top 10 customers by spend
router.get('/top-customers', requireAdminAuth, customerInsightsController.getTopCustomers);

module.exports = router;
