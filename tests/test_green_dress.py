#!/usr/bin/env python3
"""Test green dress matching"""
import requests, json, io
from PIL import Image, ImageDraw

# Create green dress image with background
img = Image.new('RGB', (400, 400), color=(150, 100, 50))  # Brown background
draw = ImageDraw.Draw(img, 'RGBA')

# Draw green dress
draw.rectangle([100, 80, 300, 300], fill=(50, 150, 50, 255))  # Green dress
draw.polygon([(100, 80), (300, 80), (280, 180)], fill=(40, 140, 40, 200))  # V-neck

img_bytes = io.BytesIO()
img.save(img_bytes, format='JPEG')
img_bytes.seek(0)

# Test backend
print("Testing Green Dress Matching...")
print("=" * 60)

response = requests.post(
    'http://localhost:5002/api/products/match-bangles',
    files={'image_file': ('test.jpg', img_bytes, 'image/jpeg')},
    timeout=60
)

if response.status_code == 200:
    results = response.json()
    matches = results.get('matches', [])
    dress_metadata = results.get('dress_metadata', {})
    
    print(f"\n✅ Backend returned {len(matches)} matches")
    print(f"\nDetected Colors: {dress_metadata.get('colors', [])}")
    print(f"Primary Color: {dress_metadata.get('primary_color')}")
    print(f"Pattern: {dress_metadata.get('pattern', [])}")
    print(f"Style: {dress_metadata.get('style', [])}")
    
    if matches:
        print("\n🎯 Ranked matches:")
        for i, match in enumerate(matches, 1):
            print(f"  {i}. Product {match.get('id')}: {match.get('final_score'):.1%} score")
    else:
        print("\n❌ No matches returned!")
else:
    print(f"Error: {response.status_code}")
    print(response.text[:500])
