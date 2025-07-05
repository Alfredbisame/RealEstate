'use client';

import { ListingsGridProps } from './types';
import ListingCard from './ListingCard';

export default function ListingsGrid({
  listings,
  className = "",
  layout = 'grid',
  onListingClick,
  onEditListing,
  onDeleteListing
}: ListingsGridProps) {
  if (listings.length === 0) {
    return (
      <div className={`
        flex flex-col items-center justify-center py-12 text-center
        ${className}
      `}>
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No Properties Found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          There are no properties matching your criteria. Try adjusting your filters or add a new property.
        </p>
      </div>
    );
  }

  const getGridClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'list':
        return 'space-y-4';
      case 'compact':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <div className={`
      ${getGridClasses()}
      ${className}
    `}>
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          layout={layout === 'compact' ? 'compact' : layout === 'list' ? 'detailed' : 'default'}
          showActions={true}
          onClick={onListingClick}
          onEdit={onEditListing}
          onDelete={onDeleteListing}
        />
      ))}
    </div>
  );
} 