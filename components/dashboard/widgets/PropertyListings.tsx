'use client';

import { PropertyListingsProps } from './property-listings/types';
import { mockListings } from './property-listings/mockData';
import ListingsHeader from './property-listings/ListingsHeader';
import ListingsContent from './property-listings/ListingsContent';

export default function PropertyListings({ 
  listings = mockListings,
  className = "",
  maxHeight = "max-h-96",
  layout = 'grid',
  showFilters = true,
  showSearch = true,
  showStats = true,
  onListingClick,
  onEditListing,
  onDeleteListing
}: PropertyListingsProps) {
  return (
    <div className={`h-full ${className}`}>
      <ListingsHeader 
        title="Property Listings" 
        totalListings={listings.length}
        showStats={showStats}
      />
      <ListingsContent
        listings={listings}
        maxHeight={maxHeight}
        layout={layout}
        onListingClick={onListingClick}
        onEditListing={onEditListing}
        onDeleteListing={onDeleteListing}
      />
    </div>
  );
}