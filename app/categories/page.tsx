'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { fetchAllProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import ComparisonTool from '@/components/ComparisonTool';

export default function CategoriesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = getCategories();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchAllProducts();
    setProducts(data);
    setFilteredProducts(data);
    setLoading(false);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProducts(products);
    } else {
      const categoryName = categories.find((c) => c.id === categoryId)?.name || '';
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToComparison = (product: Product) => {
    if (comparisonProducts.length >= 4) {
      alert('You can only compare up to 4 products at a time.');
      return;
    }
    if (comparisonProducts.find((p) => p.id === product.id)) {
      alert('This product is already in the comparison list.');
      return;
    }
    setComparisonProducts([...comparisonProducts, product]);
  };

  const handleRemoveFromComparison = (productId: string) => {
    setComparisonProducts(comparisonProducts.filter((p) => p.id !== productId));
  };

  const handleClearComparison = () => {
    setComparisonProducts([]);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Browse by <span className="text-primary">Category</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore products organized by categories across all platforms
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Products' : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              <p className="text-gray-400 mt-4">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-xl">No products found in this category</p>
              <p className="text-gray-500 mt-2">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCompare={handleAddToComparison}
                  showCompareButton={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Comparison Tool */}
      <ComparisonTool
        products={comparisonProducts}
        onRemove={handleRemoveFromComparison}
        onClear={handleClearComparison}
      />
    </div>
  );
}
