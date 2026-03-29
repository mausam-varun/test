# Testing Cloudinary Integration with API

## Prerequisites
- Backend running on `http://localhost:5001`
- MySQL database connected
- `.env` file configured with Cloudinary credentials

---

## Testing with cURL

### 1. Create Product with Single Image

```bash
# Create a test image (or use your own)
echo "fake-jpeg-data" > test-image.jpg

# Upload product
curl -X POST http://localhost:5001/api/products \
  -F "name=Test Bangle with Stones" \
  -F "price=599" \
  -F "category=Bangles" \
  -F "description=Beautiful handcrafted bangle" \
  -F "images=@test-image.jpg"
```

**Expected Response:**
```json
{
  "id": 1,
  "name": "Test Bangle with Stones",
  "price": 599.00,
  "category": "Bangles",
  "description": "Beautiful handcrafted bangle",
  "image_url": "https://res.cloudinary.com/drom1d8qt/image/upload/v.../...",
  "images": [
    {
      "id": 1,
      "image_url": "https://res.cloudinary.com/drom1d8qt/image/upload/v.../...",
      "is_primary_image": true
    }
  ]
}
```

---

### 2. Get All Products

```bash
curl http://localhost:5001/api/products
```

**Expected Response:**
```json
[
  {
    "id": 1,
    "name": "Test Bangle with Stones",
    "price": 599.00,
    "category": "Bangles",
    "description": "Beautiful handcrafted bangle",
    "image_url": "https://res.cloudinary.com/...",
    "images": [...]
  }
]
```

---

### 3. Update Product (Replace Images)

```bash
curl -X PUT http://localhost:5001/api/products/1 \
  -F "name=Updated Bangle" \
  -F "price=699" \
  -F "images=@new-image.jpg"
```

**Expected Behavior:**
- Old image deleted from Cloudinary
- New image uploaded and stored
- Product updated in database

---

### 4. Delete Product

```bash
curl -X DELETE http://localhost:5001/api/products/1
```

**Expected Response:**
```json
{
  "message": "product deleted successfully"
}
```

**Expected Behavior:**
- Product deleted from MySQL
- All associated images deleted from Cloudinary

---

## Testing with Postman

### Setup Postman Request

1. **Create New Request**
   - Method: POST
   - URL: `http://localhost:5001/api/products`

2. **Set Headers**
   - Click "Headers"
   - Remove any `Content-Type` header (Postman will set it automatically)

3. **Add Body**
   - Click "Body"
   - Select "form-data"
   - Add fields:

   | Key | Type | Value |
   |-----|------|-------|
   | name | text | Test Product |
   | price | text | 1999 |
   | category | text | Kurtas |
   | description | text | Beautiful kurta |
   | images | file | [Select image file] |

4. **Send Request**
   - Click "Send"
   - Check response for success

---

## Testing via Angular Admin Panel

### Flow

1. **Start Applications**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && ng serve
   ```

2. **Navigate to Admin**
   ```
   http://localhost:4200/admin/add-product
   ```

3. **Add Product**
   - Fill in product details
   - Click "Choose Images"
   - Select 2-3 JPG/PNG files
   - Click on images to set primary
   - Click "Upload Product"

4. **Verify**
   - Success message appears
   - Image shows in uploaded products list
   - Image loads from Cloudinary URL

5. **Update Product**
   - Click "Edit" on existing product
   - Select new images
   - Click "Update Product"
   - Verify old images removed from Cloudinary dashboard

6. **Delete Product**
   - Click "Delete"
   - Confirm deletion
   - Verify both product and images removed

---

## Checking Cloudinary Upload

### Via Dashboard

1. Go to: https://console.cloudinary.com/
2. Login with your account
3. Navigate to "Media Library"
4. Look for folder: `divara-craft/products`
5. Verify images appear there

### Via Backend Logs

```bash
# Start backend with logging
npm run dev

# Watch for output:
# POST /api/products 201
# [User Agent info]
# [Response time]
```

### Via Database

```bash
# MySQL queries
SELECT * FROM products;
SELECT * FROM product_images;

# Count images
SELECT COUNT(*) FROM product_images WHERE product_id = 1;
```

---

## Common Issues & Fixes

### ❌ "Upload fails without error"
**Cause:** Backend not running
**Fix:** 
```bash
cd backend && npm run dev
```

### ❌ "502 Bad Gateway"
**Cause:** Backend crashed or not responding
**Fix:** Check console for errors, restart backend

### ❌ "500 Cloudinary error"
**Cause:** Invalid credentials or network issue
**Fix:** 
- Verify `.env` has correct credentials
- Check internet connection
- Restart backend

### ❌ "File too large"
**Cause:** File exceeds 5MB limit
**Fix:** Use smaller image or increase MAX_FILE_SIZE_BYTES in `.env`

### ❌ "Only JPG and PNG allowed"
**Cause:** Trying to upload WebP, GIF, etc.
**Fix:** Convert to JPG or PNG first

---

## Performance Testing

### Test 1: Bulk Upload
```bash
# Time test: Upload 100 products
time for i in {1..100}; do
  curl -X POST http://localhost:5001/api/products \
    -F "name=Product $i" \
    -F "price=$((RANDOM % 5000 + 100))" \
    -F "category=Test" \
    -F "images=@test-image.jpg" \
    2>/dev/null
done
```

### Test 2: Concurrent Uploads
```bash
# Test with 5 concurrent upload requests
for i in {1..5}; do
  curl -X POST http://localhost:5001/api/products \
    -F "name=Concurrent $i" \
    -F "price=999" \
    -F "images=@test-image.jpg" &
done
wait
```

### Test 3: Large File Upload
```bash
# Create 10MB test file
dd if=/dev/zero of=large-test.jpg bs=1M count=10

# Try uploading (should fail gracefully)
curl -X POST http://localhost:5001/api/products \
  -F "name=Large File Test" \
  -F "price=999" \
  -F "images=@large-test.jpg"
```

---

## Monitoring & Logs

### Backend Console
```
Admin backend running on port 5001
POST /api/products 201 12ms
[16:23:45] Image uploaded: https://res.cloudinary.com/...
Database connection established
```

### Frontend Console
```
ng serve
✔ Compiled successfully
✔ Build modules: XYZ files
Waiting at http://localhost:4200
```

### Cloudinary Activity
Visit: https://console.cloudinary.com/
- View upload history
- Monitor bandwidth usage
- Check request statistics

---

## Success Checklist

- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:4200
- [ ] Admin panel accessible at /admin/add-product
- [ ] Image selected and previewed
- [ ] Upload succeeds with image URL from Cloudinary
- [ ] Image appears in product list
- [ ] Product list displays Cloudinary image
- [ ] Cloudinary dashboard shows uploaded image
- [ ] Database has product record
- [ ] Database has product_images record
- [ ] Edit mode loads existing product
- [ ] Delete removes product and images
- [ ] Multiple images upload correctly
- [ ] Primary image selection works

✅ **All checks passed? You're ready to go!**

---

## Next Steps

1. **Production Setup**
   - Set CORS_ORIGIN to your domain
   - Enable HTTPS for Cloudinary URLs
   - Configure database backups

2. **Image Optimization**
   - Add Cloudinary URL transformations
   - Implement responsive images
   - Set download limits

3. **Performance**
   - Add caching headers
   - Enable lazy loading
   - Optimize bundle size

4. **Monitoring**
   - Set up error tracking
   - Add analytics
   - Monitor storage usage
