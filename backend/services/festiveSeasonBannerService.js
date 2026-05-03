const { getPool } = require('./db');

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS festive_season_banners (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    top_label    VARCHAR(255)  NOT NULL DEFAULT 'FESTIVE SEASON',
    main_title   VARCHAR(500)  NOT NULL,
    description  VARCHAR(1000) NOT NULL DEFAULT '',
    button_text  VARCHAR(255)  NOT NULL DEFAULT 'SHOP NOW',
    button_link  VARCHAR(500)  NOT NULL DEFAULT '/shop',
    image_url    VARCHAR(500),
    banner_color VARCHAR(50)   NOT NULL DEFAULT '#FF6B6B',
    accent_color VARCHAR(50)   NOT NULL DEFAULT '#FFD700',
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
 * Get active festive season banner (public / frontend)
 */
exports.getActiveBanner = async () => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, top_label, main_title, description, button_text, button_link, image_url, banner_color, accent_color, sort_order
     FROM festive_season_banners
     WHERE is_active = 1
     ORDER BY sort_order ASC
     LIMIT 1`
  );
  return rows[0] || null;
};

/**
 * Get all festive season banners including inactive (admin)
 */
exports.getAllBanners = async () => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, top_label, main_title, description, button_text, button_link, image_url, banner_color, accent_color, sort_order, is_active, created_at, updated_at
     FROM festive_season_banners
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
    'SELECT * FROM festive_season_banners WHERE id = ? LIMIT 1',
    [id]
  );
  return rows[0] || null;
};

/**
 * Create festive season banner
 */
exports.createBanner = async (data) => {
  await ensureTable();
  const db = getPool();
  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url,
    banner_color,
    accent_color,
    sort_order,
    is_active
  } = data;

  const [result] = await db.execute(
    `INSERT INTO festive_season_banners 
     (top_label, main_title, description, button_text, button_link, image_url, banner_color, accent_color, sort_order, is_active)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      top_label || 'FESTIVE SEASON',
      main_title,
      description || '',
      button_text || 'SHOP NOW',
      button_link || '/shop',
      image_url || null,
      banner_color || '#FF6B6B',
      accent_color || '#FFD700',
      Number(sort_order) || 0,
      is_active ? 1 : 0
    ]
  );

  return exports.getBannerById(result.insertId);
};

/**
 * Update festive season banner
 */
exports.updateBanner = async (id, data) => {
  await ensureTable();
  const db = getPool();
  const {
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    image_url,
    banner_color,
    accent_color,
    sort_order,
    is_active
  } = data;

  await db.execute(
    `UPDATE festive_season_banners
     SET top_label = ?, main_title = ?, description = ?, button_text = ?, button_link = ?,
         image_url = ?, banner_color = ?, accent_color = ?, sort_order = ?, is_active = ?
     WHERE id = ?`,
    [
      top_label,
      main_title,
      description,
      button_text,
      button_link,
      image_url,
      banner_color,
      accent_color,
      Number(sort_order) || 0,
      is_active ? 1 : 0,
      id
    ]
  );

  return exports.getBannerById(id);
};

/**
 * Delete festive season banner
 */
exports.deleteBanner = async (id) => {
  await ensureTable();
  const db = getPool();
  await db.execute('DELETE FROM festive_season_banners WHERE id = ?', [id]);
};
