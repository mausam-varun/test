const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { createOrder } = require('../services/orderService');
const { sendOrderConfirmationEmail } = require('../services/emailService');
const { generateInvoicePdfBuffer } = require('../services/invoiceService');

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

  // Send confirmation emails with invoice after responding (non-blocking)
  (async () => {
    try {
      const invoiceBuffer = await generateInvoicePdfBuffer({ order });
      const invoiceFilename = `invoice-${String(order.order_number || order.id).replace(/[^A-Za-z0-9_-]/g, '')}.pdf`;
      await sendOrderConfirmationEmail({ order, invoiceBuffer, invoiceFilename });
    } catch (err) {
      console.error('[OrderEmail] Failed to send order confirmation email:', err.message);
    }
  })();
});