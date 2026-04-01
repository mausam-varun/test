'use strict';

const https = require('https');
const http = require('http');

const SHIPROCKET_BASE = 'https://apiv2.shiprocket.in/v1/external';

// Token cache — refreshed whenever it expires or on first call
let _cachedToken = null;
let _tokenExpiresAt = 0;

// ---------- low-level HTTPS helper ----------

function shiprocketRequest(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const url = new URL(SHIPROCKET_BASE + path);
    const isHttps = url.protocol === 'https:';
    const lib = isHttps ? https : http;
    const bodyStr = body ? JSON.stringify(body) : null;

    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {})
      }
    };

    const req = lib.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 400) {
            reject(new Error(parsed.message || `Shiprocket error ${res.statusCode}`));
          } else {
            resolve(parsed);
          }
        } catch {
          reject(new Error(`Shiprocket: invalid JSON response (status ${res.statusCode})`));
        }
      });
    });

    req.on('error', reject);
    if (bodyStr) {
      req.write(bodyStr);
    }
    req.end();
  });
}

// ---------- auth ----------

async function getToken() {
  const now = Date.now();
  if (_cachedToken && now < _tokenExpiresAt) {
    return _cachedToken;
  }

  const email = process.env.SHIPROCKET_EMAIL;
  const password = process.env.SHIPROCKET_PASSWORD;

  if (!email || !password) {
    throw new Error('SHIPROCKET_EMAIL and SHIPROCKET_PASSWORD must be set in environment variables');
  }

  const response = await shiprocketRequest('POST', '/auth/login', { email, password }, null);
  _cachedToken = response.token;
  // Shiprocket tokens expire after 24 h; refresh 1 minute early
  _tokenExpiresAt = now + (23 * 60 + 59) * 60 * 1000;
  return _cachedToken;
}

// ---------- create shipment order ----------

/**
 * Creates an order + auto-assigns courier in Shiprocket.
 * @param {object} order - order object returned by createOrder()
 * @returns {object} { shiprocket_order_id, shiprocket_shipment_id, awb_code, courier_name, tracking_url }
 */
async function createShiprocketOrder(order) {
  const token = await getToken();

  const orderItems = (order.items || []).map((item, idx) => ({
    name: String(item.product_name || `Product ${idx + 1}`),
    sku: `SKU-${item.product_id || idx + 1}`,
    units: Number(item.quantity) || 1,
    selling_price: Number(item.price) || 0,
    discount: 0,
    tax: 0,
    hsn: ''
  }));

  const payload = {
    order_id: String(order.order_number || order.id),
    order_date: new Date().toISOString().split('T')[0],
    pickup_location: process.env.SHIPROCKET_PICKUP_LOCATION || 'Primary',
    channel_id: '',
    comment: 'DivaraCraft order',
    billing_customer_name: order.customer_name || '',
    billing_last_name: '',
    billing_address: order.address_line1 || '',
    billing_address_2: order.address_line2 || '',
    billing_city: order.city || '',
    billing_pincode: String(order.postal_code || ''),
    billing_state: order.state || '',
    billing_country: order.country || 'India',
    billing_email: order.customer_email || '',
    billing_phone: String(order.customer_phone || ''),
    shipping_is_billing: true,
    shipping_customer_name: order.customer_name || '',
    shipping_last_name: '',
    shipping_address: order.address_line1 || '',
    shipping_address_2: order.address_line2 || '',
    shipping_city: order.city || '',
    shipping_pincode: String(order.postal_code || ''),
    shipping_country: order.country || 'India',
    shipping_state: order.state || '',
    shipping_email: order.customer_email || '',
    shipping_phone: String(order.customer_phone || ''),
    order_items: orderItems,
    payment_method: order.payment_method === 'cod' ? 'COD' : 'Prepaid',
    shipping_charges: Number(order.shipping_amount) || 0,
    giftwrap_charges: 0,
    transaction_charges: 0,
    total_discount: 0,
    sub_total: Number(order.subtotal_amount) || Number(order.total_amount) || 0,
    length: Number(process.env.SHIPROCKET_DEFAULT_LENGTH) || 10,
    breadth: Number(process.env.SHIPROCKET_DEFAULT_BREADTH) || 10,
    height: Number(process.env.SHIPROCKET_DEFAULT_HEIGHT) || 5,
    weight: Number(process.env.SHIPROCKET_DEFAULT_WEIGHT) || 0.5
  };

  const createRes = await shiprocketRequest('POST', '/orders/create/adhoc', payload, token);

  const shiprocketOrderId = createRes.order_id;
  const shipmentId = createRes.shipment_id;

  if (!shiprocketOrderId) {
    throw new Error(createRes.message || 'Shiprocket order creation returned no order_id');
  }

  // Auto-assign courier
  let awbCode = null;
  let courierName = null;
  let trackingUrl = null;

  try {
    const courierRes = await shiprocketRequest(
      'POST',
      '/courier/assign/awb',
      { shipment_id: String(shipmentId) },
      token
    );
    awbCode = courierRes?.response?.data?.awb_code || null;
    courierName = courierRes?.response?.data?.courier_name || null;
  } catch (err) {
    console.warn('[Shiprocket] AWB assignment failed (non-fatal):', err.message);
  }

  if (awbCode) {
    trackingUrl = `https://shiprocket.co/tracking/${awbCode}`;
  }

  return {
    shiprocket_order_id: shiprocketOrderId,
    shiprocket_shipment_id: shipmentId,
    awb_code: awbCode,
    courier_name: courierName,
    tracking_url: trackingUrl
  };
}

// ---------- track shipment ----------

/**
 * Returns live tracking data for an AWB code.
 * @param {string} awbCode
 * @returns {object} Shiprocket tracking response
 */
async function trackShipment(awbCode) {
  const token = await getToken();
  return shiprocketRequest('GET', `/courier/track/awb/${encodeURIComponent(awbCode)}`, null, token);
}

/**
 * Returns tracking data by Shiprocket shipment ID.
 * @param {string|number} shipmentId
 */
async function trackByShipmentId(shipmentId) {
  const token = await getToken();
  return shiprocketRequest('GET', `/courier/track/shipment/${encodeURIComponent(shipmentId)}`, null, token);
}

module.exports = {
  createShiprocketOrder,
  trackShipment,
  trackByShipmentId
};
