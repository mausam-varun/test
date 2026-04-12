const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const {
  createProduct,
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductById,
  updateProductById,
  setPrimaryImage,
  deleteProductById,
  syncProductAttributesById,
  searchProducts: searchProductsService
} = require('../services/productService');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const { deleteProductFromSimilarity, matchBanglesFromAI } = require('../services/aiProductService');
const { extractColorMetadata, buildColorSemanticQuery } = require('../services/colorMatchingService');
const { performColorEnhancedMatch, enhancedColorQuery } = require('../services/colorEnhancedMatchingService');
const { reRankMatchesByAttributes } = require('../services/attributeRankingService');
const {
  buildAiMetadata,
  getAiIndexingModeState,
  runPrimaryImageAiWorkflow,
  setAiIndexingMode
} = require('../services/productAiWorkflowService');
const { getAdminCurrencyPreference } = require('../services/authService');
const { getPool } = require('../services/db');
const sharp = require('sharp');
const {
  analyzeImageByProvider,
  generateProductDescriptionByProvider,
  generateBangleImageFromMetadata,
  normalizeProvider,
  getDefaultAiProvider
} = require('../services/openai.service');
const { getUploadProductDetails, getDressMatchingAnalysisPrompt, getGeminiProductAnalysisPrompt } = require('../services/prompt'); 

const DEFAULT_CURRENCY = 'USD';
const FALLBACK_INR_TO_USD_RATE = 1 / 83;

function getInrToUsdRate() {
  const configuredRate = Number(process.env.INR_TO_USD_RATE);
  if (Number.isFinite(configuredRate) && configuredRate > 0) {
    return configuredRate;
  }
  return FALLBACK_INR_TO_USD_RATE;
}

function parseCurrency(value) {
  if (value === undefined || value === null || value === '') {
    return DEFAULT_CURRENCY;
  }
  return String(value).trim().toUpperCase();
}

function convertToUsd(amount, sourceCurrency) {
  if (sourceCurrency === 'USD') {
    return Number(amount.toFixed(2));
  }

  if (sourceCurrency === 'INR') {
    return Number((amount * getInrToUsdRate()).toFixed(2));
  }

  throw new AppError('unsupported currency. allowed values: USD, INR', 400);
}

async function resolveSourceCurrency(currency, adminId) {
  if (currency !== undefined && currency !== null && String(currency).trim() !== '') {
    return parseCurrency(currency);
  }

  const numericAdminId = Number(adminId);
  if (Number.isInteger(numericAdminId) && numericAdminId > 0) {
    try {
      return await getAdminCurrencyPreference(numericAdminId);
    } catch (error) {
      console.warn('Unable to load admin preferred currency, using USD fallback:', error.message);
    }
  }

  return DEFAULT_CURRENCY;
}



function parsePrice(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function parseMultiValueField(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || '').trim()).filter(Boolean);
  }

  return String(value || '')
    .split(/[,\n|/]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildAdminAttributePayload(body = {}, fallbackCategory = '') {
  const payload = {};
  const maybeSetString = (key, value) => {
    const normalized = String(value || '').trim();
    if (normalized) {
      payload[key] = normalized;
    }
  };
  const maybeSetArray = (key, value) => {
    const normalized = parseMultiValueField(value);
    if (normalized.length) {
      payload[key] = normalized;
    }
  };

  maybeSetString('product_type', body.product_type);
  maybeSetString('category', body.category || fallbackCategory);
  maybeSetString('sub_category', body.sub_category);
  maybeSetString('primary_color', body.primary_color);
  maybeSetArray('secondary_colors', body.secondary_colors || body.colors || body.color);
  maybeSetArray('color_family', body.color_family);
  maybeSetArray('material_estimated', body.material_estimated || body.materials || body.material);
  maybeSetString('finish', body.finish);
  maybeSetArray('style', body.styles || body.style);
  maybeSetArray('occasion', body.occasion);
  maybeSetArray('pattern', body.patterns || body.pattern);
  maybeSetArray('design_elements', body.design_elements || body.designs || body.design);
  maybeSetArray('embellishments', body.embellishments);
  maybeSetArray('craft_type', body.craft_type);
  maybeSetString('texture', body.texture);
  maybeSetString('visual_density', body.visual_density);
  maybeSetString('shape', body.shape);
  maybeSetArray('usage', body.usage);
  maybeSetArray('aesthetic_tags', body.aesthetic_tags);
  maybeSetString('cultural_inference', body.cultural_inference);
  maybeSetString('quality_inference', body.quality_inference);
  maybeSetString('target_gender', body.target_gender);
  maybeSetArray('complementary_dress_colors', body.complementary_dress_colors);
  maybeSetString('matching_notes', body.matching_notes);

  return payload;
}

// Normalise req.files (upload.fields) into a flat array
function getUploadedFiles(req) {
  const files = [];
  if (req.files && typeof req.files === 'object') {
    if (Array.isArray(req.files.images)) files.push(...req.files.images);
    if (Array.isArray(req.files.image)) files.push(...req.files.image);
  } else if (req.file) {
    files.push(req.file);
  }
  return files;
}

exports.addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    currency,
    admin_id,
    ai_provider,
    category,
    product_category_id,
    description = '',
    seo_title = '',
    seo_meta_description = '',
    tags = '',
    size = '',
    color = '',
    colors = '',
    color_hex = '',
    design = '',
    designs = '',
    pattern = '',
    patterns = '',
    style = '',
    styles = '',
    material = '',
    materials = ''
  } = req.body;
  console.log('Received addProduct request with body:', req.body);
  console.log('Product request body:', {
    name,
    price,
    category,
    size,
    colors: colors || color,
    color_hex,
    designs: designs || design,
    patterns: patterns || pattern,
    styles: styles || style,
    materials: materials || material
  });

  const uploadedFiles = getUploadedFiles(req);

  if (!name || !category || price === undefined || !uploadedFiles.length) {
    throw new AppError('name, price, category, and at least one image are required', 400);
  }

  const parsedPrice = parsePrice(price);
  if (parsedPrice === null) {
    throw new AppError('price must be a valid non-negative number', 400);
  }

  const sourceCurrency = await resolveSourceCurrency(currency, admin_id);
  const priceInUsd = convertToUsd(parsedPrice, sourceCurrency);
  const attributePayload = buildAdminAttributePayload(req.body, category);
  const attributeColorList = [
    ...(attributePayload.primary_color ? [attributePayload.primary_color] : []),
    ...(Array.isArray(attributePayload.secondary_colors) ? attributePayload.secondary_colors : []),
    ...parseMultiValueField(colors || color)
  ].filter(Boolean);

  // Resize primary image to max 1024px and run AI analysis
  const primaryFile = uploadedFiles[0];
  const selectedProvider = normalizeProvider(ai_provider || getDefaultAiProvider('openai'));
  let aiAnalysis = null;
  let aiAnalysisRaw = null;
  try {
    const resizedBuffer = await sharp(primaryFile.buffer)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .toBuffer();
    const prompt = selectedProvider === 'gemini'
      ? await getGeminiProductAnalysisPrompt()
      : await getUploadProductDetails();
    const analysisResult = await analyzeImageByProvider(resizedBuffer, prompt, selectedProvider);
    aiAnalysis = analysisResult.normalized;
    aiAnalysisRaw = analysisResult.raw;
    console.log('AI image analysis result:', aiAnalysis);
  } catch (e) {
    console.warn('AI image analysis failed, proceeding without it:', e.message);
  }

  // AI metadata takes priority; fall back to user-provided values
  const mergedMetadata = {
    colors: attributeColorList.join(',') || aiAnalysis?.colors?.join(',') || colors || color,
    color_hex: aiAnalysis?.color_hex?.join(',') || color_hex,
    category: attributePayload.category || category || aiAnalysis?.category || 'bangles',
    size: size || aiAnalysis?.size || '',
    designs: (attributePayload.design_elements || []).join(',') || aiAnalysis?.design?.join(',') || designs || design,
    patterns: (attributePayload.pattern || []).join(',') || aiAnalysis?.pattern?.join(',') || patterns || pattern,
    styles: (attributePayload.style || []).join(',') || aiAnalysis?.style?.join(',') || styles || style,
    materials: (attributePayload.material_estimated || []).join(',') || aiAnalysis?.material?.join(',') || materials || material
  };

  // Build description from AI analysis if user did not provide one
  const finalDescription = description || (aiAnalysis
    ? [
        aiAnalysis.colors?.length ? `Colors: ${aiAnalysis.colors.join(', ')}` : '',
        aiAnalysis.design?.length ? `Design: ${aiAnalysis.design.join(', ')}` : '',
        aiAnalysis.pattern?.length ? `Pattern: ${aiAnalysis.pattern.join(', ')}` : '',
        aiAnalysis.style?.length ? `Style: ${aiAnalysis.style.join(', ')}` : '',
        aiAnalysis.material?.length ? `Material: ${aiAnalysis.material.join(', ')}` : ''
      ].filter(Boolean).join('. ')
    : '');

  const uploadedUrls = await Promise.all(
    uploadedFiles.map((file) => uploadImage(file.buffer, file.mimetype))
  );
  const images = uploadedUrls.map((url, index) => ({
    image_url: url,
    is_primary_image: index === 0
  }));

  const product = await createProduct({
    name,
    price: priceInUsd,
    category,
    description: finalDescription,
    images,
    seoTitle: String(seo_title || name || '').trim(),
    seoMetaDescription: String(seo_meta_description || finalDescription || '').trim(),
    tags: String(tags || '').trim(),
    colors: mergedMetadata.colors,
    colorHexes: mergedMetadata.color_hex,
    productCategoryId: product_category_id ? Number(product_category_id) : null
  });

  // Update product description in DB with AI-generated text if it was auto-derived
  if (!description && finalDescription) {
    await updateProductById(product.id, { description: finalDescription }, null);
  }

  // Extract color family metadata for enhanced matching
  const extractedColors = aiAnalysis?.colors || [];
  const userProvidedColors = attributeColorList || [];
  const colorMetadata = extractColorMetadata(extractedColors, userProvidedColors);

  await syncProductAttributesById(
    product.id,
    { ...(aiAnalysisRaw || aiAnalysis || {}), ...attributePayload },
    mergedMetadata
  );

  // Store color family metadata in MySQL for filtering
  try {
    const pool = getPool();
    await pool.execute(`
      INSERT INTO product_color_metadata 
      (product_id, primary_color_family, secondary_color_families, compatible_color_families, color_group, extracted_colors, user_provided_colors)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        primary_color_family = VALUES(primary_color_family),
        secondary_color_families = VALUES(secondary_color_families),
        compatible_color_families = VALUES(compatible_color_families),
        color_group = VALUES(color_group)
    `, [
      product.id,
      colorMetadata.primary_color_family,
      JSON.stringify(colorMetadata.secondary_color_families),
      JSON.stringify(colorMetadata.compatible_color_families),
      colorMetadata.color_group,
      JSON.stringify(colorMetadata.extracted_raw),
      JSON.stringify(colorMetadata.user_provided_raw)
    ]);
  } catch (colorMetaError) {
    console.warn('Could not store color metadata:', colorMetaError.message);
  }

  // Store AI metadata (colors, pattern, style, material) for attribute-based ranking
  try {
    const pool = getPool();
    
    // Parse colors from merged metadata
    const colorsArray = attributeColorList.length > 0 
      ? attributeColorList 
      : (aiAnalysis?.colors || []);
    
    const patternArray = (attributePayload.pattern || aiAnalysis?.pattern || []);
    const styleArray = (attributePayload.style || aiAnalysis?.style || []);
    const materialArray = (attributePayload.material_estimated || aiAnalysis?.material || []);

    await pool.execute(`
      INSERT INTO product_ai_metadata 
      (product_id, colors, pattern, style, material)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        colors = VALUES(colors),
        pattern = VALUES(pattern),
        style = VALUES(style),
        material = VALUES(material)
    `, [
      product.id,
      JSON.stringify(colorsArray),
      JSON.stringify(patternArray),
      JSON.stringify(styleArray),
      JSON.stringify(materialArray)
    ]);
    console.log(`✓ Stored AI metadata for product ${product.id}:`, {
      colors: colorsArray,
      pattern: patternArray,
      style: styleArray,
      material: materialArray
    });
  } catch (aiMetaError) {
    console.warn('Could not store AI metadata:', aiMetaError.message);
  }

  // Extract primary and secondary colors from product.color_details array (using is_primary_color flag)
  const primaryColorObj = product.color_details?.find(c => c.is_primary_color);
  const primaryColorFromDb = primaryColorObj?.name || attributePayload.primary_color || '';
  const secondaryColorsFromDb = product.color_details?.filter(c => !c.is_primary_color).map(c => c.name) || attributePayload.secondary_colors || [];

  const aiIndexing = await runPrimaryImageAiWorkflow({
    productId: product.id,
    imageUrl: product.image_url,
    metadata: buildAiMetadata({
      ...mergedMetadata,
      title: name,
      description: finalDescription,
      primary_color: primaryColorFromDb,
      secondary_colors: secondaryColorsFromDb,
      occasion: attributePayload.occasion,
      craft_type: attributePayload.craft_type,
      usage: attributePayload.usage,
      price: priceInUsd,
      image_url: product.image_url
    })
  });

  res.status(201).json({
    ...product,
    description: finalDescription,
    ai_provider: selectedProvider,
    ai_indexing: aiIndexing,
    ...(aiAnalysis ? { ai_analysis: aiAnalysis } : {}),
    ...(aiAnalysisRaw ? { ai_analysis_raw: aiAnalysisRaw } : {})
  });
});

exports.generateProductDescriptionFromAi = asyncHandler(async (req, res) => {
  const {
    ai_provider = 'openai',
    name = '',
    category = '',
    description = '',
    color = '',
    colors = '',
    size = '',
    design = '',
    designs = '',
    pattern = '',
    patterns = '',
    style = '',
    styles = '',
    material = '',
    materials = ''
  } = req.body || {};

  const uploadedFiles = getUploadedFiles(req);

  if (!uploadedFiles.length) {
    throw new AppError('Upload a primary product image before generating AI content', 400);
  }

  let aiAnalysis = null;
  let aiAnalysisRaw = null;
  const selectedProvider = normalizeProvider(ai_provider || getDefaultAiProvider('openai'));
  try {
    const resizedBuffer = await sharp(uploadedFiles[0].buffer)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .toBuffer();
    const prompt = selectedProvider === 'gemini'
      ? await getGeminiProductAnalysisPrompt()
      : await getUploadProductDetails();
    const analysisResult = await analyzeImageByProvider(resizedBuffer, prompt, selectedProvider);
    aiAnalysis = analysisResult.normalized;
    aiAnalysisRaw = analysisResult.raw;
  } catch (error) {
    console.warn('AI description image analysis failed:', error.message);
    throw new AppError('The uploaded primary image could not be analyzed for AI content generation', 502);
  }

  const generatedContent = await generateProductDescriptionByProvider({
    name,
    category,
    existingDescription: description,
    colors: colors || color,
    size,
    design: designs || design,
    pattern: patterns || pattern,
    style: styles || style,
    material: materials || material,
    aiAnalysis,
    aiAnalysisRaw
  }, selectedProvider);

  if (!generatedContent?.description) {
    throw new AppError('AI could not generate product content right now', 502);
  }

  res.status(200).json({
    ai_provider: selectedProvider,
    title: generatedContent.title || String(name || '').trim(),
    description: generatedContent.description,
    tags: Array.isArray(generatedContent.tags) ? generatedContent.tags : [],
    seo_title: generatedContent.seo_title || generatedContent.title || String(name || '').trim(),
    seo_meta_description: generatedContent.seo_meta_description || generatedContent.description.slice(0, 160),
    ...(aiAnalysis ? { ai_analysis: aiAnalysis } : {}),
    ...(aiAnalysisRaw ? { ai_analysis_raw: aiAnalysisRaw } : {})
  });
});

exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await fetchAllProducts();
  res.status(200).json(products);
});

exports.getFeaturedProducts = asyncHandler(async (req, res) => {
  const parsedLimit = Number(req.query.limit);
  const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 8;

  const products = await fetchFeaturedProducts(limit);
  res.status(200).json(products);
});

exports.searchProducts = asyncHandler(async (req, res) => {
  const query = req.query.q || req.body.q || '';
  if (!query || query.trim().length === 0) {
    return res.status(200).json([]);
  }

  const parsedLimit = Number(req.query.limit) || Number(req.body.limit);
  const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 10;

  const products = await searchProductsService(query.trim(), limit);
  res.status(200).json(products);
});

exports.getProduct = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('invalid product id', 400);
  }

  const product = await fetchProductById(id);
  if (!product) {
    throw new AppError('product not found', 404);
  }

  res.status(200).json(product);
});

exports.getAiIndexingMode = asyncHandler(async (req, res) => {
  res.status(200).json(getAiIndexingModeState());
});

exports.updateAiIndexingMode = asyncHandler(async (req, res) => {
  const { mode } = req.body || {};
  if (!mode) {
    throw new AppError('mode is required', 400);
  }

  const nextMode = setAiIndexingMode(mode);
  res.status(200).json({
    mode: nextMode,
    source: 'runtime',
    message: `AI indexing mode set to ${nextMode}`
  });
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('invalid product id', 400);
  }

  const existingProduct = await fetchProductById(id);
  if (!existingProduct) {
    throw new AppError('product not found', 404);
  }

  const updates = {};
  const attributePayload = buildAdminAttributePayload(req.body, req.body.category || existingProduct.category || 'bangles');
  const attributeColorList = [
    ...(attributePayload.primary_color ? [attributePayload.primary_color] : []),
    ...(Array.isArray(attributePayload.secondary_colors) ? attributePayload.secondary_colors : []),
    ...parseMultiValueField(req.body.colors || req.body.color || '')
  ].filter(Boolean);
  // Extract primary and secondary colors from product.color_details array (using is_primary_color flag)
  const primaryColorObjUpdate = existingProduct.color_details?.find(c => c.is_primary_color);
  const primaryColorFromDbUpdate = primaryColorObjUpdate?.name || attributePayload.primary_color || existingProduct.attributes?.primary_color || '';
  const secondaryColorsFromDbUpdate = existingProduct.color_details?.filter(c => !c.is_primary_color).map(c => c.name) || attributePayload.secondary_colors || existingProduct.attributes?.secondary_colors || [];

  const aiMetadata = buildAiMetadata({
    title: req.body.name || existingProduct.name || '',
    description: req.body.description || existingProduct.description || '',
    colors: attributeColorList.join(',') || req.body.colors || req.body.color || '',
    primary_color: primaryColorFromDbUpdate,
    secondary_colors: secondaryColorsFromDbUpdate,
    color_hex: req.body.color_hex || existingProduct.color_hex || '',
    size: req.body.size || existingProduct.size || '',
    designs: (attributePayload.design_elements || []).join(',') || req.body.designs || req.body.design || '',
    patterns: (attributePayload.pattern || []).join(',') || req.body.patterns || req.body.pattern || '',
    styles: (attributePayload.style || []).join(',') || req.body.styles || req.body.style || '',
    materials: (attributePayload.material_estimated || []).join(',') || req.body.materials || req.body.material || '',
    occasion: attributePayload.occasion || existingProduct.attributes?.occasion || [],
    craft_type: attributePayload.craft_type || existingProduct.attributes?.craft_type || [],
    usage: attributePayload.usage || existingProduct.attributes?.usage || [],
    category: attributePayload.category || req.body.category || existingProduct.category || 'bangles',
    price: req.body.price !== undefined ? parsePrice(req.body.price) : existingProduct.price,
    image_url: existingProduct.image_url || ''
  });

  if (req.body.name !== undefined) updates.name = req.body.name;
  if (req.body.category !== undefined) updates.category = req.body.category;
  if (req.body.description !== undefined) updates.description = req.body.description;
  if (req.body.color !== undefined || req.body.colors !== undefined) updates.colors = String(req.body.colors ?? req.body.color ?? '').trim();
  if (req.body.color_hex !== undefined) updates.color_hex = String(req.body.color_hex || '').trim();
  if (req.body.seo_title !== undefined) updates.seo_title = String(req.body.seo_title || '').trim() || null;
  if (req.body.seo_meta_description !== undefined) updates.seo_meta_description = String(req.body.seo_meta_description || '').trim() || null;
  if (req.body.tags !== undefined) updates.tags = String(req.body.tags || '').trim() || null;

  if (req.body.product_category_id !== undefined) {
    const pcId = Number(req.body.product_category_id);
    updates.product_category_id = Number.isInteger(pcId) && pcId > 0 ? pcId : null;
  }

  if (req.body.price !== undefined) {
    const parsedPrice = parsePrice(req.body.price);
    if (parsedPrice === null) {
      throw new AppError('price must be a valid non-negative number', 400);
    }
    const sourceCurrency = await resolveSourceCurrency(req.body.currency, req.body.admin_id);
    updates.price = convertToUsd(parsedPrice, sourceCurrency);
  }

  const uploadedFiles = getUploadedFiles(req);
  let replacementImages = null;

  if (uploadedFiles.length) {
    const oldImages = existingProduct.images || [];
    const uploadedUrls = await Promise.all(
      uploadedFiles.map((file) => uploadImage(file.buffer, file.mimetype))
    );
    replacementImages = uploadedUrls.map((url, index) => ({
      image_url: url,
      is_primary_image: index === 0
    }));
    // cleanup old images from storage after successful uploads
    for (const old of oldImages) {
      try { await deleteImageByUrl(old.image_url); } catch (e) { console.warn('Old image cleanup:', e.message); }
    }
  }

  if (!Object.keys(updates).length && !replacementImages) {
    throw new AppError('no fields provided for update', 400);
  }

  const updatedProduct = await updateProductById(id, updates, replacementImages);

  let aiIndexing = null;
  if (replacementImages && replacementImages.length) {
    aiIndexing = await runPrimaryImageAiWorkflow({
      productId: updatedProduct.id,
      imageUrl: updatedProduct.image_url,
      metadata: aiMetadata
    });
  }

  await syncProductAttributesById(
    updatedProduct.id,
    { ...(existingProduct.attributes || {}), ...attributePayload },
    aiMetadata
  );

  // Update AI metadata (colors, pattern, style, material) for attribute-based ranking
  try {
    const pool = getPool();
    
    const patternArray = (attributePayload.pattern || req.body.patterns || req.body.pattern || []);
    const styleArray = (attributePayload.style || req.body.styles || req.body.style || []);
    const materialArray = (attributePayload.material_estimated || req.body.materials || req.body.material || []);

    await pool.execute(`
      INSERT INTO product_ai_metadata 
      (product_id, pattern, style, material)
      VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        pattern = VALUES(pattern),
        style = VALUES(style),
        material = VALUES(material)
    `, [
      updatedProduct.id,
      JSON.stringify(patternArray),
      JSON.stringify(styleArray),
      JSON.stringify(materialArray)
    ]);
  } catch (aiMetaError) {
    console.warn('Could not update AI metadata during product edit:', aiMetaError.message);
  }

  const refreshedProduct = await fetchProductById(updatedProduct.id);

  res.status(200).json({
    ...(refreshedProduct || updatedProduct),
    ...(aiIndexing ? { ai_indexing: aiIndexing } : {})
  });
});

exports.setPrimaryProductImage = asyncHandler(async (req, res) => {
  const productId = Number(req.params.id);
  const imageId = Number(req.params.imageId);

  if (!Number.isInteger(productId) || productId <= 0 || !Number.isInteger(imageId) || imageId <= 0) {
    throw new AppError('invalid product or image id', 400);
  }

  const updated = await setPrimaryImage(productId, imageId);
  if (!updated) {
    throw new AppError('image not found for this product', 404);
  }

  res.status(200).json(updated);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError('invalid product id', 400);
  }

  const existingProduct = await fetchProductById(id);
  if (!existingProduct) {
    throw new AppError('product not found', 404);
  }

  await deleteProductById(id); // CASCADE also removes product_images rows

  // Clean up stored images
  const images = existingProduct.images || [];
  for (const img of images) {
    try { await deleteImageByUrl(img.image_url); } catch (e) { console.warn('Image cleanup failed:', e.message); }
  }

  let vectorDeleted = false;
  try {
    const vectorResult = await deleteProductFromSimilarity(id);
    vectorDeleted = Boolean(vectorResult?.deleted);
  } catch (error) {
    console.warn(`Vector cleanup failed for product ${id}:`, error.message);
  }

  res.status(200).json({
    message: 'product deleted successfully',
    vector_deleted: vectorDeleted
  });
});

exports.matchBangles = asyncHandler(async (req, res) => {
  const {
    image_url: imageUrl = '',
    ai_provider,
    title = 'Uploaded dress query',
    description = '',
    category = 'bangles',
    size = '',
    color = '',
    colors = '',
    color_hex = '',
    design = '',
    designs = '',
    pattern = '',
    patterns = '',
    style = '',
    styles = '',
    material = '',
    materials = '',
    occasion = '',
    craft_type = '',
    usage = '',
    primary_color = '',
    secondary_colors = '',
    target_gender = 'women',
    complementary_dress_colors = '',
    matching_notes = ''
  } = req.body || {};
  const imageFileBuffer = req.file ? req.file.buffer : null;

  if (!imageUrl && !imageFileBuffer) {
    throw new AppError('image_url or image_file is required', 400);
  }

  const selectedProvider = normalizeProvider(ai_provider || getDefaultAiProvider());
  let queryMetadata = buildAiMetadata({
    title,
    description,
    category,
    size,
    colors: colors || color,
    color_hex,
    designs: designs || design,
    patterns: patterns || pattern,
    styles: styles || style,
    materials: materials || material,
    occasion,
    craft_type,
    usage,
    primary_color,
    secondary_colors,
    target_gender,
    complementary_dress_colors,
    matching_notes
  });

  if (imageFileBuffer) {
    try {
      const resizedBuffer = await sharp(imageFileBuffer)
        .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
        .toBuffer();
      const prompt = await getDressMatchingAnalysisPrompt();
      console.log('selectedProvider:', selectedProvider);
      const analysisResult = await analyzeImageByProvider(resizedBuffer, prompt, selectedProvider);
      console.log('Dress analysis result for matching:', analysisResult);
      const analysisRaw = analysisResult?.raw && typeof analysisResult.raw === 'object'
        ? analysisResult.raw
        : {};
      const analysisNormalized = analysisResult?.normalized && typeof analysisResult.normalized === 'object'
        ? analysisResult.normalized
        : {};

      queryMetadata = buildAiMetadata({
        ...queryMetadata,
        ...analysisRaw,
        ...analysisNormalized,
        spec_view: '',
        intent_view: '',
        semantic_query: '',
        title: queryMetadata.title || analysisRaw?.ecommerce?.title || title || 'Uploaded dress query',
        description: queryMetadata.description || analysisRaw?.ecommerce?.short_description || description || '',
        matching_notes: analysisNormalized.matching_notes || analysisRaw?.ecommerce?.matching_notes || queryMetadata.matching_notes || '',
        category: 'bangles'
      });
    } catch (analysisError) {
      console.warn('Dress analysis fallback used during matching:', analysisError.message);
    }
  }
  console.log('queryMetadata',queryMetadata);

  try {
    const rawMatches = await matchBanglesFromAI({
      imageUrl,
      imageFileBuffer,
      design: (queryMetadata.design || []).join(', ') || design,
      style: (queryMetadata.style || []).join(', ') || style,
      metadata: queryMetadata
    });
    console.log('Raw matches from AI:', rawMatches);

    const minScore = Number(process.env.AI_MATCH_MIN_SCORE || 0.15);  // Very permissive - accept 15%+ matches
    const minSimilarity = Number(process.env.AI_MATCH_MIN_SIMILARITY || 0.1);  // Very permissive - accept 10%+ similarity
    const minColorSimilarity = Number(process.env.AI_MATCH_MIN_COLOR_SIMILARITY || 0.7);

    const aiFiltered = (Array.isArray(rawMatches) ? rawMatches : [])
      .map((match) => ({
        id: Number(match?.id ?? match?.product_id ?? 0),
        similarity: Number(match?.similarity ?? 0),
        score: Number(match?.score ?? 0),
        matched_colors: Array.isArray(match?.matched_colors) ? match.matched_colors : []
      }))
      .filter((match) => match.id > 0 && match.similarity >= minSimilarity);

    console.log(`AI Filtered matches: ${aiFiltered.length} results after threshold, minScore=${minScore}, minSimilarity=${minSimilarity}`);

    // If no matches after filtering, get ALL matches without strict thresholds
    let matchesToUse = aiFiltered;
    if (aiFiltered.length === 0 && Array.isArray(rawMatches) && rawMatches.length > 0) {
      console.log('⚠️  No matches passed thresholds. Using all AI results without filtering.');
      matchesToUse = (rawMatches || [])
        .map((match) => ({
          id: Number(match?.id ?? match?.product_id ?? 0),
          similarity: Number(match?.similarity ?? 0),
          score: Number(match?.score ?? 0),
          matched_colors: Array.isArray(match?.matched_colors) ? match.matched_colors : []
        }))
        .filter((match) => match.id > 0);
    }

    // If Qdrant returned 0 results entirely, fetch all products from DB for attribute-based ranking
    if (aiFiltered.length === 0 && (!Array.isArray(rawMatches) || rawMatches.length === 0)) {
      console.log('⚠️  AI Service returned 0 matches. Fetching all products for attribute-based ranking.');
      try {
        const pool = getPool();
        const [allProducts] = await pool.query('SELECT id FROM products WHERE is_active = 1 LIMIT 8');
        if (Array.isArray(allProducts) && allProducts.length > 0) {
          matchesToUse = allProducts.map(p => ({
            id: Number(p.id),
            similarity: 0,  // No AI similarity since Qdrant found nothing
            score: 0,
            matched_colors: []
          }));
          console.log(`Retrieved ${matchesToUse.length} products for fallback ranking`);
        }
      } catch (dbError) {
        console.warn('Failed to fetch fallback products:', dbError.message);
      }
    }

    // Extract dress colors, patterns, style, material from analyzed metadata
    const dressColors = (queryMetadata.colors || []).slice(0, 3);
    const dressPattern = (queryMetadata.pattern || []).slice(0, 2);
    const dressStyle = (queryMetadata.style || []).slice(0, 2);
    const dressMaterial = (queryMetadata.material || []).slice(0, 2);
    
    console.log(`Dress attributes detected - Colors: ${dressColors.join(', ')}, Pattern: ${dressPattern.join(', ')}, Style: ${dressStyle.join(', ')}`);

    // Color-based ranking: use COLOR as primary filter, pattern/style/material only for boosting
    let finalMatches = [];
    const minFinalScore = Number(process.env.AI_MATCH_MIN_FINAL_SCORE || 0.1);  // 10% minimum

    if (dressColors.length === 0) {
      // No colors - rank by AI similarity only
      console.log('⚠️  No colors extracted. Using AI similarity only.');
      finalMatches = matchesToUse
        .sort((a, b) => (b.similarity + b.score) - (a.similarity + a.score))
        .slice(0, 8)
        .map(match => ({
          id: match.id,
          ai_similarity: match.similarity,
          attribute_score: 0,
          final_score: match.similarity || 0,
          scores: {
            primary_color: 0,
            pattern: 0,
            style: 0,
            material: 0,
            secondary_color: 0
          },
          matched_attributes: {},
          score: match.score
        }));
    } else {
      // Color-based matching: PRIMARY color → SECONDARY color → boost with pattern/style/material
      console.log(`🎨 Matching by PRIMARY color (${dressColors[0]}), fallback to SECONDARY colors (${dressColors.slice(1).join(', ')})`);
      
      const rankedByColor = await Promise.all(
        matchesToUse.map(async match => {
          try {
            // Get product metadata
            const pool = getPool();
            const [rows] = await pool.query(
              'SELECT colors, pattern, style, material FROM product_ai_metadata WHERE product_id = ?',
              [match.id]
            );
            const product = rows && rows[0] ? rows[0] : null;
            
            if (!product) {
              return {
                id: match.id,
                ai_similarity: match.similarity,
                attribute_score: 0,
                final_score: match.similarity * 0.5,
                matching_percentage: Math.round((match.similarity * 0.5) * 100),
                scores: { primary_color: 0, pattern: 0, style: 0, material: 0, secondary_color: 0 },
                matched_attributes: {},
                score: match.score
              };
            }

            // COLOR MATCHING (FILTER-BASED)
            const productColors = product.colors ? JSON.parse(product.colors) : [];
            let colorScore = 0;
            let colorMatchType = 'none';  // Track which color matched
            
            // PRIMARY color matching
            if (productColors.length > 0 && dressColors[0]) {
              const primaryMatch = productColors.some(c => 
                String(c).toLowerCase().includes(String(dressColors[0]).toLowerCase())
              );
              if (primaryMatch) {
                colorScore = 1.0;
                colorMatchType = 'primary';
              } else {
                // SECONDARY color matching (fallback)
                const secondaryMatch = dressColors.slice(1).some(dc => 
                  productColors.some(pc => 
                    String(pc).toLowerCase().includes(String(dc).toLowerCase())
                  )
                );
                if (secondaryMatch) {
                  colorScore = 0.8;  // Secondary match gets 80%
                  colorMatchType = 'secondary';
                }
              }
            }

            // BOOSTING: Pattern, Style, Material (only for ranking, not filtering)
            let boost = 0;
            const productPattern = product.pattern ? JSON.parse(product.pattern) : [];
            const productStyle = product.style ? JSON.parse(product.style) : [];
            const productMaterial = product.material ? JSON.parse(product.material) : [];

            if (productPattern.length > 0 && dressPattern.some(dp => productPattern.some(pp => String(pp).toLowerCase().includes(String(dp).toLowerCase())))) {
              boost += 0.1;
            }
            if (productStyle.length > 0 && dressStyle.some(ds => productStyle.some(ps => String(ps).toLowerCase().includes(String(ds).toLowerCase())))) {
              boost += 0.1;
            }
            if (productMaterial.length > 0 && dressMaterial.some(dm => productMaterial.some(pm => String(pm).toLowerCase().includes(String(dm).toLowerCase())))) {
              boost += 0.05;
            }

            // Final Score: Primary weight on color match + AI similarity + boost
            const finalScore = Math.min(1.0, (colorScore * 0.6) + (match.similarity * 0.3) + boost);
            const matchingPercentage = Math.round(finalScore * 100);

            return {
              id: match.id,
              ai_similarity: match.similarity,
              attribute_score: colorScore + boost,
              final_score: Math.max(minFinalScore, finalScore),
              matching_percentage: matchingPercentage,
              scores: {
                primary_color: colorScore,
                pattern: productPattern.length > 0 && dressPattern.some(dp => productPattern.some(pp => String(pp).toLowerCase().includes(String(dp).toLowerCase()))) ? 1 : 0,
                style: productStyle.length > 0 && dressStyle.some(ds => productStyle.some(ps => String(ps).toLowerCase().includes(String(ds).toLowerCase()))) ? 1 : 0,
                material: productMaterial.length > 0 && dressMaterial.some(dm => productMaterial.some(pm => String(pm).toLowerCase().includes(String(dm).toLowerCase()))) ? 1 : 0,
                secondary_color: productColors.slice(1).some(pc => dressColors.some(dc => String(pc).toLowerCase().includes(String(dc).toLowerCase()))) ? 0.5 : 0
              },
              matched_attributes: {
                colors: productColors,
                pattern: productPattern,
                style: productStyle,
                material: productMaterial
              },
              score: match.score
            };
          } catch (err) {
            console.warn(`Error ranking product ${match.id}:`, err.message);
            return {
              id: match.id,
              ai_similarity: match.similarity,
              attribute_score: 0,
              final_score: match.similarity * 0.5,
              matching_percentage: Math.round((match.similarity * 0.5) * 100),
              scores: { primary_color: 0, pattern: 0, style: 0, material: 0, secondary_color: 0 },
              matched_attributes: {},
              score: match.score
            };
          }
        })
      );

      finalMatches = rankedByColor
        .sort((a, b) => b.final_score - a.final_score)
        .filter(m => m.final_score >= minFinalScore)
        .slice(0, 8);
        
      console.log(`✅ Found ${finalMatches.length} matches ranked by color`);
    }

    const responseFinalMatches = finalMatches.map(match => ({
      id: match.id,
      similarity: match.final_score || match.ai_similarity || 0,
      matching_percentage: match.matching_percentage || Math.round((match.final_score || 0) * 100),
      ai_similarity: match.ai_similarity || 0,
      attribute_score: match.attribute_score || 0,
      final_score: match.final_score,
      scores: match.scores || {
        primary_color: 0,
        pattern: 0,
        style: 0,
        material: 0,
        secondary_color: 0
      },
      matched_attributes: match.matched_attributes || match.metadata?.bangle || {},
      score: match.score
    }));

    res.status(200).json({
      matches: responseFinalMatches,
      dress_metadata: {
        colors: dressColors,
        primary_color: dressColors[0],
        secondary_colors: dressColors.slice(1),
        pattern: dressPattern,
        style: dressStyle,
        material: dressMaterial
      },
      query_metadata: {
        title: queryMetadata.title,
        colors: queryMetadata.colors,
        primary_color: queryMetadata.primary_color,
        secondary_colors: queryMetadata.secondary_colors,
        occasion: queryMetadata.occasion,
        style: queryMetadata.style
      },
      ranking_system: {
        weights: {
          primary_color: '40%',
          pattern: '25%',
          style: '20%',
          material: '10%',
          secondary_color: '5%'
        },
        ai_similarity_weight: '25%',
        attribute_ranking_weight: '75%',
        min_final_score_threshold: minFinalScore
      },
      matching_stats: {
        ai_matches_found: matchesToUse.length,
        ranked_matches_found: finalMatches.length,
        final_matches_found: finalMatches.length,
        ranking_message: finalMatches.length > 0
          ? `Found ${finalMatches.length} bangles ranked by primary color match with pattern/style/material boosting`
          : `No bangles found. Try different colors or style.`
      },
      message: finalMatches.length
        ? 'Matching bangles found with multi-attribute ranking analysis.'
        : 'No matching bangles found. Try different colors or style.'
    });
  } catch (error) {
    throw new AppError(`AI match failed: ${error.message}`, 502);
  }
});
