'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { fetchAllProducts, categories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ComparisonTool from '@/components/ComparisonTool';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, searchQuery]);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
  };

  const handleCompare = (product: Product) => {
    if (compareProducts.find((p) => p.id === product.id)) {
      setCompareProducts(compareProducts.filter((p) => p.id !== product.id));
    } else if (compareProducts.length < 4) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const handleRemoveFromCompare = (productId: string) => {
    setCompareProducts(compareProducts.filter((p) => p.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareProducts([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-primary">As Multi</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Compare and shop from Amazon, Daraz, AliExpress, eBay, and Walmart
        </p>
        <SearchBar onSearch={handleSearch} />
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </section>

      {/* Products Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : selectedCategory === 'all'
              ? 'All Products'
              : `${categories.find((c) => c.slug === selectedCategory)?.name}`}
          </h2>
          <span className="text-gray-400">
            {filteredProducts.length} products found
          </span>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p className="text-gray-400 mt-4">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCompare={handleCompare}
                isComparing={compareProducts.some((p) => p.id === product.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Comparison Tool */}
      <ComparisonTool
        products={compareProducts}
        onRemove={handleRemoveFromCompare}
        onClear={handleClearCompare}
      />
    </div>
  );
}
