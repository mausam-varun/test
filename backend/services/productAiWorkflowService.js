const { processProductForSimilarity } = require('./aiProductService');
const { enqueueAiIndexJob } = require('./aiIndexQueue');

let runtimeAiIndexingMode = null;

function normalizeAiIndexingMode(value) {
  const rawMode = String(value || 'async').trim().toLowerCase();

  if (['off', 'disabled', 'false', '0'].includes(rawMode)) {
    return 'off';
  }

  if (['sync', 'blocking'].includes(rawMode)) {
    return 'sync';
  }

  return 'async';
}

function getAiIndexingMode() {
  return runtimeAiIndexingMode || normalizeAiIndexingMode(process.env.AI_INDEXING_MODE || 'async');
}

function setAiIndexingMode(value) {
  runtimeAiIndexingMode = normalizeAiIndexingMode(value);
  return runtimeAiIndexingMode;
}

function getAiIndexingModeState() {
  return {
    mode: getAiIndexingMode(),
    source: runtimeAiIndexingMode ? 'runtime' : 'env'
  };
}

function buildAiMetadata(metadata = {}) {
  // Helper to parse comma-separated strings into arrays
  const parseArray = (value) => {
    if (!value) return [];
    return String(value)
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
  };

  return {
    colors: parseArray(metadata.colors),
    color_hex: parseArray(metadata.color_hex),
    category: metadata.category || 'bangles',
    size: String(metadata.size || ''),
    design: parseArray(metadata.designs || metadata.design),
    pattern: parseArray(metadata.patterns || metadata.pattern),
    style: parseArray(metadata.styles || metadata.style),
    material: parseArray(metadata.materials || metadata.material)
  };
}

async function runPrimaryImageAiWorkflow({ productId, imageUrl, metadata }) {
  const mode = getAiIndexingMode();

  if (mode === 'off') {
    return {
      attempted: false,
      stored: false,
      mode,
      message: 'AI indexing disabled'
    };
  }

  if (!productId || !imageUrl) {
    return {
      attempted: false,
      stored: false,
      mode,
      message: 'Skipping AI indexing: missing productId or imageUrl'
    };
  }

  if (mode === 'async') {
    try {
      const queuedJob = await enqueueAiIndexJob({ productId, imageUrl, metadata });

      return {
        attempted: true,
        stored: false,
        mode,
        message: `AI indexing queued with job ${queuedJob.jobId}`,
        queue: queuedJob
      };
    } catch (queueError) {
      console.warn(`AI queue unavailable for product ${productId}, falling back to in-process async handling:`, queueError.message);
      processProductForSimilarity({ productId, imageUrl, metadata }).catch((error) => {
        console.warn(`AI indexing failed for product ${productId}:`, error.message);
      });

      return {
        attempted: true,
        stored: false,
        mode,
        message: 'AI indexing queue unavailable; processing in fallback background mode'
      };
    }
  }

  try {
    const aiResult = await processProductForSimilarity({ productId, imageUrl, metadata });
    return {
      attempted: true,
      stored: Boolean(aiResult?.stored),
      mode,
      message: aiResult?.status || 'success'
    };
  } catch (error) {
    console.warn(`AI indexing failed for product ${productId}:`, error.message);
    return {
      attempted: true,
      stored: false,
      mode,
      message: error.message
    };
  }
}

module.exports = {
  buildAiMetadata,
  getAiIndexingMode,
  getAiIndexingModeState,
  runPrimaryImageAiWorkflow,
  setAiIndexingMode
};