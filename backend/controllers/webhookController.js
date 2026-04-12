const asyncHandler = require('../utils/asyncHandler');
const { handleShiprocketWebhook } = require('../services/reviewService');

function isWebhookAuthorized(req) {
  const expectedToken = String(process.env.SHIPROCKET_WEBHOOK_TOKEN || '').trim();
  if (!expectedToken) {
    return true;
  }

  const providedToken = String(
    req.headers['x-shiprocket-token'] ||
    req.headers['x-webhook-token'] ||
    req.headers['x-api-key'] ||
    ''
  ).trim();

  return Boolean(providedToken && providedToken === expectedToken);
}

exports.handleShiprocketWebhook = asyncHandler(async (req, res) => {
  if (!isWebhookAuthorized(req)) {
    return res.status(401).json({ error: 'Invalid Shiprocket webhook token' });
  }

  const result = await handleShiprocketWebhook(req.body || {});
  return res.status(200).json({
    status: 'ok',
    ...result
  });
});
