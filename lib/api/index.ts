import { Product, Category } from '@/lib/types';
import { fetchAmazonProducts } from './amazon';
import { fetchDarazProducts } from './daraz';
import { fetchAliExpressProducts } from './aliexpress';
import { fetchEbayProducts } from './ebay';
import { fetchWalmartProducts } from './walmart';

/**
 * Fetch products from all affiliate platforms
 */
export async function fetchAllProducts(query?: string, category?: string): Promise<Product[]> {
  try {
    const [amazon, daraz, aliexpress, ebay, walmart] = await Promise.all([
      fetchAmazonProducts(query, category),
      fetchDarazProducts(query, category),
      fetchAliExpressProducts(query, category),
      fetchEbayProducts(query, category),
      fetchWalmartProducts(query, category),
    ]);

    const allProducts = [...amazon, ...daraz, ...aliexpress, ...ebay, ...walmart];
    
    // Filter by query if provided
    if (query) {
      return allProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Filter by category if provided
    if (category && category !== 'all') {
      return allProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    return allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Available product categories
 */
export const categories: Category[] = [
  { id: '1', name: 'All Categories', slug: 'all', icon: '🏪' },
  { id: '2', name: 'Electronics', slug: 'electronics', icon: '📱' },
  { id: '3', name: 'Fashion', slug: 'fashion', icon: '👕' },
  { id: '4', name: 'Home & Garden', slug: 'home-garden', icon: '🏡' },
  { id: '5', name: 'Sports', slug: 'sports', icon: '⚽' },
  { id: '6', name: 'Books', slug: 'books', icon: '📚' },
];
