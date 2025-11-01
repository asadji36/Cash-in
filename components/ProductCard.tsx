'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
  isComparing?: boolean;
}

export default function ProductCard({ product, onCompare, isComparing }: ProductCardProps) {
  const platformColors: Record<string, string> = {
    Amazon: 'bg-orange-600',
    Daraz: 'bg-pink-600',
    AliExpress: 'bg-red-600',
    eBay: 'bg-yellow-600',
    Walmart: 'bg-blue-600',
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Platform Badge */}
        <div className={`absolute top-3 right-3 ${platformColors[product.platform]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
          {product.platform}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-gray-400 text-xs ml-2">
              ({product.reviews} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary text-2xl font-bold">
            {product.currency === 'USD' ? '$' : product.currency === 'PKR' ? 'Rs.' : product.currency}
            {product.price.toFixed(2)}
          </span>
          <span className="text-gray-500 text-xs">{product.category}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            Buy Now
          </a>
          {onCompare && (
            <button
              onClick={() => onCompare(product)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                isComparing
                  ? 'bg-primary border-primary text-white'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
              title="Add to comparison"
            >
              {isComparing ? '✓' : '+'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
