const asyncHandler = require('../utils/asyncHandler');
const { listProductCategories } = require('../services/productCategoryService');

exports.getProductCategories = asyncHandler(async (_req, res) => {
  const categories = await listProductCategories();
  res.status(200).json(categories);
});
