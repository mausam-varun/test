const express = require('express');
const { handleShiprocketWebhook } = require('../controllers/webhookController');
const { handleRazorpayWebhook } = require('../services/razorpayService');

const router = express.Router();

router.post('/shiprocket', handleShiprocketWebhook);

router.post('/razorpay', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    if (!signature) {
      return res.status(400).json({ error: 'Missing signature header' });
    }
    const result = await handleRazorpayWebhook(req.body.toString(), signature);
    return res.status(200).json({ status: 'ok', ...result });
  } catch (err) {
    console.error('[Razorpay Webhook] Error:', err.message);
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
