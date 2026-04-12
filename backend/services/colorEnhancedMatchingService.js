/**
 * Color-Enhanced Bangle Matching Service
 * Filters and re-ranks AI matches based on color similarity
 */

const { getPool } = require('./db');
const {
  normalizeColorToFamily,
  calculateColorSimilarity,
  findCompatibleColors,
  buildColorSemanticQuery,
  COLOR_FAMILIES
} = require('./colorMatchingService');

/**
 * Get bangle colors from database
 */
async function getBangleColors(bangleId) {
  try {
    const pool = getPool();
    const [rows] = await pool.query(
      `SELECT colors, color_hex FROM product_ai_metadata WHERE product_id = ?`,
      [bangleId]
    );

    if (!rows || rows.length === 0) return { colors: [], hexes: [] };

    const bangle = rows[0];
    let colors = [];
    
    // Parse colors from JSON if it's stored as JSON
    if (bangle.colors) {
      try {
        const parsed = JSON.parse(bangle.colors);
        colors = Array.isArray(parsed) ? parsed : (typeof parsed === 'string' ? [parsed] : []);
      } catch {
        // If it's not JSON, treat as string
        colors = String(bangle.colors)
          .split(',')
          .map(c => c.trim())
          .filter(Boolean);
      }
    }

    const hexes = (bangle.color_hex || '')
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    return { colors, hexes };
  } catch (error) {
    console.warn(`Error fetching bangle colors for ID ${bangleId}:`, error.message);
    return { colors: [], hexes: [] };
  }
}

/**
 * Get color metadata for bangle
 */
async function getBangleColorMetadata(bangleId) {
  try {
    const pool = getPool();
    const [rows] = await pool.query(
      `SELECT 
        primary_color_family,
        secondary_color_families,
        compatible_color_families,
        color_group
      FROM product_color_metadata 
      WHERE product_id = ?`,
      [bangleId]
    );

    if (!rows || rows.length === 0) {
      return {
        primary_color_family: null,
        secondary_color_families: [],
        compatible_color_families: [],
        color_group: null
      };
    }

    const metadata = rows[0];
    return {
      primary_color_family: metadata.primary_color_family,
      secondary_color_families: JSON.parse(metadata.secondary_color_families || '[]'),
      compatible_color_families: JSON.parse(metadata.compatible_color_families || '[]'),
      color_group: metadata.color_group
    };
  } catch (error) {
    console.warn(`Error fetching color metadata for bangle ${bangleId}:`, error.message);
    return {
      primary_color_family: null,
      secondary_color_families: [],
      compatible_color_families: [],
      color_group: null
    };
  }
}

/**
 * Calculate color compatibility score between dress and bangle
 * Returns { score: 0-1, matchedColors: [] }
 */
async function calculateColorCompatibility(dressColors = [], bangleId) {
  if (!dressColors.length) {
    return { score: 0.5, matchedColors: [] };
  }

  const { colors: bangleColors } = await getBangleColors(bangleId);
  if (!bangleColors.length) {
    return { score: 0.3, matchedColors: [] };
  }

  const dressFamily = normalizeColorToFamily(dressColors[0]);
  const bangleFamilies = bangleColors.map(c => normalizeColorToFamily(c)).filter(Boolean);

  if (!dressFamily) {
    return { score: 0.4, matchedColors: [] };
  }

  // Calculate average similarity with all bangle colors
  const similarities = bangleColors.map(bangleColor => ({
    bangle_color: bangleColor,
    similarity: calculateColorSimilarity(dressColors[0], bangleColor)
  })).filter(item => item.similarity >= 0.4);

  if (!similarities.length) {
    return { score: 0.2, matchedColors: [] };
  }

  const avgSimilarity = similarities.reduce((sum, item) => sum + item.similarity, 0) / similarities.length;

  return {
    score: Math.min(1.0, avgSimilarity),
    matchedColors: similarities.map(s => ({
      bangle_color: s.bangle_color,
      dress_color: dressColors[0],
      similarity: parseFloat(s.similarity.toFixed(2))
    }))
  };
}

/**
 * Filter AI matches by color similarity
 * Returns sorted matches with color scores >70%
 */
async function filterMatchesByColorSimilarity(aiMatches = [], dressColors = [], minScore = 0.7) {
  if (!aiMatches.length) {
    return [];
  }

  console.log(`Filtering ${aiMatches.length} AI matches for color similarity (min: ${minScore})`);

  const scoredMatches = await Promise.all(
    aiMatches.map(async (match) => {
      const colorCompat = await calculateColorCompatibility(dressColors, match.id);
      
      // Combined score: 40% AI similarity + 60% color similarity
      const combinedScore = (match.similarity || 0) * 0.4 + colorCompat.score * 0.6;

      return {
        ...match,
        ai_similarity: parseFloat((match.similarity || 0).toFixed(3)),
        color_similarity: parseFloat(colorCompat.score.toFixed(3)),
        color_matched_items: colorCompat.matchedColors,
        combined_score: parseFloat(combinedScore.toFixed(3))
      };
    })
  );

  // Filter by minimum combined score
  const filtered = scoredMatches.filter(m => m.combined_score >= minScore);

  // Sort by combined score descending
  filtered.sort((a, b) => b.combined_score - a.combined_score);

  console.log(`Filtered to ${filtered.length} matches above ${(minScore * 100).toFixed(0)}% combined score`);

  return filtered;
}

/**
 * Enhance AI query with color information
 * Builds better semantic query for dress colors
 */
function enhancedColorQuery(dressColors = [], dressMetadata = {}) {
  if (!dressColors.length) {
    return '';
  }

  const primaryDressColor = dressColors[0];
  const primaryFamily = normalizeColorToFamily(primaryDressColor);

  if (!primaryFamily) {
    return `bangles matching ${dressColors.join(', ')}`;
  }

  // Get compatible colors for this dress color
  const COLOR_COMPATIBILITY = require('./colorMatchingService').COLOR_COMPATIBILITY;
  const compatible = (COLOR_COMPATIBILITY[primaryFamily] || [])
    .filter(c => c !== 'all')
    .slice(0, 3);

  let query = `${primaryFamily} bangles`;

  if (compatible.length > 0) {
    query += ` with ${compatible.join(' or ')}`;
  }

  if (dressMetadata.occasion) {
    query += ` for ${dressMetadata.occasion}`;
  }

  if (dressMetadata.style) {
    query += ` ${dressMetadata.style}`;
  }

  return query;
}

/**
 * Store color match result for analytics
 */
async function storeColorMatchResult(dressId, bangleId, colorSimilarity) {
  try {
    const pool = getPool();
    await pool.execute(`
      INSERT INTO bangleAiMatches 
      (dress_product_id, bangle_product_id, color_similarity_score, created_at)
      VALUES (?, ?, ?, NOW())
      ON DUPLICATE KEY UPDATE
        color_similarity_score = VALUES(color_similarity_score),
        updated_at = NOW()
    `, [dressId || 0, bangleId, colorSimilarity]);
  } catch (error) {
    console.warn('Could not store color match result:', error.message);
  }
}

/**
 * Full color-enhanced matching pipeline
 */
async function performColorEnhancedMatch(aiMatches, dressColors, minColorScore = 0.7) {
  // Filter by color similarity
  const colorFiltered = await filterMatchesByColorSimilarity(
    aiMatches,
    dressColors,
    minColorScore
  );

  if (colorFiltered.length === 0) {
    console.warn(`No matches found above ${(minColorScore * 100).toFixed(0)}% color similarity threshold`);
  }

  return colorFiltered;
}

module.exports = {
  getBangleColors,
  getBangleColorMetadata,
  calculateColorCompatibility,
  filterMatchesByColorSimilarity,
  enhancedColorQuery,
  storeColorMatchResult,
  performColorEnhancedMatch
};
