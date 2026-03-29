const OpenAI = require('openai');

let client;

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

function normalizeMetadata(value = {}) {
  const toArray = (v) => Array.isArray(v) ? v.filter(Boolean).map((x) => String(x).trim()).filter(Boolean) : [];
  return {
    colors: toArray(value.colors),
    color_hex: toArray(value.color_hex),
    category: String(value.category || 'bangles').trim() || 'bangles',
    size: String(value.size || '').trim(),
    design: toArray(value.design),
    pattern: toArray(value.pattern),
    style: toArray(value.style),
    material: toArray(value.material)
  };
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

module.exports = { analyzeImage, generateBangleImageFromMetadata };