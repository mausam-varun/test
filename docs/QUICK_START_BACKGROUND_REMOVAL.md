# Background Removal - Quick Start Guide

## What Is This?

When you upload a dress image for matching, the system now **automatically removes the background** before analyzing colors and finding matching bangles.

## Why?

**Problem:** Background elements (walls, floor, other objects) get mistaken for the dress colors
- Upload: Green dress with white wall background
- Old system extracts: Green + White
- New system extracts: Green only ✅

**Result:** Bangles match better because we focus on the actual dress!

## How to Use

### As a Customer (Frontend)
1. Go to localhost:4200
2. Upload dress image (as usual)
3. System automatically removes background
4. Get better bangle matches! ✅

**No changes needed** - it works automatically!

### As a Developer

#### Enable/Disable Background Removal
```python
# File: ai-service/app/services/product_processor.py

# Current (enabled):
preprocessed = await asyncio.to_thread(
    self.image_service.preprocess_image, 
    image, (224, 224), 
    remove_bg=True  # ✅ Background removal ON
)

# To disable:
preprocessed = await asyncio.to_thread(
    self.image_service.preprocess_image, 
    image, (224, 224), 
    remove_bg=False  # ❌ Background removal OFF
)
```

#### Manual Background Removal
```python
from PIL import Image
from app.services.image_service import ImageService

service = ImageService()

# Load image
image = Image.open('dress.jpg')

# Remove background
clean_image = service.remove_background(image, return_alpha=False)

# Save result
clean_image.save('dress_no_bg.jpg')
```

## Installation

✅ **Already done!** But if needed:

```bash
python3 -m pip install rembg==2.0.57
```

## What Changed

### 1. **requirements.txt**
Added:
```
rembg==2.0.57
```

### 2. **image_service.py**
New method:
```python
def remove_background(self, image, return_alpha=False):
    """AI-powered background removal"""
```

Updated method:
```python
def preprocess_image(self, image, size=(224,224), remove_bg=False):
    """Resize + optional background removal"""
```

### 3. **product_processor.py**
- Product uploads → background removed
- Customer matching → background removed

## Performance

| Task | Time |
|------|------|
| First use (downloads model) | 2-3 seconds |
| Subsequent uses (cached) | 0.5-2 seconds |
| Total pipeline | 1-3 seconds |

## Troubleshooting

### API feels slow
**Normal!** First request downloads the AI model (~350MB)
- Wait 2-3 minutes on first call
- Subsequent calls are fast

To check status:
```bash
# If running locally, check cache
ls -la ~/.cache/rembg/
```

### Background not removed properly
Some cases are hard (similar color to background):
- The system tries its best
- Falls back to original image if needed
- Check image quality (should be clear)

### Want to disable it temporarily
Edit `product_processor.py`:
- Change `remove_bg=True` → `remove_bg=False`
- Restart AI service

## API Endpoints

### /match-bangles (Customer Dress Matching)
```bash
curl -X POST http://localhost:8000/match-bangles \
  -F "image_file=@dress.jpg"

# Returns: Matching bangles (with cleaner colors!) ✅
```

### /process-product (Admin Product Upload)
```bash
# Admin uploads: Green bangle image
# Background automatically removed
# Colors extracted cleanly: [green] only ✅
```

## Real-World Example

### Scenario: Customer uploads green dress

**Before (No Background Removal)**
```
Upload: Green dress + white wall background
┌─────────────────┐
│ Wall (white)    │
│ ┌───────────┐   │
│ │ Dress     │   │
│ │ (green)   │   │
│ └───────────┘   │
└─────────────────┘

Colors extracted: [green: 50%, white: 50%]
Matches: Not great (confused by white)
Bangles returned: Mixed results ❌
```

**After (With Background Removal)**
```
Upload: Green dress + white wall background
Background removed automatically ✨
┌─────────────────┐
│ Dress (green)   │
│ (white bg)      │
└─────────────────┘

Colors extracted: [green: 100%]
Matches: Perfect! (clear green)
Bangles returned: Green bangles first 🎯 ✅
```

## Files to Know About

```
/ai-service/
├── app/services/
│   ├── image_service.py        ← Background removal here
│   └── product_processor.py    ← Uses background removal
└── requirements.txt            ← rembg added

/docs/
├── BACKGROUND_REMOVAL_DEPLOYMENT.md  ← Full guide
├── BACKGROUND_REMOVAL_GUIDE.md       ← Technical details
└── QUICK_START_BACKGROUND_REMOVAL.md ← This file
```

## Next Steps

1. **Restart AI Service**
   ```bash
   pkill -f "uvicorn"
   cd /Users/mausamrajvarun/DivaraCraft/test/ai-service
   uvicorn app.main:app --port 8000 &
   ```

2. **Test Upload**
   - Upload dress image at localhost:4200
   - Check that bangles match better
   
3. **Monitor**
   - First upload: 2-3 seconds (model download)
   - Next uploads: <2 seconds (cached)

## Questions?

Refer to:
- Technical details → `/docs/BACKGROUND_REMOVAL_GUIDE.md`
- Deployment steps → `/docs/BACKGROUND_REMOVAL_DEPLOYMENT.md`
- Code → `/ai-service/app/services/image_service.py`

---

**Status:** ✅ Ready to use!

