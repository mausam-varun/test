# Cloudinary Integration Guide

## ✅ Setup Complete

Your Divara Craft admin panel now has full Cloudinary image upload integration with automatic database synchronization.

---

## 🔐 Configuration

### Environment Variables
The following credentials have been configured in `/backend/.env`:

```
CLOUDINARY_CLOUD_NAME=drom1d8qt
CLOUDINARY_API_KEY=269234516646878
CLOUDINARY_API_SECRET=hCg8-ww1Wl1A9KvoSIz0du4V1kc
CLOUDINARY_FOLDER=divara-craft/products
```

**⚠️ Security Note:** Never commit `.env` file to version control. Add it to `.gitignore`.

---

## 🏗️ Architecture

### Backend Flow
```
Admin Upload Request
    ↓
Express Server (5001)
    ↓
Multer Middleware (memoryStorage)
    ↓
ProductController.addProduct()
    ↓
cloudinaryService.uploadImage()
    ↓
Cloudinary API
    ↓
Returns secure_url
    ↓
productService.createProduct() 
    ↓
MySQL Database (products + product_images tables)
    ↓
Response with image URLs
```

### Frontend Flow
```
Admin Component (Angular)
    ↓
User selects images (JPG/PNG)
    ↓
Preview images locally
    ↓
Set primary image
    ↓
Submit FormData to /api/products
    ↓
Backend processes upload
    ↓
Display success message
    ↓
Update product list
```

---

## 📡 API Endpoints

### Create Product (with images)
```
POST /api/products
Content-Type: multipart/form-data

Fields:
- name (text)
- price (number)
- category (text)
- description (text)
- images (file, multiple allowed)
- image (file, single fallback)

Response:
{
  "id": 1,
  "name": "Product Name",
  "price": 1499.00,
  "category": "Women Ethnic",
  "description": "...",
  "image_url": "https://res.cloudinary.com/.../v1234/...",
  "images": [
    {
      "id": 1,
      "image_url": "https://res.cloudinary.com/.../...",
      "is_primary_image": true
    }
  ]
}
```

### Get All Products
```
GET /api/products

Returns: Array of products with image URLs
```

### Update Product (with optional new images)
```
PUT /api/products/:id
Content-Type: multipart/form-data

- If new images uploaded: old images deleted from Cloudinary automatically
- If no images: existing images retained
```

### Delete Product
```
DELETE /api/products/:id

- Product deleted from MySQL
- All associated images deleted from Cloudinary
```

---

## 💾 Database Schema

### products table
```sql
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(120) NOT NULL,
  description TEXT,
  image_url VARCHAR(500) NULL,  -- Primary image URL
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
```

### product_images table
```sql
CREATE TABLE product_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  is_primary_image BOOLEAN DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)
```

---

## 🎯 Features

### ✨ Admin Upload Page (`/admin/add-product`)
- **Multi-image Upload**: Select and preview multiple images (JPG/PNG)
- **Primary Image Selection**: Mark one image as primary for product listing
- **Real-time Preview**: See images before upload
- **Batch Upload**: All images uploaded to Cloudinary in one request
- **Edit Mode**: Update product details and replace all images
- **Delete Cleanup**: Old images automatically removed from Cloudinary

### 📋 Product Management
- **Create**: Upload product with 1+ images
- **Read**: View all products with hyperoptimized Cloudinary URLs
- **Update**: Change product info and image set
- **Delete**: Remove product and all associated images

### 🖼️ Image Features
- **Responsive URLs**: Cloudinary URLs support transformations
- **Secure Delivery**: Uses secure_url (HTTPS)
- **Automatic Cleanup**: Orphaned images deleted on update/delete
- **Fallback**: If Cloudinary unavailable, saves to local `/uploads` folder

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 14+
MySQL 5.7+
npm or yarn
```

### Backend Setup

1. **Install dependencies** (if not already done):
```bash
cd backend
npm install
```

2. **Start the backend**:
```bash
npm run dev
# or for production:
npm start
```

Backend runs on `http://localhost:5001`

### Frontend Setup

1. **Install dependencies** (if not already done):
```bash
cd frontend
npm install
```

2. **Start Angular dev server**:
```bash
ng serve --poll=2000
# or
npm start
```

Frontend runs on `http://localhost:4200`

3. **Navigate to admin**:
```
http://localhost:4200/admin/add-product
```

---

## 🧪 Testing the Integration

### Test 1: Upload Single Image
1. Go to `/admin/add-product`
2. Fill in:
   - Name: "Test Product"
   - Price: 999
   - Category: "Test"
3. Click "Choose Images" and select 1 JPG/PNG
4. Click "Upload Product"
5. **Expected**: Success message + image appears in product list with Cloudinary URL

### Test 2: Upload Multiple Images
1. Repeat Test 1 but select 3-5 images
2. Click each image to set primary
3. Click "Upload Product"
4. **Expected**: All 5 images stored, primary shows in list

### Test 3: Update Product Images
1. In product list, click "Edit"
2. Upload different images
3. Click "Update Product"
4. **Expected**: Old images removed from Cloudinary, new ones added

### Test 4: Delete Product
1. In product list, click "Delete" → "Yes"
2. Check Cloudinary dashboard
3. **Expected**: Product deleted + all images removed from Cloudinary

---

## 📊 Monitoring

### Check Cloudinary Dashboard
Visit: https://console.cloudinary.com/

- Login with your account
- Navigate to Media Library
- View folder: `divara-craft/products`
- All uploaded images appear here

### Backend Logs
```bash
# Watch for successful uploads:
npm run dev

# Look for:
# Admin backend running on port 5001
# [Request logs showing POST /api/products]
```

### Database Check
```bash
# MySQL queries to verify:
SELECT * FROM products;
SELECT * FROM product_images WHERE product_id = 1;
```

---

## 🔧 Configuration Options

### Adjust File Size Limit
Edit `.env`:
```
MAX_FILE_SIZE_BYTES=5242880  # 5MB (increase if needed)
```

### Change Cloudinary Folder
Edit `.env`:
```
CLOUDINARY_FOLDER=divara-craft/products  # or any path
```

### Disable Cloudinary (fallback to local)
Comment out Cloudinary env vars in `.env` - will automatically save to `/uploads/`

---

## ⚠️ Troubleshooting

### Issue: "Cloudinary config error"
**Solution**: 
- Verify `.env` has correct credentials
- Restart backend: `npm run dev`

### Issue: "Upload fails - 413 Payload Too Large"
**Solution**:
- Increase MAX_FILE_SIZE_BYTES in `.env`
- Restart backend

### Issue: "Images not showing in product list"
**Solution**:
- Check browser console for errors
- Verify backend is running on 5001
- Check product_images table has records

### Issue: "Old images not deleted on update"
**Solution**:
- Check Cloudinary API permissions
- Verify CLOUDINARY_API_SECRET is correct
- Check backend logs for error details

---

## 🔐 Security Best Practices

1. **Environment Variables**: Never hardcode credentials
2. **CORS**: Restrict CORS_ORIGIN to frontend domain in production
3. **Rate Limiting**: 500 requests/15min already configured
4. **File Type Validation**: Only JPG/PNG allowed (enforced both frontend + backend)
5. **File Size Limits**: Max 5MB per file
6. **Database**: Store image URLs only, not file data

---

## 📚 Resources

- **Cloudinary Docs**: https://cloudinary.com/documentation
- **Node.js SDK**: https://cloudinary.com/documentation/node_integration
- **Multer**: https://github.com/expressjs/multer
- **Angular HttpClient**: https://angular.io/guide/http

---

## 📝 Quick Reference

| Task | Command |
|------|---------|
| Start backend | `npm run dev` (from backend) |
| Start frontend | `ng serve` (from frontend) |
| View images | https://console.cloudinary.com/ |
| Check DB | `SELECT * FROM products;` |
| Delete product | DELETE /api/products/:id |

---

**🎉 Your Cloudinary integration is ready to use!**

For questions or issues, refer to the architecture diagram or check logs using `npm run dev` with verbose output.
