import { Product } from '@/lib/types';
import { fetchAmazonProducts } from './amazon';
import { fetchDarazProducts } from './daraz';
import { fetchAliExpressProducts } from './aliexpress';
import { fetchEbayProducts } from './ebay';
import { fetchWalmartProducts } from './walmart';

/**
 * Aggregates products from all affiliate platforms
 */
export async function fetchAllProducts(category?: string): Promise<Product[]> {
  try {
    const [amazon, daraz, aliexpress, ebay, walmart] = await Promise.all([
      fetchAmazonProducts(category),
      fetchDarazProducts(category),
      fetchAliExpressProducts(category),
      fetchEbayProducts(category),
      fetchWalmartProducts(category),
    ]);

    return [...amazon, ...daraz, ...aliexpress, ...ebay, ...walmart];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Search products across all platforms
 */
export async function searchAllProducts(query: string): Promise<Product[]> {
  if (!query || query.trim().length === 0) {
    return fetchAllProducts();
  }

  const allProducts = await fetchAllProducts();
  
  // Filter products based on search query
  const searchLower = query.toLowerCase();
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(searchLower) ||
    product.description.toLowerCase().includes(searchLower) ||
    product.category.toLowerCase().includes(searchLower)
  );
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const allProducts = await fetchAllProducts();
  
  if (!category || category === 'all') {
    return allProducts;
  }
  
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get available categories
 */
export function getCategories() {
  return [
    { id: 'all', name: 'All Categories', slug: 'all', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', slug: 'electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', slug: 'fashion', icon: '👗' },
    { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', icon: '🏡' },
    { id: 'sports', name: 'Sports', slug: 'sports', icon: '⚽' },
    { id: 'books', name: 'Books', slug: 'books', icon: '📚' },
  ];
}
