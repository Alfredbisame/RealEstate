import { PropertyListing, ListingFilters, ListingsSummary, ListingPriority } from './types';
import { 
  Building2, 
  Home, 
  Factory, 
  MapPin, 
  TrendingUp, 
  Eye, 
  Heart,
  Star,
  Calendar,
  DollarSign
} from 'lucide-react';

export const getStatusColor = (status: PropertyListing['status']) => {
  switch (status.toLowerCase()) {
    case 'active': 
      return {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800'
      };
    case 'pending': 
      return {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-800 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'sold': 
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-800 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800'
      };
    case 'inactive': 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
    case 'draft': 
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-800'
      };
    default: 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
  }
};

export const getTypeIcon = (type: PropertyListing['type'] = 'residential') => {
  switch (type) {
    case 'residential':
      return <Home className="w-4 h-4" />;
    case 'commercial':
      return <Building2 className="w-4 h-4" />;
    case 'industrial':
      return <Factory className="w-4 h-4" />;
    case 'land':
      return <MapPin className="w-4 h-4" />;
    case 'mixed-use':
      return <Building2 className="w-4 h-4" />;
    default:
      return <Home className="w-4 h-4" />;
  }
};

export const getTypeColor = (type: PropertyListing['type'] = 'residential') => {
  switch (type) {
    case 'residential':
      return 'text-blue-600 dark:text-blue-400';
    case 'commercial':
      return 'text-green-600 dark:text-green-400';
    case 'industrial':
      return 'text-orange-600 dark:text-orange-400';
    case 'land':
      return 'text-purple-600 dark:text-purple-400';
    case 'mixed-use':
      return 'text-indigo-600 dark:text-indigo-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
};

export const getPriorityConfig = (priority: PropertyListing['priority'] = 'medium'): ListingPriority => {
  switch (priority) {
    case 'urgent':
      return {
        level: 'urgent',
        color: 'red',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        textColor: 'text-red-700 dark:text-red-300'
      };
    case 'high':
      return {
        level: 'high',
        color: 'orange',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        textColor: 'text-orange-700 dark:text-orange-300'
      };
    case 'medium':
      return {
        level: 'medium',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300'
      };
    case 'low':
      return {
        level: 'low',
        color: 'green',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        textColor: 'text-green-700 dark:text-green-300'
      };
    default:
      return {
        level: 'medium',
        color: 'yellow',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
        textColor: 'text-yellow-700 dark:text-yellow-300'
      };
  }
};

export const formatCurrency = (price: string): string => {
  // Extract numeric value and format as GHS
  const numericValue = parseFloat(price.replace(/[^0-9.-]+/g, ''));
  if (isNaN(numericValue)) return price;
  
  if (numericValue >= 1000000) {
    return `GHS ${(numericValue / 1000000).toFixed(1)}M`;
  } else if (numericValue >= 1000) {
    return `GHS ${(numericValue / 1000).toFixed(1)}K`;
  }
  return `GHS ${numericValue.toLocaleString()}`;
};

export const formatArea = (area: string): string => {
  return area.replace('sq ft', 'sq ft').replace('sqm', 'sq m');
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
};

export const calculateListingsSummary = (listings: PropertyListing[]): ListingsSummary => {
  const totalListings = listings.length;
  const activeListings = listings.filter(l => l.status === 'active').length;
  const pendingListings = listings.filter(l => l.status === 'pending').length;
  const soldListings = listings.filter(l => l.status === 'sold').length;
  const featuredListings = listings.filter(l => l.featured).length;
  
  const totalViews = listings.reduce((sum, l) => sum + l.views, 0);
  const totalInterested = listings.reduce((sum, l) => sum + l.interested, 0);
  
  const totalPrice = listings.reduce((sum, l) => {
    const price = parseFloat(l.price.replace(/[^0-9.-]+/g, ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);
  
  const averagePrice = totalListings > 0 ? totalPrice / totalListings : 0;

  return {
    totalListings,
    activeListings,
    pendingListings,
    soldListings,
    totalViews,
    totalInterested,
    averagePrice,
    featuredListings
  };
};

export const filterListings = (listings: PropertyListing[], filters: ListingFilters): PropertyListing[] => {
  return listings.filter(listing => {
    if (filters.status && listing.status !== filters.status) return false;
    if (filters.type && listing.type !== filters.type) return false;
    if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.bedrooms && listing.bedrooms !== filters.bedrooms) return false;
    if (filters.bathrooms && listing.bathrooms !== filters.bathrooms) return false;
    if (filters.priceRange) {
      const price = parseFloat(listing.price.replace(/[^0-9.-]+/g, ''));
      if (price < filters.priceRange.min || price > filters.priceRange.max) return false;
    }
    return true;
  });
};

export const searchListings = (listings: PropertyListing[], searchTerm: string): PropertyListing[] => {
  if (!searchTerm.trim()) return listings;
  
  const term = searchTerm.toLowerCase();
  return listings.filter(listing => 
    listing.title.toLowerCase().includes(term) ||
    listing.location.toLowerCase().includes(term) ||
    listing.description?.toLowerCase().includes(term) ||
    listing.type?.toLowerCase().includes(term)
  );
};

export const sortListings = (listings: PropertyListing[], sortBy: 'price' | 'views' | 'interested' | 'date' | 'title' = 'date'): PropertyListing[] => {
  return [...listings].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
        return priceB - priceA;
      case 'views':
        return b.views - a.views;
      case 'interested':
        return b.interested - a.interested;
      case 'date':
        if (!a.createdAt || !b.createdAt) return 0;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
};

export const getListingScore = (listing: PropertyListing): number => {
  let score = 0;
  
  // Views score (0-25 points)
  if (listing.views > 100) score += 25;
  else if (listing.views > 50) score += 20;
  else if (listing.views > 20) score += 15;
  else if (listing.views > 10) score += 10;
  
  // Interest score (0-25 points)
  if (listing.interested > 20) score += 25;
  else if (listing.interested > 10) score += 20;
  else if (listing.interested > 5) score += 15;
  else if (listing.interested > 2) score += 10;
  
  // Status score (0-25 points)
  if (listing.status === 'active') score += 25;
  else if (listing.status === 'pending') score += 20;
  else if (listing.status === 'sold') score += 15;
  
  // Featured score (0-25 points)
  if (listing.featured) score += 25;
  if (listing.priority === 'urgent') score += 20;
  else if (listing.priority === 'high') score += 15;
  
  return Math.min(score, 100);
};

export const getListingRating = (score: number): string => {
  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Very Good';
  if (score >= 60) return 'Good';
  if (score >= 45) return 'Fair';
  return 'Poor';
};

export const getListingRatingColor = (score: number): string => {
  if (score >= 90) return 'text-green-600 dark:text-green-400';
  if (score >= 75) return 'text-blue-600 dark:text-blue-400';
  if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
  if (score >= 45) return 'text-orange-600 dark:text-orange-400';
  return 'text-red-600 dark:text-red-400';
};

export const getListingTrend = (listing: PropertyListing): 'up' | 'down' | 'stable' => {
  const viewsPerDay = listing.views / 7; // Assuming 7 days of data
  const interestedPerDay = listing.interested / 7;
  
  if (viewsPerDay > 10 && interestedPerDay > 2) return 'up';
  if (viewsPerDay < 5 && interestedPerDay < 1) return 'down';
  return 'stable';
}; 