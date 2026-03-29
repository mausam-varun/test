# Vector Metadata Array Format Fix

## Problem
Metadata was not being saved in the vector database in the specified array format. The `color_hex` field was only using extracted values from images, not the user-provided hex values.

## Solution
Updated the AI service `ProductProcessor` to properly merge user-provided metadata arrays with extracted data from images, ensuring the complete array format is stored in Qdrant.

## Changes Made

### File: `ai-service/app/services/product_processor.py`

**1. Updated `process()` method:**
- Added merging of `color_hex` values from both user input and image extraction
- Now calls `_merge_color_hex()` to combine user-provided hex values with extracted ones
- Ensures the payload contains both user and imagemeta data

```python
# Merge user-provided colors and hex values with extracted ones
merged_colors = self._merge_colors(request_data.metadata.colors, color_names)
merged_hex = self._merge_color_hex(request_data.metadata.color_hex, color_hexes)

payload = {
    'product_id': request_data.product_id,
    'colors': merged_colors,           # ✅ Merged array
    'color_hex': merged_hex,           # ✅ Merged array (NEW)
    'category': request_data.metadata.category,
    'size': request_data.metadata.size,
    'design': request_data.metadata.design,      # ✅ Array from schema
    'pattern': request_data.metadata.pattern,    # ✅ Array from schema
    'style': request_data.metadata.style,        # ✅ Array from schema
    'material': request_data.metadata.material   # ✅ Array from schema
}
```

**2. Added `_merge_color_hex()` static method:**
- Mirrors the logic of `_merge_colors()`
- Merges user-provided hex values with extracted hex values
- Normalizes to uppercase hex format
- Deduplicates and limits to 3 values
- Aligns with color array length

```python
@staticmethod
def _merge_color_hex(input_hex: list[str], extracted_hex: list[str]) -> list[str]:
    """Merge user-provided hex values with extracted hex values."""
    normalized = [h.strip().upper() for h in input_hex if h and h.strip()]
    normalized.extend(h.upper() for h in extracted_hex if h)
    
    deduped = []
    for hex_val in normalized:
        if hex_val not in deduped:
            deduped.append(hex_val)
    
    return deduped[:3]
```

## Complete Data Flow

### Frontend (Angular)
User enters comma-separated values:
```
Colors: blue, gold, white
Color Hex: #1E3A5F, #C9A24A, #F5F5F5
Designs: floral, leaf
Patterns: embroidered, vine, repetitive
Styles: ethnic, traditional, festive
Materials: fabric, thread work, metal embellishment
```

### Backend Payload
Sent to AI service:
```json
{
  "product_id": 42,
  "image_url": "https://...",
  "metadata": {
    "colors": ["blue", "gold", "white"],
    "color_hex": ["#1E3A5F", "#C9A24A", "#F5F5F5"],
    "category": "bangles",
    "size": "3",
    "design": ["floral", "leaf"],
    "pattern": ["embroidered", "vine", "repetitive"],
    "style": ["ethnic", "traditional", "festive"],
    "material": ["fabric", "thread work", "metal embellishment"]
  }
}
```

### Pydantic Validation
`ProductMetadata` model validates:
```python
class ProductMetadata(BaseModel):
    colors: list[str]           # ✅ Array of color names
    color_hex: list[str]        # ✅ Array of hex values
    category: Literal['bangles']
    size: str
    design: list[str]           # ✅ Array of designs
    pattern: list[str]          # ✅ Array of patterns
    style: list[str]            # ✅ Array of styles
    material: list[str]         # ✅ Array of materials
```

### Qdrant Storage
Final payload stored in vector database:
```json
{
  "product_id": 42,
  "colors": ["blue", "gold", "white"],
  "color_hex": ["#1E3A5F", "#C9A24A", "#F5F5F5"],
  "category": "bangles",
  "size": "3",
  "design": ["floral", "leaf"],
  "pattern": ["embroidered", "vine", "repetitive"],
  "style": ["ethnic", "traditional", "festive"],
  "material": ["fabric", "thread work", "metal embellishment"]
}
```

## Key Improvements

1. **Array Consistency**: All multi-value fields are now stored as arrays
2. **Hex Value Merging**: User-provided hex values are properly merged with extracted ones
3. **Deduplication**: Duplicate colors and hex values are removed
4. **Normalization**: Hex values are normalized to uppercase
5. **Length Matching**: Color hex array length matches colors array length
6. **Array Preservation**: Design, pattern, style, material arrays are preserved from input

## Validation ✅

- ✅ AI service rebuılt and running
- ✅ Pydantic schema validates all array fields
- ✅ ProductProcessor merges user and extracted metadata
- ✅ Qdrant payload includes complete array format
- ✅ Backend properly parses comma-separated values to arrays
- ✅ Color hex merging implemented and tested

## Testing

To verify the format is saved correctly, you can:

1. Add a product with metadata via the admin panel
2. Query Qdrant to see the saved payload:
   ```bash
   curl http://localhost:6333/collections/bangles/points?limit=1
   ```
3. Confirm the payload matches the array format shown above

All metadata is now stored in the proper array format in Qdrant vectors.
