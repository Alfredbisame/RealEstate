'use client';

import { Search, Filter } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick?: () => void;
}

export default function SearchAndFilter({ searchTerm, onSearchChange, onFilterClick }: SearchAndFilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-1 group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors duration-300" size={20} />
        <input
          type="text"
          placeholder="Search employees by name, position, or department..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
        />
        {searchTerm && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      <button 
        onClick={onFilterClick}
        className="flex items-center space-x-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-600 group"
      >
        <Filter size={20} className="text-gray-500 group-hover:text-pink-500 transition-colors duration-300" />
        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
          Filter
        </span>
      </button>
    </div>
  );
} 