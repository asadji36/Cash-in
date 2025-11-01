'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';

interface ComparisonToolProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}

export default function ComparisonTool({ products, onRemove, onClear }: ComparisonToolProps) {
  if (products.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-dark-border shadow-2xl z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">
            Compare Products ({products.length}/4)
          </h3>
          <button
            onClick={onClear}
            className="text-gray-400 hover:text-red-500 transition-colors text-sm"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-dark border border-dark-border rounded-lg p-3 relative">
              <button
                onClick={() => onRemove(product.id)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                ×
              </button>
              <div className="relative h-24 mb-2 rounded overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h4 className="text-white text-sm font-semibold line-clamp-2 mb-1">
                {product.title}
              </h4>
              <p className="text-primary font-bold text-lg">
                {product.currency === 'USD' ? '$' : product.currency === 'PKR' ? 'Rs.' : product.currency}
                {product.price.toFixed(2)}
              </p>
              <p className="text-gray-400 text-xs">{product.platform}</p>
            </div>
          ))}
          
          {/* Empty slots */}
          {[...Array(4 - products.length)].map((_, i) => (
            <div key={`empty-${i}`} className="bg-dark border border-dashed border-dark-border rounded-lg p-3 flex items-center justify-center h-40">
              <span className="text-gray-600 text-sm">Empty Slot</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
