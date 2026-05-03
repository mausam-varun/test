const aiMatchingService = require('../services/aiMatchingService');

/**
 * Match bangles using uploaded or provided image
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
async function matchBangles(req, res) {
  try {
    // Validate that we have an image
    if (!req.file) {
      return res.status(400).json({
        error: 'No image file provided. Please upload an image.',
        success: false
      });
    }

    console.log(`[AI Matching] Processing image: ${req.file.originalname} (${req.file.size} bytes)`);

    // Extract optional filters from query or body
    const { design, style } = req.query;

    // Call AI matching service with the image buffer
    // The service will handle sending it to the AI service with the correct field name
    const matchResults = await aiMatchingService.matchBangles(
      req.file.buffer,
      design,
      style
    );

    // Return results to frontend
    return res.json({
      success: true,
      matches: matchResults,
      count: matchResults.length
    });
  } catch (error) {
    console.error('[AI Matching] Controller error:', error.message);

    // Return appropriate error response
    const statusCode = error.message.includes('not available')
      ? 503
      : error.message.includes('not found')
      ? 500
      : 400;

    return res.status(statusCode).json({
      error: error.message,
      success: false
    });
  }
}

/**
 * Health check for AI service
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
async function aiHealthCheck(req, res) {
  try {
    const isHealthy = await aiMatchingService.healthCheck();
    return res.json({
      status: isHealthy ? 'healthy' : 'unhealthy',
      service: 'ai-matching',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[AI Matching] Health check error:', error.message);
    return res.status(503).json({
      status: 'error',
      service: 'ai-matching',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = {
  matchBangles,
  aiHealthCheck
};
