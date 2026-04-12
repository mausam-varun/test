const DEFAULT_AI_SERVICE_URL = 'http://localhost:8000';
const DEFAULT_TIMEOUT_MS = 10000;

const COLOR_ALIASES = {
  leaf: 'green',
  olive: 'green',
  lime: 'green',
  mint: 'green',
  emerald: 'green',
  forest: 'green',
  sage: 'green',
  cream: 'white',
  ivory: 'white',
  offwhite: 'white',
  off_white: 'white',
  beige: 'white',
  charcoal: 'gray',
  grey: 'gray',
  ash: 'gray',
  metallic: 'silver'
};

function getServiceConfig() {
  return {
    baseUrl: (process.env.AI_SERVICE_URL || DEFAULT_AI_SERVICE_URL).replace(/\/$/, ''),
    timeoutMs: Number(process.env.AI_SERVICE_TIMEOUT_MS) || DEFAULT_TIMEOUT_MS
  };
}

function normalizeCategory(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return normalized.includes('bangle') ? 'bangles' : 'bangles';
}

function normalizeColorName(value) {
  const normalized = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  if (!normalized) {
    return '';
  }

  return COLOR_ALIASES[normalized] || normalized;
}

function parseColorList(value) {
  if (!value) {
    return [];
  }

  return String(value)
    .split(',')
    .map((item) => normalizeColorName(item))
    .filter(Boolean)
    .filter((item, index, items) => items.indexOf(item) === index)
    .slice(0, 3);
}

function assertFetchAvailable() {
  if (typeof fetch !== 'function') {
    throw new Error('Global fetch is not available. Use Node.js 18+ for AI integration.');
  }
}

async function requestAiService(path, init, timeoutMs) {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      let response;
      try {
        response = await fetch(path, {
          ...init,
          signal: controller.signal
        });
      } catch (error) {
        const isAbort = error?.name === 'AbortError';
        const causeText = String(error?.cause?.message || error?.message || 'unknown').toLowerCase();
        const transientNetworkError = causeText.includes('econnrefused') || causeText.includes('socket') || causeText.includes('network');

        if ((isAbort || transientNetworkError) && attempt < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 800 * attempt));
          continue;
        }

        if (isAbort) {
          throw new Error(`AI request timed out after ${timeoutMs}ms`);
        }

        const causeMessage = error?.cause?.message ? `: ${error.cause.message}` : '';
        throw new Error(`AI service connection failed${causeMessage}`);
      }

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        // Handle Pydantic validation errors (422)
        if (response.status === 422 && data?.detail) {
          const errors = Array.isArray(data.detail)
            ? data.detail.map(e => `${e.loc?.join('.') || 'unknown'}: ${e.msg}`).join('; ')
            : data.detail;
          throw new Error(`Validation error: ${errors}`);
        }
        const detail = data?.detail || `AI service returned ${response.status}`;
        throw new Error(detail);
      }

      return data;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  throw new Error('AI service request failed after retries');
}

async function processProductForSimilarity({ productId, imageUrl, metadata }) {
  if (!productId || !imageUrl) {
    throw new Error('productId and imageUrl are required for AI processing');
  }

  assertFetchAvailable();

  const { baseUrl, timeoutMs } = getServiceConfig();
  return requestAiService(
    `${baseUrl}/process-product`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: productId,
        image_url: imageUrl,
        metadata: {
          title: String(metadata?.title || '').trim(),
          description: String(metadata?.description || '').trim(),
          colors: Array.isArray(metadata?.colors) ? metadata.colors : [],
          primary_color: String(metadata?.primary_color || '').trim(),
          secondary_colors: Array.isArray(metadata?.secondary_colors) ? metadata.secondary_colors : [],
          color_hex: Array.isArray(metadata?.color_hex) ? metadata.color_hex : [],
          category: metadata?.category || 'bangles',
          size: metadata?.size || '',
          design: Array.isArray(metadata?.design) ? metadata.design : [],
          pattern: Array.isArray(metadata?.pattern) ? metadata.pattern : [],
          style: Array.isArray(metadata?.style) ? metadata.style : [],
          material: Array.isArray(metadata?.material) ? metadata.material : [],
          occasion: Array.isArray(metadata?.occasion) ? metadata.occasion : [],
          craft_type: Array.isArray(metadata?.craft_type) ? metadata.craft_type : [],
          usage: Array.isArray(metadata?.usage) ? metadata.usage : [],
          target_gender: String(metadata?.target_gender || 'women').trim() || 'women',
          complementary_dress_colors: Array.isArray(metadata?.complementary_dress_colors) ? metadata.complementary_dress_colors : [],
          matching_notes: String(metadata?.matching_notes || '').trim(),
          semantic_query: String(metadata?.semantic_query || '').trim(),
          price: Number.isFinite(Number(metadata?.price)) ? Number(metadata.price) : null,
          image_url: String(metadata?.image_url || imageUrl || '').trim(),
          spec_view: String(metadata?.spec_view || '').trim(),
          intent_view: String(metadata?.intent_view || '').trim()
        }
      })
    },
    timeoutMs
  );
}

async function deleteProductFromSimilarity(productId) {
  if (!productId) {
    throw new Error('productId is required for AI deletion');
  }

  assertFetchAvailable();

  const { baseUrl, timeoutMs } = getServiceConfig();
  return requestAiService(
    `${baseUrl}/products/${productId}`,
    {
      method: 'DELETE'
    },
    timeoutMs
  );
}

async function resolveColorCodes(inputColors = []) {
  assertFetchAvailable();

  const colorList = Array.isArray(inputColors)
    ? inputColors.map((item) => normalizeColorName(item)).filter(Boolean)
    : parseColorList(inputColors);

  if (!colorList.length) {
    return [];
  }

  const { baseUrl, timeoutMs } = getServiceConfig();
  return requestAiService(
    `${baseUrl}/resolve-color-codes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ colors: colorList })
    },
    timeoutMs
  );
}

async function matchBanglesFromAI({ imageUrl, imageFileBuffer, design, style, metadata = null }) {
  if (!imageUrl && !imageFileBuffer) {
    throw new Error('imageUrl or imageFileBuffer is required');
  }

  assertFetchAvailable();

  const { baseUrl, timeoutMs } = getServiceConfig();
  const matchTimeoutMs = Math.max(timeoutMs, 30000);
  const formData = new FormData();

  if (imageUrl) {
    formData.append('image_url', imageUrl);
  }

  if (imageFileBuffer) {
    const imageBlob = new Blob([imageFileBuffer], { type: 'image/jpeg' });
    formData.append('image_file', imageBlob, 'query-image.jpg');
  }

  if (design) {
    formData.append('design', design);
  }

  if (style) {
    formData.append('style', style);
  }

  if (metadata && typeof metadata === 'object') {
    formData.append('query_metadata', JSON.stringify(metadata));
  }

  const res = await requestAiService(
    `${baseUrl}/match-bangles`,
    {
      method: 'POST',
      body: formData
    },
    matchTimeoutMs
  );
  console.log('res',res);
  return res 
}

module.exports = {
  deleteProductFromSimilarity,
  processProductForSimilarity,
  matchBanglesFromAI,
  resolveColorCodes
};
