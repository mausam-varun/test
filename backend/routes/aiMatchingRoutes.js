const express = require('express');
const upload = require('../middlewares/upload');
const { matchBangles, aiHealthCheck } = require('../controllers/aiMatchingController');

const router = express.Router();

/**
 * POST /api/ai/match
 * Upload an image and get AI-matched bangle results
 * 
 * Request:
 *   - image (file): Image file to match
 *   - design (query, optional): Filter by design (e.g., 'traditional', 'modern')
 *   - style (query, optional): Filter by style
 * 
 * Response:
 *   {
 *     success: boolean,
 *     matches: [
 *       {
 *         id: number,
 *         name: string,
 *         image: string (URL),
 *         similarity: number (0-100),
 *         price: number,
 *         category: string
 *       }
 *     ],
 *     count: number
 *   }
 */
router.post('/match', upload.single('image'), matchBangles);

/**
 * GET /api/ai/health
 * Check if AI matching service is available
 */
router.get('/health', aiHealthCheck);

module.exports = router;
