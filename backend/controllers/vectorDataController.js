'use strict';

const DEFAULT_LIMIT = 25;
const MAX_LIMIT = 100;
const DEFAULT_COLLECTION = process.env.QDRANT_COLLECTION || 'bangles';

function getQdrantUrls() {
  const configured = String(process.env.QDRANT_URL || '').trim().replace(/\/$/, '');
  const urls = configured ? [configured] : [];

  for (const fallback of ['http://qdrant:6333', 'http://localhost:6333']) {
    if (!urls.includes(fallback)) {
      urls.push(fallback);
    }
  }

  return urls;
}

function getQdrantHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (process.env.QDRANT_API_KEY) {
    headers['api-key'] = process.env.QDRANT_API_KEY;
  }
  return headers;
}

async function qdrantRequest(path, options = {}) {
  let lastError;

  for (const baseUrl of getQdrantUrls()) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        ...options,
        headers: {
          ...getQdrantHeaders(),
          ...(options.headers || {})
        }
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.status?.error || data?.message || `Qdrant returned ${response.status}`);
      }

      return data;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Qdrant request failed');
}

function normalizeLimit(value) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return DEFAULT_LIMIT;
  }
  return Math.min(parsed, MAX_LIMIT);
}

function parseOffset(value) {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  const asNumber = Number(value);
  if (Number.isInteger(asNumber)) {
    return asNumber;
  }

  return String(value);
}

function sanitizeCollectionName(value) {
  const name = String(value || DEFAULT_COLLECTION).trim();
  if (!/^[a-zA-Z0-9_.-]+$/.test(name)) {
    throw new Error('Invalid collection name');
  }
  return name;
}

function getVectorInfo(vector) {
  if (Array.isArray(vector)) {
    return {
      hasVector: true,
      vectorSize: vector.length,
      vectorPreview: vector.slice(0, 8)
    };
  }

  if (vector && typeof vector === 'object') {
    const firstVector = Object.values(vector).find(Array.isArray);
    return {
      hasVector: Boolean(firstVector),
      vectorSize: Array.isArray(firstVector) ? firstVector.length : 0,
      vectorPreview: Array.isArray(firstVector) ? firstVector.slice(0, 8) : []
    };
  }

  return {
    hasVector: false,
    vectorSize: 0,
    vectorPreview: []
  };
}

function summarizePoint(point) {
  const payload = point?.payload || {};
  const vectorInfo = getVectorInfo(point?.vector);

  return {
    id: point?.id,
    product_id: payload.product_id || point?.id,
    title: payload.title || payload.name || '',
    category: payload.category || '',
    image_url: payload.image_url || '',
    price: Number(payload.price || 0),
    primary_color: payload.primary_color || '',
    colors: Array.isArray(payload.colors) ? payload.colors : [],
    hasVector: vectorInfo.hasVector,
    vectorSize: vectorInfo.vectorSize,
    vectorPreview: vectorInfo.vectorPreview,
    payload
  };
}

async function getCollections(req, res) {
  try {
    const listResponse = await qdrantRequest('/collections');
    const collectionNames = listResponse?.result?.collections?.map((item) => item.name).filter(Boolean) || [];

    const collections = await Promise.all(collectionNames.map(async (name) => {
      try {
        const detailResponse = await qdrantRequest(`/collections/${encodeURIComponent(name)}`);
        const detail = detailResponse?.result || {};
        return {
          name,
          status: detail.status || '',
          pointsCount: detail.points_count || 0,
          vectorsCount: detail.vectors_count || 0,
          indexedVectorsCount: detail.indexed_vectors_count || 0
        };
      } catch {
        return { name, status: 'unknown', pointsCount: 0, vectorsCount: 0, indexedVectorsCount: 0 };
      }
    }));

    res.json({
      defaultCollection: DEFAULT_COLLECTION,
      collections
    });
  } catch (error) {
    console.error('[vectorData] getCollections:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch vector collections' });
  }
}

async function getCollectionPoints(req, res) {
  try {
    const collection = sanitizeCollectionName(req.query.collection);
    const limit = normalizeLimit(req.query.limit);
    const offset = parseOffset(req.query.offset);
    const withVector = String(req.query.withVector || '').toLowerCase() === 'true';

    const body = {
      limit,
      with_payload: true,
      with_vector: withVector
    };

    if (offset !== undefined) {
      body.offset = offset;
    }

    const data = await qdrantRequest(`/collections/${encodeURIComponent(collection)}/points/scroll`, {
      method: 'POST',
      body: JSON.stringify(body)
    });

    const result = data?.result || {};
    const points = Array.isArray(result.points) ? result.points.map(summarizePoint) : [];

    res.json({
      collection,
      limit,
      nextPageOffset: result.next_page_offset ?? null,
      points
    });
  } catch (error) {
    console.error('[vectorData] getCollectionPoints:', error);
    const statusCode = String(error.message || '').includes('Invalid collection') ? 400 : 500;
    res.status(statusCode).json({ error: error.message || 'Failed to fetch vector data' });
  }
}

module.exports = {
  getCollections,
  getCollectionPoints
};
