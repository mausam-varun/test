const express = require('express');
const upload = require('../middlewares/upload');
const {
  getHomeCategoryCards,
  getAdminCategoryCards,
  updateAdminCategoryCards,
  uploadCategoryImage,
  deleteCategoryImage
} = require('../controllers/categoryController');

const router = express.Router();

router.get('/home', getHomeCategoryCards);
router.get('/admin', getAdminCategoryCards);
router.put('/admin', updateAdminCategoryCards);
router.post('/admin/:id/image', upload.single('image'), uploadCategoryImage);
router.delete('/admin/:id/image', deleteCategoryImage);

module.exports = router;
