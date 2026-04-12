const OpenAI = require('openai');
const { GoogleGenAI } = require('@google/genai');

let client;
let geminiClient;
let runtimeDefaultProvider = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  return client;
}

function getGeminiClient() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  return geminiClient;
}

function normalizeProvider(provider) {
  const value = String(provider || 'openai').trim().toLowerCase();
  return value === 'gemini' ? 'gemini' : 'openai';
}

function getDefaultAiProvider(fallback = 'openai') {
  if (runtimeDefaultProvider) {
    return runtimeDefaultProvider;
  }

  return normalizeProvider(process.env.DEFAULT_AI_PROVIDER || process.env.AI_PROVIDER || fallback);
}

function setDefaultAiProvider(provider) {
  runtimeDefaultProvider = normalizeProvider(provider || 'openai');
  return runtimeDefaultProvider;
}

function getAiProviderState(fallback = 'openai') {
  return {
    provider: getDefaultAiProvider(fallback),
    source: runtimeDefaultProvider ? 'runtime' : 'env'
  };
}

function getTextFromGeminiResponse(response) {
  if (!response) {
    return '{}';
  }

  if (typeof response.text === 'string' && response.text.trim()) {
    return response.text;
  }

  if (typeof response.text === 'function') {
    const text = response.text();
    if (typeof text === 'string' && text.trim()) {
      return text;
    }
  }

  const parts = response.candidates?.[0]?.content?.parts || [];
  const merged = parts
    .map((part) => part?.text || '')
    .join('\n')
    .trim();

  return merged || '{}';
}

function normalizeMetadata(value = {}) {
  const toArray = (v) => Array.isArray(v) ? v.filter(Boolean).map((x) => String(x).trim()).filter(Boolean) : [];
  const primaryColor = String(value.primary_color || '').trim();
  const secondaryColors = toArray(value.secondary_colors);
  const colors = [...new Set([
    ...toArray(value.colors),
    primaryColor,
    ...secondaryColors
  ].filter(Boolean))];

  return {
    colors,
    primary_color: primaryColor || colors[0] || '',
    primary_color_hex: String(value.primary_color_hex || '').trim(),
    secondary_colors: secondaryColors.filter((item) => item !== primaryColor),
    color_hex: toArray(value.color_hex),
    category: String(value.category || 'bangles').trim() || 'bangles',
    size: String(value.size || '').trim(),
    design: toArray(value.design),
    pattern: toArray(value.pattern),
    style: toArray(value.style),
    material: toArray(value.material),
    occasion: toArray(value.occasion),
    craft_type: toArray(value.craft_type),
    usage: toArray(value.usage),
    target_gender: String(value.target_gender || 'women').trim() || 'women',
    complementary_dress_colors: toArray(value.complementary_dress_colors),
    matching_notes: String(value.matching_notes || value.ecommerce?.matching_notes || '').trim()
  };
}

function toStringArray(value) {
  return Array.isArray(value)
    ? value.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
}

function normalizeMetadataFromAnalysis(value = {}) {
  const legacyLike = {
    colors: value.colors,
    primary_color: value.primary_color,
    secondary_colors: value.secondary_colors,
    color_hex: value.color_hex,
    category: value.category,
    size: value.size,
    design: value.design,
    pattern: value.pattern,
    style: value.style,
    material: value.material,
    occasion: value.occasion,
    craft_type: value.craft_type,
    usage: value.usage,
    target_gender: value.target_gender,
    complementary_dress_colors: value.complementary_dress_colors,
    primary_color_hex: value.primary_color_hex,
    matching_notes: value.matching_notes || value.ecommerce?.matching_notes
  };

  const hasLegacyShape = Boolean(
    legacyLike.colors ||
    legacyLike.primary_color ||
    legacyLike.secondary_colors ||
    legacyLike.color_hex ||
    legacyLike.size ||
    legacyLike.design ||
    legacyLike.pattern ||
    legacyLike.style ||
    legacyLike.material ||
    legacyLike.occasion ||
    legacyLike.craft_type
  );

  if (hasLegacyShape) {
    return normalizeMetadata(legacyLike);
  }

  const primaryColor = String(value.primary_color || '').trim();
  const secondaryColors = toStringArray(value.secondary_colors);
  const colors = [primaryColor, ...secondaryColors].filter(Boolean);

  const sizeEstimation = value.size_estimation || {};
  const relativeSize = String(sizeEstimation.relative_size || '').trim();
  const thickness = String(sizeEstimation.thickness || '').trim();
  const sizeValue = [relativeSize, thickness].filter(Boolean).join(', ');
  const ecommerce = value.ecommerce && typeof value.ecommerce === 'object' ? value.ecommerce : {};

  return normalizeMetadata({
    colors,
    primary_color: primaryColor,
    primary_color_hex: String(value.primary_color_hex || '').trim(),
    secondary_colors: secondaryColors,
    color_hex: toStringArray(value.color_hex),
    category: String(value.category || 'bangles').trim() || 'bangles',
    size: sizeValue,
    design: toStringArray(value.design_elements),
    pattern: toStringArray(value.pattern),
    style: toStringArray(value.style),
    material: toStringArray(value.material_estimated),
    occasion: toStringArray(value.occasion),
    craft_type: toStringArray(value.craft_type),
    usage: toStringArray(value.usage),
    target_gender: String(value.target_gender || 'women').trim() || 'women',
    complementary_dress_colors: toStringArray(value.complementary_dress_colors),
    matching_notes: String(ecommerce.matching_notes || value.matching_notes || '').trim()
  });
}

function parseJsonObjectFromText(text) {
  const cleaned = String(text || '').replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      const candidate = cleaned.slice(firstBrace, lastBrace + 1);
      return JSON.parse(candidate);
    }
    throw new Error(`analyzeImage: could not parse AI response as JSON: ${cleaned}`);
  }
}

/**
 * Analyze uploaded image (dress/outfit or product) using GPT-4o vision.
 * @param {Buffer} imageBuffer
 * @param {string} prompt
 * @returns {Promise<{colors:string[], color_hex:string[], category:string, size:string, design:string[], pattern:string[], style:string[], material:string[]}>}
 */
async function analyzeImage(imageBuffer, prompt) {
  const client = getClient();

  const base64Image = imageBuffer.toString('base64');

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    max_tokens: 500
  });

  const text = response.choices?.[0]?.message?.content || '{}';
  try {
    return normalizeMetadata(parseJsonObjectFromText(text));
  } catch (error) {
    // Fallback: do not fail the matching flow if analysis text is non-JSON.
    console.warn('analyzeImage parse fallback:', error.message);
    return normalizeMetadata({});
  }
}

async function analyzeImageWithGemini(imageBuffer, prompt) {
  const client = getGeminiClient();
  const base64Image = imageBuffer.toString('base64');

  const response = await client.models.generateContent({
    model: process.env.GEMINI_VISION_MODEL || 'gemini-2.5-flash',
    contents: [
      {
        role: 'user',
        parts: [
          { text: prompt },
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg'
            }
          }
        ]
      }
    ],
    config: {
      responseMimeType: 'application/json'
    }
  });

  const text = getTextFromGeminiResponse(response) || '{}';
  const parsed = parseJsonObjectFromText(text);
  return {
    raw: parsed,
    normalized: normalizeMetadataFromAnalysis(parsed)
  };
}

async function generateProductDescription(input = {}) {
  const client = getClient();
  const aiMetadata = normalizeMetadata(input.aiAnalysis || input.ai_analysis || {});

  const detailGroups = [
    `Product name: ${String(input.name || '').trim() || 'Not provided'}`,
    `Category: ${String(input.category || aiMetadata.category || '').trim() || 'Not provided'}`,
    `Colors: ${String(input.colors || '').trim() || aiMetadata.colors.join(', ') || 'Not provided'}`,
    `Size: ${String(input.size || aiMetadata.size || '').trim() || 'Not provided'}`,
    `Design: ${String(input.design || '').trim() || aiMetadata.design.join(', ') || 'Not provided'}`,
    `Pattern: ${String(input.pattern || '').trim() || aiMetadata.pattern.join(', ') || 'Not provided'}`,
    `Style: ${String(input.style || '').trim() || aiMetadata.style.join(', ') || 'Not provided'}`,
    `Material: ${String(input.material || '').trim() || aiMetadata.material.join(', ') || 'Not provided'}`,
    `Existing draft: ${String(input.existingDescription || '').trim() || 'None'}`
  ];

  const response = await client.chat.completions.create({
    model: process.env.OPENAI_TEXT_MODEL || 'gpt-4o-mini',
    temperature: 0.7,
    messages: [
      {
        role: 'system',
        content: 'You are an expert luxury ecommerce content strategist for handcrafted Indian fashion and jewelry. Return valid JSON only with keys: title, description, tags, seo_title, seo_meta_description. The title should be concise and premium. The description should up to 200 words, description should be in bullet points and formatted, persuasive and customer-friendly. tags should be an array of 6 to 10 short SEO keywords. seo_title should be under 70 characters. seo_meta_description should be under 160 characters. Do not include markdown or extra commentary.'
      },
      {
        role: 'user',
        content: `Create premium ecommerce content using the following product details:\n${detailGroups.join('\n')}`
      }
    ],
    max_tokens: 350
  });

  const text = response.choices?.[0]?.message?.content || '{}';

  try {
    const parsed = parseJsonObjectFromText(text);
    const tags = Array.isArray(parsed.tags)
      ? parsed.tags.map((tag) => String(tag || '').trim()).filter(Boolean).slice(0, 12)
      : String(parsed.tags || '')
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean)
          .slice(0, 12);

    const description = String(parsed.description || '').trim();
    const title = String(parsed.title || input.name || '').trim();

    return {
      title,
      description,
      tags,
      seo_title: String(parsed.seo_title || title).trim().slice(0, 255),
      seo_meta_description: String(parsed.seo_meta_description || description).trim().slice(0, 160)
    };
  } catch (error) {
    console.warn('generateProductDescription parse fallback:', error.message);
    const description = String(text || '').trim().replace(/^"|"$/g, '');
    const title = String(input.name || '').trim();
    return {
      title,
      description,
      tags: [],
      seo_title: title,
      seo_meta_description: description.slice(0, 160)
    };
  }
}

async function generateProductDescriptionWithGemini(input = {}) {
  const aiAnalysisRaw = input.aiAnalysisRaw || input.ai_analysis_raw || {};
  const ecommerce = aiAnalysisRaw.ecommerce || {};

  if (ecommerce && (ecommerce.long_description || ecommerce.short_description || ecommerce.title)) {
    const fallbackDescription = String(ecommerce.short_description || '').trim();
    const longDescription = String(ecommerce.long_description || '').trim();
    const description = longDescription || fallbackDescription;
    const title = String(ecommerce.title || input.name || '').trim();
    const tags = toStringArray(ecommerce.tags).slice(0, 12);
    const seoKeywords = toStringArray(ecommerce.seo_keywords).slice(0, 12);

    return {
      title,
      description,
      tags: tags.length ? tags : seoKeywords,
      seo_title: title,
      seo_meta_description: description.slice(0, 160)
    };
  }

  const client = getGeminiClient();
  const aiMetadata = normalizeMetadata(input.aiAnalysis || input.ai_analysis || {});

  const detailGroups = [
    `Product name: ${String(input.name || '').trim() || 'Not provided'}`,
    `Category: ${String(input.category || aiMetadata.category || '').trim() || 'Not provided'}`,
    `Colors: ${String(input.colors || '').trim() || aiMetadata.colors.join(', ') || 'Not provided'}`,
    `Size: ${String(input.size || aiMetadata.size || '').trim() || 'Not provided'}`,
    `Design: ${String(input.design || '').trim() || aiMetadata.design.join(', ') || 'Not provided'}`,
    `Pattern: ${String(input.pattern || '').trim() || aiMetadata.pattern.join(', ') || 'Not provided'}`,
    `Style: ${String(input.style || '').trim() || aiMetadata.style.join(', ') || 'Not provided'}`,
    `Material: ${String(input.material || '').trim() || aiMetadata.material.join(', ') || 'Not provided'}`,
    `Existing draft: ${String(input.existingDescription || '').trim() || 'None'}`
  ];

  const response = await client.models.generateContent({
    model: process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash',
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: [
              'You are an expert luxury ecommerce content strategist for handcrafted Indian fashion and jewelry.',
              'Return valid JSON only with keys: title, description, tags, seo_title, seo_meta_description.',
              'Description should be in bullet points and customer-friendly.',
              'seo_meta_description must be under 160 characters.',
              '',
              'Create premium ecommerce content using these product details:',
              detailGroups.join('\n')
            ].join('\n')
          }
        ]
      }
    ],
    config: {
      responseMimeType: 'application/json'
    }
  });

  const text = getTextFromGeminiResponse(response) || '{}';
  const parsed = parseJsonObjectFromText(text);

  const tags = Array.isArray(parsed.tags)
    ? parsed.tags.map((tag) => String(tag || '').trim()).filter(Boolean).slice(0, 12)
    : String(parsed.tags || '')
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
        .slice(0, 12);

  const description = String(parsed.description || '').trim();
  const title = String(parsed.title || input.name || '').trim();

  return {
    title,
    description,
    tags,
    seo_title: String(parsed.seo_title || title).trim().slice(0, 255),
    seo_meta_description: String(parsed.seo_meta_description || description).trim().slice(0, 160)
  };
}

async function analyzeImageByProvider(imageBuffer, prompt, provider = 'openai') {
  console.log(`Analyzing image with provider: ${provider}`);
  const resolvedProvider = normalizeProvider(provider);
  if (resolvedProvider === 'gemini') {
    const result = await analyzeImageWithGemini(imageBuffer, prompt);
    console.log('Gemini analysis result (raw):', result);
    return {
      provider: resolvedProvider,
      raw: result.raw,
      normalized: result.normalized
    };
  }
  console.log('prompt',prompt);

  const normalized = await analyzeImage(imageBuffer, prompt);
  console.log('OpenAI analysis result (normalized):', normalized);
  return {
    provider: resolvedProvider,
    raw: normalized,
    normalized
  };
}

async function generateProductDescriptionByProvider(input = {}, provider = 'openai') {
  const resolvedProvider = normalizeProvider(provider);
  if (resolvedProvider === 'gemini') {
    return generateProductDescriptionWithGemini(input);
  }
  return generateProductDescription(input);
}

async function generateBangleImageFromMetadata(metadata = {}) {
  const client = getClient();

  const colors = Array.isArray(metadata.colors) ? metadata.colors.join(', ') : 'complementary festive tones';
  const design = Array.isArray(metadata.design) ? metadata.design.join(', ') : 'handcrafted detailing';
  const pattern = Array.isArray(metadata.pattern) ? metadata.pattern.join(', ') : 'traditional motifs';
  const style = Array.isArray(metadata.style) ? metadata.style.join(', ') : 'festive traditional';
  const material = Array.isArray(metadata.material) ? metadata.material.join(', ') : 'silk thread, beads, stones';

  const prompt = ` Design a set of 6-8 handmade Indian silk thread bangles.

PRIMARY COLOR (STRICT):
Deep teal blue-green (#008080)
- Must match exact hex
- Do NOT shift toward green
- Maintain true teal tone (blue + green balance)

SECONDARY COLOR:
Rich gold (#D4AF37)

PATTERN STYLE (VERY IMPORTANT):
- Use traditional Indian textile patterns inspired by Gujarati / Rajasthani fabrics
- Include ikat-style geometric motifs, small diamonds, folk shapes, and elephant motifs
- Patterns must look like woven fabric design (NOT floral embroidery)
- Dense, repeating pattern wrapping around bangles
- Multi-color accents allowed ONLY inside motifs (red, yellow, white) but base remains teal

BANGLE DESIGN:
- Silk thread wrapped bangles in teal base
- Mix of:
  - simple plain teal bangles with gold bead lining
  - heavy patterned bangles with full textile motifs
- 6-8 bangles total

MATERIALS:
- silk thread
- gold beads
- kundan stones (minimal, optional)

STYLE:
- traditional Indian
- photorealistic
- high detail texture (visible thread + fabric pattern)
- clean white background
- studio lighting

IMPORTANT RULES:
- Pattern must match Indian dress fabric style (ikat / patola inspired)
- Do NOT use floral embroidery patterns
- Do NOT simplify pattern
- Keep pattern dense and authentic
- Maintain exact teal (#008080)

OUTPUT:
Ultra-realistic product-style image of bangles
`;

  const result = await client.images.generate({
    model: 'gpt-image-1',
    prompt,
    size: '1024x1024'
  });

  return result?.data?.[0]?.b64_json || null;
}

module.exports = {
  analyzeImage,
  generateProductDescription,
  generateBangleImageFromMetadata,
  analyzeImageByProvider,
  generateProductDescriptionByProvider,
  normalizeProvider,
  getDefaultAiProvider,
  setDefaultAiProvider,
  getAiProviderState
};