'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';

interface ComparisonToolProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export default function ComparisonTool({ products, onRemove, onClear }: ComparisonToolProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-gray-800 shadow-2xl z-40 max-h-[50vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">
            Compare Products ({products.length}/4)
          </h3>
          <button
            onClick={onClear}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-dark rounded-lg p-4 relative border border-gray-700">
              <button
                onClick={() => onRemove(product.id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 transition-colors"
                title="Remove from comparison"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-32 mb-3 bg-gray-900 rounded">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              <h4 className="text-white font-medium text-sm mb-2 line-clamp-2">
                {product.title}
              </h4>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Platform:</span>
                  <span className="text-white">{product.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-primary font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                {product.rating && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rating:</span>
                    <span className="text-yellow-400">
                      ⭐ {product.rating.toFixed(1)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white text-xs">{product.category}</span>
                </div>
              </div>

              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold py-2 rounded transition-colors text-sm"
              >
                Buy Now
              </a>
            </div>
          ))}

          {/* Empty slots */}
          {[...Array(Math.max(0, 4 - products.length))].map((_, i) => (
            <div
              key={`empty-${i}`}
              className="bg-dark rounded-lg p-4 border border-dashed border-gray-700 flex items-center justify-center min-h-[300px]"
            >
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-sm">Add product to compare</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
