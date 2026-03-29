const express = require('express');

const upload = require('../middlewares/upload');
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProduct,
  getAiIndexingMode,
  setPrimaryProductImage,
  matchBangles,
  updateAiIndexingMode
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/ai-indexing-mode', getAiIndexingMode);
router.get('/:id', getProduct);
router.post('/', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'image', maxCount: 1 }]), addProduct);
router.post('/match-bangles', upload.single('image_file'), matchBangles);
router.patch('/ai-indexing-mode', updateAiIndexingMode);
router.put('/:id', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'image', maxCount: 1 }]), updateProduct);
router.patch('/:id/images/:imageId/primary', setPrimaryProductImage);
router.delete('/:id', deleteProduct);

module.exports = router;
