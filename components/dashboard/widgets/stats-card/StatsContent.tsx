'use client';

import { useState } from 'react';
import { StatsCardProps, StatsCardData, StatsCardMetric } from './types';
import { mockStatsCards, mockCategories } from './mockData';
import { filterMetrics, sortMetrics } from './utils';
import StatsCard from './StatsCard';
import StatsCardGrid from './StatsCardGrid';
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';

export default function StatsContent({
  className = "",
  showFilters = true,
  showSearch = true,
  showCategories = true,
  maxCards = 12,
  onCardClick
}: {
  className?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  showCategories?: boolean;
  maxCards?: number;
  onCardClick?: (data: StatsCardData) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'value' | 'change' | 'title' | 'priority'>('value');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Filter and sort cards
  const filteredCards = filterMetrics(mockStatsCards, {
    category: selectedCategory || undefined
  }).filter(card => 
    !searchTerm || 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCards = sortMetrics(filteredCards, sortBy);
  const displayCards = (sortOrder === 'desc' ? sortedCards : sortedCards.reverse()).slice(0, maxCards);

  const handleCardClick = (data: StatsCardData) => {
    if (onCardClick) {
      onCardClick(data);
    }
    console.log('Stats card clicked:', data);
  };

  const handleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Key Metrics
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {displayCards.length} of {mockStatsCards.length} metrics
          </p>
        </div>
        
        {showFilters && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleSort('value')}
              className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <span>Value</span>
              {sortBy === 'value' ? (
                sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
              ) : <SortAsc className="w-3 h-3 opacity-30" />}
            </button>
            
            <button
              onClick={() => handleSort('change')}
              className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <span>Change</span>
              {sortBy === 'change' ? (
                sortOrder === 'asc' ? <SortAsc className="w-3 h-3" /> : <SortDesc className="w-3 h-3" />
              ) : <SortAsc className="w-3 h-3 opacity-30" />}
            </button>
          </div>
        )}
      </div>

      {/* Search and Filters */}
      {(showSearch || showCategories) && (
        <div className="space-y-4">
          {/* Search */}
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search metrics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Category Filters */}
          {showCategories && (
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === ''
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Categories
              </button>
              {mockCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Stats Grid */}
      <StatsCardGrid
        cards={displayCards}
        columns={4}
        gap="md"
        responsive={true}
        onCardClick={handleCardClick}
      />

      {/* No Results */}
      {displayCards.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h4 className="text-lg font-medium mb-2">No metrics found</h4>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
} 