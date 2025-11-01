'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { fetchAllProducts, categories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function CategoriesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const getProductsByCategory = (categorySlug: string) => {
    if (categorySlug === 'all') return products;
    return products.filter(
      (p) => p.category.toLowerCase() === categorySlug.toLowerCase()
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Browse by <span className="text-primary">Categories</span>
        </h1>
        <p className="text-xl text-gray-400">
          Explore products organized by category
        </p>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-gray-400 mt-4">Loading categories...</p>
        </div>
      ) : (
        <div className="space-y-16">
          {categories
            .filter((cat) => cat.slug !== 'all')
            .map((category) => {
              const categoryProducts = getProductsByCategory(category.slug);
              if (categoryProducts.length === 0) return null;

              return (
                <section key={category.id}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-white flex items-center">
                      <span className="text-4xl mr-3">{category.icon}</span>
                      {category.name}
                    </h2>
                    <span className="text-gray-400">
                      {categoryProducts.length} products
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryProducts.slice(0, 4).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {categoryProducts.length > 4 && (
                    <div className="text-center mt-6">
                      <Link
                        href={`/?category=${category.slug}`}
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        View All {category.name}
                      </Link>
                    </div>
                  )}
                </section>
              );
            })}
        </div>
      )}
    </div>
  );
}
