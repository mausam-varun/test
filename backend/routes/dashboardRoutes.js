'use strict';

const express = require('express');
const router  = express.Router();
const { requireAdminAuth } = require('../middlewares/adminAuth');
const { getSalesSummary, getSalesTrend } = require('../controllers/dashboardController');

// GET /api/dashboard/sales-summary
router.get('/sales-summary', requireAdminAuth, getSalesSummary);

// GET /api/dashboard/sales-trend?type=daily|monthly
router.get('/sales-trend',   requireAdminAuth, getSalesTrend);

module.exports = router;
