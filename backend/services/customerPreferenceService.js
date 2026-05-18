const { getPool } = require('./db');

function normalizePaymentMethod(paymentMethod) {
  return ['cod', 'card', 'upi'].includes(paymentMethod) ? paymentMethod : 'cod';
}

function mapSavedAddress(row) {
  return {
    id: row.id,
    user_id: row.user_id,
    recipient_name: row.recipient_name,
    phone: row.phone,
    address_line1: row.address_line1,
    address_line2: row.address_line2,
    city: row.city,
    state: row.state,
    postal_code: row.postal_code,
    country: row.country,
    is_default: Boolean(row.is_default),
    last_used_at: row.last_used_at,
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

function mapSavedPaymentMethod(row) {
  return {
    id: row.id,
    user_id: row.user_id,
    payment_method: row.payment_method,
    is_default: Boolean(row.is_default),
    last_used_at: row.last_used_at,
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

async function getCustomerPreferences(userId) {
  const db = getPool();

  const [addressRows] = await db.execute(
    `SELECT id, user_id, recipient_name, phone, address_line1, address_line2,
            city, state, postal_code, country, is_default, last_used_at, created_at, updated_at
     FROM user_saved_addresses
     WHERE user_id = ?
     ORDER BY is_default DESC, last_used_at DESC, id DESC`,
    [userId]
  );

  const [paymentMethodRows] = await db.execute(
    `SELECT id, user_id, payment_method, is_default, last_used_at, created_at, updated_at
     FROM user_saved_payment_methods
     WHERE user_id = ?
     ORDER BY is_default DESC, last_used_at DESC, id DESC`,
    [userId]
  );

  return {
    addresses: addressRows.map(mapSavedAddress),
    paymentMethods: paymentMethodRows.map(mapSavedPaymentMethod)
  };
}

async function saveCustomerCheckoutPreferences({
  userId,
  customerName,
  customerPhone,
  addressLine1,
  addressLine2,
  city,
  state,
  postalCode,
  country,
  paymentMethod
}) {
  if (!Number.isInteger(Number(userId)) || Number(userId) <= 0) {
    return null;
  }

  const db = getPool();
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const normalizedUserId = Number(userId);
    const normalizedPaymentMethod = normalizePaymentMethod(paymentMethod);

    const [existingAddressRows] = await connection.execute(
      `SELECT id
       FROM user_saved_addresses
       WHERE user_id = ?
         AND address_line1 = ?
         AND COALESCE(address_line2, '') = ?
         AND city = ?
         AND state = ?
         AND postal_code = ?
         AND country = ?
       LIMIT 1`,
      [
        normalizedUserId,
        addressLine1,
        addressLine2 || '',
        city,
        state,
        postalCode,
        country
      ]
    );

    await connection.execute(
      `UPDATE user_saved_addresses SET is_default = 0 WHERE user_id = ?`,
      [normalizedUserId]
    );

    if (existingAddressRows.length) {
      await connection.execute(
        `UPDATE user_saved_addresses
         SET recipient_name = ?,
             phone = ?,
             is_default = 1,
             last_used_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [customerName, customerPhone, existingAddressRows[0].id]
      );
    } else {
      await connection.execute(
        `INSERT INTO user_saved_addresses (
           user_id, recipient_name, phone, address_line1, address_line2,
           city, state, postal_code, country, is_default, last_used_at
         )
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, CURRENT_TIMESTAMP)`,
        [
          normalizedUserId,
          customerName,
          customerPhone,
          addressLine1,
          addressLine2 || '',
          city,
          state,
          postalCode,
          country
        ]
      );
    }

    await connection.execute(
      `UPDATE user_saved_payment_methods SET is_default = 0 WHERE user_id = ?`,
      [normalizedUserId]
    );

    await connection.execute(
      `INSERT INTO user_saved_payment_methods (user_id, payment_method, is_default, last_used_at)
       VALUES (?, ?, 1, CURRENT_TIMESTAMP)
       ON DUPLICATE KEY UPDATE
         is_default = VALUES(is_default),
         last_used_at = CURRENT_TIMESTAMP`,
      [normalizedUserId, normalizedPaymentMethod]
    );

    await connection.commit();
    return true;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  getCustomerPreferences,
  saveCustomerCheckoutPreferences
};