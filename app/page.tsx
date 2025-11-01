'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { fetchAllProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ComparisonTool from '@/components/ComparisonTool';

export default function Home() {
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

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const searchLower = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.platform.toLowerCase().includes(searchLower)
    );
    setFilteredProducts(filtered);
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark to-dark-card py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span className="text-primary">As Multi</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your one-stop destination for finding the best deals across Amazon, Daraz, AliExpress, eBay, and Walmart.
            Compare products, save money, and shop smarter.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-gray-700">
              <span className="text-primary font-bold text-2xl">5</span>
              <span className="text-gray-300 ml-2">Platforms</span>
            </div>
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-gray-700">
              <span className="text-primary font-bold text-2xl">1000+</span>
              <span className="text-gray-300 ml-2">Products</span>
            </div>
            <div className="bg-dark-card px-6 py-3 rounded-lg border border-gray-700">
              <span className="text-primary font-bold text-2xl">24/7</span>
              <span className="text-gray-300 ml-2">Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
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
              <p className="text-gray-400 text-xl">No products found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter</p>
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
      </section>

      {/* Comparison Tool */}
      <ComparisonTool
        products={comparisonProducts}
        onRemove={handleRemoveFromComparison}
        onClear={handleClearComparison}
      />

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose As Multi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform</h3>
              <p className="text-gray-400">
                Access products from 5 major e-commerce platforms in one place
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Compare Prices</h3>
              <p className="text-gray-400">
                Compare up to 4 products side-by-side to find the best deal
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Updates</h3>
              <p className="text-gray-400">
                Get the latest prices and product information instantly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
