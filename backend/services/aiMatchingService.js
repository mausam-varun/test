const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000';
const { getPool } = require('./db');

class AIMatchingService {
  /**
   * Create multipart form data manually
   * @param {Buffer} imageBuffer - Image file buffer  
   * @param {string} designFilter - Optional design filter
   * @param {string} styleFilter - Optional style filter
   * @returns {Object} {body: Buffer, contentType: string}
   */
  createMultipartFormData(imageBuffer, designFilter, styleFilter) {
    const boundary = '----FormBoundary' + Math.random().toString(36).substr(2, 9);
    const parts = [];
    const CRLF = '\r\n';

    // Add image file part
    parts.push(
      `--${boundary}${CRLF}` +
      `Content-Disposition: form-data; name="image_file"; filename="upload.png"${CRLF}` +
      `Content-Type: image/png${CRLF}${CRLF}`
    );
    parts.push(imageBuffer);
    parts.push(CRLF);

    // Add optional design filter
    if (designFilter) {
      parts.push(
        `--${boundary}${CRLF}` +
        `Content-Disposition: form-data; name="design"${CRLF}${CRLF}` +
        `${designFilter}${CRLF}`
      );
    }

    // Add optional style filter
    if (styleFilter) {
      parts.push(
        `--${boundary}${CRLF}` +
        `Content-Disposition: form-data; name="style"${CRLF}${CRLF}` +
        `${styleFilter}${CRLF}`
      );
    }

    // Add closing boundary
    parts.push(`--${boundary}--${CRLF}`);

    // Combine all parts
    const body = Buffer.concat(
      parts.map(part => {
        if (typeof part === 'string') {
          return Buffer.from(part, 'utf-8');
        }
        return part;
      })
    );

    return {
      body,
      contentType: `multipart/form-data; boundary=${boundary}`
    };
  }

  /**
   * Fetch product details from database
   * @param {number} productId - Product ID
   * @returns {Promise<Object>} Product details
   */
  async fetchProductDetails(productId) {
    try {
      const pool = getPool();
      const query = `
        SELECT 
          p.id, 
          p.name,
          p.price,
          p.category
        FROM products p
        WHERE p.id = ?
        LIMIT 1
      `;
      
      const [rows] = await pool.execute(query, [productId]);
      
      if (rows && rows.length > 0) {
        const product = rows[0];
        
        // Fetch primary image first, fallback to first image
        let imageUrl = null;
        try {
          const [imageRows] = await pool.execute(
            'SELECT image_url FROM product_images WHERE product_id = ? ORDER BY is_primary_image DESC, id ASC LIMIT 1',
            [productId]
          );
          if (imageRows && imageRows.length > 0 && imageRows[0].image_url) {
            imageUrl = imageRows[0].image_url;
          }
        } catch (imgError) {
          console.warn(`[AI Matching] Failed to fetch image for product ${productId}:`, imgError.message);
        }

        // Fallback to inline image_url on products table
        if (!imageUrl && product.image_url) {
          imageUrl = product.image_url;
        }

        if (!imageUrl) {
          console.warn(`[AI Matching] No image found for product ${productId}, skipping`);
          return null;
        }
        
        return {
          id: product.id,
          name: product.name,
          image: imageUrl,
          price: product.price,
          category: product.category || null
        };
      }
      
      return null;
    } catch (error) {
      console.warn(`[AI Matching] Failed to fetch product ${productId}:`, error.message);
      return null;
    }
  }

  /**
   * Match bangles using AI service
   * @param {Buffer} imageBuffer - Image file buffer
   * @param {string} designFilter - Optional design filter
   * @param {string} styleFilter - Optional style filter
   * @returns {Promise<Array>} Array of matched products with similarity scores
   */
  async matchBangles(imageBuffer, designFilter = null, styleFilter = null) {
    try {
      console.log('[AI Matching] Creating multipart form data');

      const { body, contentType } = this.createMultipartFormData(
        imageBuffer,
        designFilter,
        styleFilter
      );

      console.log(`[AI Matching] Calling AI service for bangle matching (${body.length} bytes)`);

      // Call AI service using fetch
      const response = await fetch(
        `${AI_SERVICE_URL}/match-bangles`,
        {
          method: 'POST',
          body,
          headers: {
            'Content-Type': contentType
          }
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[AI Matching] AI service error response:', response.status, errorText);
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.detail || `AI service returned ${response.status}`);
        } catch (parseError) {
          if (parseError.message.includes('returned')) throw parseError;
          throw new Error(`AI service error ${response.status}: ${errorText}`);
        }
      }

      const data = await response.json();
      console.log(`[AI Matching] AI service returned ${data.length || 0} matches`);

      // Fetch product details for each match
      const matchResults = [];
      for (const match of (data || [])) {
        const productDetails = await this.fetchProductDetails(match.product_id);
        
        if (productDetails) {
          matchResults.push({
            id: productDetails.id,
            name: productDetails.name,
            image: productDetails.image,
            similarity: Math.round(match.similarity * 100), // Convert to percentage
            price: productDetails.price,
            category: productDetails.category
          });
        }
      }

      matchResults.sort((a, b) => b.similarity - a.similarity);
      return matchResults;
    } catch (error) {
      console.error('[AI Matching] Service error:', error.message);
      
      if (error.message.includes('ECONNREFUSED') || error.message.includes('connect')) {
        throw new Error('AI service is not available. Please try again later.');
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
        throw new Error('AI service hostname not found. Please check configuration.');
      } else if (error.message.includes('timeout')) {
        throw new Error('AI service request timed out. Please try again.');
      }
      
      throw new Error('Failed to match bangles: ' + error.message);
    }
  }

  /**
   * Health check for AI service
   * @returns {Promise<boolean>} True if service is healthy
   */
  async healthCheck() {
    try {
      const response = await fetch(`${AI_SERVICE_URL}/health`);
      return response.ok;
    } catch (error) {
      console.warn('[AI Matching] Health check failed:', error.message);
      return false;
    }
  }
}

module.exports = new AIMatchingService();
