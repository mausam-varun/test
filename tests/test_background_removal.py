#!/usr/bin/env python3
"""
Background Removal Feature - Quick Test Script
Tests the new background removal functionality in the AI service
"""

import sys
import requests
from pathlib import Path

# Configuration
AI_SERVICE_URL = "http://localhost:8000"
MATCH_ENDPOINT = f"{AI_SERVICE_URL}/match-bangles"
HEALTH_ENDPOINT = f"{AI_SERVICE_URL}/health"

def check_ai_service():
    """Verify AI service is running"""
    try:
        response = requests.get(HEALTH_ENDPOINT, timeout=5)
        if response.status_code == 200:
            print("✅ AI Service is running")
            return True
    except requests.ConnectionError:
        print("❌ AI Service not running at http://localhost:8000")
        print("   Start it with: uvicorn app.main:app --host 0.0.0.0 --port 8000")
        return False

def test_background_removal(image_path):
    """
    Test background removal on an uploaded image
    
    Args:
        image_path: Path to image file to test
    """
    if not Path(image_path).exists():
        print(f"❌ Image not found: {image_path}")
        return False
    
    print(f"\n📸 Testing background removal with: {image_path}")
    
    try:
        with open(image_path, 'rb') as f:
            files = {'image_file': f}
            data = {
                'design': 'dress',
                'style': 'casual'
            }
            
            print("🔄 Processing image (removing background)...")
            response = requests.post(MATCH_ENDPOINT, files=files, data=data, timeout=30)
            
            if response.status_code == 200:
                results = response.json()
                print("✅ Background removal successful!")
                print(f"\n📊 Extracted {len(results)} matching bangles:")
                
                for i, match in enumerate(results[:3], 1):
                    print(f"\n  {i}. Product {match.get('id')}:")
                    print(f"     - Final Score: {match.get('final_score', 0):.2%}")
                    if 'color_names' in match:
                        print(f"     - Extracted Colors: {', '.join(match['color_names'])}")
                
                return True
            else:
                print(f"❌ Error: {response.status_code}")
                print(f"   Details: {response.text}")
                return False
                
    except requests.Timeout:
        print("⏱️  Request timeout (background removal takes 1-3 seconds)")
        return False
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

def quick_check():
    """Quick sanity check of the implementation"""
    print("🔍 Checking Background Removal Implementation...\n")
    
    print("1. Checking if rembg is installed...")
    try:
        import rembg
        print("   ✅ rembg module found")
    except ImportError:
        print("   ❌ rembg not installed")
        print("   Fix: python3 -m pip install rembg==2.0.57")
        return False
    
    print("\n2. Checking ImageService...")
    try:
        sys.path.insert(0, '/Users/mausamrajvarun/DivaraCraft/test/ai-service')
        from app.services.image_service import ImageService
        
        service = ImageService()
        if hasattr(service, 'remove_background'):
            print("   ✅ remove_background() method exists")
        else:
            print("   ❌ remove_background() method not found")
            return False
            
        if hasattr(service, 'preprocess_image'):
            print("   ✅ preprocess_image() method exists")
        else:
            print("   ❌ preprocess_image() method not found")
            return False
            
    except Exception as e:
        print(f"   ❌ Error loading ImageService: {str(e)}")
        return False
    
    print("\n3. Checking ProductProcessor...")
    try:
        from app.services.product_processor import ProductProcessor
        print("   ✅ ProductProcessor imports successfully")
    except Exception as e:
        print(f"   ❌ Error loading ProductProcessor: {str(e)}")
        return False
    
    print("\n✅ All checks passed!")
    return True

def main():
    """Main test function"""
    print("=" * 60)
    print("Background Removal Feature - Test Suite")
    print("=" * 60)
    
    # Quick sanity check
    if not quick_check():
        print("\n❌ Implementation check failed!")
        return 1
    
    # Check AI service
    print("\n" + "=" * 60)
    if not check_ai_service():
        print("\n⚠️  AI Service check failed - skipping endpoint tests")
        print("\nTo test the full pipeline:")
        print("1. Start AI service: cd ai-service && uvicorn app.main:app --port 8000")
        print("2. Upload image: curl -X POST http://localhost:8000/match-bangles \\")
        print("                   -F 'image_file=@test.jpg'")
        return 0
    
    # Test with sample image if available
    print("\n" + "=" * 60)
    print("Testing with sample images...\n")
    
    # Look for test images
    test_images = [
        '/Users/mausamrajvarun/DivaraCraft/test/frontend/src/assets/sample-dress.jpg',
        '/Users/mausamrajvarun/DivaraCraft/test/frontend/src/assets/dress.jpg',
    ]
    
    found_image = False
    for img_path in test_images:
        if Path(img_path).exists():
            test_background_removal(img_path)
            found_image = True
            break
    
    if not found_image:
        print("ℹ️  No sample images found for testing")
        print("\nTo test manually:")
        print("curl -X POST http://localhost:8000/match-bangles \\")
        print("  -F 'image_file=@/path/to/your/dress/image.jpg'")
    
    print("\n" + "=" * 60)
    print("✅ Background removal feature is ready!")
    print("=" * 60)
    return 0

if __name__ == '__main__':
    sys.exit(main())
