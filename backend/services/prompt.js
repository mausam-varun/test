async function getUploadProductDetails() {
  return `Analyze the uploaded image. It may be a dress/outfit (not necessarily a bangle).

Goal:
- Extract style signals from the dress/outfit image
- Return metadata useful for matching bangles

Return ONLY valid JSON in this exact format:

{
  "colors": [],
  "color_hex": [],
  "category": "bangles",
  "size": "",
  "design": [],
  "pattern": [],
  "style": [],
  "material": []
}

Rules:
- Detect dominant outfit colors and include HEX codes
- Identify design (embroidered, stonework, threadwork)
- Identify pattern (floral, geometric, plain)
- Identify style (traditional, modern, bridal)
- Identify material cues from outfit (silk, cotton, net, etc.)
- If unknown, return empty array
- If no bangles are visible, DO NOT reject. Infer from outfit and return best-effort metadata.
- No extra text, only JSON`;
}

module.exports = { getUploadProductDetails };
