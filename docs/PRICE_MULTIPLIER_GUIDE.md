# Price Multiplier System - Admin Guide

## Overview
The Divara Craft platform now has a **Price Multiplier System** that allows administrators to adjust displayed prices on the customer frontend without modifying database values.

- **Database**: All prices stored in USD only
- **Frontend Display**: Automatic conversion + multiplier applied based on system timezone
- **Admin Control**: Simple 1-6x multiplier selector

---

## How It Works

### Admin Side (Backend)
1. Navigate to the **Admin Panel** (`/admin`)
2. Click the **💰 Price Multiplier** button in the header
3. Select or adjust the multiplier (1x, 2x, 3x, 4x, 5x, 6x)
4. Click **Apply Multiplier** to save
5. Preview example shows how prices will display (e.g., $10 → $30 with 3x)

### Frontend Side (Customer View)
The system **automatically** detects the customer's location and applies conversions:

#### India Users (Detected by Timezone)
- Product price: $10 (in database)
- Display: ₹830 (10 × 83 USD-to-INR rate)
- Multiplier does NOT apply to INR (kept at 1x)

#### Non-India Users (Default USD)
- Product price: $10 (in database)
- With 1x multiplier: Display $10
- With 3x multiplier: Display $30
- With 5x multiplier: Display $50

---

## Technical Implementation

### Storage
- Multiplier saved to browser **localStorage** as `usd_display_multiplier`
- Synced between admin panel and frontend automatically
- Persists across browser sessions

### Frontend Conversion Pipeline
```
Database Price (USD)
       ↓
CurrencyPreferenceService.convertFromUsd()
       ↓
Check System Timezone
       ├─ India (Asia/Kolkata) → Multiply by 83 (INR conversion)
       └─ Other → Multiply by set multiplier (1-6x)
       ↓
Display via displayCurrency Pipe
       ↓
Formatted Price on Frontend
```

### Key Components
- **Service**: `CurrencyPreferenceService` (`/frontend/src/app/shared/services/currency-preference.service.ts`)
- **Pipe**: `DisplayCurrencyPipe` (`/frontend/src/app/shared/pipes/display-currency.pipe.ts`)
- **Admin UI**: Price Multiplier Panel in Admin Component

---

## Usage Examples

### Example 1: Premium Pricing in India
- Product in database: **$100**
- Customer in India: Sees **₹8,300** (automatic INR conversion)
- Multiplier setting: (No impact on INR)

### Example 2: Markup for International Markets
- Product in database: **$50**
- Customer in USA with 2x multiplier: Sees **$100**
- Customer in Europe with 2x multiplier: Sees **$100**

### Example 3: Dynamic Pricing Campaign
- All products currently displayed at 2x multiplier
- Change to 3x multiplier
- All prices on frontend update immediately (no database changes needed)

---

## Admin Panel Interface

### Price Multiplier Panel
Located in the admin header next to "Brand Colors" button.

**Features:**
- Quick selection buttons (1x, 2x, 3x, 4x, 5x, 6x)
- Interactive slider for fine-tuning
- Live preview showing example conversion
- Timezone detection info display
- Save confirmation message

**Button States:**
- Active: Shows which multiplier is currently set
- Hover: Blue highlight with tooltip
- Disabled: While saving (brief animation)

---

## Frontend Pages Using Multiplier
All product prices automatically use the multiplier on:

- ✅ Home page (Product cards)
- ✅ Shop/Product list page
- ✅ Product detail page
- ✅ Cart page (item subtotals)
- ✅ Checkout page (total calculations)
- ✅ Wishlist page
- ✅ Search results

The `displayCurrency` pipe is applied universally via: `{{ price | displayCurrency:2 }}`

---

## API Integration (Future)

For cloud-based multiplier management (optional):
- POST `/api/settings/price-multiplier` - Save multiplier
- GET `/api/settings/price-multiplier` - Retrieve multiplier
- Currently uses localStorage for client-side persistence

---

## Important Notes

⚠️ **Database prices must ALWAYS be in USD** - This ensures consistency across all markets.

✅ **Multiplier applies only to USD prices** - India users always see INR conversion regardless of multiplier setting.

✅ **No cache clearing needed** - Changes apply immediately when saved due to BehaviorSubject reactive updates.

✅ **Offline support** - Multiplier persists in localStorage if backend is temporarily unavailable.

---

## Troubleshooting

### Prices not updating on frontend
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check localStorage in browser DevTools: `localStorage.getItem('usd_display_multiplier')`

### Wrong currency displayed
- Check system timezone: Open DevTools Console → `Intl.DateTimeFormat().resolvedOptions().timeZone`
- If India timezone but showing USD: Clear browser localStorage and refresh

### Multiplier stuck at 1x
- Ensure admin has saved the setting (should show confirmation message)
- Check browser localStorage permissions (private/incognito mode may not persist)

---

## Migration Notes

- **Previous system**: Had manual currency selection on checkout (now removed)
- **New system**: Automatic timezone detection + multiplier
- **Database impact**: ZERO - all prices remain unchanged
- **Frontend only**: All conversion happens client-side, no backend load

---

## Version Info
- Implemented: April 2026
- System: Divara Craft Admin Panel v2.0
- Database: All prices in USD
- Supported multipliers: 1x, 2x, 3x, 4x, 5x, 6x
