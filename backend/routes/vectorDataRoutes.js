const express = require('express');
const { requireAdminAuth } = require('../middlewares/adminAuth');
const vectorDataController = require('../controllers/vectorDataController');

const router = express.Router();

router.get('/collections', requireAdminAuth, vectorDataController.getCollections);
router.get('/points', requireAdminAuth, vectorDataController.getCollectionPoints);

module.exports = router;
