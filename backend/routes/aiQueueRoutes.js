const express = require('express');
const {
  getAiQueueStats,
  getAiQueueJobs,
  retryAiQueueJob,
  removeAiQueueJob,
  getAiProviderConfig,
  updateAiProviderConfig
} = require('../controllers/aiQueueController');

const router = express.Router();

router.get('/stats', getAiQueueStats);
router.get('/jobs', getAiQueueJobs);
router.get('/provider', getAiProviderConfig);
router.patch('/provider', updateAiProviderConfig);
router.post('/jobs/:id/retry', retryAiQueueJob);
router.delete('/jobs/:id', removeAiQueueJob);

module.exports = router;
