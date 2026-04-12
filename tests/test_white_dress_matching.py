#!/usr/bin/env python3
"""
Test the background removal and matching functionality
"""
import requests
import json
from PIL import Image, ImageDraw
import io

def create_white_dress_image():
    """Create a simple white dress image with tree background"""
    # Create image with tree-colored background (green/brown)
    img = Image.new('RGB', (400, 400), color=(100, 120, 80))  # Forest green background
    
    #Draw a white dress (rectangle in the middle)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Draw white dress
    draw.rectangle([100, 80, 300, 300], fill=(255, 255, 255, 255))  # White dress
    
    # Add some dress details
    draw.polygon([(100, 80), (300, 80), (280, 180)], fill=(240, 240, 240, 200))  # V-neck
    
    return img

def test_ai_matching():
    """Test the AI service matching endpoint"""
    print("=" * 60)
    print("Testing White Dress Matching with Background Removal")
    print("=" * 60 + "\n")
    
    # Create test image
    print("📸 Creating test white dress image...")
    img = create_white_dress_image()
    
    # Save to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='JPEG')
    img_bytes.seek(0)
    
    print("  ✅ Image created (white dress with forest background)\n")
    
    # Test AI service
    print("🔍 Testing AI /match-bangles endpoint...")
    try:
        files = {'image_file': ('test_dress.jpg', img_bytes, 'image/jpeg')}
        data = {
            'design': 'dress',
            'style': 'casual'
        }
        
        response = requests.post(
            'http://localhost:8000/match-bangles',
            files=files,
            data=data,
            timeout=30
        )
        
        if response.status_code == 200:
            results = response.json()
            print(f"  ✅ AI service returned {len(results)} results\n")
            
            if results:
                print("Top matches from Qdrant:")
                for i, match in enumerate(results[:3], 1):
                    print(f"  {i}. Product {match.get('id')}: {match.get('final_score', match.get('similarity', 'N/A')):.2%}")
            else:
                print("  ⚠️  No matches returned from Qdrant")
        else:
            print(f"  ❌ Error: {response.status_code}")
            print(f"     {response.text[:200]}")
            
    except requests.Timeout:
        print("  ⏱️  Timeout (expected on first run due to model download)")
    except Exception as e:
        print(f"  ❌ Error: {str(e)}")
    
    # Test backend matching
    print("\n" + "=" * 60)
    print("🔍 Testing Backend /match-bangles endpoint...")
    try:
        # Recreate image for backend test
        img = create_white_dress_image()
        img_bytes = io.BytesIO()
        img.save(img_bytes, format='JPEG')
        img_bytes.seek(0)
        
        files = {'image_file': ('test_dress.jpg', img_bytes, 'image/jpeg')}
        
        response = requests.post(
            'http://localhost:5002/api/products/match-bangles',
            files=files,
            timeout=60
        )
        
        if response.status_code == 200:
            results = response.json()
            matches = results.get('matches', [])
            print(f"  ✅ Backend returned {len(matches)} matches\n")
            
            if matches:
                print("Ranked matches with attribute scores:")
                for i, match in enumerate(matches, 1):
                    product_id = match.get('id')
                    final_score = match.get('final_score', 0)
                    colors = match.get('scores', {}).get('primary_color', 0)
                    pattern = match.get('scores', {}).get('pattern', 0)
                    print(f"\n  {i}. Product {product_id}:")
                    print(f"     ├─ Final Score: {final_score:.1%}")
                    print(f"     ├─ Primary Color Match: {colors:.1f}%")
                    print(f"     └─ Pattern Match: {pattern:.1f}%")
            else:
                print("  ❌ No matches returned!")
                print(f"     Dress metadata: {results.get('dress_metadata')}")
        else:
            print(f"  ❌ Error: {response.status_code}")
            print(f"     {response.text[:500]}")
            
    except requests.Timeout:
        print("  ⏱️  Timeout (backend matching takes 1-3 seconds)")
    except Exception as e:
        print(f"  ❌ Error: {str(e)}")
    
    print("\n" + "=" * 60)
    print("✅ Test complete!")
    print("=" * 60)

if __name__ == '__main__':
    test_ai_matching()
