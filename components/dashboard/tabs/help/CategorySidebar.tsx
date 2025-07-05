'use client';

import { Book, FileText, HelpCircle } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategorySidebar({ categories, activeCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Categories
          </h3>
        </div>
        <div className="p-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 text-left group ${
                  isActive
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Icon 
                  size={18} 
                  className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} 
                />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 