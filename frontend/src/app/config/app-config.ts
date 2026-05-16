/**
 * Application Configuration
 * 
 * To enable Google Sign-In:
 * 1. Visit https://console.cloud.google.com/
 * 2. Create a new project or select existing
 * 3. Go to APIs & Services → Credentials
 * 4. Create OAuth 2.0 Client ID (Web application)
 * 5. Add Authorized JavaScript origins for every frontend origin that will launch Google Sign-In:
 *    - http://localhost:4200 (development)
 *    - https://dev.divaracraft.com
 *    - Your production domain
 * 6. Copy the Client ID and paste below
 */

import { GENERATED_APP_ENV } from './app-env.generated';

const LOCAL_API_ORIGIN = 'http://localhost:5002';

function resolveApiOrigin(): string {
  if (typeof window === 'undefined') {
    return LOCAL_API_ORIGIN;
  }

  const { hostname, origin } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return LOCAL_API_ORIGIN;
  }

  return origin;
}

const apiOrigin = resolveApiOrigin();

export const APP_CONFIG = {
  GOOGLE_CLIENT_ID: GENERATED_APP_ENV.GOOGLE_CLIENT_ID,
  GOOGLE_PLACES_API_KEY: GENERATED_APP_ENV.GOOGLE_PLACES_API_KEY,

  // API Endpoints
  API_URL: `${apiOrigin}/api`,
  AUTH_API_URL: `${apiOrigin}/api/auth`
};

export const API_ENDPOINTS = {
  products: `${APP_CONFIG.API_URL}/products`,
  slider: `${APP_CONFIG.API_URL}/slider`,
  categories: `${APP_CONFIG.API_URL}/categories`,
  productCategories: `${APP_CONFIG.API_URL}/product-categories`,
  banners: `${APP_CONFIG.API_URL}/banners`,
  home3Banners: `${APP_CONFIG.API_URL}/home3-banners`,
  newProductsBanner: `${APP_CONFIG.API_URL}/new-products-banner`,
  flashDealsBanner: `${APP_CONFIG.API_URL}/flash-deals-banner`,
  festiveSeasonBanner: `${APP_CONFIG.API_URL}/festive-season-banner`,
  orders: `${APP_CONFIG.API_URL}/orders`,
  reviews: `${APP_CONFIG.API_URL}/reviews`,
  pendingReview: `${APP_CONFIG.API_URL}/reviews/pending`,
  reviewUploads: `${APP_CONFIG.API_URL}/reviews/uploads`,
  homeSections: `${APP_CONFIG.API_URL}/home-sections`,
  orderTracking: (orderNumber: string) => `${APP_CONFIG.API_URL}/orders/${encodeURIComponent(orderNumber)}/tracking`,
  orderRatingEligibility: (orderId: number | string) => `${APP_CONFIG.API_URL}/orders/${encodeURIComponent(String(orderId))}/rating-eligibility`,
  adminAiQueue: `${APP_CONFIG.API_URL}/admin/ai-queue`,
  aiMatch: `${APP_CONFIG.API_URL}/ai/match`,
  aiHealth: `${APP_CONFIG.API_URL}/ai/health`,
  instagramFeed: `${APP_CONFIG.API_URL}/instagram/feed`
};

/**
 * Check if Google OAuth is configured
 */
export function isGoogleOAuthConfigured(): boolean {
  return !APP_CONFIG.GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE');
}
