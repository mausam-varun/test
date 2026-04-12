#!/usr/bin/env node
/**
 * Re-index all products in Qdrant with updated AI processing
 * Run: node backend/services/reindexAllProducts.js
 */

const { getPool, initializeDatabase } = require('./db.js');
const { processProductForSimilarity } = require('./aiProductService.js');

async function reindexAllProducts() {
  console.log('🔄 Starting product re-indexing...\n');
  
  try {
    // Initialize database
    await initializeDatabase();
    const pool = getPool();
    
    // Get all products
    const [products] = await pool.execute(`
      SELECT 
        id, 
        name, 
        description, 
        image_url,
        category
      FROM products
      ORDER BY id ASC
    `);

    if (!products || products.length === 0) {
      console.log('❌ No products found in database');
      return;
    }

    console.log(`📦 Found ${products.length} products to re-index\n`);

    let successCount = 0;
    let failureCount = 0;

    for (const product of products) {
      try {
        console.log(`⏳ Processing Product ${product.id}: ${product.name}`);
        
        const result = await processProductForSimilarity({
          productId: product.id,
          imageUrl: product.image_url,
          metadata: {
            title: product.name,
            description: product.description,
            category: 'bangles',
            image_url: product.image_url
          }
        });

        if (result && result.stored) {
          console.log(`  ✅ Successfully indexed (${result.payload?.product_id})\n`);
          successCount++;
        } else {
          console.log(`  ⚠️  Returned but not stored\n`);
          failureCount++;
        }

      } catch (productError) {
        console.log(`  ❌ Error: ${productError.message}\n`);
        failureCount++;
      }

      // Small delay between products
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n' + '='.repeat(60));
    console.log(`✅ Re-indexing complete!`);
    console.log(`   Successful: ${successCount}/${products.length}`);
    console.log(`   Failed: ${failureCount}/${products.length}`);
    console.log('='.repeat(60));

    process.exit(0);

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

reindexAllProducts();
