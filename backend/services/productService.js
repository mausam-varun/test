const { getPool } = require('./db');

let productSchemaConfigPromise;

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `product-${Date.now()}`;
}

function normalizeImages(rows = []) {
  return rows.map((row) => ({
    id: row.id,
    image_url: row.image_url,
    is_primary_image: Boolean(row.is_primary ?? row.is_primary_image)
  }));
}

async function getProductSchemaConfig() {
  if (!productSchemaConfigPromise) {
    productSchemaConfigPromise = (async () => {
      const db = getPool();
      const [productColumns] = await db.query('SHOW COLUMNS FROM products');
      const [imageColumns] = await db.query('SHOW COLUMNS FROM product_images');
      const [categoryColumns] = await db.query('SHOW COLUMNS FROM categories');

      const productColumnNames = new Set(productColumns.map((column) => column.Field));
      const imageColumnNames = new Set(imageColumns.map((column) => column.Field));
      const categoryColumnNames = new Set(categoryColumns.map((column) => column.Field));

      return {
        productMode: productColumnNames.has('title') ? 'normalized' : 'flat',
        imagePrimaryColumn: imageColumnNames.has('is_primary') ? 'is_primary' : 'is_primary_image',
        hasProductSlug: productColumnNames.has('slug'),
        hasCategorySlug: categoryColumnNames.has('slug')
      };
    })().catch((error) => {
      productSchemaConfigPromise = null;
      throw error;
    });
  }

  return productSchemaConfigPromise;
}

async function fetchImagesByProductIds(productIds) {
  if (!productIds.length) {
    return new Map();
  }

  const db = getPool();
  const schema = await getProductSchemaConfig();
  const placeholders = productIds.map(() => '?').join(',');
  const [rows] = await db.query(
    `SELECT id, product_id, image_url, ${schema.imagePrimaryColumn} AS is_primary
     FROM product_images
     WHERE product_id IN (${placeholders})
     ORDER BY product_id ASC, is_primary DESC, id ASC`,
    productIds
  );

  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.product_id)) {
      grouped.set(row.product_id, []);
    }
    grouped.get(row.product_id).push({
      id: row.id,
      image_url: row.image_url,
      is_primary_image: Boolean(row.is_primary)
    });
  }

  return grouped;
}

function buildProductWithImages(product, images = []) {
  const normalizedImages = normalizeImages(images);
  const primaryImage = normalizedImages.find((image) => image.is_primary_image) || normalizedImages[0] || null;

  return {
    ...product,
    image_url: primaryImage ? primaryImage.image_url : (product.image_url || null),
    primary_image_id: primaryImage ? primaryImage.id : null,
    images: normalizedImages
  };
}

async function insertProductImages(db, productId, images, schemaConfig = null) {
  const schema = schemaConfig || await getProductSchemaConfig();
  for (const image of images) {
    await db.execute(
      `INSERT INTO product_images (product_id, image_url, ${schema.imagePrimaryColumn})
       VALUES (?, ?, ?)`,
      [productId, image.image_url, image.is_primary_image ? 1 : 0]
    );
  }
}

async function upsertCategoryByName(db, categoryName, schema) {
  const normalized = String(categoryName || '').trim();
  if (!normalized) return null;

  if (!schema?.hasCategorySlug) {
    const [existingRows] = await db.execute(
      'SELECT id FROM categories WHERE LOWER(name) = LOWER(?) LIMIT 1',
      [normalized]
    );
    if (existingRows.length) {
      return existingRows[0].id;
    }

    const [insertResult] = await db.execute(
      'INSERT INTO categories (name) VALUES (?)',
      [normalized]
    );
    return insertResult.insertId;
  }

  const slug = slugify(normalized);
  await db.execute(
    `INSERT INTO categories (name, slug)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE name = VALUES(name)`,
    [normalized, slug]
  );

  const [rows] = await db.execute('SELECT id FROM categories WHERE slug = ? LIMIT 1', [slug]);
  return rows[0]?.id || null;
}

async function buildUniqueProductSlug(db, title) {
  const schema = await getProductSchemaConfig();
  if (!schema.hasProductSlug) {
    return null;
  }

  const base = slugify(title);
  let candidate = base;
  let attempt = 0;

  while (attempt < 5) {
    const [rows] = await db.execute('SELECT id FROM products WHERE slug = ? LIMIT 1', [candidate]);
    if (!rows.length) {
      return candidate;
    }
    attempt += 1;
    candidate = `${base}-${Date.now()}-${attempt}`;
  }

  return `${base}-${Date.now()}`;
}

async function createProduct({ name, price, category, description, images }) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  let result;

  if (schema.productMode === 'normalized') {
    const categoryId = await upsertCategoryByName(db, category, schema);

    if (schema.hasProductSlug) {
      const slug = await buildUniqueProductSlug(db, name);
      [result] = await db.execute(
        `INSERT INTO products (title, slug, description, base_price, stock, category_id, is_active)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, slug, description, price, 0, categoryId, 1]
      );
    } else {
      [result] = await db.execute(
        `INSERT INTO products (title, description, base_price, stock, category_id, is_active)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, description, price, 0, categoryId, 1]
      );
    }
  } else {
    const primaryImage = images.find((image) => image.is_primary_image) || images[0] || null;
    [result] = await db.execute(
      `INSERT INTO products (name, price, category, description, image_url)
       VALUES (?, ?, ?, ?, ?)`,
      [name, price, category || '', description, primaryImage ? primaryImage.image_url : null]
    );
  }

  const productId = result.insertId;
  await insertProductImages(db, productId, images, schema);
  return fetchProductById(productId);
}

async function fetchAllProducts() {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.title AS name,
              p.base_price AS price,
              COALESCE(c.name, '') AS category,
              p.description,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       ORDER BY p.id DESC`
    : `SELECT p.id,
              p.name,
              p.price,
              p.category,
              p.description,
              p.image_url
       FROM products p
       ORDER BY p.id DESC`;

  const [rows] = await db.query(query);

  const imagesByProductId = await fetchImagesByProductIds(rows.map((row) => row.id));
  return rows.map((row) => buildProductWithImages(row, imagesByProductId.get(row.id) || []));
}

async function fetchFeaturedProducts(limit = 8) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  const safeLimit = Number.isInteger(limit) && limit > 0 ? Math.min(limit, 24) : 8;

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.title AS name,
              p.base_price AS price,
              COALESCE(c.name, '') AS category,
              p.description,
              (
                SELECT pi.image_url
                FROM product_images pi
                WHERE pi.product_id = p.id
                ORDER BY pi.${schema.imagePrimaryColumn} DESC, pi.id ASC
                LIMIT 1
              ) AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       ORDER BY p.id DESC
       LIMIT ?`
    : `SELECT p.id,
              p.name,
              p.price,
              p.category,
              p.description,
              COALESCE(
                (
                  SELECT pi.image_url
                  FROM product_images pi
                  WHERE pi.product_id = p.id
                  ORDER BY pi.${schema.imagePrimaryColumn} DESC, pi.id ASC
                  LIMIT 1
                ),
                p.image_url
              ) AS image_url
       FROM products p
       ORDER BY p.id DESC
       LIMIT ?`;

  const queryWithLimit = `${query.replace('LIMIT ?', `LIMIT ${safeLimit}`)}`;
  const [rows] = await db.query(queryWithLimit);

  return rows.map((row) => ({
    ...row,
    image_url: row.image_url || null,
    primary_image_id: null,
    images: row.image_url
      ? [{ image_url: row.image_url, is_primary_image: true }]
      : []
  }));
}

async function fetchProductById(id) {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.title AS name,
              p.base_price AS price,
              COALESCE(c.name, '') AS category,
              p.description,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.id = ?`
    : `SELECT p.id,
              p.name,
              p.price,
              p.category,
              p.description,
              p.image_url
       FROM products p
       WHERE p.id = ?`;

  const [rows] = await db.execute(query, [id]);

  const product = rows[0] || null;
  if (!product) {
    return null;
  }

  const imagesByProductId = await fetchImagesByProductIds([id]);
  return buildProductWithImages(product, imagesByProductId.get(id) || []);
}

async function updateProductById(id, updates, replacementImages = null) {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  if (schema.productMode === 'normalized') {
    if (updates.name !== undefined) {
      updates.title = updates.name;
      delete updates.name;
    }

    if (updates.price !== undefined) {
      updates.base_price = updates.price;
      delete updates.price;
    }

    if (updates.category !== undefined) {
      updates.category_id = await upsertCategoryByName(db, updates.category, schema);
      delete updates.category;
    }
  }

  const fields = Object.keys(updates);
  if (fields.length) {
    const values = Object.values(updates);
    const setClause = fields.map((field) => `${field} = ?`).join(', ');

    await db.execute(`UPDATE products SET ${setClause} WHERE id = ?`, [...values, id]);
  }

  if (replacementImages && replacementImages.length) {
    await db.execute('DELETE FROM product_images WHERE product_id = ?', [id]);
    await insertProductImages(db, id, replacementImages, schema);

    if (schema.productMode === 'flat') {
      const primaryImage = replacementImages.find((image) => image.is_primary_image) || replacementImages[0] || null;
      await db.execute('UPDATE products SET image_url = ? WHERE id = ?', [primaryImage ? primaryImage.image_url : null, id]);
    }
  }

  return fetchProductById(id);
}

async function setPrimaryImage(productId, imageId) {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  const [rows] = await db.execute(
    `SELECT id, image_url
     FROM product_images
     WHERE id = ? AND product_id = ?`,
    [imageId, productId]
  );

  const targetImage = rows[0] || null;
  if (!targetImage) {
    return null;
  }

  await db.execute(
    `UPDATE product_images SET ${schema.imagePrimaryColumn} = 0 WHERE product_id = ?`,
    [productId]
  );
  await db.execute(
    `UPDATE product_images SET ${schema.imagePrimaryColumn} = 1 WHERE id = ? AND product_id = ?`,
    [imageId, productId]
  );

  return fetchProductById(productId);
}

async function deleteProductById(id) {
  const db = getPool();
  await db.execute('DELETE FROM products WHERE id = ?', [id]);
}

module.exports = {
  createProduct,
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductById,
  updateProductById,
  setPrimaryImage,
  deleteProductById
};
