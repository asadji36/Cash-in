'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
  showCompareButton?: boolean;
}

export default function ProductCard({ product, onCompare, showCompareButton = false }: ProductCardProps) {
  const platformColors: Record<string, string> = {
    Amazon: 'bg-orange-600',
    Daraz: 'bg-pink-600',
    AliExpress: 'bg-red-600',
    eBay: 'bg-yellow-600',
    Walmart: 'bg-blue-600',
  };

  const platformColor = platformColors[product.platform] || 'bg-gray-600';

  return (
    <div className="bg-dark-card rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-gray-800 hover:border-primary/50 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-900">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Platform Badge */}
        <div className={`absolute top-2 right-2 ${platformColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {product.platform}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
          {product.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'fill-current' : 'fill-gray-600'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">
              ({product.reviews?.toLocaleString()})
            </span>
          </div>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-primary text-2xl font-bold">
              {product.currency === 'USD' ? '$' : product.currency}
              {product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
          >
            Buy Now
          </a>
          {showCompareButton && onCompare && (
            <button
              onClick={() => onCompare(product)}
              className="bg-dark-hover hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              title="Add to comparison"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
