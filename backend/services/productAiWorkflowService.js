const { processProductForSimilarity } = require('./aiProductService');
const { enqueueAiIndexJob } = require('./aiIndexQueue');
const { extractColorMetadata, normalizeColorToFamily } = require('./colorMatchingService');

const COLOR_HEX_BY_NAME = {
  green: '#228B22',
  'olive green': '#6B8E23',
  olive: '#6B8E23',
  gold: '#D4AF37',
  silver: '#C0C0C0',
  white: '#F5F5F5',
  black: '#141414',
  gray: '#808080',
  grey: '#808080',
  red: '#DC143C',
  maroon: '#800000',
  pink: '#FF69B4',
  purple: '#800080',
  plum: '#8E4585',
  violet: '#8F00FF',
  blue: '#4169E1',
  navy: '#000080',
  yellow: '#FFD700',
  mustard: '#D4A017',
  cream: '#FFFDD0',
  beige: '#F5F5DC'
};

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
  const parseArray = (value) => {
    if (!value) return [];

    if (Array.isArray(value)) {
      return value
        .map((item) => String(item || '').trim())
        .filter(Boolean);
    }

    return String(value)
      .split(/[\n,|/]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  };

  const normalizeText = (value) => String(value || '').trim();
  const parseNumber = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  };

  const inferComplementaryDressColors = (primaryColor, palette = []) => {
    const hints = `${primaryColor} ${palette.join(' ')}`.toLowerCase();
    if (/(olive|green|emerald|sage)/.test(hints)) {
      return ['Mustard Yellow', 'Maroon', 'Cream', 'Gold'];
    }
    if (/(maroon|wine|burgundy|red)/.test(hints)) {
      return ['Gold', 'Cream', 'Olive Green', 'Blush Pink'];
    }
    if (/(mustard|yellow)/.test(hints)) {
      return ['Olive Green', 'Maroon', 'Cream', 'Gold'];
    }
    if (/(blue|navy|teal)/.test(hints)) {
      return ['Silver', 'Pearl White', 'Rose Gold', 'Champagne'];
    }
    if (/(pink|blush|peach)/.test(hints)) {
      return ['Rose Gold', 'Pearl White', 'Champagne', 'Maroon'];
    }
    return ['Gold', 'Cream', 'Maroon'];
  };

  const colors = parseArray(metadata.colors);
  const primaryColor = normalizeText(metadata.primary_color || colors[0] || '');
  const secondaryColors = parseArray(metadata.secondary_colors || metadata.secondaryColors)
    .filter((item) => item !== primaryColor);

  const title = normalizeText(metadata.title || metadata.name);
  const description = normalizeText(metadata.description);
  const category = normalizeText(metadata.category) || 'bangles';
  const design = parseArray(metadata.designs || metadata.design || metadata.design_elements);
  const pattern = parseArray(metadata.patterns || metadata.pattern);
  const style = parseArray(metadata.styles || metadata.style);
  const material = parseArray(metadata.materials || metadata.material || metadata.material_estimated);
  const occasion = parseArray(metadata.occasions || metadata.occasion);
  const craftType = parseArray(metadata.craft_types || metadata.craft_type);
  const usage = parseArray(metadata.usage);
  const normalizedColors = [...new Set([primaryColor, ...colors, ...secondaryColors].filter(Boolean))].slice(0, 5);
  const normalizeColorKey = (value) => normalizeText(value).toLowerCase();
  const targetGender = normalizeText(metadata.target_gender || metadata.targetGender || 'women') || 'women';
  const matchingNotes = normalizeText(metadata.matching_notes || metadata.ecommerce?.matching_notes);
  const complementaryDressColors = [...new Set([
    ...parseArray(metadata.complementary_dress_colors || metadata.complementaryDressColors),
    ...inferComplementaryDressColors(primaryColor || normalizedColors[0] || '', normalizedColors)
  ])].slice(0, 6);

  const specView = normalizeText(metadata.spec_view) || [
    `Product: ${title || 'Bangles'}`,
    `Category: ${category}`,
    `Primary Color: ${primaryColor || 'N/A'}`,
    material.length ? `Material: ${material.join(', ')}` : '',
    pattern.length ? `Pattern: ${pattern.join(', ')}` : '',
    design.length ? `Design: ${design.join(', ')}` : '',
    style.length ? `Style: ${style.join(', ')}` : '',
    normalizedColors.length ? `Color: ${normalizedColors.join(', ')}` : '',
    occasion.length ? `Occasion: ${occasion.join(', ')}` : '',
    craftType.length ? `Craft Type: ${craftType.join(', ')}` : '',
    complementaryDressColors.length ? `Complements: ${complementaryDressColors.join(', ')}` : '',
    matchingNotes ? `Matching Notes: ${matchingNotes}` : ''
  ].filter(Boolean).join('\n');

  const intentView = normalizeText(metadata.intent_view) || [
    'Premium',
    primaryColor || normalizedColors[0] || '',
    material.slice(0, 2).join(' '),
    'handcrafted',
    category,
    title || ''
  ].filter(Boolean).join(' ') + [
    design.length ? ` with ${design.slice(0, 3).join(', ')}` : (pattern.length ? ` with ${pattern.slice(0, 3).join(', ')}` : ''),
    style.length ? ` in ${style.slice(0, 2).join(', ')} style` : '',
    (occasion.length || usage.length) ? ` for ${(occasion.length ? occasion : usage).slice(0, 2).join(', ')}` : '',
    matchingNotes ? `. ${matchingNotes}` : (description ? `. ${description}` : '.')
  ].join('');

  const semanticQuery = normalizeText(metadata.semantic_query) || [
    primaryColor,
    secondaryColors.join(' '),
    material.join(' '),
    craftType.join(' '),
    design.join(' '),
    pattern.join(' '),
    style.join(' '),
    occasion.join(' '),
    targetGender,
    matchingNotes
  ].filter(Boolean).join(' ');

  return {
    title,
    description,
    colors: normalizedColors,
    primary_color: primaryColor,
    secondary_colors: [...new Set(secondaryColors)].slice(0, 4),
    color_hex: (() => {
      const providedHex = parseArray(metadata.color_hex);
      if (providedHex.length >= normalizedColors.length) {
        return providedHex.slice(0, normalizedColors.length);
      }

      const derived = normalizedColors.map((color, index) => {
        if (providedHex[index]) {
          return providedHex[index];
        }
        return COLOR_HEX_BY_NAME[normalizeColorKey(color)] || '';
      }).filter(Boolean);

      return derived;
    })(),
    category,
    size: normalizeText(metadata.size),
    design,
    pattern,
    style,
    material,
    occasion,
    craft_type: craftType,
    usage,
    target_gender: targetGender,
    complementary_dress_colors: complementaryDressColors,
    matching_notes: matchingNotes,
    semantic_query: semanticQuery,
    price: parseNumber(metadata.price),
    image_url: normalizeText(metadata.image_url),
    spec_view: specView,
    intent_view: intentView,
    
    // Color family metadata for enhanced matching
    color_families: (() => {
      const colorMeta = extractColorMetadata(normalizedColors, []);
      return {
        primary_color_family: colorMeta.primary_color_family,
        secondary_color_families: colorMeta.secondary_color_families,
        compatible_color_families: colorMeta.compatible_color_families,
        color_group: colorMeta.color_group
      };
    })()
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