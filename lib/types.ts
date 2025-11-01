export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  platform: 'Amazon' | 'Daraz' | 'AliExpress' | 'eBay' | 'Walmart';
  category: string;
  affiliateLink: string;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface ApiConfig {
  apiKey: string;
  apiSecret?: string;
  affiliateId: string;
  baseUrl: string;
}

export interface ComparisonProduct extends Product {
  selected: boolean;
}
