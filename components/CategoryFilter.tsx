'use client';

import { Category } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-lg shadow-primary/50'
              : 'bg-dark-card text-gray-300 hover:bg-dark-hover hover:text-white border border-gray-700'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}
