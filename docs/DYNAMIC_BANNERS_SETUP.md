# Dynamic Promotional Banners System - Setup Guide

## 🎯 Overview
Complete system for managing promotional banners on the home page through admin panel with full CRUD operations, image uploads to Cloudinary, and dynamic display.

---

## 📁 Files Created

### Backend

#### 1. **Route Handler** - `/backend/routes/bannerRoutes.js`
- Public endpoints: GET all active banners
- Admin endpoints: CRUD operations with authentication
- Image upload middleware integration

#### 2. **Controller** - `/backend/controllers/bannerController.js`
- Request handling and validation
- Image upload/delete with Cloudinary
- Error handling with custom AppError

#### 3. **Service** - `/backend/services/bannerService.js`
- Database operations (MySQL)
- Banner CRUD functions
- Active banner filtering

#### 4. **Database Migration** - `/docs/PROMOTIONAL_BANNERS_MIGRATION.sql`
- Creates `promotional_banners` table
- Includes 3 sample banners for testing
- Proper indexes for performance

### Frontend

#### 1. **Component** - `/frontend/src/app/home/home.component.ts`
- Added `PromotionalBanner` interface
- `promotionalBanners` property
- `loadPromotionalBanners()` method
- API integration via HTTP

#### 2. **Template** - `/frontend/src/app/home/home.component.html`
- Dynamic banner section with `*ngFor`
- Dynamic background colors
- Binding for label, title, CTA text, image, and links

#### 3. **Admin Component** - `/frontend/src/app/admin/admin-banner-management/`
- `admin-banner-management.component.ts` - Full CRUD logic
- `admin-banner-management.component.html` - User interface
- `admin-banner-management.component.scss` - Professional styling

---

## 🚀 Installation Steps

### Step 1: Database Migration
```bash
cd /Users/mausamrajvarun/DivaraCraft/test

# Run the migration to create promotional_banners table
mysql -h localhost -P 3307 -u root -pdivaracraft divara_craft < docs/PROMOTIONAL_BANNERS_MIGRATION.sql
```

Verify the table was created:
```bash
mysql -h localhost -P 3307 -u root -pdivaracraft divara_craft -e "SHOW TABLES LIKE 'promotional_banners';"
```

### Step 2: Update Admin Module (Frontend)
Edit `frontend/src/app/admin/admin.module.ts`:

```typescript
import { AdminBannerManagementComponent } from './admin-banner-management/admin-banner-management.component';

@NgModule({
  declarations: [
    // ... existing components
    AdminBannerManagementComponent
  ],
  imports: [
    // ... existing imports
  ]
})
export class AdminModule { }
```

### Step 3: Add Admin Route
Edit `frontend/src/app/admin/admin-routing.module.ts`:

```typescript
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'manage-banners', component: AdminBannerManagementComponent },
      // ... other routes
    ]
  }
];
```

### Step 4: Add Navigation Link (Optional)
Add to admin sidebar/navigation:

```html
<a routerLink="/admin/manage-banners">
  <span>📢 Manage Banners</span>
</a>
```

### Step 5: Reload Services
The backend routes are already registered in `server.js` but if changed, restart:

```bash
# The docker-compose containers will auto-reload
# Or restart manually
docker-compose restart divara-admin-backend
```

---

## 📊 API Endpoints

### Public (No Auth Required)
```
GET  /api/banners              Get all active banners
GET  /api/banners/:id          Get banner by ID
```

### Admin (Auth Required)
All admin endpoints require: `Authorization: Bearer admin-token-<id>`

```
GET    /api/admin/banners                Get all banners (including inactive)
POST   /api/admin/banners                Create new banner
       - FormData with file upload
PUT    /api/admin/banners/:id            Update banner
       - FormData with optional file
DELETE /api/admin/banners/:id            Delete banner
```

---

## 📝 Banner Data Structure

```typescript
interface PromotionalBanner {
  id?: number;
  label: string;              // "SPECIAL PRODUCTS"
  title: string;              // "Keep Your Feet Cool And Comfy"
  cta_text: string;           // "Shop Now"
  cta_link: string;           // "/shop", "#", etc.
  image_url?: string;         // Auto-stored in Cloudinary
  background_color: string;   // "linear-gradient(135deg, #F5E6D3 0%, #E8D4BF 100%)"
  display_order?: number;     // Sort order (0, 1, 2...)
  is_active?: boolean;        // Visibility flag
  created_at?: string;        // ISO timestamp
  updated_at?: string;        // ISO timestamp
}
```

---

## 🎨 Admin Panel Features

### Create/Edit Banner
- **Label Input** - Badge text (required)
- **Title Input** - Main heading (required)
- **CTA Text** - Button label (default: "Shop Now")
- **CTA Link** - Button link (default: "#")
- **Background Color** - CSS gradient support
- **Display Order** - Number for sorting
- **Image Upload** - Drag-and-drop or click to select
- **Image Preview** - Real-time preview
- **Active Toggle** - Publish/unpublish banners

### Banner List
- **Cards View** - Visual preview of all banners
- **Edit Action** - Click to edit
- **Delete Action** - Remove with confirmation
- **Active Toggle** - Quick on/off toggle
- **Display Order** - Sorted by order
- **Status Badge** - Shows if active/inactive

---

## 🔐 Authentication

The banner management routes are protected with admin token authentication:

```javascript
// Token format: "admin-token-<id>"
// Stored in: localStorage.getItem('adminToken')
// Sent as: Authorization header with "Bearer " prefix
```

The component automatically reads from localStorage and includes the token.

---

## 📸 Image Upload

- **Storage**: Cloudinary (configured in backend)
- **Folder**: `divara-craft/banners`
- **Auto-delete**: Old images deleted when updated
- **Formats**: JPG, PNG, WebP, etc.
- **Size**: Limited by Cloudinary settings (default ~25MB max)

---

## ✨ Features

✅ **CRUD Operations** - Create, read, update, delete banners
✅ **Image Management** - Upload, preview, auto-cleanup
✅ **Admin Authentication** - Secure routes with token
✅ **Dynamic Display** - Banners fetched and rendered dynamically
✅ **Sorting** - Control banner display order
✅ **Active/Inactive** - Quick toggle visibility
✅ **Responsive Design** - Works on desktop and mobile
✅ **Error Handling** - User-friendly error messages
✅ **Cloudinary Integration** - Scalable image storage

---

## 🧪 Testing

### 1. Verify Database Table
```bash
mysql -h localhost -P 3307 -u root -pdivaracraft divara_craft -e "SELECT * FROM promotional_banners\G"
```

### 2. Test Public API
```bash
curl http://localhost:5002/api/banners
```

### 3. Test Admin API (with auth token)
```bash
curl -H "Authorization: Bearer admin-token-1" http://localhost:5002/api/admin/banners
```

### 4. Navigate to Admin Panel
```
http://localhost:4200/admin/manage-banners
```

---

## 🐛 Troubleshooting

### Banners Not Loading
1. Check browser console for errors
2. Verify API endpoint is accessible: `http://localhost:5002/api/banners`
3. Ensure banners are marked as `is_active = 1` in database
4. Check `home.component.ts` `loadPromotionalBanners()` method is called in `ngOnInit()`

### Image Upload Fails
1. Check Cloudinary credentials in `.env`
2. Verify file is valid image format
3. Check file size doesn't exceed Cloudinary limits
4. Look for errors in backend logs

### Admin Component Not Found
1. Ensure `AdminBannerManagementComponent` is added to `admin.module.ts`
2. Verify route is added to `admin-routing.module.ts`
3. Check for import statement errors

### Authentication Fails
1. Login to admin panel first
2. Token should be in localStorage: `localStorage.getItem('adminToken')`
3. Format should be: `admin-token-<id>`

---

## 📚 Sample Banner Data

Three banners are automatically inserted by the migration:

```javascript
// Banner 1: Keep Your Feet
{
  label: "SPECIAL PRODUCTS",
  title: "Keep Your Feet Cool And Comfy",
  cta_text: "Shop Now",
  cta_link: "/shop",
  background_color: "linear-gradient(135deg, #F5E6D3 0%, #E8D4BF 100%)",
  image_url: "https://images.unsplash.com/...",
  display_order: 1,
  is_active: true
}

// Banner 2: Sunglasses
{
  label: "30% OFF THIS WEEK",
  title: "Sunglasses New Collection",
  background_color: "linear-gradient(135deg, #FFD9E8 0%, #FFB6D9 100%)",
  display_order: 2,
  is_active: true
}

// Banner 3: Fashion Season
{
  label: "SPECIAL PRODUCTS",
  title: "Prepare For Your Latest Season",
  background_color: "linear-gradient(135deg, #B8D9F1 0%, #7DB3E8 100%)",
  display_order: 3,
  is_active: true
}
```

---

## 📖 Usage Examples

### Frontend Component Integration
```typescript
// Already set up in home.component.ts
promotionalBanners: PromotionalBanner[] = [];

ngOnInit() {
  this.loadPromotionalBanners();
}

private loadPromotionalBanners(): void {
  this.http.get<PromotionalBanner[]>('/api/banners').subscribe({
    next: (banners) => {
      this.promotionalBanners = banners.sort((a, b) => 
        (a.display_order || 0) - (b.display_order || 0)
      );
    }
  });
}
```

### Template Display
```html
<div *ngFor="let banner of promotionalBanners" 
     [style.background]="banner.background_color">
  <span>{{ banner.label }}</span>
  <h2>{{ banner.title }}</h2>
  <a [href]="banner.cta_link">{{ banner.cta_text }}</a>
  <img [src]="banner.image_url" [alt]="banner.title">
</div>
```

---

## ✅ Checklist

- [ ] Database migration executed
- [ ] `AdminBannerManagementComponent` added to admin module declarations
- [ ] Banner route added to admin routing
- [ ] (Optional) Navigation link added to admin menu
- [ ] Backend restarted (or auto-reload with docker-compose)
- [ ] Frontend loaded (should auto-reload)
- [ ] Test banners visible on home page
- [ ] Admin panel accessible at `/admin/manage-banners`
- [ ] Can create/edit/delete banners from admin
- [ ] Image uploads working to Cloudinary
- [ ] Banner changes visible on home page immediately

---

**Setup Complete! 🎉** You now have a fully dynamic banner system controlled through the admin panel.
