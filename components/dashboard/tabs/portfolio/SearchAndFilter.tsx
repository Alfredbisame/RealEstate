'use client';

import { Search, Grid, List } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  filterType: string;
  viewMode: 'grid' | 'list';
  onSearchChange: (term: string) => void;
  onFilterChange: (filter: string) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export default function SearchAndFilter({ 
  searchTerm, 
  filterType, 
  viewMode,
  onSearchChange, 
  onFilterChange, 
  onViewModeChange 
}: SearchAndFilterProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
          >
            <option value="all">All Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              viewMode === 'grid' 
                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 shadow-md' 
                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
              viewMode === 'list' 
                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 shadow-md' 
                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>
    </div>
  );
} 