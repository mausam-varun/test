const { getPool } = require('./db');

/**
 * Get all active promotional banners (for frontend)
 */
exports.getAllActiveBanners = async () => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT id, label, title, cta_link, cta_text, image_url, background_color, display_order, is_active FROM promotional_banners WHERE is_active = 1 ORDER BY display_order ASC'
  );
  return rows;
};

/**
 * Get all banners (including inactive - for admin)
 */
exports.getAllBanners = async () => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT id, label, title, cta_link, cta_text, image_url, background_color, display_order, is_active, created_at, updated_at FROM promotional_banners ORDER BY display_order ASC'
  );
  return rows;
};

/**
 * Get banner by ID
 */
exports.getBannerById = async (id) => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT * FROM promotional_banners WHERE id = ? LIMIT 1',
    [id]
  );
  return rows[0] || null;
};

/**
 * Create new promotional banner
 */
exports.createBanner = async (data) => {
  const db = getPool();
  const {
    label,
    title,
    cta_text,
    cta_link,
    image_url,
    background_color,
    display_order = 0,
    is_active = 1
  } = data;

  const [result] = await db.execute(
    `INSERT INTO promotional_banners (label, title, cta_text, cta_link, image_url, background_color, display_order, is_active, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [label, title, cta_text, cta_link, image_url, background_color, display_order, is_active]
  );

  return {
    id: result.insertId,
    label,
    title,
    cta_text,
    cta_link,
    image_url,
    background_color,
    display_order,
    is_active
  };
};

/**
 * Update promotional banner
 */
exports.updateBanner = async (id, data) => {
  const db = getPool();

  const {
    label,
    title,
    cta_text,
    cta_link,
    image_url,
    background_color,
    display_order,
    is_active
  } = data;

  const updateFields = [];
  const values = [];

  if (label !== undefined) {
    updateFields.push('label = ?');
    values.push(label || null);
  }
  if (title !== undefined) {
    updateFields.push('title = ?');
    values.push(title || null);
  }
  if (cta_text !== undefined) {
    updateFields.push('cta_text = ?');
    values.push(cta_text || null);
  }
  if (cta_link !== undefined) {
    updateFields.push('cta_link = ?');
    values.push(cta_link || null);
  }
  if (image_url !== undefined) {
    updateFields.push('image_url = ?');
    values.push(image_url || null);
  }
  if (background_color !== undefined) {
    updateFields.push('background_color = ?');
    values.push(background_color || null);
  }
  if (display_order !== undefined) {
    updateFields.push('display_order = ?');
    values.push(display_order);
  }
  if (is_active !== undefined) {
    updateFields.push('is_active = ?');
    values.push(is_active ? 1 : 0);
  }

  if (updateFields.length === 0) {
    return await exports.getBannerById(id);
  }

  updateFields.push('updated_at = NOW()');

  values.push(id);

  const query = `UPDATE promotional_banners SET ${updateFields.join(', ')} WHERE id = ?`;
  await db.execute(query, values);

  return await exports.getBannerById(id);
};

/**
 * Delete promotional banner
 */
exports.deleteBanner = async (id) => {
  const db = getPool();
  const [result] = await db.execute(
    'DELETE FROM promotional_banners WHERE id = ?',
    [id]
  );
  return result.affectedRows > 0;
};
