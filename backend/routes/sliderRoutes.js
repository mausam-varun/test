const express = require('express');

const upload = require('../middlewares/upload');
const {
  getPublicSlider,
  getAdminSlider,
  createSlider,
  updateSlider,
  deleteSlider,
  updateSliderSettings
} = require('../controllers/sliderController');

const router = express.Router();

router.get('/public', getPublicSlider);
router.get('/admin', getAdminSlider);
router.post('/admin', upload.single('image'), createSlider);
router.put('/admin/:id', upload.single('image'), updateSlider);
router.delete('/admin/:id', deleteSlider);
router.patch('/settings', updateSliderSettings);

module.exports = router;
