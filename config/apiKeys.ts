import { ApiConfig } from '@/lib/types';

/**
 * API Configuration for Multi-Affiliate Platforms
 * 
 * IMPORTANT: Replace these placeholder values with your actual API credentials
 * 
 * How to get API keys:
 * 
 * 1. AMAZON (Product Advertising API)
 *    - Sign up: https://affiliate-program.amazon.com/
 *    - Get API keys: https://webservices.amazon.com/paapi5/documentation/
 * 
 * 2. DARAZ (Affiliate Program)
 *    - Sign up: https://www.daraz.com.bd/affiliate/
 *    - Contact support for API access
 * 
 * 3. ALIEXPRESS (Affiliate Program)
 *    - Sign up: https://portals.aliexpress.com/
 *    - API docs: https://developers.aliexpress.com/
 * 
 * 4. EBAY (Partner Network)
 *    - Sign up: https://partnernetwork.ebay.com/
 *    - Get API keys: https://developer.ebay.com/
 * 
 * 5. WALMART (Affiliate Program)
 *    - Sign up: https://affiliates.walmart.com/
 *    - API access: https://developer.walmart.com/
 */

export const amazonConfig: ApiConfig = {
  apiKey: 'YOUR_AMAZON_API_KEY_HERE',
  apiSecret: 'YOUR_AMAZON_API_SECRET_HERE',
  affiliateId: 'YOUR_AMAZON_AFFILIATE_ID_HERE',
  baseUrl: 'https://webservices.amazon.com/paapi5',
};

export const darazConfig: ApiConfig = {
  apiKey: 'YOUR_DARAZ_API_KEY_HERE',
  apiSecret: 'YOUR_DARAZ_API_SECRET_HERE',
  affiliateId: 'YOUR_DARAZ_AFFILIATE_ID_HERE',
  baseUrl: 'https://api.daraz.com/rest',
};

export const aliexpressConfig: ApiConfig = {
  apiKey: 'YOUR_ALIEXPRESS_APP_KEY_HERE',
  apiSecret: 'YOUR_ALIEXPRESS_APP_SECRET_HERE',
  affiliateId: 'YOUR_ALIEXPRESS_TRACKING_ID_HERE',
  baseUrl: 'https://api-sg.aliexpress.com/sync',
};

export const ebayConfig: ApiConfig = {
  apiKey: 'YOUR_EBAY_APP_ID_HERE',
  apiSecret: 'YOUR_EBAY_CERT_ID_HERE',
  affiliateId: 'YOUR_EBAY_CAMPAIGN_ID_HERE',
  baseUrl: 'https://api.ebay.com/buy/browse/v1',
};

export const walmartConfig: ApiConfig = {
  apiKey: 'YOUR_WALMART_API_KEY_HERE',
  affiliateId: 'YOUR_WALMART_PUBLISHER_ID_HERE',
  baseUrl: 'https://developer.api.walmart.com/api-proxy/service/affil/product/v2',
};

// Environment check
export const isProduction = process.env.NODE_ENV === 'production';

// Helper function to check if API keys are configured
export const areApiKeysConfigured = () => {
  return (
    !amazonConfig.apiKey.includes('YOUR_') &&
    !darazConfig.apiKey.includes('YOUR_') &&
    !aliexpressConfig.apiKey.includes('YOUR_') &&
    !ebayConfig.apiKey.includes('YOUR_') &&
    !walmartConfig.apiKey.includes('YOUR_')
  );
};
