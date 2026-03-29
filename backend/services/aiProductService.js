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
          colors: Array.isArray(metadata?.colors) ? metadata.colors : [],
          color_hex: Array.isArray(metadata?.color_hex) ? metadata.color_hex : [],
          category: metadata?.category || 'bangles',
          size: metadata?.size || '',
          design: Array.isArray(metadata?.design) ? metadata.design : [],
          pattern: Array.isArray(metadata?.pattern) ? metadata.pattern : [],
          style: Array.isArray(metadata?.style) ? metadata.style : [],
          material: Array.isArray(metadata?.material) ? metadata.material : []
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

async function matchBanglesFromAI({ imageUrl, imageFileBuffer, design, style }) {
  if (!imageUrl && !imageFileBuffer) {
    throw new Error('imageUrl or imageFileBuffer is required');
  }

  assertFetchAvailable();

  const { baseUrl, timeoutMs } = getServiceConfig();
  // Matching can take longer for larger uploads and model inference.
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

  return requestAiService(
    `${baseUrl}/match-bangles`,
    {
      method: 'POST',
      body: formData
    },
    matchTimeoutMs
  );
}

module.exports = {
  deleteProductFromSimilarity,
  processProductForSimilarity,
  matchBanglesFromAI
};
