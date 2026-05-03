const { getPool } = require('./db');

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS home3_banners (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    eyebrow      VARCHAR(255)  NOT NULL DEFAULT '',
    heading      VARCHAR(500)  NOT NULL,
    description  VARCHAR(1000) NOT NULL DEFAULT '',
    view_more_url VARCHAR(500)  NOT NULL DEFAULT '/shop',
    image_url    VARCHAR(500)  NOT NULL,
    sort_order   INT           NOT NULL DEFAULT 0,
    is_active    TINYINT(1)    NOT NULL DEFAULT 1,
    created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

async function ensureTable() {
  const db = getPool();
  await db.execute(CREATE_TABLE_SQL);
}

/**
 * Get all active banners (public / home3 frontend)
 */
exports.getActiveBanners = async () => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, eyebrow, heading, description, view_more_url, image_url, sort_order
     FROM home3_banners
     WHERE is_active = 1
     ORDER BY sort_order ASC, id ASC`
  );
  return rows;
};

/**
 * Get all banners including inactive (admin)
 */
exports.getAllBanners = async () => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, eyebrow, heading, description, view_more_url, image_url, sort_order, is_active, created_at, updated_at
     FROM home3_banners
     ORDER BY sort_order ASC, id ASC`
  );
  return rows;
};

/**
 * Get single banner by id
 */
exports.getBannerById = async (id) => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT * FROM home3_banners WHERE id = ? LIMIT 1',
    [id]
  );
  return rows[0] || null;
};

/**
 * Create banner
 */
exports.createBanner = async (data) => {
  await ensureTable();
  const db = getPool();
  const { eyebrow, heading, description, view_more_url, image_url, sort_order, is_active } = data;

  const [result] = await db.execute(
    `INSERT INTO home3_banners (eyebrow, heading, description, view_more_url, image_url, sort_order, is_active)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [eyebrow, heading, description, view_more_url, image_url, Number(sort_order) || 0, is_active ? 1 : 0]
  );

  return exports.getBannerById(result.insertId);
};

/**
 * Update banner
 */
exports.updateBanner = async (id, data) => {
  await ensureTable();
  const db = getPool();
  const { eyebrow, heading, description, view_more_url, image_url, sort_order, is_active } = data;

  await db.execute(
    `UPDATE home3_banners
     SET eyebrow = ?, heading = ?, description = ?, view_more_url = ?,
         image_url = ?, sort_order = ?, is_active = ?
     WHERE id = ?`,
    [eyebrow, heading, description, view_more_url, image_url, Number(sort_order) || 0, is_active ? 1 : 0, id]
  );

  return exports.getBannerById(id);
};

/**
 * Delete banner
 */
exports.deleteBanner = async (id) => {
  await ensureTable();
  const db = getPool();
  await db.execute('DELETE FROM home3_banners WHERE id = ?', [id]);
};
