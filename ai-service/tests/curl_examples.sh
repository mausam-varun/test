#!/usr/bin/env bash

set -euo pipefail

AI_BASE_URL=${AI_BASE_URL:-http://localhost:8000}
ADMIN_BASE_URL=${ADMIN_BASE_URL:-http://localhost:5001}

echo "1) Health check"
curl -sS "${AI_BASE_URL}/health" | cat

echo "\n2) Index product into Qdrant"
curl -sS -X POST "${AI_BASE_URL}/process-product" \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 101,
    "image_url": "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    "metadata": {
      "colors": ["red", "gold"],
      "category": "bangles",
      "size": "2.4",
      "design": "kundan",
      "pattern": "floral",
      "style": "ethnic",
      "material": "alloy"
    }
  }' | cat

echo "\n3) Hybrid match (direct AI service, URL mode)"
curl -sS -X POST "${AI_BASE_URL}/match-bangles" \
  -F "image_url=https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0" \
  -F "design=kundan" \
  -F "style=ethnic" | cat

echo "\n4) Hybrid match (Node admin proxy, URL mode)"
curl -sS -X POST "${ADMIN_BASE_URL}/api/products/match-bangles" \
  -F "image_url=https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0" \
  -F "design=kundan" \
  -F "style=ethnic" | cat

echo "\nDone"
