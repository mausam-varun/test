'use strict';

const express = require('express');
const router  = express.Router();
const { requireAdminAuth } = require('../middlewares/adminAuth');
const {
  getTopSellingProducts,
  getLowSellingProducts,
  getProductRevenue,
  getInventoryStatus
} = require('../controllers/productPerformanceController');

// GET /api/dashboard/product/top-selling?days=30
router.get('/top-selling', requireAdminAuth, getTopSellingProducts);

// GET /api/dashboard/product/low-selling?days=30
router.get('/low-selling', requireAdminAuth, getLowSellingProducts);

// GET /api/dashboard/product/revenue?days=30
router.get('/revenue', requireAdminAuth, getProductRevenue);

// GET /api/dashboard/product/inventory-status
router.get('/inventory-status', requireAdminAuth, getInventoryStatus);

module.exports = router;
