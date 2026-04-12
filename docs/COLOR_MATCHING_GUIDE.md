# Color-Enhanced Bangle Matching System

## Overview

This system enhances the bangle matching algorithm to intelligently match bangles to dress/fabric uploads based on **color family compatibility** and **color similarity scoring**. Instead of exact color matches, it understands that "olive green" and "dark green" belong to the same color family and should match.

---

## System Architecture

### 1. **Color Family System**

Colors are organized into **canonical families** rather than exact names:

```
Green Family: green, olive, sage, forest, emerald, seafoam, mint, lime
Red Family: red, crimson, scarlet, maroon, burgundy, wine
Blue Family: blue, navy, cobalt, royal blue, sky blue, indigo
Gold Family: gold, mustard, yellow, saffron, amber
... and more
```

**Benefits:**
- Flexible matching: "olive green" + "dark green" = match ✓
- Language-agnostic: Handles regional color names
- Scalable: Easy to add new color variations

### 2. **Color Compatibility Mapping**

Colors have defined compatibility relationships:

```javascript
{
  "green": ["blue", "teal", "white", "gold", "brown"],
  "red": ["pink", "orange", "purple", "gold", "burgundy"],
  "blue": ["green", "teal", "purple", "white", "gray"],
  // Neutral colors work with everything
  "white": ["all"],
  "gray": ["all"]
}
```

This enables recommendations like:
- User uploads **green dress** → Suggest **green** OR **blue** OR **teal** bangles
- User uploads **red dress** → Suggest **red** OR **pink** OR **gold** bangles

---

## Setup Instructions

### Step 1: Run Database Migrations

```bash
# From backend directory
node services/colorMatchingMigration.js
```

This creates:
- `product_color_metadata` table: Stores normalized color families for each product
- Updates `bangleAiMatches` table: Adds color similarity tracking

**Tables Created:**

```sql
CREATE TABLE product_color_metadata (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL UNIQUE,
  primary_color_family VARCHAR(50),        -- "green", "red", etc.
  secondary_color_families JSON,            -- Array of secondary families
  compatible_color_families JSON,           -- Derived compatible colors
  color_group VARCHAR(100),                 -- "green-based", "red-based"
  extracted_colors JSON,                    -- Raw colors from CLIP
  user_provided_colors JSON,                -- Colors manually added
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### Step 2: Environment Variables

Add to `.env`:

```bash
# Color matching thresholds (0.0 - 1.0)
AI_MATCH_MIN_SCORE=0.55                    # AI vector similarity threshold
AI_MATCH_MIN_SIMILARITY=0.4                # Secondary threshold
AI_MATCH_MIN_COLOR_SIMILARITY=0.7          # Color match threshold (70%)
```

### Step 3: Deploy Services

```bash
# All services should be running
docker-compose up -d

# Verify:
# - Backend on localhost:5002
# - FastAPI on localhost:8000
# - Qdrant on localhost:6333
# - MySQL on localhost:3307
```

---

## How It Works: End-to-End Flow

### Adding a Product

```javascript
POST /api/products/add
{
  name: "Gold Bangles",
  price: 50,
  category: "bangles",
  colors: ["gold", "red"],           // User input
  image: <bangle_image_file>
}
```

**Processing:**

1. **Image Upload to Cloudinary**
   ```
   Image → Cloudinary CDN
   Returns: https://cloudinary.com/image.jpg
   ```

2. **AI Image Analysis**
   ```
   Image → Gemini Vision API
   Detects: colors=[gold, red], design=[flower], material=[metal]
   ```

3. **Color Family Extraction**
   ```javascript
   // From colorMatchingService.js
   const colorMetadata = extractColorMetadata(
     ["gold", "red"],  // from AI
     ["gold"]          // from user
   );
   
   Result:
   {
     normalized_families: ["gold", "red"],
     primary_color_family: "gold",
     secondary_color_families: ["red"],
     compatible_color_families: ["orange", "brown", "yellow"],
     color_group: "gold-based"
   }
   ```

4. **Store in MySQL**
   ```sql
   INSERT INTO product_color_metadata
   VALUES (product_id=123, primary_color_family="gold", ...)
   ```

5. **Generate Vector Embedding**
   ```python
   # In FastAPI /process-product
   Enhanced semantic query:
   "gold bangles with red, suitable for festive occasions"
   
   Image embedding (CLIP):        512 dims
   Semantic text embedding:       512 dims
   Design/pattern embedding:      512 dims
   Occasion embedding:            512 dims
   
   Combined (weighted):           512 dims
   ```

6. **Store in Qdrant**
   ```json
   {
     "id": 123,
     "vector": [0.15, -0.23, ...],
     "payload": {
       "colors": ["gold", "red"],
       "primary_color_family": "gold",
       "secondary_color_families": ["red"],
       "compatible_color_families": ["orange", "brown"],
       "category": "bangles",
       "occasion": ["wedding", "festive"],
       "price": 50.0
     }
   }
   ```

---

### Searching by Dress Image

```javascript
POST /api/products/match-bangles
{
  image_file: <dress_image_file>,   // Upload green fabric/dress
  occasion: "wedding"
}
```

**Processing:**

1. **Analyze Dress Image**
   ```
   Image → Gemini Vision
   Detected: colors=[green, dark green]
   Extracted: primary_color="green"
   ```

2. **Qdrant Vector Search**
   ```python
   # FastAPI generates vector from dress image
   query_vector = generate_embedding(dress_image)
   
   # Qdrant searches for similar vectors
   similar_products = qdrant.search(
     query_vector,
     category="bangles",
     limit=50,  # Get more to filter by color
     occasion_filter=["wedding"]
   )
   ```

3. **Color Similarity Filtering**
   ```javascript
   // From colorEnhancedMatchingService.js
   
   dressColors = ["green", "dark green"]
   dressFamily = "green"
   
   for each bangle in similar_products:
     bangleColors = ["gold", "green", "teal"]
     
     colorSimilarity = calculateColorSimilarity(
       dressColors[0],      // "green"
       bangleColors[1]      // "green"
     )
     // Result: 1.0 (exact match)
     
     // Check secondary colors
     colorSimilarity(green, gold) = 0.6  // Compatible
     colorSimilarity(green, teal) = 0.75 // Compatible
     
     // Average: (1.0 + 0.6 + 0.75) / 3 = 0.78 (78%)
     ✓ Above 70% threshold → Include
   ```

4. **Combined Scoring**
   ```
   Final Score = (AI Similarity × 0.4) + (Color Similarity × 0.6)
   
   Example:
   AI Similarity: 0.82
   Color Similarity: 0.78
   Combined: (0.82 × 0.4) + (0.78 × 0.6) = 0.328 + 0.468 = 0.796 (79.6%)
   
   If Combined > 70% → Return to user
   ```

5. **Return Results**
   ```json
   {
     "matches": [
       {
         "id": 123,
         "ai_similarity": 0.82,
         "color_similarity": 0.78,
         "combined_score": 0.796,
         "color_matched_items": [
           {
             "bangle_color": "green",
             "dress_color": "green",
             "similarity": 1.0
           },
           {
             "bangle_color": "teal",
             "dress_color": "green",
             "similarity": 0.75
           }
         ]
       }
     ],
     "dress_colors": ["green", "dark green"],
     "matching_stats": {
       "ai_matches_found": 50,
       "color_filtered_matches": 12,
       "min_color_similarity_threshold": 0.7
     }
   }
   ```

---

## Color Similarity Scoring

### How It Works

```javascript
calculateColorSimilarity(color1, color2) returns:
  1.0  = Exact family match         (green + green)
  0.75 = Compatible colors           (green + blue)
  0.65 = Works with neutral          (green + white)
  0.55 = Same temperature (cool/warm) (green + teal)
  0.3  = Poor match                  (green + red)
  0.0  = No similarity
```

### Temperature Matching

```
Cool Tones: blue, green, teal, purple, gray
Warm Tones: red, orange, gold, brown, pink

green (cool) + teal (cool) = 0.55 (compatible)
green (cool) + red (warm) = 0.3 (poor)
green (cool) + gold (warm) = 0.6 (medium - complementary)
```

---

## API Response Examples

### Successful Match

```json
{
  "matches": [
    {
      "id": 1,
      "ai_similarity": 0.85,
      "color_similarity": 0.95,
      "combined_score": 0.89,
      "color_matched_items": [
        {
          "bangle_color": "olive green",
          "dress_color": "green",
          "similarity": 0.95
        }
      ],
      "score": 0.73
    },
    {
      "id": 2,
      "ai_similarity": 0.78,
      "color_similarity": 0.82,
      "combined_score": 0.80,
      "color_matched_items": [
        {
          "bangle_color": "dark green",
          "dress_color": "green",
          "similarity": 0.82
        }
      ]
    }
  ],
  "dress_colors": ["green", "dark green"],
  "matching_stats": {
    "ai_matches_found": 45,
    "color_filtered_matches": 8,
    "min_color_similarity_threshold": 0.7,
    "color_filter_message": "Found 8 bangles with 70%+ color match"
  },
  "message": "Matching bangles found with color similarity analysis."
}
```

### No Color Match Found

```json
{
  "matches": [],
  "dress_colors": ["purple", "dark purple"],
  "matching_stats": {
    "ai_matches_found": 23,
    "color_filtered_matches": 0,
    "min_color_similarity_threshold": 0.7,
    "color_filter_message": "No bangles found with 70%+ color match. Try adjusting colors or occasion."
  },
  "message": "No matching bangles found. Try different colors or style."
}
```

---

## Customization

### Adjust Color Similarity Thresholds

```bash
# In .env file
AI_MATCH_MIN_COLOR_SIMILARITY=0.6   # More lenient (60%)
AI_MATCH_MIN_COLOR_SIMILARITY=0.8   # Stricter (80%)
```

### Add New Color Families

```javascript
// In colorMatchingService.js
const COLOR_FAMILIES = {
  rose: ['rose', 'dusty rose', 'mauve rose'],  // Add new family
  // ...
};

const COLOR_COMPATIBILITY = {
  rose: ['pink', 'purple', 'white', 'gold'],
  // ...
};
```

### Adjust Scoring Weights

```javascript
// In colorEnhancedMatchingService.js
const combinedScore = (match.similarity || 0) * 0.4 + colorCompat.score * 0.6;
                                              ↑                              ↑
                                            40% AI                        60% Color
```

Change to favor AI more: `0.5 * AI + 0.5 * Color`

---

## Monitoring & Analytics

### Query Executed Matches

```sql
SELECT 
  bcm.product_id,
  pcm.primary_color_family,
  pcm.secondary_color_families,
  COUNT(*) as match_count,
  AVG(bcm.color_similarity_score) as avg_color_similarity
FROM bangleAiMatches bcm
JOIN product_color_metadata pcm ON bcm.bangle_product_id = pcm.product_id
WHERE bcm.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY bcm.bangle_product_id, pcm.primary_color_family
ORDER BY match_count DESC;
```

### Color Family Distribution

```sql
SELECT 
  primary_color_family,
  color_group,
  COUNT(*) as product_count
FROM product_color_metadata
GROUP BY primary_color_family
ORDER BY product_count DESC;
```

---

## Troubleshooting

### Problem: No matches found even when colors are similar

**Solution:** Lower the threshold
```bash
AI_MATCH_MIN_COLOR_SIMILARITY=0.6  # Instead of 0.7
```

### Problem: Too many irrelevant matches

**Solution:** Increase color similarity weight
```javascript
// Favor color matching over AI scores
const combinedScore = (match.similarity || 0) * 0.3 + colorCompat.score * 0.7;
```

### Problem: Color metadata not stored for existing products

**Solution:** Run migration for existing products
```bash
node services/colorMatchingMigration.js
```

---

## Performance Optimization

### Indexing Color Families

```sql
-- Add this index for faster color-based queries
CREATE INDEX idx_color_families ON product_color_metadata(
  primary_color_family,
  color_group
);
```

### Caching Color Compatibility

```javascript
// Use LRU cache for color similarity calculations
const NodeCache = require('node-cache');
const colorCache = new NodeCache({ stdTTL: 3600 });

function calculateColorSimilarity(color1, color2) {
  const key = `${color1}:${color2}`;
  if (colorCache.has(key)) {
    return colorCache.get(key);
  }
  
  const similarity = /* calculation */;
  colorCache.set(key, similarity);
  return similarity;
}
```

---

## Future Enhancements

1. **Hex Color Matching**: Use CIEDE2000 color distance for hex code similarity
2. **Seasonal Colors**: Add seasonal color recommendations (winter: silvers, summer: pastels)
3. **Skin Tone Adaptation**: Recommend bangles that complement dress + skin tone
4. **ML-Based Weights**: Use user matching history to optimize scoring weights
5. **User Preferences**: Store color preferences per user (e.g., "I prefer cool tones")

