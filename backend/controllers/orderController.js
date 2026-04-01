const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { createOrder } = require('../services/orderService');
const { sendOrderConfirmationEmail } = require('../services/emailService');
const { generateInvoicePdfBuffer } = require('../services/invoiceService');
const { createShiprocketOrder } = require('../services/shiprocketService');
const { getPool } = require('../services/db');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.placeOrder = asyncHandler(async (req, res) => {
  const {
    fullName = '',
    email = '',
    phone = '',
    addressLine1 = '',
    addressLine2 = '',
    city = '',
    state = '',
    postalCode = '',
    country = 'India',
    paymentMethod = 'cod',
    items = []
  } = req.body || {};

  const trimmedFullName = String(fullName).trim();
  const sessionEmail = String(req?.user?.email || '').trim();
  const trimmedEmail = sessionEmail || String(email).trim();
  const trimmedPhone = String(phone).trim();
  const trimmedAddressLine1 = String(addressLine1).trim();
  const trimmedAddressLine2 = String(addressLine2 || '').trim();
  const trimmedCity = String(city).trim();
  const trimmedState = String(state).trim();
  const trimmedPostalCode = String(postalCode).trim();
  const trimmedCountry = String(country).trim() || 'India';

  if (!trimmedFullName || !trimmedEmail || !trimmedPhone || !trimmedAddressLine1 || !trimmedCity || !trimmedState || !trimmedPostalCode) {
    throw new AppError('Full name, email, phone, address, city, state, and postal code are required', 400);
  }

  if (!isValidEmail(trimmedEmail)) {
    throw new AppError('Please enter a valid email address', 400);
  }

  if (!['cod', 'card', 'upi'].includes(paymentMethod)) {
    throw new AppError('Unsupported payment method', 400);
  }

  if (!Array.isArray(items) || !items.length) {
    throw new AppError('At least one order item is required', 400);
  }

  const normalizedItems = items.map((item) => ({
    productId: Number(item?.productId),
    quantity: Number(item?.quantity)
  }));

  const hasInvalidItem = normalizedItems.some(
    (item) => !Number.isInteger(item.productId) || item.productId <= 0 || !Number.isFinite(item.quantity) || item.quantity <= 0
  );

  if (hasInvalidItem) {
    throw new AppError('Order items must include valid productId and quantity values', 400);
  }

  let order;
  try {
    order = await createOrder({
      customerName: trimmedFullName,
      customerEmail: trimmedEmail,
      customerPhone: trimmedPhone,
      addressLine1: trimmedAddressLine1,
      addressLine2: trimmedAddressLine2,
      city: trimmedCity,
      state: trimmedState,
      postalCode: trimmedPostalCode,
      country: trimmedCountry,
      paymentMethod,
      items: normalizedItems
    });
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    if (error.message) {
      throw new AppError(error.message, 400);
    }

    throw error;
  }

  res.status(201).json({
    message: 'Order placed successfully.',
    order
  });

  // Non-blocking post-order tasks: email + Shiprocket
  (async () => {
    // 1. Send confirmation email with invoice
    try {
      const invoiceBuffer = await generateInvoicePdfBuffer({ order });
      const invoiceFilename = `invoice-${String(order.order_number || order.id).replace(/[^A-Za-z0-9_-]/g, '')}.pdf`;
      await sendOrderConfirmationEmail({ order, invoiceBuffer, invoiceFilename });
    } catch (err) {
      console.error('[OrderEmail] Failed to send order confirmation email:', err.message);
    }

    // 2. Push order to Shiprocket and save tracking info
    try {
      const shiprocket = await createShiprocketOrder(order);
      const db = getPool();
      await db.execute(
        `UPDATE orders
         SET shiprocket_order_id    = ?,
             shiprocket_shipment_id = ?,
             awb_code               = ?,
             courier_name           = ?,
             tracking_url           = ?,
             order_status           = 'processing'
         WHERE id = ?`,
        [
          shiprocket.shiprocket_order_id || null,
          String(shiprocket.shiprocket_shipment_id || ''),
          shiprocket.awb_code || null,
          shiprocket.courier_name || null,
          shiprocket.tracking_url || null,
          order.id
        ]
      );
      console.log(`[Shiprocket] Order ${order.order_number} created. AWB: ${shiprocket.awb_code || 'pending'}`);
    } catch (err) {
      console.error('[Shiprocket] Failed to create Shiprocket order (non-fatal):', err.message);
    }
  })();
});