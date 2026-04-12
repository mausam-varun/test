/**
 * Color Matching Service
 * Maps color variations to canonical families and provides similarity matching
 * Example: olive green, sage, forest green → canonical "green"
 */

const COLOR_FAMILIES = {
  // Reds & Warm Tones
  red: ['crimson', 'scarlet', 'ruby', 'maroon', 'burgundy', 'wine', 'red'],
  pink: ['pink', 'blush', 'rose', 'peach', 'coral', 'salmon'],
  orange: ['orange', 'tangerine', 'burnt orange', 'copper'],

  // Greens & Cool Tones
  green: ['green', 'olive', 'sage', 'forest', 'emerald', 'seafoam', 'mint', 'lime'],
  teal: ['teal', 'cyan', 'turquoise', 'aqua'],
  blue: ['blue', 'navy', 'cobalt', 'royal blue', 'sky blue', 'indigo'],
  purple: ['purple', 'violet', 'plum', 'lavender', 'mauve'],

  // Earth Tones
  brown: ['brown', 'chocolate', 'tan', 'beige', 'taupe', 'bronze'],
  gold: ['gold', 'mustard', 'yellow', 'saffron', 'amber'],

  // Neutrals
  white: ['white', 'cream', 'ivory', 'off-white', 'pearl'],
  gray: ['gray', 'grey', 'charcoal', 'silver', 'ash'],
  black: ['black', 'ebony', 'navy black']
};

// Proximity map: which colors are adjacent/compatible
const COLOR_COMPATIBILITY = {
  red: ['pink', 'orange', 'purple', 'gold', 'burgundy'],
  pink: ['red', 'purple', 'gold', 'white'],
  orange: ['red', 'gold', 'brown', 'yellow'],

  green: ['blue', 'teal', 'white', 'gold', 'brown'],
  teal: ['green', 'blue', 'white', 'gray'],
  blue: ['green', 'teal', 'purple', 'white', 'gray'],
  purple: ['blue', 'pink', 'red', 'white', 'gray'],

  brown: ['orange', 'gold', 'green', 'white', 'gray'],
  gold: ['red', 'orange', 'brown', 'green', 'white'],

  white: ['all'], // white goes with everything
  gray: ['all'],
  black: ['all']
};

/**
 * Normalize color name to canonical family
 * @param {string} colorName - Raw color name (e.g., "olive green")
 * @returns {string} Canonical color family (e.g., "green")
 */
function normalizeColorToFamily(colorName) {
  if (!colorName) return null;

  const normalized = String(colorName)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');

  // Check direct match first
  for (const [family, aliases] of Object.entries(COLOR_FAMILIES)) {
    if (aliases.includes(normalized)) {
      return family;
    }
    // Check partial match (e.g., "olive" contains "olive")
    if (aliases.some(alias => normalized.includes(alias) || alias.includes(normalized))) {
      return family;
    }
  }

  return null;
}

/**
 * Calculate color similarity score (0-1)
 * - 1.0 = exact family match
 * - 0.7+ = compatible colors
 * - 0.4-0.7 = distantly related
 * - <0.4 = poor match
 */
function calculateColorSimilarity(color1, color2) {
  if (!color1 || !color2) return 0;

  const family1 = normalizeColorToFamily(color1);
  const family2 = normalizeColorToFamily(color2);

  if (!family1 || !family2) return 0;

  // Exact family match
  if (family1 === family2) return 1.0;

  // Check compatibility
  const compat1 = COLOR_COMPATIBILITY[family1] || [];
  const compat2 = COLOR_COMPATIBILITY[family2] || [];

  if (compat1.includes(family2) || compat2.includes(family1)) {
    return 0.75; // Compatible colors
  }

  if (compat1.includes('all') || compat2.includes('all')) {
    return 0.65; // Neutral with any color
  }

  // Check if both are cool or warm tones
  const coolTones = ['blue', 'green', 'teal', 'purple', 'gray'];
  const warmTones = ['red', 'orange', 'gold', 'brown', 'pink'];

  const isCool1 = coolTones.includes(family1);
  const isCool2 = coolTones.includes(family2);
  const isWarm1 = warmTones.includes(family1);
  const isWarm2 = warmTones.includes(family2);

  // Same temperature tolerance
  if ((isCool1 && isCool2) || (isWarm1 && isWarm2)) {
    return 0.55;
  }

  return 0.3; // Poor match
}

/**
 * Find best matching bangle colors for a dress color
 * Returns array of compatible bangle colors with scores
 */
function findCompatibleColors(dressColor, bangleColors = []) {
  if (!dressColor || !bangleColors.length) return [];

  return bangleColors
    .map(bangleColor => ({
      color: bangleColor,
      family: normalizeColorToFamily(bangleColor),
      similarity: calculateColorSimilarity(dressColor, bangleColor)
    }))
    .filter(item => item.similarity >= 0.4) // Only colors with >40% match
    .sort((a, b) => b.similarity - a.similarity);
}

/**
 * Build color-enhanced semantic query
 * Includes primary color and compatible secondary colors
 */
function buildColorSemanticQuery(primaryColor, secondaryColors = [], characteristics = '') {
  const primary = normalizeColorToFamily(primaryColor);
  const compatible = (secondaryColors || [])
    .map(c => normalizeColorToFamily(c))
    .filter(Boolean);

  let query = '';
  if (primary) {
    query += `${primary} bangles`;
  }

  if (compatible.length > 0) {
    query += ` with ${compatible.slice(0, 2).join(' and ')}`;
  }

  if (characteristics) {
    query += ` ${characteristics}`;
  }

  return query.trim();
}

/**
 * Extract color metadata for storage
 * Returns structured color data with families and relationships
 */
function extractColorMetadata(extractedColors = [], userColors = []) {
  const allColors = [...(extractedColors || []), ...(userColors || [])];

  const normalized = allColors
    .map(c => normalizeColorToFamily(c))
    .filter(Boolean)
    .filter((v, i, a) => a.indexOf(v) === i); // unique

  const primary = normalized[0] || null;
  const secondary = normalized.slice(1);

  const compatibility = primary
    ? (COLOR_COMPATIBILITY[primary] || []).filter(c => c !== 'all')
    : [];

  return {
    extracted_raw: extractedColors,
    user_provided_raw: userColors,
    normalized_families: normalized,
    primary_color_family: primary,
    secondary_color_families: secondary,
    compatible_color_families: compatibility,
    color_group: primary ? `${primary}-based` : 'mixed'
  };
}

module.exports = {
  COLOR_FAMILIES,
  COLOR_COMPATIBILITY,
  normalizeColorToFamily,
  calculateColorSimilarity,
  findCompatibleColors,
  buildColorSemanticQuery,
  extractColorMetadata
};
