/**
 * Attribute-Based Ranking Service
 * Ranks bangle matches based on multiple attributes with priority weights
 * 
 * RANKING PRIORITY:
 * 1. Primary Color (40%)
 * 2. Pattern (25%)
 * 3. Style (20%)
 * 4. Material (10%)
 * 5. Secondary Color (5%)
 */

const { getPool } = require('./db');
const { normalizeColorToFamily, calculateColorSimilarity } = require('./colorMatchingService');

const ATTRIBUTE_WEIGHTS = {
  primary_color: 0.40,      // 40% - Highest priority
  pattern: 0.25,             // 25%
  style: 0.20,               // 20%
  material: 0.10,            // 10%
  secondary_color: 0.05      // 5% - Lowest priority
};

/**
 * Get full metadata for a bangle product
 */
async function getBangleMetadata(bangleId) {
  try {
    const pool = getPool();
    
    // Get from product_ai_metadata
    const [aiRows] = await pool.query(
      `SELECT colors, pattern, style, material FROM product_ai_metadata WHERE product_id = ?`,
      [bangleId]
    );
    
    if (!aiRows || aiRows.length === 0) {
      return {
        colors: [],
        pattern: [],
        style: [],
        material: [],
        primary_color_family: null,
        secondary_color_families: []
      };
    }

    const aiData = aiRows[0];
    let colors = [];
    
    // Parse colors - handle both JSON and string formats
    if (aiData.colors) {
      try {
        const parsed = JSON.parse(aiData.colors);
        colors = Array.isArray(parsed) ? parsed : [String(parsed)];
      } catch {
        colors = String(aiData.colors).split(',').map(c => c.trim()).filter(Boolean);
      }
    }

    // Parse pattern, style, material - handle JSON arrays or strings
    const parseField = (val) => {
      if (!val) return [];
      try {
        const parsed = JSON.parse(val);
        return Array.isArray(parsed) ? parsed : (parsed ? [String(parsed)] : []);
      } catch {
        return String(val).split(',').map(v => v.trim()).filter(Boolean);
      }
    };

    const primaryColor = colors[0] || null;
    const primaryColorFamily = primaryColor ? normalizeColorToFamily(primaryColor) : null;
    const secondaryColors = colors.slice(1) || [];

    return {
      colors,
      pattern: parseField(aiData.pattern),
      style: parseField(aiData.style),
      material: parseField(aiData.material),
      primary_color_family: primaryColorFamily,
      secondary_color_families: secondaryColors.map(c => normalizeColorToFamily(c)).filter(Boolean)
    };
  } catch (error) {
    console.warn(`Error fetching bangle metadata for ${bangleId}:`, error.message);
    return {
      colors: [],
      pattern: [],
      style: [],
      material: [],
      primary_color_family: null,
      secondary_color_families: []
    };
  }
}

/**
 * Calculate primary color match score
 * Exact family match = 1.0, compatible = 0.75, same temperature = 0.55, poor = 0.3
 */
function scorePrimaryColor(dressColor, banglePrimaryColor) {
  if (!dressColor || !banglePrimaryColor) return 0;

  const dressFamily = normalizeColorToFamily(dressColor);
  if (!dressFamily) return 0;

  return calculateColorSimilarity(dressColor, banglePrimaryColor);
}

/**
 * Calculate secondary color match score
 * Check if any secondary color matches dress secondary colors
 */
function scoreSecondaryColor(dressSecondaryColors = [], bangleSecondaryColors = []) {
  if (!dressSecondaryColors.length || !bangleSecondaryColors.length) return 0.5; // Neutral

  let maxSimilarity = 0;
  for (const dressColor of dressSecondaryColors) {
    for (const bangleColor of bangleSecondaryColors) {
      const similarity = calculateColorSimilarity(dressColor, bangleColor);
      maxSimilarity = Math.max(maxSimilarity, similarity);
    }
  }

  return maxSimilarity;
}

/**
 * Calculate attribute match score (pattern, style, material)
 * Based on exact matches and partial matches
 */
function scoreAttribute(dressAttribute = [], bangleAttribute = [], threshold = 0.6) {
  if (!dressAttribute.length || !bangleAttribute.length) return 0.5; // Neutral

  const dressNorm = dressAttribute.map(a => String(a).toLowerCase().trim());
  const bangleNorm = bangleAttribute.map(a => String(a).toLowerCase().trim());

  // Count matches
  let matches = 0;
  for (const d of dressNorm) {
    for (const b of bangleNorm) {
      if (d === b || b.includes(d) || d.includes(b)) {
        matches++;
        break;
      }
    }
  }

  // Score: (matches / max(dress, bangle)) * 100%
  const score = matches / Math.max(dressNorm.length, bangleNorm.length);
  
  // Apply threshold (partial matches still get high score)
  return score >= threshold ? 1.0 : score;
}

/**
 * Calculate combined ranking score
 * Uses weighted priority system
 */
async function calculateRankingScore(bangleId, dressMetadata = {}) {
  const bangleMetadata = await getBangleMetadata(bangleId);

  // Get dress colors
  const dressColors = dressMetadata.colors || [];
  const dressPrimaryColor = dressColors[0];
  const dressSecondaryColors = dressColors.slice(1);

  // Calculate individual scores
  const scores = {
    primary_color: scorePrimaryColor(dressPrimaryColor, bangleMetadata.colors[0]),
    pattern: scoreAttribute(dressMetadata.pattern, bangleMetadata.pattern),
    style: scoreAttribute(dressMetadata.style, bangleMetadata.style),
    material: scoreAttribute(dressMetadata.material, bangleMetadata.material),
    secondary_color: scoreSecondaryColor(dressSecondaryColors, bangleMetadata.colors.slice(1))
  };

  // Apply weights
  const weightedScore =
    scores.primary_color * ATTRIBUTE_WEIGHTS.primary_color +
    scores.pattern * ATTRIBUTE_WEIGHTS.pattern +
    scores.style * ATTRIBUTE_WEIGHTS.style +
    scores.material * ATTRIBUTE_WEIGHTS.material +
    scores.secondary_color * ATTRIBUTE_WEIGHTS.secondary_color;

  return {
    final_score: parseFloat(weightedScore.toFixed(3)),
    scores,
    weights: ATTRIBUTE_WEIGHTS,
    metadata: {
      bangle: bangleMetadata,
      dress: {
        colors: dressColors,
        primary_color: dressPrimaryColor,
        pattern: dressMetadata.pattern || [],
        style: dressMetadata.style || [],
        material: dressMetadata.material || []
      }
    }
  };
}

/**
 * Re-rank matches using multi-attribute scoring
 * Combines AI similarity with attribute-based ranking
 */
async function reRankMatchesByAttributes(aiMatches = [], dressMetadata = {}, aiWeight = 0.3, attributeWeight = 0.7) {
  if (!aiMatches.length) {
    return [];
  }

  console.log(`Re-ranking ${aiMatches.length} matches using attribute-based system...`);

  const rankedMatches = await Promise.all(
    aiMatches.map(async (match) => {
      const ranking = await calculateRankingScore(match.id, dressMetadata);

      // Combined scoring: 30% AI similarity + 70% attribute ranking
      const finalScore =
        (match.similarity || 0) * aiWeight +
        ranking.final_score * attributeWeight;

      return {
        ...match,
        ...ranking,
        ai_similarity: parseFloat((match.similarity || 0).toFixed(3)),
        attribute_score: parseFloat(ranking.final_score.toFixed(3)),
        final_score: parseFloat(finalScore.toFixed(3))
      };
    })
  );

  // Sort by final score descending
  rankedMatches.sort((a, b) => b.final_score - a.final_score);

  console.log(`Top 3 ranked matches:`);
  rankedMatches.slice(0, 3).forEach((m, idx) => {
    console.log(`  ${idx + 1}. Product ${m.id}: Score ${(m.final_score * 100).toFixed(1)}% (Color: ${(m.scores.primary_color * 100).toFixed(0)}%, Pattern: ${(m.scores.pattern * 100).toFixed(0)}%, Style: ${(m.scores.style * 100).toFixed(0)}%)`);
  });

  return rankedMatches;
}

/**
 * Get color-family aware matches
 * Shows all color families that match (olive green, dark green, light green all in "green" family)
 */
async function getColorFamilyMatches(searchColorFamily, minScore = 0.7) {
  try {
    const pool = getPool();
    
    // Get all products with this color family
    const [rows] = await pool.query(`
      SELECT 
        p.id,
        p.name,
        pcm.primary_color_family,
        pcm.secondary_color_families,
        pam.colors,
        pam.pattern,
        pam.style,
        pam.material
      FROM products p
      JOIN product_color_metadata pcm ON p.id = pcm.product_id
      LEFT JOIN product_ai_metadata pam ON p.id = pam.product_id
      WHERE pcm.primary_color_family = ?
    `, [searchColorFamily]);

    if (!rows || rows.length === 0) {
      return [];
    }

    // Map and return with metadata
    return rows.map(row => ({
      id: row.id,
      name: row.name,
      primary_color_family: row.primary_color_family,
      secondary_color_families: JSON.parse(row.secondary_color_families || '[]'),
      colors: row.colors ? JSON.parse(row.colors) : [],
      pattern: row.pattern ? JSON.parse(row.pattern) : [],
      style: row.style ? JSON.parse(row.style) : [],
      material: row.material || null
    }));
  } catch (error) {
    console.warn(`Error fetching color family matches for ${searchColorFamily}:`, error.message);
    return [];
  }
}

module.exports = {
  ATTRIBUTE_WEIGHTS,
  getBangleMetadata,
  scorePrimaryColor,
  scoreSecondaryColor,
  scoreAttribute,
  calculateRankingScore,
  reRankMatchesByAttributes,
  getColorFamilyMatches
};
