#!/usr/bin/env python3
"""
Test Qdrant search results structure
"""
import requests
import json

def test_qdrant_search():
    """Test what Qdrant returns for a search"""
    print("Testing Qdrant search results...")
    
    # Create a dummy query vector (512 dimensions)
    query_vector = [0.1] * 512
    
    search_body = {
        "vector": query_vector,
        "limit": 5,
        "with_payload": True,
        "with_vectors": False
    }
    
    try:
        response = requests.post(
            'http://localhost:6333/collections/bangles/points/search',
            json=search_body,
            timeout=10
        )
        
        if response.status_code == 200:
            results = response.json()
            print(f"✅ Search returned {response.status_code}")
            print(json.dumps(results, indent=2)[:1000])
        else:
            print(f"❌ Error {response.status_code}")
            print(response.text[:500])
            
    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == '__main__':
    test_qdrant_search()
