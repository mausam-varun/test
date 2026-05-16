async function getUploadProductDetails() {
  return `Analyze the uploaded product image for Divara Craft.

Return STRICTLY valid JSON only using this schema:

{
  "product_type": "",
  "category": "",
  "sub_category": "",
  "primary_color": "",
  "primary_color_hex": "",
  "secondary_colors": [],
  "color_family": [],
  "color_hex": [],
  "material_estimated": [],
  "finish": "",
  "style": [],
  "occasion": [],
  "pattern": [],
  "design_elements": [],
  "embellishments": [],
  "craft_type": [],
  "texture": "",
  "visual_density": "",
  "shape": "",
  "usage": [],
  "aesthetic_tags": [],
  "cultural_inference": "",
  "quality_inference": "",
  "confidence_score": 0.0,
  "ecommerce": {
    "title": "",
    "short_description": "",
    "long_description": "",
    "tags": [],
    "seo_keywords": []
  }
}

Rules:
- Output only valid JSON.
- Generate product descrition with bullet points in the long_description field.
- Be accurate and concise.
- Include primary_color_hex for the dominant dress color.
- Use arrays where multiple values apply.
- Infer only visually reasonable details.`;
}

async function getDressMatchingAnalysisPrompt() {
  return `Analyze this dress image as a senior fashion stylist for Divara Craft.

Your task is to extract product details that specifically help in matching jewelry. Focus on the exact hex-shades of colors, the type of embroidery (Zari, Gota, thread work, mirror work, etc.), neckline/fabric cues, and the level of formality.

Return STRICTLY valid JSON following this exact schema:

{
  "product_type": "dress",
  "category": "bangles",
  "sub_category": "",
  "primary_color": "",
  "primary_color_hex": "",
  "secondary_colors": [],
  "color_family": [],
  "color_hex": [],
  "material_estimated": [],
  "finish": "",
  "style": [],
  "occasion": [],
  "pattern": [],
  "design_elements": [],
  "embellishments": [],
  "craft_type": [],
  "texture": "",
  "visual_density": "",
  "shape": "",
  "usage": [],
  "aesthetic_tags": [],
  "cultural_inference": "",
  "quality_inference": "",
  "target_gender": "Women",
  "complementary_dress_colors": [],
  "confidence_score": 0.0,
  "ecommerce": {
    "title": "",
    "short_description": "",
    "long_description": "",
    "tags": [],
    "seo_keywords": [],
    "matching_notes": ""
  }
}

Rules:
- Output ONLY JSON. No markdown or explanation.
- Keep category fixed to "bangles" because this metadata is for bangle matching.
- Include 1-3 dominant dress colors and their closest HEX shades.
- Include primary_color_hex for the dominant dress color.
- Use concise fashion terms for material_estimated, design_elements, style, occasion, and craft_type.
- Populate complementary_dress_colors with dress colors that would suit matching bangles.
- In ecommerce.matching_notes, explain what kind of bangles fit this fabric, neckline, and occasion.
- If a field is uncertain, leave it empty or return an empty array.`;
}

async function getGeminiProductAnalysisPrompt() {
  return getUploadProductDetails();
}

module.exports = { getUploadProductDetails, getDressMatchingAnalysisPrompt, getGeminiProductAnalysisPrompt };
