# DivaraCraft AI FastAPI Service

FastAPI service that processes product images, creates CLIP embeddings, extracts dominant colors, stores vectors in Qdrant, and performs hybrid bangle matching.

## Folder Structure

- app/main.py: FastAPI app entrypoint
- app/core/config.py: environment-driven configuration
- app/models/schemas.py: request/response models
- app/api/routes/product.py: `/process-product` endpoint
- app/services/image_service.py: image download utility
- app/services/embedding_service.py: CLIP embedding service
- app/services/color_service.py: dominant color extraction with OpenCV
- app/services/qdrant_service.py: Qdrant collection, upsert, and vector search
- app/services/ranking_service.py: hybrid score ranking logic
- app/services/product_processor.py: orchestration layer

## Setup

1. Create virtual environment and activate it.
2. Install dependencies:
   pip install -r requirements.txt
3. Create `.env` from `.env.example` and update values.
4. Run:
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

## API

### POST /process-product

Request:

```json
{
  "product_id": 101,
  "image_url": "https://example.com/image.jpg",
  "metadata": {
    "colors": ["red", "gold"],
    "category": "bangles",
    "size": "2.4",
    "design": "kundan",
    "pattern": "floral",
    "style": "ethnic",
    "material": "alloy"
  }
}
```

Response:

```json
{
  "status": "success",
  "product_id": 101,
  "stored": true,
  "payload": {
    "product_id": 101,
    "colors": ["red", "gold"],
    "color_hex": ["#C41E3A", "#D4AF37"],
    "category": "bangles",
    "size": "2.4",
    "design": "kundan",
    "pattern": "floral",
    "style": "ethnic",
    "material": "alloy"
  }
}
```

## Node Admin Proxy

Admin backend exposes a proxy endpoint:

- `POST /api/products/match-bangles` (port `5001`)

It forwards `image_url` or `image_file` plus optional `design` and `style` to the FastAPI matcher.

## Test Assets

- cURL examples: `ai-service/tests/curl_examples.sh`
- Postman collection: `ai-service/postman/DivaraCraft-AI.postman_collection.json`

### POST /match-bangles

Accepts multipart form data:

- `image_url` (optional, string)
- `image_file` (optional, file)
- `design` (optional, string)
- `style` (optional, string)

At least one of `image_url` or `image_file` is required.

Hybrid scoring formula:

`final_score = 0.7 * vector_similarity + 0.2 * color_match + 0.1 * design_match`

Behavior:

- Image preprocessing: resize to `224x224` + normalization
- Qdrant search: top 20 cosine matches
- Category filter: only `bangles`
- Ranked output: top 10

Response:

```json
[
  {
    "product_id": 101,
    "score": 0.913442,
    "matched_colors": ["gold", "maroon"],
    "similarity": 0.891122
  }
]
```
