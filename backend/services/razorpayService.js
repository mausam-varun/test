const Razorpay = require('razorpay');
const crypto = require('crypto');
const { getPool } = require('./db');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

/**
 * Create a Razorpay order for a given internal order.
 * Amount is stored in USD but Razorpay expects INR paise.
 */
async function createRazorpayOrder(order) {
  const amountInPaise = Math.round(order.total_amount * 100);

  const razorpayOrder = await razorpay.orders.create({
    amount: amountInPaise,
    currency: 'INR',
    receipt: order.order_number,
    notes: {
      order_id: String(order.id),
      order_number: order.order_number,
      customer_email: order.customer_email
    }
  });

  const db = getPool();
  await db.execute(
    `UPDATE orders SET razorpay_order_id = ? WHERE id = ?`,
    [razorpayOrder.id, order.id]
  );

  return {
    razorpay_order_id: razorpayOrder.id,
    amount: razorpayOrder.amount,
    currency: razorpayOrder.currency,
    key_id: process.env.RAZORPAY_KEY_ID
  };
}

/**
 * Verify Razorpay payment signature and mark order as paid.
 */
async function verifyAndCapturePayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    throw new Error('Invalid payment signature');
  }

  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, order_number, payment_status FROM orders WHERE razorpay_order_id = ? LIMIT 1`,
    [razorpay_order_id]
  );

  if (!rows.length) {
    throw new Error('Order not found for this Razorpay order');
  }

  const order = rows[0];

  if (order.payment_status === 'paid') {
    return { order_id: order.id, order_number: order.order_number, already_paid: true };
  }

  await db.execute(
    `UPDATE orders
     SET payment_status      = 'paid',
         razorpay_payment_id = ?
     WHERE id = ?`,
    [razorpay_payment_id, order.id]
  );

  return { order_id: order.id, order_number: order.order_number, already_paid: false };
}

/**
 * Handle Razorpay webhook event (payment.captured / payment.failed).
 * Validates the webhook signature using RAZORPAY_WEBHOOK_SECRET.
 */
async function handleRazorpayWebhook(rawBody, signatureHeader) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error('RAZORPAY_WEBHOOK_SECRET is not configured');
  }

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  if (expectedSignature !== signatureHeader) {
    throw new Error('Invalid webhook signature');
  }

  const event = JSON.parse(rawBody);
  const eventType = event.event;
  const payment = event.payload?.payment?.entity;

  if (!payment) {
    return { status: 'ignored', reason: 'no payment entity' };
  }

  const razorpayOrderId = payment.order_id;
  const razorpayPaymentId = payment.id;

  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, payment_status FROM orders WHERE razorpay_order_id = ? LIMIT 1`,
    [razorpayOrderId]
  );

  if (!rows.length) {
    return { status: 'ignored', reason: 'order not found' };
  }

  const order = rows[0];

  if (eventType === 'payment.captured') {
    if (order.payment_status !== 'paid') {
      await db.execute(
        `UPDATE orders
         SET payment_status      = 'paid',
             razorpay_payment_id = ?
         WHERE id = ?`,
        [razorpayPaymentId, order.id]
      );
    }
    return { status: 'captured', order_id: order.id };
  }

  if (eventType === 'payment.failed') {
    if (order.payment_status !== 'paid') {
      await db.execute(
        `UPDATE orders SET payment_status = 'failed' WHERE id = ?`,
        [order.id]
      );
    }
    return { status: 'failed', order_id: order.id };
  }

  return { status: 'ignored', reason: `unhandled event: ${eventType}` };
}

module.exports = {
  createRazorpayOrder,
  verifyAndCapturePayment,
  handleRazorpayWebhook
};
