const express = require('express');
const router = express.Router();
const { requireAdminAuth } = require('../middlewares/adminAuth');
const orderManagementController = require('../controllers/orderManagementController');

// Get order summary (counts by status)
router.get('/order-summary', requireAdminAuth, orderManagementController.getOrderSummary);

// Get orders grouped by status
router.get('/orders-by-status', requireAdminAuth, orderManagementController.getOrdersByStatus);

// Get recent orders
router.get('/recent-orders', requireAdminAuth, orderManagementController.getRecentOrders);

module.exports = router;
