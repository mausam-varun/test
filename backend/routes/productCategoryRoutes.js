const express = require('express');
const { getProductCategories } = require('../controllers/productCategoryController');

const router = express.Router();

router.get('/', getProductCategories);

module.exports = router;
