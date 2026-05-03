const { getPool } = require('./db');

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS hero_promo_banners (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    banner_key  VARCHAR(50)    NOT NULL UNIQUE,
    title       VARCHAR(255)   NOT NULL DEFAULT '',
    subtitle    VARCHAR(500)   NOT NULL DEFAULT '',
    button_text VARCHAR(100)   NOT NULL DEFAULT 'SHOP NOW →',
    link        VARCHAR(500)   NOT NULL DEFAULT '/shop',
    image_url   VARCHAR(1000)  NOT NULL DEFAULT '',
    is_active   TINYINT(1)     NOT NULL DEFAULT 1,
    updated_at  DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

async function ensureTable() {
  const db = getPool();
  await db.execute(CREATE_TABLE_SQL);
}

/**
 * Get all hero promo banners (public)
 */
exports.getAll = async () => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, banner_key, title, subtitle, button_text, link, image_url, is_active
     FROM hero_promo_banners
     ORDER BY id ASC`
  );
  return rows;
};

/**
 * Get single banner by key (public — active only)
 */
exports.getByKey = async (key) => {
  await ensureTable();
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, banner_key, title, subtitle, button_text, link, image_url
     FROM hero_promo_banners
     WHERE banner_key = ? AND is_active = 1`,
    [key]
  );
  return rows[0] || null;
};

/**
 * Upsert a banner by key (admin)
 */
exports.upsert = async (key, data) => {
  await ensureTable();
  const db = getPool();
  const { title, subtitle, button_text, link, image_url } = data;

  const [existing] = await db.execute(
    `SELECT id FROM hero_promo_banners WHERE banner_key = ?`,
    [key]
  );

  if (existing.length > 0) {
    const setClauses = [];
    const values = [];
    if (title !== undefined)       { setClauses.push('title = ?');       values.push(title); }
    if (subtitle !== undefined)    { setClauses.push('subtitle = ?');    values.push(subtitle); }
    if (button_text !== undefined) { setClauses.push('button_text = ?'); values.push(button_text); }
    if (link !== undefined)        { setClauses.push('link = ?');        values.push(link); }
    if (image_url !== undefined)   { setClauses.push('image_url = ?');   values.push(image_url); }

    if (setClauses.length > 0) {
      values.push(key);
      await db.execute(
        `UPDATE hero_promo_banners SET ${setClauses.join(', ')} WHERE banner_key = ?`,
        values
      );
    }
  } else {
    await db.execute(
      `INSERT INTO hero_promo_banners (banner_key, title, subtitle, button_text, link, image_url)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        key,
        title       || '',
        subtitle    || '',
        button_text || 'SHOP NOW →',
        link        || '/shop',
        image_url   || ''
      ]
    );
  }

  const [rows] = await db.execute(
    `SELECT * FROM hero_promo_banners WHERE banner_key = ?`,
    [key]
  );
  return rows[0];
};
