const { getPool } = require('./db');

let categorySchemaConfigPromise;

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `category-${Date.now()}`;
}

function normalizeName(value = '') {
  return String(value).trim().replace(/\s+/g, ' ');
}

function toPositiveInt(value, fallback, min = 1, max = 12) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, parsed));
}

function getCategoryFallbackImage(categoryName = '') {
  const key = String(categoryName || '').toLowerCase();

  if (key.includes('earring')) {
    return 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80';
  }
  if (key.includes('home')) {
    return 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=900&q=80';
  }
  if (key.includes('wall')) {
    return 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80';
  }
  if (key.includes('gift')) {
    return 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80';
  }

  return 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80';
}

async function getCategorySchemaConfig() {
  if (!categorySchemaConfigPromise) {
    categorySchemaConfigPromise = (async () => {
      const db = getPool();
      const [productColumns] = await db.query('SHOW COLUMNS FROM products');
      const [imageColumns] = await db.query('SHOW COLUMNS FROM product_images');
      const [categoryColumns] = await db.query('SHOW COLUMNS FROM categories');

      const productColumnNames = new Set(productColumns.map((column) => column.Field));
      const imageColumnNames = new Set(imageColumns.map((column) => column.Field));
      const categoryColumnNames = new Set(categoryColumns.map((column) => column.Field));

      return {
        productMode: productColumnNames.has('category_id') ? 'normalized' : 'flat',
        hasCategorySlug: categoryColumnNames.has('slug'),
        hasProductImageColumn: productColumnNames.has('image_url'),
        imagePrimaryColumn: imageColumnNames.has('is_primary') ? 'is_primary' : 'is_primary_image'
      };
    })().catch((error) => {
      categorySchemaConfigPromise = null;
      throw error;
    });
  }

  return categorySchemaConfigPromise;
}

async function buildUniqueCategorySlug(db, name, schema, excludeId = null) {
  if (!schema.hasCategorySlug) {
    return null;
  }

  const baseSlug = slugify(name);
  let candidate = baseSlug;
  let attempt = 0;

  while (attempt < 20) {
    const params = excludeId ? [candidate, excludeId] : [candidate];
    const whereClause = excludeId ? 'slug = ? AND id <> ?' : 'slug = ?';
    const [rows] = await db.execute(`SELECT id FROM categories WHERE ${whereClause} LIMIT 1`, params);

    if (!rows.length) {
      return candidate;
    }

    attempt += 1;
    candidate = `${baseSlug}-${attempt}`;
  }

  return `${baseSlug}-${Date.now()}`;
}

async function syncFlatCategoriesFromProducts(db, schema) {
  if (schema.productMode !== 'flat') {
    return;
  }

  const [rows] = await db.query(
    `SELECT DISTINCT TRIM(category) AS category_name
     FROM products
     WHERE COALESCE(TRIM(category), '') <> ''`
  );

  for (const row of rows) {
    const categoryName = normalizeName(row.category_name);
    if (!categoryName) {
      continue;
    }

    const [existing] = await db.execute(
      'SELECT id FROM categories WHERE LOWER(TRIM(name)) = LOWER(TRIM(?)) LIMIT 1',
      [categoryName]
    );

    if (existing.length) {
      continue;
    }

    const slug = await buildUniqueCategorySlug(db, categoryName, schema);

    if (schema.hasCategorySlug) {
      await db.execute(
        'INSERT INTO categories (name, slug) VALUES (?, ?)',
        [categoryName, slug]
      );
    } else {
      await db.execute(
        'INSERT INTO categories (name) VALUES (?)',
        [categoryName]
      );
    }
  }
}

async function getHomeCategoryDisplayCount(db) {
  const [rows] = await db.execute(
    "SELECT value FROM app_settings WHERE `key` = 'home_category_display_count' LIMIT 1"
  );

  return toPositiveInt(rows[0]?.value, 4, 1, 12);
}

async function getCategoryStats(db, category, schema) {
  const imageExpression = schema.hasProductImageColumn ? 'COALESCE(pi.image_url, p.image_url)' : 'pi.image_url';

  const query = schema.productMode === 'normalized'
    ? `SELECT COUNT(DISTINCT p.id) AS product_count,
              MAX(CASE WHEN pi.${schema.imagePrimaryColumn} = 1 THEN ${imageExpression} END) AS primary_image,
              MIN(${imageExpression}) AS first_image
       FROM products p
       LEFT JOIN product_images pi ON pi.product_id = p.id
       WHERE p.category_id = ?`
    : `SELECT COUNT(DISTINCT p.id) AS product_count,
              MAX(CASE WHEN pi.${schema.imagePrimaryColumn} = 1 THEN ${imageExpression} END) AS primary_image,
              MIN(${imageExpression}) AS first_image
       FROM products p
       LEFT JOIN product_images pi ON pi.product_id = p.id
       WHERE LOWER(TRIM(p.category)) = LOWER(TRIM(?))`;

  const [rows] = await db.execute(query, [schema.productMode === 'normalized' ? category.id : category.name]);
  const stats = rows[0] || {};

  return {
    product_count: Number(stats.product_count) || 0,
    image_url: category.image_url || stats.primary_image || stats.first_image || getCategoryFallbackImage(category.name)
  };
}

async function getCategoryRows(db, schema) {
  await syncFlatCategoriesFromProducts(db, schema);

  const selectSlug = schema.hasCategorySlug ? 'slug' : 'NULL AS slug';
  const [rows] = await db.query(
    `SELECT id,
            name,
            ${selectSlug},
            COALESCE(description, '') AS description,
            COALESCE(image_url, '') AS image_url,
            COALESCE(is_home_visible, 1) AS is_home_visible,
            COALESCE(sort_order, 0) AS sort_order
     FROM categories
     WHERE COALESCE(TRIM(name), '') <> ''
     ORDER BY sort_order ASC, name ASC`
  );

  const hydrated = [];
  for (const row of rows) {
    const stats = await getCategoryStats(db, row, schema);
    hydrated.push({
      id: row.id,
      name: row.name,
      slug: row.slug || slugify(row.name),
      description: row.description || '',
      is_home_visible: Boolean(row.is_home_visible),
      sort_order: Number(row.sort_order) || 0,
      product_count: stats.product_count,
      image_url: stats.image_url
    });
  }

  return hydrated;
}

async function getAdminCategorySettings() {
  const db = getPool();
  const schema = await getCategorySchemaConfig();
  const displayCount = await getHomeCategoryDisplayCount(db);
  const categories = await getCategoryRows(db, schema);

  return {
    display_count: displayCount,
    categories
  };
}

async function getHomeCategories() {
  const settings = await getAdminCategorySettings();

  return {
    display_count: settings.display_count,
    categories: settings.categories
      .filter((category) => category.is_home_visible)
      .slice(0, settings.display_count)
  };
}

async function saveAdminCategorySettings({ displayCount, categories }) {
  const db = getPool();
  const schema = await getCategorySchemaConfig();

  await syncFlatCategoriesFromProducts(db, schema);

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    await connection.execute(
      "INSERT INTO app_settings (`key`, value) VALUES ('home_category_display_count', ?) ON DUPLICATE KEY UPDATE value = VALUES(value)",
      [String(toPositiveInt(displayCount, 4, 1, 12))]
    );

    const safeCategories = Array.isArray(categories) ? categories : [];

    for (const [index, category] of safeCategories.entries()) {
      const nextName = normalizeName(category?.name || '');
      const nextDescription = String(category?.description || '').trim();
      const hasImageOverride = Object.prototype.hasOwnProperty.call(category || {}, 'image_url');
      const nextImageUrl = hasImageOverride ? String(category?.image_url || '').trim() : null;
      const nextVisibility = category?.is_home_visible === false ? 0 : 1;

      if (!nextName) {
        continue;
      }

      const categoryId = Number(category?.id);
      if (Number.isInteger(categoryId) && categoryId > 0) {
        const [existingRows] = await connection.execute(
          'SELECT id, name, image_url FROM categories WHERE id = ? LIMIT 1',
          [categoryId]
        );

        if (existingRows.length) {
          const existing = existingRows[0];
          const slug = await buildUniqueCategorySlug(connection, nextName, schema, categoryId);

          if (schema.productMode === 'flat' && normalizeName(existing.name).toLowerCase() !== nextName.toLowerCase()) {
            await connection.execute(
              'UPDATE products SET category = ? WHERE LOWER(TRIM(category)) = LOWER(TRIM(?))',
              [nextName, existing.name]
            );
          }

          const resolvedImageUrl = hasImageOverride ? (nextImageUrl || null) : (existing.image_url || null);

          if (schema.hasCategorySlug) {
            await connection.execute(
              `UPDATE categories
               SET name = ?, slug = ?, description = ?, image_url = ?, is_home_visible = ?, sort_order = ?
               WHERE id = ?`,
              [nextName, slug, nextDescription, resolvedImageUrl, nextVisibility, index, categoryId]
            );
          } else {
            await connection.execute(
              `UPDATE categories
               SET name = ?, description = ?, image_url = ?, is_home_visible = ?, sort_order = ?
               WHERE id = ?`,
              [nextName, nextDescription, resolvedImageUrl, nextVisibility, index, categoryId]
            );
          }

          continue;
        }
      }

      const slug = await buildUniqueCategorySlug(connection, nextName, schema);
      if (schema.hasCategorySlug) {
        await connection.execute(
          `INSERT INTO categories (name, slug, description, image_url, is_home_visible, sort_order)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [nextName, slug, nextDescription, nextImageUrl || null, nextVisibility, index]
        );
      } else {
        await connection.execute(
          `INSERT INTO categories (name, description, image_url, is_home_visible, sort_order)
           VALUES (?, ?, ?, ?, ?)`,
          [nextName, nextDescription, nextImageUrl || null, nextVisibility, index]
        );
      }
    }

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }

  return getAdminCategorySettings();
}

async function getCategoryById(categoryId) {
  const db = getPool();
  const [rows] = await db.execute(
    `SELECT id, name, COALESCE(image_url, '') AS image_url
     FROM categories
     WHERE id = ?
     LIMIT 1`,
    [categoryId]
  );

  return rows[0] || null;
}

async function setCategoryImage(categoryId, imageUrl) {
  const db = getPool();
  await db.execute('UPDATE categories SET image_url = ? WHERE id = ?', [imageUrl || null, categoryId]);
  return getAdminCategorySettings();
}

async function clearCategoryImage(categoryId) {
  const db = getPool();
  await db.execute('UPDATE categories SET image_url = NULL WHERE id = ?', [categoryId]);
  return getAdminCategorySettings();
}

module.exports = {
  getHomeCategories,
  getAdminCategorySettings,
  saveAdminCategorySettings,
  getCategoryById,
  setCategoryImage,
  clearCategoryImage
};
