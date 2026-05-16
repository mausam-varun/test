const express = require('express');
const router = express.Router();
const { requireAdminAuth } = require('../middlewares/adminAuth');
const inventoryReportController = require('../controllers/inventoryReportController');

// Get inventory summary
router.get('/inventory-summary', requireAdminAuth, inventoryReportController.getInventorySummary);

// Get low stock products
router.get('/low-stock', requireAdminAuth, inventoryReportController.getLowStockProducts);

// Get out of stock products
router.get('/out-of-stock', requireAdminAuth, inventoryReportController.getOutOfStockProducts);

// Get all products with inventory breakdown
router.get('/all-products', requireAdminAuth, inventoryReportController.getAllProductsInventory);

module.exports = router;
