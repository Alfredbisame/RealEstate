export interface Property {
  id: string;
  name: string;
  location: string;
  value: string;
  yield: string;
  status: 'occupied' | 'available' | 'under construction' | 'maintenance' | 'sold' | 'rented';
  image: string;
  description?: string;
  type?: 'residential' | 'commercial' | 'industrial' | 'land' | 'mixed-use';
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  yearBuilt?: number;
  amenities?: string[];
  features?: PropertyFeature[];
  agent?: PropertyAgent;
  lastUpdated?: string;
  views?: number;
  favorites?: number;
  priceHistory?: PriceHistory[];
}

export interface PropertyFeature {
  id: string;
  name: string;
  icon: string;
  value: string;
}

export interface PropertyAgent {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  rating: number;
}

export interface PriceHistory {
  date: string;
  price: string;
  change: number;
}

export interface PropertyCardProps {
  property: Property;
  className?: string;
  variant?: 'default' | 'compact' | 'detailed' | 'featured';
  showAgent?: boolean;
  showFeatures?: boolean;
  showPriceHistory?: boolean;
  onClick?: (property: Property) => void;
  onFavorite?: (propertyId: string) => void;
  onShare?: (property: Property) => void;
}

export interface PropertyImageProps {
  image: string;
  alt: string;
  className?: string;
  showOverlay?: boolean;
  overlayContent?: React.ReactNode;
}

export interface PropertyHeaderProps {
  property: Property;
  className?: string;
  showType?: boolean;
}

export interface PropertyLocationProps {
  location: string;
  className?: string;
  showDistance?: boolean;
  distance?: string;
}

export interface PropertyStatusProps {
  status: Property['status'];
  className?: string;
  showIcon?: boolean;
}

export interface PropertyValueProps {
  value: string;
  yield: string;
  className?: string;
  showTrend?: boolean;
  trendDirection?: 'up' | 'down' | 'stable';
}

export interface PropertyFeaturesProps {
  features: PropertyFeature[];
  className?: string;
  maxFeatures?: number;
}

export interface PropertyAgentProps {
  agent: PropertyAgent;
  className?: string;
  showContact?: boolean;
}

export interface PropertyActionsProps {
  property: Property;
  onFavorite?: (propertyId: string) => void;
  onShare?: (property: Property) => void;
  onContact?: (property: Property) => void;
  className?: string;
}

export interface PropertyStats {
  totalProperties: number;
  occupied: number;
  available: number;
  underConstruction: number;
  totalValue: number;
  averageYield: number;
  averagePrice: number;
}

export interface PropertyFilters {
  type?: Property['type'];
  status?: Property['status'];
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
}

export interface PropertyPriority {
  level: 'low' | 'medium' | 'high' | 'critical';
  color: string;
  bgColor: string;
  textColor: string;
} 