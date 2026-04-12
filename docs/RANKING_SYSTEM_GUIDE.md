# Color Family Matching & Multi-Attribute Ranking System

## Overview
This document explains the complete end-to-end flow for uploading products and searching for matches based on color families and multi-attribute ranking.

---

## 1. PRODUCT UPLOAD FLOW (Admin)

When an admin uploads a product (e.g., bangle), the system:

### Step 1: Image Analysis
- Admin uploads product image
- Gemini/OpenAI analyzes the image
- Extracts: colors, pattern, style, material, design, occasion

### Step 2: Color Family Extraction
**Location:** `productController.js` → `addProduct`
```javascript
const extractedColors = aiAnalysis?.colors || [];
const colorMetadata = extractColorMetadata(extractedColors, userProvidedColors);
```

Stores in:
- `product_color_metadata` table
  - `primary_color_family` (e.g., "green")
  - `secondary_color_families` (e.g., ["blue"])
  - `compatible_color_families` (e.g., ["teal", "white"])
  - `color_group` (e.g., "green-based")

### Step 3: Metadata Storage
**Important:** When AI indexing runs (`runPrimaryImageAiWorkflow`), it must populate:
- `product_ai_metadata` table columns:
  - `colors` → JSON array of color values (extracted from image)
  - `pattern` → VARCHAR / JSON of pattern types
  - `style` → VARCHAR / JSON of style types
  - `material` → VARCHAR / JSON of material types

**Current Issue:** product_ai_metadata needs to be properly populated during AI indexing. This should happen in the FastAPI service or in the Node backend's indexing workflow.

---

## 2. USER SEARCH FLOW (Customer)

When a customer uploads a dress image for matching:

### Step 1: Dress Image Analysis
**Location:** `productController.js` → `matchBangles`
```javascript
const analysisResult = await analyzeImageByProvider(resizedBuffer, prompt, selectedProvider);
const queryMetadata = buildAiMetadata({
  ...analysisRaw,
  ...analysisNormalized
});
```

Extracts:
- `colors` → ["olive green", "cream"]
- `primary_color` → "olive green"
- `pattern` → ["embroidered"]
- `style` → ["traditional"]
- `material` → ["silk thread"]

### Step 2: AI Similarity Search
Gets initial matches from FastAPI/Qdrant vector search:
```javascript
const rawMatches = await matchBanglesFromAI({
  metadata: queryMetadata
});
```

### Step 3: Multi-Attribute Ranking
**Location:** `attributeRankingService.js` → `reRankMatchesByAttributes`

Ranks results by:
1. **Primary Color (40%)** - Exact color family match
   - "green" dress color + "green" bangle = 1.0 (100%)
   - "green" + "teal" = 0.75 (75%, compatible)
   - "green" + "red" = 0.3 (30%, poor match)

2. **Pattern (25%)** - Exact/partial match
   - "embroidered" dress + "embroidered" bangle = 1.0
   - "embroidered" + "zari work" = 0.5
   - No match = 0.5 (neutral)

3. **Style (20%)**
   - "traditional" + "traditional" = 1.0
   - "traditional" + "modern" = 0.5

4. **Material (10%)**
   - "silk thread" + "silk thread" = 1.0
   - "silk thread" + "cotton" = 0.5

5. **Secondary Color (5%)** - Lower priority
   - Secondary color matches

### Step 4: Combined Score Calculation
```
Final Score = (AI Similarity × 25%) + (Attribute Score × 75%)

Where Attribute Score =
  (Primary Color × 40%) +
  (Pattern × 25%) +
  (Style × 20%) +
  (Material × 10%) +
  (Secondary Color × 5%)
```

### Step 5: Return Ranked Results
Returns matches sorted by final_score in descending order:

```json
{
  "matches": [
    {
      "id": 30,
      "final_score": 0.925,
      "ai_similarity": 0.85,
      "attribute_score": 0.95,
      "scores": {
        "primary_color": 100.0,
        "pattern": 100.0,
        "style": 80.0,
        "material": 50.0,
        "secondary_color": 75.0
      }
    }
  ],
  "ranking_system": {
    "weights": {
      "primary_color": "40%",
      "pattern": "25%",
      "style": "20%",
      "material": "10%",
      "secondary_color": "5%"
    },
    "ai_similarity_weight": "25%",
    "attribute_ranking_weight": "75%"
  }
}
```

---

## 3. COLOR FAMILY MATCHING

### Canonical Color Families
```
- green: olive, sage, forest, emerald, seafoam, mint, lime
- blue: navy, cobalt, royal blue, sky blue, indigo
- red: crimson, scarlet, ruby, maroon, burgundy, wine
- gold: mustard, yellow, saffron, amber
- etc.
```

### Color Compatibility Map
```
green → compatible with: blue, teal, white, gold, brown
red → compatible with: pink, orange, purple, gold
blue → compatible with: green, teal, purple, white, gray
etc.
```

### Similarity Scoring
- 1.0 (100%) = Exact family match (green + green)
- 0.75 (75%) = Compatible colors (green + blue)
- 0.55 (55%) = Same temperature (green + teal)
- 0.3 (30%) = Poor match (green + red)

---

## 4. EXAMPLE SCENARIO

**User uploads dress:** Olive green dress with embroidered pattern, traditional style, silk thread

**System detects:**
- Colors: ["olive green", "cream"]
- Primary: "olive green" → Normalizes to "green" family
- Pattern: ["embroidered"]
- Style: ["traditional"]
- Material: ["silk thread"]

**Database has these bangles:**
- **Product 30:** "Red & Green Silk Thread Embroidered Bangles"
  - Primary Color: green ✓ (exact match = 100%)
  - Pattern: embroidered ✓ (exact match = 100%)
  - Style: traditional ✓ (exact match = 100%)
  - Material: silk thread ✓ (exact match = 100%)
  - Secondary: red (partial = 75%)
  - **Final Attribute Score:** (100×0.4) + (100×0.25) + (100×0.2) + (100×0.1) + (75×0.05) = 99.75%

- **Product 27:** "Blue Velvet Gold Zari Bangles"
  - Primary Color: blue ✗ (compatible = 75%)
  - Pattern: zari work ✗ (no match = 50%)
  - Style: modern ✗ (no match = 50%)
  - Material: gold zari ✗ (no match = 50%)
  - Secondary: gold (match = 75%)
  - **Final Attribute Score:** (75×0.4) + (50×0.25) + (50×0.2) + (50×0.1) + (75×0.05) = 61.25%

**Expected Ranking:**
1. Product 30: 92.5% (85% AI × 0.25 + 99.75% attributes × 0.75)
2. Product 27: 70.4% (65% AI × 0.25 + 61.25% attributes × 0.75)

---

## 5. IMPLEMENTATION CHECKLIST

- [x] `colorMatchingService.js` - Color family definitions & normalization
- [x] `attributeRankingService.js` - Multi-attribute ranking with weights
- [x] `colorEnhancedMatchingService.js` - Color similarity calculations
- [x] `productController.js` - Updated addProduct & matchBangles endpoints
- [x] Database tables:
  - [x] `product_color_metadata` - Color families
  - [x] `bangleAiMatches` - Match tracking
- [ ] **CRITICAL:** Ensure `product_ai_metadata` is populated during product upload with:
  - [ ] `colors` column (JSON array)
  - [ ] `pattern` column (VARCHAR or JSON)
  - [ ] `style` column (VARCHAR or JSON)
  - [ ] `material` column (VARCHAR or JSON)

---

## 6. HOW TO USE

### For Admins (Upload Products)
1. Go to admin panel
2. Click "Add Product"
3. Upload image of bangle
4. System auto-extracts: colors, pattern, style, material
5. Review & adjust if needed
6. Save product
→ System stores in `product_color_metadata` and sends to `product_ai_metadata` via indexing workflow

### For Customers (Search Bangles)
1. Go to homepage
2. Click "Find your perfect bangles"
3. Upload dress image
4. System analyzes dress → extracts metadata
5. Searches Qdrant for 100 similar bangles
6. Re-ranks by: primary color > pattern > style > material > secondary color
7. Shows top 8 matches sorted by combined score
→ Most color-compatible matches appear first

---

## 7. ENVIRONMENT VARIABLES

```env
# Matching thresholds
AI_MATCH_MIN_SCORE=0.55           # Minimum AI similarity score (0-1)
AI_MATCH_MIN_SIMILARITY=0.4        # Minimum normalized similarity
AI_MATCH_MIN_COLOR_SIMILARITY=0.7  # Minimum color similarity
AI_MATCH_MIN_FINAL_SCORE=0.55      # Minimum final combined score

# AI Provider
AI_DEFAULT_PROVIDER=gemini         # gemini or openai
AI_SERVICE_URL=http://localhost:8000
```

---

## 8. NEXT STEPS

1. **Populate product_ai_metadata properly:**
   - When a product is uploaded, ensure pattern/style/material are extracted and stored
   - Update the FastAPI indexing endpoint or Node workflow to save these columns

2. **Test with real products:**
   - Upload olive green bangle → verify metadata stored
   - Upload green dress → verify matching shows olive green bangles first

3. **Optimize weights if needed:**
   - Current: Primary Color 40%, Pattern 25%, Style 20%, Material 10%, Secondary 5%
   - Adjust based on user feedback

4. **Add filtering UI:**
   - Let customers filter by pattern, style, material before uploading
   - Show "confidence" or "match quality" alongside results

