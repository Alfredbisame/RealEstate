'use client';

import { useState } from 'react';
import { PropertyListing, ListingsGridProps } from './types';
import { calculateListingsSummary, filterListings, searchListings, sortListings } from './utils';
import ListingsGrid from './ListingsGrid';

interface ListingsContentProps {
  listings: PropertyListing[];
  className?: string;
  maxHeight?: string;
  layout?: 'grid' | 'list' | 'compact';
  onListingClick?: (listing: PropertyListing) => void;
  onEditListing?: (listing: PropertyListing) => void;
  onDeleteListing?: (listingId: string) => void;
}

export default function ListingsContent({
  listings,
  className = "",
  maxHeight = "max-h-96",
  layout = 'grid',
  onListingClick,
  onEditListing,
  onDeleteListing
}: ListingsContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'views' | 'interested' | 'date' | 'title'>('date');

  // Filter and search listings
  const filteredListings = searchListings(listings, searchTerm);
  const sortedListings = sortListings(filteredListings, sortBy);
  const summary = calculateListingsSummary(listings);

  return (
    <div className={`h-full ${className}`}>
      {/* Search and filters */}
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        >
          <option value="date">Latest</option>
          <option value="price">Price</option>
          <option value="views">Views</option>
          <option value="interested">Interest</option>
          <option value="title">Name</option>
        </select>
      </div>

      {/* Stats summary */}
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{summary.totalListings}</div>
          <div className="text-xs text-blue-600 dark:text-blue-400">Total</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{summary.activeListings}</div>
          <div className="text-xs text-green-600 dark:text-green-400">Active</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{summary.totalViews}</div>
          <div className="text-xs text-orange-600 dark:text-orange-400">Views</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{summary.totalInterested}</div>
          <div className="text-xs text-red-600 dark:text-red-400">Interested</div>
        </div>
      </div>

      {/* Listings grid */}
      <div className={`overflow-y-auto ${maxHeight}`}>
        <ListingsGrid
          listings={sortedListings}
          layout={layout}
          onListingClick={onListingClick}
          onEditListing={onEditListing}
          onDeleteListing={onDeleteListing}
        />
      </div>
    </div>
  );
} 