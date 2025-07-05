'use client';

import { Search } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  filter: string;
  onSearchChange: (term: string) => void;
  onFilterChange: (filter: string) => void;
  onMarkAllRead: () => void;
  onClearAll: () => void;
}

export default function SearchAndFilter({ 
  searchTerm, 
  filter, 
  onSearchChange, 
  onFilterChange, 
  onMarkAllRead, 
  onClearAll 
}: SearchAndFilterProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
            />
          </div>
          
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
          >
            <option value="all">All Notifications</option>
            <option value="unread">Unread</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="info">Info</option>
            <option value="project">Projects</option>
            <option value="payment">Payments</option>
            <option value="safety">Safety</option>
            <option value="hr">HR</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={onMarkAllRead}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Mark All Read
          </button>
          <button 
            onClick={onClearAll}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
} 