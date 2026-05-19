const express = require('express');
const { placeOrder, verifyPayment } = require('../controllers/orderController');
const { getRatingEligibility } = require('../controllers/reviewController');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { trackShipment, trackByShipmentId } = require('../services/shiprocketService');
const { getPool } = require('../services/db');
const { requireCustomerAuth } = require('../middlewares/customerAuth');

const router = express.Router();

router.post('/', requireCustomerAuth, placeOrder);
router.post('/verify-payment', requireCustomerAuth, verifyPayment);
router.get('/:orderId/rating-eligibility', requireCustomerAuth, getRatingEligibility);

// GET /api/orders/:orderNumber/tracking
// Returns stored Shiprocket tracking data + live shipment status
router.get('/:orderNumber/tracking', asyncHandler(async (req, res) => {
  const { orderNumber } = req.params;
  const db = getPool();

  const [rows] = await db.execute(
    `SELECT id, order_number, order_status, awb_code, courier_name,
            tracking_url, shiprocket_order_id, shiprocket_shipment_id,
            customer_name, city, state, country, created_at
     FROM orders
     WHERE order_number = ?
     LIMIT 1`,
    [orderNumber]
  );

  if (!rows.length) {
    throw new AppError('Order not found', 404);
  }

  const order = rows[0];
  let liveTracking = null;

  if (order.awb_code) {
    try {
      liveTracking = await trackShipment(order.awb_code);
    } catch (err) {
      console.warn('[Shiprocket] Live tracking fetch failed:', err.message);
    }
  } else if (order.shiprocket_shipment_id) {
    try {
      liveTracking = await trackByShipmentId(order.shiprocket_shipment_id);
    } catch (err) {
      console.warn('[Shiprocket] Live tracking by shipment ID failed:', err.message);
    }
  }

  res.json({
    order_number: order.order_number,
    order_status: order.order_status,
    awb_code: order.awb_code,
    courier_name: order.courier_name,
    tracking_url: order.tracking_url,
    shiprocket_order_id: order.shiprocket_order_id,
    shiprocket_shipment_id: order.shiprocket_shipment_id,
    customer_name: order.customer_name,
    destination: [order.city, order.state, order.country].filter(Boolean).join(', '),
    ordered_at: order.created_at,
    live_tracking: liveTracking
  });
}));

module.exports = router;
