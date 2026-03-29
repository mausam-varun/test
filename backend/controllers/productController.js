const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const {
  createProduct,
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductById,
  updateProductById,
  setPrimaryImage,
  deleteProductById
} = require('../services/productService');
const { uploadImage, deleteImageByUrl } = require('../services/cloudinaryService');
const { deleteProductFromSimilarity, matchBanglesFromAI } = require('../services/aiProductService');
const {
  buildAiMetadata,
  getAiIndexingModeState,
  runPrimaryImageAiWorkflow,
  setAiIndexingMode
} = require('../services/productAiWorkflowService');
const sharp = require('sharp');
const { analyzeImage, generateBangleImageFromMetadata } = require('../services/openai.service');
const { getUploadProductDetails } = require('../services/prompt'); 




function parsePrice(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
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
    category,
    description = '',
    size = '',
    colors = '',
    color_hex = '',
    designs = '',
    patterns = '',
    styles = '',
    materials = ''
  } = req.body;
  console.log('Received addProduct request with body:', req.body);
  console.log('Product request body:', {
    name, price, category, size, colors, color_hex, designs, patterns, styles, materials
  });

  const uploadedFiles = getUploadedFiles(req);

  if (!name || !category || price === undefined || !uploadedFiles.length) {
    throw new AppError('name, price, category, and at least one image are required', 400);
  }

  const parsedPrice = parsePrice(price);
  if (parsedPrice === null) {
    throw new AppError('price must be a valid non-negative number', 400);
  }

  // Resize primary image to max 1024px and run AI analysis
  const primaryFile = uploadedFiles[0];
  let aiAnalysis = null;
  try {
    const resizedBuffer = await sharp(primaryFile.buffer)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .toBuffer();
    let prompt = await getUploadProductDetails()
    aiAnalysis = await analyzeImage(resizedBuffer, prompt);
    console.log('AI image analysis result:', aiAnalysis);
  } catch (e) {
    console.warn('AI image analysis failed, proceeding without it:', e.message);
  }

  // AI metadata takes priority; fall back to user-provided values
  const mergedMetadata = {
    colors: aiAnalysis?.colors?.join(',') || colors,
    color_hex: aiAnalysis?.color_hex?.join(',') || color_hex,
    category: category || aiAnalysis?.category || 'bangles',
    size: size || aiAnalysis?.size || '',
    designs: aiAnalysis?.design?.join(',') || designs,
    patterns: aiAnalysis?.pattern?.join(',') || patterns,
    styles: aiAnalysis?.style?.join(',') || styles,
    materials: aiAnalysis?.material?.join(',') || materials
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

  const product = await createProduct({ name, price: parsedPrice, category, description: finalDescription, images });

  // Update product description in DB with AI-generated text if it was auto-derived
  if (!description && finalDescription) {
    await updateProductById(product.id, { description: finalDescription }, null);
  }

  const aiIndexing = await runPrimaryImageAiWorkflow({
    productId: product.id,
    imageUrl: product.image_url,
    metadata: buildAiMetadata(mergedMetadata)
  });

  res.status(201).json({
    ...product,
    description: finalDescription,
    ai_indexing: aiIndexing,
    ...(aiAnalysis ? { ai_analysis: aiAnalysis } : {})
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
  const aiMetadata = buildAiMetadata({
    colors: req.body.colors || '',
    color_hex: req.body.color_hex || '',
    size: req.body.size || '',
    designs: req.body.designs || '',
    patterns: req.body.patterns || '',
    styles: req.body.styles || '',
    materials: req.body.materials || '',
    category: req.body.category || existingProduct.category || 'bangles'
  });

  if (req.body.name !== undefined) updates.name = req.body.name;
  if (req.body.category !== undefined) updates.category = req.body.category;
  if (req.body.description !== undefined) updates.description = req.body.description;

  if (req.body.price !== undefined) {
    const parsedPrice = parsePrice(req.body.price);
    if (parsedPrice === null) {
      throw new AppError('price must be a valid non-negative number', 400);
    }
    updates.price = parsedPrice;
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

  res.status(200).json({
    ...updatedProduct,
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
  const { image_url: imageUrl = '', design = '', style = '' } = req.body;
  const imageFileBuffer = req.file ? req.file.buffer : null;

  if (!imageUrl && !imageFileBuffer) {
    throw new AppError('image_url or image_file is required', 400);
  }

  try {
    const matches = await matchBanglesFromAI({ imageUrl, imageFileBuffer, design, style });

    let queryMetadata = null;
    let generatedImageBase64 = null;
    if (imageFileBuffer) {
      try {
        const resizedBuffer = await sharp(imageFileBuffer)
          .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
          .toBuffer();
        const prompt = await getUploadProductDetails();
        queryMetadata = await analyzeImage(resizedBuffer, prompt);
        generatedImageBase64 = await generateBangleImageFromMetadata(queryMetadata || {});
      } catch (analysisError) {
        console.warn('Query image analysis failed:', analysisError.message);
      }
    }

    res.status(200).json({
      matches,
      query_metadata: queryMetadata,
      generated_image_base64: generatedImageBase64
    });
  } catch (error) {
    throw new AppError(`AI match failed: ${error.message}`, 502);
  }
});
