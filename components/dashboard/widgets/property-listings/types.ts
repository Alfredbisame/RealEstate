export interface PropertyListing {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms: number;
  area: string;
  image: string;
  views: number;
  interested: number;
  status: 'active' | 'pending' | 'sold' | 'inactive' | 'draft';
  description?: string;
  type?: 'residential' | 'commercial' | 'industrial' | 'land' | 'mixed-use';
  agent?: ListingAgent;
  createdAt?: string;
  updatedAt?: string;
  featured?: boolean;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tags?: string[];
  amenities?: string[];
}

export interface ListingAgent {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  rating: number;
}

export interface PropertyListingsProps {
  listings?: PropertyListing[];
  className?: string;
  maxHeight?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  showStats?: boolean;
  layout?: 'grid' | 'list' | 'compact';
  onListingClick?: (listing: PropertyListing) => void;
  onEditListing?: (listing: PropertyListing) => void;
  onDeleteListing?: (listingId: string) => void;
}

export interface ListingsHeaderProps {
  title?: string;
  totalListings?: number;
  activeListings?: number;
  className?: string;
  showStats?: boolean;
}

export interface ListingCardProps {
  listing: PropertyListing;
  className?: string;
  layout?: 'default' | 'compact' | 'detailed';
  showActions?: boolean;
  onClick?: (listing: PropertyListing) => void;
  onEdit?: (listing: PropertyListing) => void;
  onDelete?: (listingId: string) => void;
}

export interface ListingImageProps {
  image: string;
  alt: string;
  status: PropertyListing['status'];
  className?: string;
  showOverlay?: boolean;
}

export interface ListingInfoProps {
  listing: PropertyListing;
  className?: string;
  showDescription?: boolean;
}

export interface ListingStatsProps {
  views: number;
  interested: number;
  className?: string;
}

export interface ListingActionsProps {
  listing: PropertyListing;
  onEdit?: (listing: PropertyListing) => void;
  onDelete?: (listingId: string) => void;
  onView?: (listing: PropertyListing) => void;
  className?: string;
}

export interface ListingsFiltersProps {
  filters: ListingFilters;
  onFiltersChange: (filters: ListingFilters) => void;
  className?: string;
}

export interface ListingFilters {
  status?: PropertyListing['status'];
  type?: PropertyListing['type'];
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
}

export interface ListingsSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  className?: string;
  placeholder?: string;
}

export interface ListingsStatsProps {
  listings: PropertyListing[];
  className?: string;
}

export interface ListingsGridProps {
  listings: PropertyListing[];
  className?: string;
  layout?: 'grid' | 'list' | 'compact';
  onListingClick?: (listing: PropertyListing) => void;
  onEditListing?: (listing: PropertyListing) => void;
  onDeleteListing?: (listingId: string) => void;
}

export interface ListingsEmptyStateProps {
  className?: string;
  message?: string;
  showAddButton?: boolean;
  onAddNew?: () => void;
}

export interface ListingPriority {
  level: 'low' | 'medium' | 'high' | 'urgent';
  color: string;
  bgColor: string;
  textColor: string;
}

export interface ListingsSummary {
  totalListings: number;
  activeListings: number;
  pendingListings: number;
  soldListings: number;
  totalViews: number;
  totalInterested: number;
  averagePrice: number;
  featuredListings: number;
} 