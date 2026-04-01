/**
 * Application Configuration
 * 
 * To enable Google Sign-In:
 * 1. Visit https://console.cloud.google.com/
 * 2. Create a new project or select existing
 * 3. Go to APIs & Services → Credentials
 * 4. Create OAuth 2.0 Client ID (Web application)
 * 5. Add authorized redirect URIs:
 *    - http://localhost:4200 (development)
 *    - Your production domain
 * 6. Copy the Client ID and paste below
 */

const LOCAL_API_ORIGIN = 'http://localhost:5001';

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
  // Replace with your actual Google OAuth Client ID
  // Get it from Google Cloud Console
  GOOGLE_CLIENT_ID: '677837219372-uqfna9po2t1q53gamrh22fde1ndhqr6m.apps.googleusercontent.com',

  // API Endpoints
  API_URL: `${apiOrigin}/api`,
  AUTH_API_URL: `${apiOrigin}/api/auth`
};

export const API_ENDPOINTS = {
  products: `${APP_CONFIG.API_URL}/products`,
  slider: `${APP_CONFIG.API_URL}/slider`,
  orders: `${APP_CONFIG.API_URL}/orders`,
  orderTracking: (orderNumber: string) => `${APP_CONFIG.API_URL}/orders/${encodeURIComponent(orderNumber)}/tracking`,
  adminAiQueue: `${APP_CONFIG.API_URL}/admin/ai-queue`
};

/**
 * Check if Google OAuth is configured
 */
export function isGoogleOAuthConfigured(): boolean {
  return !APP_CONFIG.GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE');
}
