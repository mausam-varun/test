const { getPool } = require('./db');

function toBooleanFlag(value) {
  if (value === true || value === 1 || value === '1' || value === 'true') {
    return 1;
  }
  return 0;
}

function normalizeSliderItem(row) {
  return {
    id: row.id,
    image_url: row.image_url,
    title: row.title || '',
    subtitle: row.subtitle || '',
    sort_order: Number(row.sort_order) || 0,
    is_active: Boolean(row.is_active),
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

async function getSliderSettings() {
  const db = getPool();
  const [rows] = await db.query(
    'SELECT display_count FROM product_slider_settings WHERE id = 1 LIMIT 1'
  );

  const displayCount = Number(rows[0]?.display_count) || 5;
  return {
    display_count: Math.min(5, Math.max(2, displayCount))
  };
}

async function updateSliderDisplayCount(displayCount) {
  const db = getPool();
  await db.execute(
    `UPDATE product_slider_settings
     SET display_count = ?
     WHERE id = 1`,
    [displayCount]
  );
  return getSliderSettings();
}

async function listSliderItems({ onlyActive = false, limit = null } = {}) {
  const db = getPool();
  const params = [];
  let query = `SELECT id, image_url, title, subtitle, sort_order, is_active, created_at, updated_at
               FROM product_slider`;

  if (onlyActive) {
    query += ' WHERE is_active = 1';
  }

  query += ' ORDER BY sort_order ASC, id DESC';

  if (limit && Number.isInteger(limit) && limit > 0) {
    query += ' LIMIT ?';
    params.push(limit);
  }

  const [rows] = await db.query(query, params);
  return rows.map(normalizeSliderItem);
}

async function createSliderItem({ imageUrl, title = '', subtitle = '', sortOrder = 0, isActive = true }) {
  const db = getPool();
  const [result] = await db.execute(
    `INSERT INTO product_slider (image_url, title, subtitle, sort_order, is_active)
     VALUES (?, ?, ?, ?, ?)`,
    [imageUrl, title.trim(), subtitle.trim(), Number(sortOrder) || 0, toBooleanFlag(isActive)]
  );

  return getSliderItemById(result.insertId);
}

async function getSliderItemById(id) {
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, image_url, title, subtitle, sort_order, is_active, created_at, updated_at
     FROM product_slider
     WHERE id = ?
     LIMIT 1`,
    [id]
  );

  if (!rows.length) {
    return null;
  }

  return normalizeSliderItem(rows[0]);
}

async function updateSliderItemById(id, updates) {
  const db = getPool();
  const fields = [];
  const values = [];

  if (updates.image_url !== undefined) {
    fields.push('image_url = ?');
    values.push(updates.image_url);
  }

  if (updates.title !== undefined) {
    fields.push('title = ?');
    values.push(String(updates.title || '').trim());
  }

  if (updates.subtitle !== undefined) {
    fields.push('subtitle = ?');
    values.push(String(updates.subtitle || '').trim());
  }

  if (updates.sort_order !== undefined) {
    fields.push('sort_order = ?');
    values.push(Number(updates.sort_order) || 0);
  }

  if (updates.is_active !== undefined) {
    fields.push('is_active = ?');
    values.push(toBooleanFlag(updates.is_active));
  }

  if (!fields.length) {
    return getSliderItemById(id);
  }

  values.push(id);

  await db.execute(
    `UPDATE product_slider
     SET ${fields.join(', ')}
     WHERE id = ?`,
    values
  );

  return getSliderItemById(id);
}

async function deleteSliderItemById(id) {
  const db = getPool();
  const existing = await getSliderItemById(id);
  if (!existing) {
    return null;
  }

  await db.execute('DELETE FROM product_slider WHERE id = ?', [id]);
  return existing;
}

async function getPublicSliderPayload() {
  const settings = await getSliderSettings();
  const items = await listSliderItems({
    onlyActive: true,
    limit: settings.display_count
  });

  return {
    display_count: settings.display_count,
    images: items
  };
}

module.exports = {
  getSliderSettings,
  updateSliderDisplayCount,
  listSliderItems,
  createSliderItem,
  getSliderItemById,
  updateSliderItemById,
  deleteSliderItemById,
  getPublicSliderPayload
};
