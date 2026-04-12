# Post-Delivery Product Rating System

## Implementation notes for Divara Craft

This workspace uses **Node.js + Express + MySQL + Angular**, so the rating flow was implemented to match the existing codebase instead of introducing React.

## 1) Database updates

### Orders table additions
- `delivered_at DATETIME`
- `is_rating_eligible TINYINT(1) DEFAULT 0`
- `is_rated TINYINT(1) DEFAULT 0`

### New table: `product_reviews`
Stores one post-delivery review per order, detailed star metrics, emotion, optional text, optional image URLs, and a support follow-up flag for low ratings.

## 2) Delivery trigger

`POST /webhook/shiprocket`
- validates the webhook token if `SHIPROCKET_WEBHOOK_TOKEN` is configured
- maps Shiprocket delivery statuses to internal order states
- when the shipment is `DELIVERED`, it:
  - updates `orders.order_status = 'delivered'`
  - sets `orders.delivered_at`
  - marks `orders.is_rating_eligible = 1`

## 3) Eligibility logic

`GET /api/orders/:orderId/rating-eligibility`

An order is considered popup-ready when:
- `order_status = 'delivered'`
- `delivered_at + 12 hours <= NOW()`
- `is_rated = 0`

## 4) Review APIs

### `GET /api/reviews/pending`
Returns the next eligible delivered order for the logged-in customer.

### `POST /api/reviews/uploads`
Uploads up to 4 optional review images and returns hosted URLs.

### `POST /api/reviews`
Validates and stores the review, then marks the order as rated.

## 5) Frontend popup flow

The Angular popup component is mounted globally from `app.component.html`:
- waits for a logged-in user session
- checks pending review eligibility
- opens only when the order is eligible and not locally snoozed
- supports:
  - overall stars
  - detailed metrics for positive ratings
  - issue textarea for low ratings
  - emotion selector
  - optional image upload
  - `Remind me later`

## 6) Main files added

### Backend
- `backend/controllers/reviewController.js`
- `backend/controllers/webhookController.js`
- `backend/middlewares/customerAuth.js`
- `backend/middlewares/validateReview.js`
- `backend/routes/reviewRoutes.js`
- `backend/routes/webhookRoutes.js`
- `backend/services/reviewService.js`

### Frontend
- `frontend/src/app/services/review.service.ts`
- `frontend/src/app/shared/rating-popup/rating-popup.component.ts`
- `frontend/src/app/shared/rating-popup/rating-popup.component.html`
- `frontend/src/app/shared/rating-popup/rating-popup.component.scss`

## 7) Environment variable

Add this to `backend/.env` for secure Shiprocket webhook validation:

```env
SHIPROCKET_WEBHOOK_TOKEN=your-secret-token
ORDER_RATING_DELAY_HOURS=12
```

## 8) Admin review dashboard

Phase 2 now includes an admin-facing review analytics page at:
- `frontend/src/app/admin/reviews/`
- route: `/admin/reviews`

It shows:
- total review count
- average rating
- low-rating count
- support follow-up count
- per-order review details and uploaded review images
- one-click toggle to mark support follow-up as pending or resolved

## 9) Suggested next enhancement
- add customer order history page so users can manually revisit past delivered orders and rate them later
- expose review averages per product on `shop` and `product detail` pages
- add admin dashboard filters for low-rating follow-ups
