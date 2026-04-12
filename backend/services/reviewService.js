const AppError = require('../utils/AppError');
const { getPool } = require('./db');
const { uploadImage } = require('./cloudinaryService');

const RATING_DELAY_HOURS = Number(process.env.ORDER_RATING_DELAY_HOURS || 12) || 12;

function addHours(dateValue, hours) {
  const date = new Date(dateValue);
  return new Date(date.getTime() + (hours * 60 * 60 * 1000));
}

function normalizeShiprocketStatus(rawStatus) {
  const value = String(rawStatus || '').trim().toUpperCase();

  if (!value) {
    return '';
  }

  if (value.includes('DELIVERED')) return 'delivered';
  if (value.includes('CANCEL')) return 'cancelled';
  if (
    value.includes('SHIPPED') ||
    value.includes('OUT FOR DELIVERY') ||
    value.includes('OUT_FOR_DELIVERY') ||
    value.includes('IN TRANSIT')
  ) {
    return 'shipped';
  }

  if (
    value.includes('PICK') ||
    value.includes('PROCESS') ||
    value.includes('AWB') ||
    value.includes('MANIFEST')
  ) {
    return 'processing';
  }

  return '';
}

function normalizeDate(dateValue, fallback = new Date()) {
  if (!dateValue) {
    return fallback;
  }

  const parsed = new Date(dateValue);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function evaluateRatingEligibility(order) {
  const delivered = String(order?.order_status || '').toLowerCase() === 'delivered';
  const alreadyRated = Boolean(order?.is_rated);
  const ratingFlagEnabled = Boolean(order?.is_rating_eligible);
  const deliveredAt = order?.delivered_at ? new Date(order.delivered_at) : null;
  const eligibleAt = deliveredAt ? addHours(deliveredAt, RATING_DELAY_HOURS) : null;
  const eligible = delivered && ratingFlagEnabled && Boolean(deliveredAt) && !alreadyRated;
  const showPopup = Boolean(eligible && eligibleAt && Date.now() >= eligibleAt.getTime());

  return {
    eligible,
    alreadyRated,
    showPopup,
    deliveredAt: deliveredAt ? deliveredAt.toISOString() : null,
    eligibleAt: eligibleAt ? eligibleAt.toISOString() : null,
    delayHours: RATING_DELAY_HOURS
  };
}

async function findOrderForUser(user, orderRef, connection = null) {
  const db = connection || getPool();
  const normalizedOrderRef = String(orderRef || '').trim();
  const numericOrderId = Number(normalizedOrderRef);
  const userId = Number(user?.id) || 0;
  const userEmail = String(user?.email || '').trim().toLowerCase();

  const [rows] = await db.execute(
    `SELECT id, order_number, order_status, delivered_at, is_rating_eligible, is_rated,
            customer_name, customer_email, total_amount, created_at
     FROM orders
     WHERE ((? > 0 AND id = ?) OR order_number = ?)
       AND (user_id = ? OR (? <> '' AND LOWER(customer_email) = ?))
     LIMIT 1`,
    [
      numericOrderId,
      numericOrderId,
      normalizedOrderRef,
      userId,
      userEmail,
      userEmail
    ]
  );

  if (!rows.length) {
    throw new AppError('Order not found', 404);
  }

  return rows[0];
}

async function getRatingEligibilityForOrder(user, orderRef) {
  const order = await findOrderForUser(user, orderRef);
  return {
    orderId: order.id,
    orderNumber: order.order_number,
    ...evaluateRatingEligibility(order)
  };
}

async function getPendingRatingPopupForUser(user) {
  const db = getPool();
  const userId = Number(user?.id) || 0;
  const userEmail = String(user?.email || '').trim().toLowerCase();

  const [rows] = await db.execute(
    `SELECT id, order_number, customer_name, total_amount, order_status, delivered_at, is_rating_eligible, is_rated
     FROM orders
     WHERE (user_id = ? OR (? <> '' AND LOWER(customer_email) = ?))
       AND order_status = 'delivered'
       AND is_rating_eligible = 1
       AND is_rated = 0
       AND delivered_at IS NOT NULL
     ORDER BY delivered_at ASC
     LIMIT 10`,
    [userId, userEmail, userEmail]
  );

  const pendingOrder = rows
    .map((order) => ({ ...order, ...evaluateRatingEligibility(order) }))
    .find((order) => order.showPopup);

  if (!pendingOrder) {
    return {
      eligible: false,
      alreadyRated: false,
      showPopup: false,
      order: null
    };
  }

  return {
    eligible: pendingOrder.eligible,
    alreadyRated: pendingOrder.alreadyRated,
    showPopup: pendingOrder.showPopup,
    order: {
      id: pendingOrder.id,
      orderNumber: pendingOrder.order_number,
      customerName: pendingOrder.customer_name,
      deliveredAt: pendingOrder.deliveredAt,
      eligibleAt: pendingOrder.eligibleAt,
      totalAmount: Number(pendingOrder.total_amount) || 0
    }
  };
}

function generateCoupon(orderNumber) {
  const suffix = String(orderNumber || '')
    .replace(/[^A-Za-z0-9]/g, '')
    .toUpperCase()
    .slice(-6)
    .padStart(6, '0');

  return {
    code: `DIVARA10-${suffix}`,
    reward: '10% OFF',
    description: 'Thanks for sharing your delivery feedback.',
    expiresInDays: 30
  };
}

async function createReview(user, payload) {
  const db = getPool();
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const order = await findOrderForUser(user, payload.order_id, connection);
    const eligibility = evaluateRatingEligibility(order);

    if (eligibility.alreadyRated) {
      throw new AppError('You have already reviewed this order', 409);
    }

    if (!eligibility.eligible) {
      throw new AppError('This order is not eligible for rating yet', 400);
    }

    if (!eligibility.showPopup) {
      throw new AppError(`Ratings unlock ${RATING_DELAY_HOURS} hours after delivery`, 400);
    }

    const overallRating = Number(payload.overall_rating);
    const reviewImages = Array.isArray(payload.images)
      ? payload.images
          .map((item) => String(item || '').trim())
          .filter(Boolean)
          .slice(0, 4)
      : [];

    const shouldCaptureDetailedRatings = overallRating >= 3;
    const lowRatingFlag = overallRating <= 2 ? 1 : 0;

    await connection.execute(
      `INSERT INTO product_reviews (
         order_id,
         user_id,
         overall_rating,
         material_quality,
         design_rating,
         craftsmanship,
         comfort,
         value_for_money,
         emotion,
         review_text,
         images,
         support_follow_up_required
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        order.id,
        Number(user.id),
        overallRating,
        shouldCaptureDetailedRatings ? Number(payload.material_quality) : null,
        shouldCaptureDetailedRatings ? Number(payload.design_rating) : null,
        shouldCaptureDetailedRatings ? Number(payload.craftsmanship) : null,
        shouldCaptureDetailedRatings ? Number(payload.comfort) : null,
        shouldCaptureDetailedRatings ? Number(payload.value_for_money) : null,
        String(payload.emotion || '').trim(),
        String(payload.review_text || '').trim() || null,
        JSON.stringify(reviewImages),
        lowRatingFlag
      ]
    );

    await connection.execute(
      `UPDATE orders
       SET is_rated = 1
       WHERE id = ?`,
      [order.id]
    );

    await connection.commit();

    return {
      message: 'Review submitted successfully.',
      orderId: order.id,
      orderNumber: order.order_number,
      coupon: generateCoupon(order.order_number)
    };
  } catch (error) {
    await connection.rollback();

    if (error?.code === 'ER_DUP_ENTRY') {
      throw new AppError('You have already reviewed this order', 409);
    }

    throw error;
  } finally {
    connection.release();
  }
}

async function uploadReviewImages(files = []) {
  if (!Array.isArray(files) || !files.length) {
    return [];
  }

  const uploads = files.slice(0, 4).map((file) => uploadImage(file.buffer, file.mimetype));
  return Promise.all(uploads);
}

async function listReviewsForAdmin({ rating, supportOnly, limit } = {}) {
  const db = getPool();
  const whereParts = [];
  const values = [];

  const numericRating = Number(rating);
  if (Number.isInteger(numericRating) && numericRating >= 1 && numericRating <= 5) {
    whereParts.push('pr.overall_rating = ?');
    values.push(numericRating);
  }

  const supportFlag = String(supportOnly || '').trim().toLowerCase();
  if (supportFlag === 'true' || supportFlag === '1') {
    whereParts.push('pr.support_follow_up_required = 1');
  }

  const safeLimit = Math.max(1, Math.min(200, Number(limit) || 100));
  const whereClause = whereParts.length ? `WHERE ${whereParts.join(' AND ')}` : '';

  const [summaryRows] = await db.execute(
    `SELECT COUNT(*) AS totalReviews,
            ROUND(AVG(pr.overall_rating), 1) AS averageRating,
            SUM(CASE WHEN pr.overall_rating <= 2 THEN 1 ELSE 0 END) AS lowRatings,
            SUM(CASE WHEN pr.support_follow_up_required = 1 THEN 1 ELSE 0 END) AS supportFollowUps
     FROM product_reviews pr
     ${whereClause}`,
    values
  );

  const [reviewRows] = await db.execute(
    `SELECT pr.id,
            pr.order_id,
            o.order_number,
            o.customer_name,
            o.customer_email,
            u.name AS user_name,
            pr.overall_rating,
            pr.material_quality,
            pr.design_rating,
            pr.craftsmanship,
            pr.comfort,
            pr.value_for_money,
            pr.emotion,
            pr.review_text,
            pr.images,
            pr.support_follow_up_required,
            pr.created_at,
            o.delivered_at,
            o.total_amount
     FROM product_reviews pr
     INNER JOIN orders o ON o.id = pr.order_id
     LEFT JOIN users u ON u.id = pr.user_id
     ${whereClause}
     ORDER BY pr.created_at DESC
     LIMIT ${safeLimit}`,
    values
  );

  return {
    summary: {
      totalReviews: Number(summaryRows?.[0]?.totalReviews) || 0,
      averageRating: Number(summaryRows?.[0]?.averageRating) || 0,
      lowRatings: Number(summaryRows?.[0]?.lowRatings) || 0,
      supportFollowUps: Number(summaryRows?.[0]?.supportFollowUps) || 0
    },
    reviews: reviewRows.map((row) => ({
      ...row,
      support_follow_up_required: Boolean(row.support_follow_up_required),
      total_amount: Number(row.total_amount) || 0,
      images: (() => {
        try {
          const parsed = typeof row.images === 'string' ? JSON.parse(row.images) : row.images;
          return Array.isArray(parsed) ? parsed : [];
        } catch {
          return [];
        }
      })()
    }))
  };
}

async function updateReviewSupportFlag(reviewId, supportRequired) {
  const db = getPool();
  const numericReviewId = Number(reviewId);

  if (!Number.isInteger(numericReviewId) || numericReviewId <= 0) {
    throw new AppError('Valid review id is required', 400);
  }

  await db.execute(
    `UPDATE product_reviews
     SET support_follow_up_required = ?
     WHERE id = ?`,
    [supportRequired ? 1 : 0, numericReviewId]
  );

  const [rows] = await db.execute(
    `SELECT id, support_follow_up_required
     FROM product_reviews
     WHERE id = ?
     LIMIT 1`,
    [numericReviewId]
  );

  if (!rows.length) {
    throw new AppError('Review not found', 404);
  }

  return {
    id: rows[0].id,
    support_follow_up_required: Boolean(rows[0].support_follow_up_required)
  };
}

async function handleShiprocketWebhook(payload = {}) {
  const db = getPool();
  const source = payload?.data && typeof payload.data === 'object' ? payload.data : payload;

  const rawStatus =
    source.current_status ||
    source.currentStatus ||
    source.status ||
    source.shipment_status ||
    source.shipmentStatus ||
    '';

  const normalizedStatus = normalizeShiprocketStatus(rawStatus);
  if (!normalizedStatus) {
    return {
      updated: false,
      reason: 'ignored-status',
      rawStatus: String(rawStatus || '')
    };
  }

  const shiprocketOrderId = String(
    source.order_id ||
    source.shiprocket_order_id ||
    source.sr_order_id ||
    ''
  ).trim();

  const shipmentId = String(
    source.shipment_id ||
    source.shiprocket_shipment_id ||
    source.sr_shipment_id ||
    ''
  ).trim();

  const awbCode = String(source.awb || source.awb_code || '').trim();
  const orderNumber = String(source.channel_order_id || source.order_number || '').trim();

  const lookupClauses = [];
  const lookupValues = [];

  if (shiprocketOrderId) {
    lookupClauses.push('shiprocket_order_id = ?');
    lookupValues.push(shiprocketOrderId);
  }
  if (shipmentId) {
    lookupClauses.push('shiprocket_shipment_id = ?');
    lookupValues.push(shipmentId);
  }
  if (awbCode) {
    lookupClauses.push('awb_code = ?');
    lookupValues.push(awbCode);
  }
  if (orderNumber) {
    lookupClauses.push('order_number = ?');
    lookupValues.push(orderNumber);
  }

  if (!lookupClauses.length) {
    return {
      updated: false,
      reason: 'missing-order-reference'
    };
  }

  const [rows] = await db.execute(
    `SELECT id, order_number, order_status, delivered_at
     FROM orders
     WHERE ${lookupClauses.join(' OR ')}
     LIMIT 1`,
    lookupValues
  );

  if (!rows.length) {
    return {
      updated: false,
      reason: 'order-not-found',
      reference: { shiprocketOrderId, shipmentId, awbCode, orderNumber }
    };
  }

  const order = rows[0];
  const deliveredAt = normalizedStatus === 'delivered'
    ? normalizeDate(source.delivered_date || source.delivered_at || source.status_date || new Date())
    : null;

  await db.execute(
    `UPDATE orders
     SET order_status = ?,
         delivered_at = CASE
           WHEN ? = 'delivered' THEN COALESCE(delivered_at, ?)
           ELSE delivered_at
         END,
         is_rating_eligible = CASE
           WHEN ? = 'delivered' THEN 1
           ELSE is_rating_eligible
         END
     WHERE id = ?`,
    [
      normalizedStatus,
      normalizedStatus,
      deliveredAt,
      normalizedStatus,
      order.id
    ]
  );

  return {
    updated: true,
    orderId: order.id,
    orderNumber: order.order_number,
    status: normalizedStatus,
    deliveredAt: deliveredAt ? deliveredAt.toISOString() : order.delivered_at
  };
}

module.exports = {
  getRatingEligibilityForOrder,
  getPendingRatingPopupForUser,
  createReview,
  uploadReviewImages,
  listReviewsForAdmin,
  updateReviewSupportFlag,
  handleShiprocketWebhook,
  evaluateRatingEligibility,
  RATING_DELAY_HOURS
};
