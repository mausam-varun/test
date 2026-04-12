#!/usr/bin/env node

/**
 * Direct Qdrant reindex - Update payloads with correct primary colors
 * This directly updates Qdrant records without triggering AI processing
 */

const http = require('http');

const QDRANT_URL = 'http://localhost:6333';
const COLLECTION = 'bangles';

const PRODUCTS = {
  27: { primary: 'deep blue', secondary: ['gold', 'cream', 'light blue'] },
  28: { primary: 'yellow', secondary: ['red', 'gold'] },
  33: { primary: 'olive green', secondary: ['silver', 'gold'] },
  34: { primary: 'white', secondary: ['orange', 'yellow', 'red', 'blue', 'green', 'black'] }
};

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, QDRANT_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data || '{}');
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function updateQdrantRecord(productId, primaryColor, secondaryColors) {
  console.log(`\n📍 Updating product ${productId} in Qdrant...`);
  console.log(`  Primary: ${primaryColor}`);
  console.log(`  Secondary: ${secondaryColors.join(', ')}`);

  try {
    // Get the current record
    const getRes = await makeRequest('GET', `/collections/${COLLECTION}/points/${productId}`);
    
    if (getRes.status !== 200) {
      console.error(`❌ Failed to fetch point ${productId}: ${getRes.status}`);
      return false;
    }

    const point = getRes.data.result;
    if (!point || !point.payload) {
      console.error(`❌ Point ${productId} or payload not found`);
      return false;
    }

    // Build updated payload with correct colors
    const updatedPayload = {
      ...point.payload,
      primary_color: primaryColor,
      colors: [primaryColor, ...secondaryColors].filter(Boolean),
      secondary_colors: secondaryColors
    };

    // Update the point
    const updateRes = await makeRequest('PUT', `/collections/${COLLECTION}/points`, {
      points: [{
        id: productId,
        payload: updatedPayload,
        vector: point.vector
      }]
    });

    if (updateRes.status === 200) {
      console.log(`✅ Updated product ${productId}`);
      return true;
    } else {
      console.error(`❌ Failed to update point ${productId}: ${updateRes.status}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating product ${productId}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting direct Qdrant record update...\n');

  let successCount = 0;
  for (const [productId, colors] of Object.entries(PRODUCTS)) {
    const success = await updateQdrantRecord(Number(productId), colors.primary, colors.secondary);
    if (success) successCount++;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n📊 Update Summary:`);
  console.log(`   Total Products: ${Object.keys(PRODUCTS).length}`);
  console.log(`   Successfully Updated: ${successCount}`);
  
  // Verify updates
  console.log(`\n✅ Verifying updates...`);
  const verifyRes = await makeRequest('POST', `/collections/${COLLECTION}/points/scroll`, { limit: 100 });
  if (verifyRes.status === 200) {
    const points = verifyRes.data.result?.points || [];
    for (const point of points) {
      if (PRODUCTS[point.id]) {
        console.log(`\n  Product ${point.id}:`);
        console.log(`    Primary Color: ${point.payload.primary_color}`);
        console.log(`    Colors: ${point.payload.colors?.join(', ')}`);
      }
    }
  }

  console.log(`\n✅ Complete!`);
  process.exit(successCount === Object.keys(PRODUCTS).length ? 0 : 1);
}

main().catch(error => {
  console.error('Uncaught error:', error);
  process.exit(1);
});
