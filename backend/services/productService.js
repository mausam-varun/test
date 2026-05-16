const { getPool } = require('./db');
const { resolveColorCodes } = require('./aiProductService');

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

function parseDelimitedValues(value) {
  if (!value) {
    return [];
  }

  const input = Array.isArray(value) ? value.join(',') : String(value);
  return [...new Set(
    input
      .split(/[,\n|/]+/)
      .map((item) => item.trim())
      .filter(Boolean)
  )];
}

function buildColorDetails(colorsInput, colorHexInput) {
  const colorNames = parseDelimitedValues(colorsInput);
  const colorHexValues = parseDelimitedValues(colorHexInput);

  return colorNames.map((name, index) => ({
    name,
    hex: colorHexValues[index] || null,
    sort_order: index
  }));
}

function buildProductAttributeEntries(analysisRaw = {}, fallbackMetadata = {}) {
  const raw = analysisRaw && typeof analysisRaw === 'object' ? analysisRaw : {};
  const fallbackColors = parseDelimitedValues(fallbackMetadata.colors || '');

  const attributeMap = {
    product_type: raw.product_type || '',
    category: raw.category || fallbackMetadata.category || '',
    sub_category: raw.sub_category || '',
    primary_color: raw.primary_color || fallbackColors[0] || '',
    secondary_colors: Array.isArray(raw.secondary_colors) ? raw.secondary_colors : fallbackColors.slice(1),
    color_family: Array.isArray(raw.color_family) ? raw.color_family : [],
    material_estimated: Array.isArray(raw.material_estimated) ? raw.material_estimated : parseDelimitedValues(fallbackMetadata.materials || fallbackMetadata.material || ''),
    finish: raw.finish || '',
    style: Array.isArray(raw.style) ? raw.style : parseDelimitedValues(fallbackMetadata.styles || fallbackMetadata.style || ''),
    occasion: Array.isArray(raw.occasion) ? raw.occasion : [],
    pattern: Array.isArray(raw.pattern) ? raw.pattern : parseDelimitedValues(fallbackMetadata.patterns || fallbackMetadata.pattern || ''),
    design_elements: Array.isArray(raw.design_elements) ? raw.design_elements : parseDelimitedValues(fallbackMetadata.designs || fallbackMetadata.design || ''),
    embellishments: Array.isArray(raw.embellishments) ? raw.embellishments : [],
    craft_type: Array.isArray(raw.craft_type) ? raw.craft_type : [],
    texture: raw.texture || '',
    visual_density: raw.visual_density || '',
    shape: raw.shape || '',
    usage: Array.isArray(raw.usage) ? raw.usage : [],
    aesthetic_tags: Array.isArray(raw.aesthetic_tags) ? raw.aesthetic_tags : [],
    cultural_inference: raw.cultural_inference || '',
    quality_inference: raw.quality_inference || '',
    target_gender: raw.target_gender || fallbackMetadata.target_gender || 'Women',
    complementary_dress_colors: Array.isArray(raw.complementary_dress_colors) ? raw.complementary_dress_colors : [],
    matching_notes: raw.ecommerce?.matching_notes || raw.matching_notes || ''
  };

  const entries = [];
  for (const [attributeKey, attributeValue] of Object.entries(attributeMap)) {
    if (Array.isArray(attributeValue)) {
      for (const item of attributeValue.map((value) => String(value || '').trim()).filter(Boolean)) {
        entries.push({ attribute_key: attributeKey, attribute_value: item.slice(0, 255) });
      }
      continue;
    }

    const normalized = String(attributeValue || '').trim();
    if (normalized) {
      entries.push({ attribute_key: attributeKey, attribute_value: normalized.slice(0, 255) });
    }
  }

  return entries;
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

async function fetchColorsByProductIds(productIds) {
  if (!productIds.length) {
    return new Map();
  }

  const db = getPool();
  const placeholders = productIds.map(() => '?').join(',');
  const [rows] = await db.query(
    `SELECT id, product_id, color_id, color_name, color_code, color_hex, is_primary_color, sort_order
     FROM product_colors
     WHERE product_id IN (${placeholders})
     ORDER BY product_id ASC, is_primary_color DESC, sort_order ASC, id ASC`,
    productIds
  );

  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.product_id)) {
      grouped.set(row.product_id, []);
    }
    grouped.get(row.product_id).push({
      id: row.id,
      color_id: row.color_id ?? null,
      name: String(row.color_name || '').trim(),
      code: row.color_code || row.color_hex || null,
      hex: row.color_hex || row.color_code || null,
      is_primary_color: Boolean(row.is_primary_color)
    });
  }

  return grouped;
}

async function fetchAttributesByProductIds(productIds) {
  if (!productIds.length) {
    return new Map();
  }

  const db = getPool();
  const placeholders = productIds.map(() => '?').join(',');
  const [rows] = await db.query(
    `SELECT product_id, attribute_key, attribute_value
     FROM product_attributes
     WHERE product_id IN (${placeholders})
     ORDER BY product_id ASC, id ASC`,
    productIds
  );

  const arrayKeys = new Set([
    'secondary_colors',
    'color_family',
    'material_estimated',
    'style',
    'occasion',
    'pattern',
    'design_elements',
    'embellishments',
    'craft_type',
    'usage',
    'aesthetic_tags'
  ]);

  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.product_id)) {
      grouped.set(row.product_id, {});
    }

    const bucket = grouped.get(row.product_id);
    const key = String(row.attribute_key || '').trim();
    const value = String(row.attribute_value || '').trim();

    if (!key || !value) {
      continue;
    }

    if (arrayKeys.has(key)) {
      bucket[key] = Array.isArray(bucket[key]) ? bucket[key] : [];
      if (!bucket[key].includes(value)) {
        bucket[key].push(value);
      }
      continue;
    }

    if (!bucket[key]) {
      bucket[key] = value;
    }
  }

  return grouped;
}

async function upsertMasterColor(db, colorName, colorCode = null) {
  const normalizedName = String(colorName || '').trim().toLowerCase();
  if (!normalizedName) {
    return null;
  }

  await db.execute(
    `INSERT INTO colors (color_name, color_code)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE
       color_code = COALESCE(NULLIF(VALUES(color_code), ''), color_code)`,
    [normalizedName, colorCode || null]
  );

  const [rows] = await db.execute(
    `SELECT id, color_name, color_code
     FROM colors
     WHERE LOWER(color_name) = LOWER(?)
     LIMIT 1`,
    [normalizedName]
  );

  return rows[0] || null;
}

async function replaceProductColors(db, productId, colorsInput, colorHexInput) {
  const colorDetails = buildColorDetails(colorsInput, colorHexInput);

  await db.execute('DELETE FROM product_colors WHERE product_id = ?', [productId]);

  if (!colorDetails.length) {
    return;
  }

  let resolvedColors = [];
  try {
    resolvedColors = await resolveColorCodes(colorDetails.map((color) => color.name));
  } catch (error) {
    console.warn('Color code resolution failed, using provided color values only:', error.message);
  }

  const resolvedMap = new Map(
    (resolvedColors || []).map((item) => [String(item.color_name || '').trim().toLowerCase(), item])
  );

  for (const [index, color] of colorDetails.entries()) {
    const resolved = resolvedMap.get(String(color.name || '').trim().toLowerCase()) || {};
    const finalName = String(resolved.color_name || color.name || '').trim();
    const finalCode = String(color.hex || resolved.color_code || '').trim() || null;
    const masterColor = await upsertMasterColor(db, finalName, finalCode);

    await db.execute(
      `INSERT INTO product_colors (product_id, color_id, color_name, color_code, color_hex, is_primary_color, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        productId,
        masterColor?.id || null,
        masterColor?.color_name || finalName,
        masterColor?.color_code || finalCode,
        masterColor?.color_code || finalCode,
        index === 0 ? 1 : 0,
        index
      ]
    );
  }
}

async function replaceProductAttributes(db, productId, analysisRaw = {}, fallbackMetadata = {}) {
  const entries = buildProductAttributeEntries(analysisRaw, fallbackMetadata);

  await db.execute('DELETE FROM product_attributes WHERE product_id = ?', [productId]);

  if (!entries.length) {
    return;
  }

  for (const entry of entries) {
    await db.execute(
      `INSERT INTO product_attributes (product_id, attribute_key, attribute_value)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE attribute_value = VALUES(attribute_value)`,
      [productId, entry.attribute_key, entry.attribute_value]
    );
  }
}

async function syncProductAttributesById(productId, analysisRaw = {}, fallbackMetadata = {}) {
  const db = getPool();
  await replaceProductAttributes(db, productId, analysisRaw, fallbackMetadata);
}

function buildProductWithImages(product, images = [], colorDetails = [], attributes = {}) {
  const normalizedImages = normalizeImages(images);
  const primaryImage = normalizedImages.find((image) => image.is_primary_image) || normalizedImages[0] || null;
  const normalizedColors = Array.isArray(colorDetails) ? colorDetails.filter((color) => color?.name) : [];

  return {
    ...product,
    image_url: primaryImage ? primaryImage.image_url : (product.image_url || null),
    primary_image_id: primaryImage ? primaryImage.id : null,
    images: normalizedImages,
    colors: normalizedColors.map((color) => color.name),
    color_details: normalizedColors,
    color_hex: normalizedColors.map((color) => color.code || color.hex).filter(Boolean),
    attributes
  };
}

async function fetchProductSizes(productId) {
  const db = getPool();
  const [rows] = await db.query(
    `SELECT id, size_value, stock FROM product_sizes WHERE product_id = ? ORDER BY id ASC`,
    [productId]
  );
  
  return rows.map(row => ({
    id: row.id,
    size: row.size_value,
    stock: row.stock || 0
  }));
}

async function fetchReviewAggregatesByProductIds(productIds) {
  if (!productIds.length) {
    return new Map();
  }

  const db = getPool();
  const placeholders = productIds.map(() => '?').join(',');

  const [aggregateRows] = await db.query(
    `SELECT oi.product_id,
            ROUND(AVG(pr.overall_rating), 1) AS average_rating,
            COUNT(pr.id) AS review_count,
            SUM(CASE WHEN pr.overall_rating = 5 THEN 1 ELSE 0 END) AS star_5_count,
            SUM(CASE WHEN pr.overall_rating = 4 THEN 1 ELSE 0 END) AS star_4_count,
            SUM(CASE WHEN pr.overall_rating = 3 THEN 1 ELSE 0 END) AS star_3_count,
            SUM(CASE WHEN pr.overall_rating = 2 THEN 1 ELSE 0 END) AS star_2_count,
            SUM(CASE WHEN pr.overall_rating = 1 THEN 1 ELSE 0 END) AS star_1_count
     FROM order_items oi
     INNER JOIN product_reviews pr ON pr.order_id = oi.order_id
     WHERE oi.product_id IN (${placeholders})
     GROUP BY oi.product_id`,
    productIds
  );

  const [reviewRows] = await db.query(
    `SELECT *
     FROM (
       SELECT oi.product_id,
              pr.id,
              pr.overall_rating,
              pr.emotion,
              pr.review_text,
              pr.images,
              pr.created_at,
              o.customer_name,
              ROW_NUMBER() OVER (PARTITION BY oi.product_id ORDER BY pr.created_at DESC, pr.id DESC) AS row_num
       FROM order_items oi
       INNER JOIN product_reviews pr ON pr.order_id = oi.order_id
       INNER JOIN orders o ON o.id = pr.order_id
       WHERE oi.product_id IN (${placeholders})
     ) ranked_reviews
     WHERE row_num <= 3
     ORDER BY product_id ASC, created_at DESC`,
    productIds
  );

  const reviewMap = new Map();
  for (const row of reviewRows) {
    if (!reviewMap.has(row.product_id)) {
      reviewMap.set(row.product_id, []);
    }

    let parsedImages = [];
    try {
      const value = typeof row.images === 'string' ? JSON.parse(row.images) : row.images;
      parsedImages = Array.isArray(value) ? value : [];
    } catch {
      parsedImages = [];
    }

    reviewMap.get(row.product_id).push({
      id: row.id,
      rating: Number(row.overall_rating) || 0,
      emotion: row.emotion || '',
      review_text: row.review_text || '',
      customer_name: row.customer_name || 'Verified Customer',
      created_at: row.created_at,
      images: parsedImages
    });
  }

  return new Map(
    aggregateRows.map((row) => [
      row.product_id,
      {
        rating: Number(row.average_rating) || 0,
        reviews: Number(row.review_count) || 0,
        breakdown: {
          5: Number(row.star_5_count) || 0,
          4: Number(row.star_4_count) || 0,
          3: Number(row.star_3_count) || 0,
          2: Number(row.star_2_count) || 0,
          1: Number(row.star_1_count) || 0
        },
        recentReviews: reviewMap.get(row.product_id) || []
      }
    ])
  );
}

function attachReviewAggregates(product, aggregatesByProductId) {
  const aggregate = aggregatesByProductId.get(product.id) || {
    rating: 0,
    reviews: 0,
    breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    recentReviews: []
  };

  return {
    ...product,
    rating: aggregate.rating,
    reviews: aggregate.reviews,
    review_breakdown: aggregate.breakdown,
    recent_reviews: aggregate.recentReviews
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

async function createProduct({
  name,
  price,
  category,
  description,
  images,
  seoTitle = '',
  seoMetaDescription = '',
  tags = '',
  colors = '',
  colorHexes = '',
  productCategoryId = null,
  initialQuantity = 0
}) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  const qty = Math.max(0, parseInt(initialQuantity, 10) || 0);
  let result;

  if (schema.productMode === 'normalized') {
    const categoryId = await upsertCategoryByName(db, category, schema);

    if (schema.hasProductSlug) {
      const slug = await buildUniqueProductSlug(db, name);
      [result] = await db.execute(
        `INSERT INTO products (title, slug, description, seo_title, seo_meta_description, tags, base_price, stock, total_added_quantity, category_id, is_active, product_category_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, slug, description, seoTitle || null, seoMetaDescription || null, tags || null, price, qty, qty, categoryId, 1, productCategoryId || null]
      );
    } else {
      [result] = await db.execute(
        `INSERT INTO products (title, description, seo_title, seo_meta_description, tags, base_price, stock, total_added_quantity, category_id, is_active, product_category_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, description, seoTitle || null, seoMetaDescription || null, tags || null, price, qty, qty, categoryId, 1, productCategoryId || null]
      );
    }
  } else {
    const primaryImage = images.find((image) => image.is_primary_image) || images[0] || null;
    [result] = await db.execute(
      `INSERT INTO products (name, price, category, description, seo_title, seo_meta_description, tags, image_url, stock, total_added_quantity, product_category_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, price, category || '', description, seoTitle || null, seoMetaDescription || null, tags || null, primaryImage ? primaryImage.image_url : null, qty, qty, productCategoryId || null]
    );
  }

  const productId = result.insertId;
  await insertProductImages(db, productId, images, schema);
  await replaceProductColors(db, productId, colors, colorHexes);
  return fetchProductById(productId);
}

async function fetchAllProducts() {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              COALESCE(c.name, '') AS category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       ORDER BY p.id DESC`
    : `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              p.category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              p.image_url
       FROM products p
       ORDER BY p.id DESC`;

  const [rows] = await db.query(query);

  const productIds = rows.map((row) => row.id);
  const imagesByProductId = await fetchImagesByProductIds(productIds);
  const colorsByProductId = await fetchColorsByProductIds(productIds);
  const attributesByProductId = await fetchAttributesByProductIds(productIds);
  const reviewAggregatesByProductId = await fetchReviewAggregatesByProductIds(productIds);

  return rows.map((row) =>
    attachReviewAggregates(
      buildProductWithImages(
        row,
        imagesByProductId.get(row.id) || [],
        colorsByProductId.get(row.id) || [],
        attributesByProductId.get(row.id) || {}
      ),
      reviewAggregatesByProductId
    )
  );
}

async function fetchProductsByIds(ids = []) {
  if (!ids.length) return [];
  const safeIds = ids.map(Number).filter(n => Number.isInteger(n) && n > 0);
  if (!safeIds.length) return [];

  const db = getPool();
  const schema = await getProductSchemaConfig();
  const placeholders = safeIds.map(() => '?').join(',');

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              COALESCE(c.name, '') AS category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.id IN (${placeholders})`
    : `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              p.category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              p.image_url
       FROM products p
       WHERE p.id IN (${placeholders})`;

  const [rows] = await db.query(query, safeIds);

  const productIds = rows.map((row) => row.id);
  const imagesByProductId = await fetchImagesByProductIds(productIds);
  const colorsByProductId = await fetchColorsByProductIds(productIds);
  const attributesByProductId = await fetchAttributesByProductIds(productIds);
  const reviewAggregatesByProductId = await fetchReviewAggregatesByProductIds(productIds);

  // Return in the same order as the input ids array
  const byId = new Map(
    rows.map((row) => [
      row.id,
      attachReviewAggregates(
        buildProductWithImages(
          row,
          imagesByProductId.get(row.id) || [],
          colorsByProductId.get(row.id) || [],
          attributesByProductId.get(row.id) || {}
        ),
        reviewAggregatesByProductId
      )
    ])
  );
  return safeIds.map((id) => byId.get(id)).filter(Boolean);
}

async function fetchFeaturedProducts(limit = 8) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  const safeLimit = Number.isInteger(limit) && limit > 0 ? Math.min(limit, 24) : 8;

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.name,
              p.price,
              COALESCE(c.name, '') AS category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
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
              p.seo_title,
              p.seo_meta_description,
              p.tags,
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

  const productIds = rows.map((row) => row.id);
  const colorsByProductId = await fetchColorsByProductIds(productIds);
  const attributesByProductId = await fetchAttributesByProductIds(productIds);
  const reviewAggregatesByProductId = await fetchReviewAggregatesByProductIds(productIds);

  return rows.map((row) =>
    attachReviewAggregates(
      {
        ...row,
        image_url: row.image_url || null,
        primary_image_id: null,
        images: row.image_url
          ? [{ image_url: row.image_url, is_primary_image: true }]
          : [],
        colors: (colorsByProductId.get(row.id) || []).map((color) => color.name),
        color_details: colorsByProductId.get(row.id) || [],
        color_hex: (colorsByProductId.get(row.id) || []).map((color) => color.code || color.hex).filter(Boolean),
        attributes: attributesByProductId.get(row.id) || {}
      },
      reviewAggregatesByProductId
    )
  );
}

async function fetchProductById(id) {
  const db = getPool();
  const schema = await getProductSchemaConfig();

  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              COALESCE(c.name, '') AS category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.id = ?`
    : `SELECT p.id,
              p.name,
              p.price,
              p.stock,
              p.category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              p.image_url
       FROM products p
       WHERE p.id = ?`;

  const [rows] = await db.execute(query, [id]);

  const product = rows[0] || null;
  if (!product) {
    return null;
  }

  const imagesByProductId = await fetchImagesByProductIds([id]);
  const colorsByProductId = await fetchColorsByProductIds([id]);
  const attributesByProductId = await fetchAttributesByProductIds([id]);
  const reviewAggregatesByProductId = await fetchReviewAggregatesByProductIds([id]);
  
  // Fetch sizes for bangles
  const sizes = await fetchProductSizes(id);

  const productWithDetails = attachReviewAggregates(
    buildProductWithImages(
      product,
      imagesByProductId.get(id) || [],
      colorsByProductId.get(id) || [],
      attributesByProductId.get(id) || {}
    ),
    reviewAggregatesByProductId
  );
  
  // Add sizes if product is bangle
  if (sizes && sizes.length > 0) {
    productWithDetails.sizes = sizes;
  }
  
  return productWithDetails;
}

async function updateProductById(id, updates, replacementImages = null) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  const hasColorUpdate = Object.prototype.hasOwnProperty.call(updates, 'colors') || Object.prototype.hasOwnProperty.call(updates, 'color_hex');
  const nextColors = updates.colors;
  const nextColorHexes = updates.color_hex;

  delete updates.colors;
  delete updates.color_hex;

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

  if (hasColorUpdate) {
    await replaceProductColors(db, id, nextColors, nextColorHexes);
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

async function searchProducts(searchQuery, limit = 10) {
  const db = getPool();
  const schema = await getProductSchemaConfig();
  
  const searchTerm = `%${searchQuery}%`;
  
  const query = schema.productMode === 'normalized'
    ? `SELECT p.id,
              p.name,
              p.price,
              COALESCE(c.name, '') AS category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              NULL AS image_url
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.name LIKE ? 
          OR p.description LIKE ?
          OR c.name LIKE ?
       ORDER BY (CASE 
                  WHEN p.name LIKE ? THEN 0
                  WHEN p.description LIKE ? THEN 1
                  ELSE 2
                END), p.id DESC
       LIMIT ?`
    : `SELECT p.id,
              p.name,
              p.price,
              p.category,
              p.description,
              p.seo_title,
              p.seo_meta_description,
              p.tags,
              p.product_category_id,
              p.image_url
       FROM products p
       WHERE p.name LIKE ? 
          OR p.description LIKE ?
          OR p.category LIKE ?
       ORDER BY (CASE 
                  WHEN p.name LIKE ? THEN 0
                  WHEN p.description LIKE ? THEN 1
                  ELSE 2
                END), p.id DESC
       LIMIT ?`;

  const params = [searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, limit];
  const [rows] = await db.query(query, params);

  if (!rows.length) {
    return [];
  }

  const productIds = rows.map((row) => row.id);
  const imagesByProductId = await fetchImagesByProductIds(productIds);
  const colorsByProductId = await fetchColorsByProductIds(productIds);
  const attributesByProductId = await fetchAttributesByProductIds(productIds);

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    price: row.price,
    category: row.category,
    description: row.description,
    image_url: row.image_url,
    images: imagesByProductId.get(row.id) || [],
    color_details: colorsByProductId.get(row.id) || [],
    attributes: attributesByProductId.get(row.id) || {}
  }));
}

module.exports = {
  createProduct,
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductsByIds,
  fetchProductById,
  updateProductById,
  setPrimaryImage,
  deleteProductById,
  syncProductAttributesById,
  searchProducts
};
