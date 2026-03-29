const nodemailer = require('nodemailer');

const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net';
const smtpPort = Number(process.env.SMTP_PORT) || 465;
const smtpSecure = String(process.env.SMTP_SECURE || 'true') === 'true';
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const fromAddress = process.env.EMAIL_FROM || smtpUser;
const fromName = process.env.EMAIL_FROM_NAME || 'Divara Craft';

let transporter = null;

function getTransporter() {
  if (!smtpUser || !smtpPass) {
    throw new Error('SMTP credentials are not configured');
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
  }

  return transporter;
}

async function sendProfileVerificationEmail({ to, code, name }) {
  if (!to || !code) {
    throw new Error('Email destination and code are required');
  }

  const transport = getTransporter();
  const safeName = String(name || 'there').trim() || 'there';

  await transport.sendMail({
    from: `\"${fromName}\" <${fromAddress}>`,
    to,
    subject: 'Verify your email change - Divara Craft',
    text: `Hi ${safeName},\n\nYour Divara Craft verification code is: ${code}\n\nThis code will expire in 10 minutes.\n\nIf you did not request this, please ignore this email.`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#1f3a5f;line-height:1.6;">
        <h2 style="margin:0 0 12px;">Divara Craft Email Verification</h2>
        <p style="margin:0 0 10px;">Hi ${safeName},</p>
        <p style="margin:0 0 10px;">Use this code to verify your new email address:</p>
        <p style="margin:0 0 14px;font-size:24px;font-weight:700;letter-spacing:2px;">${code}</p>
        <p style="margin:0 0 8px;">This code expires in 10 minutes.</p>
        <p style="margin:0;">If you did not request this change, you can ignore this email.</p>
      </div>
    `
  });
}

async function sendOrderConfirmationEmail({ order, invoiceBuffer, invoiceFilename }) {
  if (!order || !order.customer_email) {
    throw new Error('Order and customer email are required');
  }

  const transport = getTransporter();
  const adminAddress = process.env.ADMIN_EMAIL || fromAddress;
  const customerName = String(order.customer_name || 'Customer').trim();
  const orderNumber = order.order_number || String(order.id);

  const itemRows = (order.items || []).map((item) =>
    `<tr>
      <td style="padding:6px 10px;border-bottom:1px solid #e6dccb;">${item.product_name}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #e6dccb;text-align:center;">${item.quantity}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #e6dccb;text-align:right;">$${Number(item.line_total || 0).toFixed(2)}</td>
    </tr>`
  ).join('');

  const itemText = (order.items || []).map(
    (item) => `  - ${item.product_name} x${item.quantity}  $${Number(item.line_total || 0).toFixed(2)}`
  ).join('\n');

  const paymentLabel = order.payment_method === 'cod' ? 'Cash on Delivery' : 'Online Payment';
  const attachments = invoiceBuffer
    ? [{
      filename: invoiceFilename || `invoice-${orderNumber}.pdf`,
      content: invoiceBuffer,
      contentType: 'application/pdf'
    }]
    : [];

  const baseHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1f3a5f;line-height:1.6;max-width:600px;">
      <h2 style="margin:0 0 16px;color:#1f3a5f;">Order Confirmed – ${orderNumber}</h2>
      <p style="margin:0 0 10px;">Hi {{GREETING}},</p>
      <p style="margin:0 0 14px;">{{INTRO}}</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:14px;">
        <thead>
          <tr style="background:#1f3a5f;color:#fff;">
            <th style="padding:8px 10px;text-align:left;">Product</th>
            <th style="padding:8px 10px;text-align:center;">Qty</th>
            <th style="padding:8px 10px;text-align:right;">Total</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>
      <table style="width:100%;border-collapse:collapse;margin-bottom:14px;max-width:300px;margin-left:auto;">
        <tr><td style="padding:4px 10px;">Subtotal</td><td style="padding:4px 10px;text-align:right;">$${Number(order.subtotal_amount || 0).toFixed(2)}</td></tr>
        <tr><td style="padding:4px 10px;">Shipping</td><td style="padding:4px 10px;text-align:right;">$${Number(order.shipping_amount || 0).toFixed(2)}</td></tr>
        <tr><td style="padding:4px 10px;">Tax (5%)</td><td style="padding:4px 10px;text-align:right;">$${Number(order.tax_amount || 0).toFixed(2)}</td></tr>
        <tr style="font-weight:700;border-top:2px solid #1f3a5f;">
          <td style="padding:6px 10px;">Total</td>
          <td style="padding:6px 10px;text-align:right;">$${Number(order.total_amount || 0).toFixed(2)}</td>
        </tr>
      </table>
      <p style="margin:0 0 6px;"><strong>Payment:</strong> ${paymentLabel}</p>
      <p style="margin:0 0 6px;"><strong>Ship to:</strong> ${order.address_line1}${order.address_line2 ? ', ' + order.address_line2 : ''}, ${order.city}, ${order.state} ${order.postal_code}, ${order.country}</p>
      <p style="margin:16px 0 0;color:#6f6760;font-size:0.85rem;">Thank you for shopping with ${fromName}.</p>
    </div>`;

  const basePlainText = `Order ${orderNumber}\n\n{{INTRO_TEXT}}\n\nItems:\n${itemText}\n\nSubtotal: $${Number(order.subtotal_amount || 0).toFixed(2)}\nShipping: $${Number(order.shipping_amount || 0).toFixed(2)}\nTax: $${Number(order.tax_amount || 0).toFixed(2)}\nTotal: $${Number(order.total_amount || 0).toFixed(2)}\nPayment: ${paymentLabel}\nShip to: ${order.address_line1}${order.address_line2 ? ', ' + order.address_line2 : ''}, ${order.city}, ${order.state} ${order.postal_code}, ${order.country}`;

  // --- Customer confirmation ---
  await transport.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: order.customer_email,
    subject: `Your Divara Craft order ${orderNumber} is confirmed!`,
    text: basePlainText
      .replace('{{INTRO_TEXT}}', `Thank you for your order, ${customerName}! We'll notify you when it ships.`),
    html: baseHtml
      .replace('{{GREETING}}', customerName)
      .replace('{{INTRO}}', `Thank you for your order! We've received it and will notify you when it ships.`),
    attachments
  });

  // --- Admin notification ---
  await transport.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: adminAddress,
    subject: `New order ${orderNumber} from ${customerName}`,
    text: basePlainText
      .replace('{{INTRO_TEXT}}', `New order received from ${customerName} (${order.customer_email}, ${order.customer_phone}).`),
    html: baseHtml
      .replace('{{GREETING}}', 'Admin')
      .replace('{{INTRO}}', `New order received from <strong>${customerName}</strong> (${order.customer_email}, ${order.customer_phone}).`),
    attachments
  });
}

module.exports = {
  sendProfileVerificationEmail,
  sendOrderConfirmationEmail
};
