const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const logoPath = path.resolve(__dirname, '../../frontend/src/assets/divara_final.jpg');

function toMoney(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function generateInvoicePdfBuffer({ order }) {
  if (!order) {
    throw new Error('Order details are required for invoice generation');
  }

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 40, size: 'A4' });
    const chunks = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', (err) => reject(err));

    const orderNumber = String(order.order_number || order.id || '').trim();
    const customerName = String(order.customer_name || 'Customer').trim();
    const createdAt = order.created_at ? new Date(order.created_at) : new Date();

    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 40, 35, {
        fit: [130, 58],
        align: 'left'
      });
      doc.y = 98;
    }

    doc.fontSize(11).fillColor('#666666').text('Invoice', { align: 'left' });
    doc.fillColor('#000000');
    doc.moveDown(1.2);

    doc.fontSize(12).text(`Invoice No: ${orderNumber}`);
    doc.text(`Date: ${createdAt.toLocaleString()}`);
    doc.moveDown(0.8);
    doc.text(`Billed To: ${customerName}`);
    doc.text(`Email: ${order.customer_email || '-'}`);
    doc.text(`Phone: ${order.customer_phone || '-'}`);
    doc.moveDown(0.8);
    doc.text('Shipping Address:');
    doc.fontSize(11).text(
      `${order.address_line1 || ''}${order.address_line2 ? `, ${order.address_line2}` : ''}, ${order.city || ''}, ${order.state || ''} ${order.postal_code || ''}, ${order.country || ''}`
    );
    doc.moveDown(1.2);

    const tableTop = doc.y;
    const colX = {
      item: 40,
      qty: 325,
      price: 385,
      total: 470
    };

    doc.fontSize(11).text('Item', colX.item, tableTop);
    doc.text('Qty', colX.qty, tableTop, { width: 50, align: 'right' });
    doc.text('Price', colX.price, tableTop, { width: 70, align: 'right' });
    doc.text('Line Total', colX.total, tableTop, { width: 90, align: 'right' });
    doc.moveTo(40, tableTop + 16).lineTo(555, tableTop + 16).stroke('#cccccc');

    let y = tableTop + 24;
    const items = Array.isArray(order.items) ? order.items : [];

    items.forEach((item) => {
      const name = String(item.product_name || '').slice(0, 40) || 'Product';
      const qty = Number(item.quantity || 0);
      const unitPrice = Number(item.price || 0);
      const lineTotal = Number(item.line_total || 0);

      doc.fillColor('#000000').fontSize(10).text(name, colX.item, y, { width: 260 });
      doc.text(String(qty), colX.qty, y, { width: 50, align: 'right' });
      doc.text(toMoney(unitPrice), colX.price, y, { width: 70, align: 'right' });
      doc.text(toMoney(lineTotal), colX.total, y, { width: 90, align: 'right' });

      y += 18;
      if (y > 710) {
        doc.addPage();
        y = 50;
      }
    });

    y += 14;
    doc.moveTo(330, y).lineTo(555, y).stroke('#cccccc');
    y += 8;

    doc.fontSize(11).text('Subtotal:', 330, y, { width: 120, align: 'right' });
    doc.text(toMoney(order.subtotal_amount), 450, y, { width: 105, align: 'right' });
    y += 18;
    doc.text('Shipping:', 330, y, { width: 120, align: 'right' });
    doc.text(toMoney(order.shipping_amount), 450, y, { width: 105, align: 'right' });
    y += 18;
    doc.text('Tax (5%):', 330, y, { width: 120, align: 'right' });
    doc.text(toMoney(order.tax_amount), 450, y, { width: 105, align: 'right' });
    y += 20;

    doc.fontSize(12).text('Total:', 330, y, { width: 120, align: 'right' });
    doc.text(toMoney(order.total_amount), 450, y, { width: 105, align: 'right' });
    y += 24;

    doc.fontSize(10).fillColor('#444444').text(`Payment Method: ${order.payment_method || '-'}`, 40, y);
    doc.moveDown(0.6);
    doc.text('Thank you for shopping with Divara Craft.');

    doc.end();
  });
}

module.exports = {
  generateInvoicePdfBuffer
};
