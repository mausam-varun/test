const express = require('express');
const {
  getAiQueueStats,
  getAiQueueJobs,
  retryAiQueueJob,
  removeAiQueueJob
} = require('../controllers/aiQueueController');

const router = express.Router();

router.get('/stats', getAiQueueStats);
router.get('/jobs', getAiQueueJobs);
router.post('/jobs/:id/retry', retryAiQueueJob);
router.delete('/jobs/:id', removeAiQueueJob);

module.exports = router;
