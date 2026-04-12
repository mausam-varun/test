#!/usr/bin/env node

/**
 * Reindex products into Qdrant with correct primary colors
 * This script fixes the primary color mismatch issue in Qdrant records
 */

const { getPool } = require('./services/db');
const { fetchProductById } = require('./services/productService');
const { buildAiMetadata, runPrimaryImageAiWorkflow, setAiIndexingMode } = require('./services/productAiWorkflowService');

async function reindexProduct(productId) {
  try {
    console.log(`\n📍 Reindexing product ${productId}...`);

    const product = await fetchProductById(productId);
    if (!product) {
      console.log(`❌ Product ${productId} not found`);
      return false;
    }

    if (!product.image_url) {
      console.log(`⚠️  Product ${productId} has no image, skipping`);
      return false;
    }

    // Extract primary color from product.color_details (where is_primary_color = true)
    const primaryColorObj = product.color_details?.find(c => c.is_primary_color);
    const primaryColor = primaryColorObj?.name || '';
    const secondaryColors = product.color_details?.filter(c => !c.is_primary_color).map(c => c.name) || [];

    console.log(`  Primary Color (from DB): ${primaryColor}`);
    console.log(`  Secondary Colors (from DB): ${secondaryColors.join(', ')}`);
    console.log(`  Image: ${product.image_url}`);

    // Build metadata with correct colors
    const metadata = buildAiMetadata({
      title: product.name || product.title,
      description: product.description,
      primary_color: primaryColor,
      secondary_colors: secondaryColors,
      colors: [primaryColor, ...secondaryColors].filter(Boolean),
      category: product.category || 'bangles',
      price: product.price,
      image_url: product.image_url
    });

    // Set sync mode for immediate processing
    setAiIndexingMode('sync');

    // Trigger AI indexing in sync mode
    const result = await runPrimaryImageAiWorkflow({
      productId: product.id,
      imageUrl: product.image_url,
      metadata
    });

    console.log(`✅ Reindex result:`, result);
    return result.attempted;
  } catch (error) {
    console.error(`❌ Error reindexing product ${productId}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting product reindexing with correct primary colors...\n');

  try {
    const db = getPool();

    // Get all products that need reindexing
    const [products] = await db.execute(
      `SELECT DISTINCT product_id FROM product_colors ORDER BY product_id ASC`
    );

    const productIds = [...new Set(products.map(p => p.product_id))];
    console.log(`Found ${productIds.length} products to reindex:\n${productIds.join(', ')}\n`);

    let successCount = 0;
    for (const productId of productIds) {
      const success = await reindexProduct(productId);
      if (success) successCount++;
      // Small delay between reindexing
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`\n📊 Reindexing Summary:`);
    console.log(`   Total Products: ${productIds.length}`);
    console.log(`   Successfully Reindexed: ${successCount}`);
    console.log(`\n✅ Reindexing complete!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('Uncaught error:', error);
    process.exit(1);
  });
}

module.exports = { reindexProduct };
