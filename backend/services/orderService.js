const { getPool } = require('./db');

let productStorageModePromise;

function roundCurrency(value) {
  return Number((Number(value) || 0).toFixed(2));
}

function buildSequentialOrderNumber(nextNumber) {
  const safeNumber = Math.max(1, Number(nextNumber) || 1);
  return `-DC${String(safeNumber).padStart(8, '0')}`;
}

function parseSequentialOrderNumber(orderNumber) {
  const normalized = String(orderNumber || '').trim();
  const match = normalized.match(/^-?DC(\d{8})$/i);
  if (!match) {
    return 0;
  }

  return Number(match[1]) || 0;
}

async function getNextOrderNumber(connection) {
  const [rows] = await connection.query(
    `SELECT order_number
     FROM orders
     ORDER BY id DESC
     LIMIT 1
     FOR UPDATE`
  );

  const lastOrderNumber = rows?.[0]?.order_number || '';
  const lastSeq = parseSequentialOrderNumber(lastOrderNumber);
  return buildSequentialOrderNumber(lastSeq + 1);
}

async function getProductStorageMode(connection) {
  if (!productStorageModePromise) {
    productStorageModePromise = (async () => {
      const [rows] = await connection.query('SHOW COLUMNS FROM products');
      const fieldNames = new Set(rows.map((row) => row.Field));
      return fieldNames.has('title') ? 'normalized' : 'flat';
    })().catch((error) => {
      productStorageModePromise = null;
      throw error;
    });
  }

  return productStorageModePromise;
}

async function fetchProductsForOrder(connection, productIds) {
  const uniqueProductIds = [...new Set(productIds)];
  const placeholders = uniqueProductIds.map(() => '?').join(',');
  const productStorageMode = await getProductStorageMode(connection);

  const query = productStorageMode === 'normalized'
    ? `SELECT p.id,
              p.title AS name,
              p.base_price AS price
       FROM products p
       WHERE p.id IN (${placeholders})`
    : `SELECT p.id,
              p.name,
              p.price
       FROM products p
       WHERE p.id IN (${placeholders})`;

  const [rows] = await connection.query(
    query,
    uniqueProductIds
  );

  return new Map(
    rows.map((row) => [
      row.id,
      {
        id: row.id,
        name: row.name,
        price: roundCurrency(row.price)
      }
    ])
  );
}

async function createOrder({
  userId,
  customerName,
  customerEmail,
  customerPhone,
  addressLine1,
  addressLine2,
  city,
  state,
  postalCode,
  country,
  paymentMethod,
  items
}) {
  const db = getPool();
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const productsById = await fetchProductsForOrder(
      connection,
      items.map((item) => item.productId)
    );

    if (productsById.size !== new Set(items.map((item) => item.productId)).size) {
      throw new Error('One or more products are no longer available. Please refresh your cart and try again.');
    }

    const orderItems = items.map((item) => {
      const product = productsById.get(item.productId);
      const quantity = Math.max(1, Math.floor(item.quantity));
      const linePrice = roundCurrency(product.price);
      const lineTotal = roundCurrency(linePrice * quantity);

      return {
        product_id: product.id,
        product_name: product.name,
        price: linePrice,
        quantity,
        line_total: lineTotal
      };
    });

    const subtotalAmount = roundCurrency(
      orderItems.reduce((sum, item) => sum + item.line_total, 0)
    );
    const shippingAmount = subtotalAmount >= 50 ? 0 : 4.99;
    const taxAmount = roundCurrency(subtotalAmount * 0.05);
    const totalAmount = roundCurrency(subtotalAmount + shippingAmount + taxAmount);
    const storedPaymentMethod = paymentMethod === 'cod' ? 'cod' : 'online';
    const orderNumber = await getNextOrderNumber(connection);

    const [result] = await connection.execute(
      `INSERT INTO orders (
         order_number,
         user_id,
         customer_name,
         customer_email,
         customer_phone,
         address_line1,
         address_line2,
         city,
         state,
         postal_code,
         country,
         base_amount,
         display_amount,
         subtotal_amount,
         shipping_amount,
         tax_amount,
         total_amount,
         currency_code,
         exchange_rate,
         price_multiplier,
         payment_status,
         payment_method,
         order_status
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        orderNumber,
        userId ? Number(userId) : null,
        customerName,
        customerEmail,
        customerPhone,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
        totalAmount,
        totalAmount,
        subtotalAmount,
        shippingAmount,
        taxAmount,
        totalAmount,
        'USD',
        1,
        1,
        'pending',
        storedPaymentMethod,
        'placed'
      ]
    );

    for (const item of orderItems) {
      await connection.execute(
        `INSERT INTO order_items (order_id, product_id, price, quantity)
         VALUES (?, ?, ?, ?)`,
        [result.insertId, item.product_id, item.price, item.quantity]
      );
    }

    await connection.commit();

    return {
      id: result.insertId,
      order_number: orderNumber,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      address_line1: addressLine1,
      address_line2: addressLine2,
      city,
      state,
      postal_code: postalCode,
      country,
      subtotal_amount: subtotalAmount,
      shipping_amount: shippingAmount,
      tax_amount: taxAmount,
      total_amount: totalAmount,
      currency_code: 'USD',
      payment_method: storedPaymentMethod,
      checkout_payment_method: paymentMethod,
      payment_status: 'pending',
      order_status: 'placed',
      created_at: new Date().toISOString(),
      items: orderItems
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  createOrder
};