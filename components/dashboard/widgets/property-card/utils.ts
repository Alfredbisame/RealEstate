import { Property, PropertyStatus, PropertyType } from './types';
import { 
  Home, 
  Building, 
  Factory, 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Bed,
  Bath,
  Square,
  Calendar,
  Users,
  Car,
  Wifi,
  Shield,
  Zap
} from 'lucide-react';

export const getStatusColor = (status: Property['status']) => {
  switch (status.toLowerCase()) {
    case 'occupied': 
      return {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-200',
        border: 'border-green-200 dark:border-green-800'
      };
    case 'available': 
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-800 dark:text-blue-200',
        border: 'border-blue-200 dark:border-blue-800'
      };
    case 'under construction': 
      return {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-800 dark:text-orange-200',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'maintenance': 
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-200',
        border: 'border-yellow-200 dark:border-yellow-800'
      };
    case 'sold': 
      return {
        bg: 'bg-purple-100 dark:bg-purple-900/20',
        text: 'text-purple-800 dark:text-purple-200',
        border: 'border-purple-200 dark:border-purple-800'
      };
    case 'rented': 
      return {
        bg: 'bg-indigo-100 dark:bg-indigo-900/20',
        text: 'text-indigo-800 dark:text-indigo-200',
        border: 'border-indigo-200 dark:border-indigo-800'
      };
    default: 
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        text: 'text-gray-800 dark:text-gray-200',
        border: 'border-gray-200 dark:border-gray-800'
      };
  }
};

export const getTypeIcon = (type: Property['type'] = 'residential') => {
  switch (type) {
    case 'residential':
      return <Home className="w-4 h-4" />;
    case 'commercial':
      return <Building className="w-4 h-4" />;
    case 'industrial':
      return <Factory className="w-4 h-4" />;
    case 'land':
      return <MapPin className="w-4 h-4" />;
    case 'mixed-use':
      return <Building className="w-4 h-4" />;
    default:
      return <Home className="w-4 h-4" />;
  }
};

export const getTypeColor = (type: Property['type'] = 'residential') => {
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

export const getTrendIcon = (trendDirection: 'up' | 'down' | 'stable' = 'up') => {
  switch (trendDirection) {
    case 'up':
      return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />;
    case 'down':
      return <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />;
    case 'stable':
      return <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    default:
      return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />;
  }
};

export const getTrendDirection = (yieldValue: string): 'up' | 'down' | 'stable' => {
  const value = parseFloat(yieldValue.replace(/[^0-9.-]+/g, ''));
  if (value > 0) return 'up';
  if (value < 0) return 'down';
  return 'stable';
};

export const formatCurrency = (value: string): string => {
  // Extract numeric value and format as GHS
  const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
  if (isNaN(numericValue)) return value;
  
  if (numericValue >= 1000000) {
    return `GHS ${(numericValue / 1000000).toFixed(1)}M`;
  } else if (numericValue >= 1000) {
    return `GHS ${(numericValue / 1000).toFixed(1)}K`;
  }
  return `GHS ${numericValue.toLocaleString()}`;
};

export const formatYield = (yieldValue: string): string => {
  const value = parseFloat(yieldValue.replace(/[^0-9.-]+/g, ''));
  if (isNaN(value)) return yieldValue;
  
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
};

export const getFeatureIcon = (featureName: string) => {
  const name = featureName.toLowerCase();
  
  if (name.includes('bed') || name.includes('room')) return <Bed className="w-4 h-4" />;
  if (name.includes('bath')) return <Bath className="w-4 h-4" />;
  if (name.includes('area') || name.includes('sqft') || name.includes('sqm')) return <Square className="w-4 h-4" />;
  if (name.includes('year') || name.includes('built')) return <Calendar className="w-4 h-4" />;
  if (name.includes('parking') || name.includes('garage')) return <Car className="w-4 h-4" />;
  if (name.includes('wifi') || name.includes('internet')) return <Wifi className="w-4 h-4" />;
  if (name.includes('security') || name.includes('guard')) return <Shield className="w-4 h-4" />;
  if (name.includes('power') || name.includes('electric')) return <Zap className="w-4 h-4" />;
  
  return <Star className="w-4 h-4" />;
};

export const getPropertyPriority = (property: Property): 'low' | 'medium' | 'high' | 'critical' => {
  const value = parseFloat(property.value.replace(/[^0-9.-]+/g, ''));
  const yieldValue = parseFloat(property.yield.replace(/[^0-9.-]+/g, ''));
  
  if (value > 5000000 && yieldValue > 15) return 'critical';
  if (value > 2000000 && yieldValue > 10) return 'high';
  if (value > 500000 && yieldValue > 5) return 'medium';
  return 'low';
};

export const calculatePropertyStats = (properties: Property[]) => {
  const totalProperties = properties.length;
  const occupied = properties.filter(p => p.status === 'occupied').length;
  const available = properties.filter(p => p.status === 'available').length;
  const underConstruction = properties.filter(p => p.status === 'under construction').length;
  
  const totalValue = properties.reduce((sum, p) => {
    const value = parseFloat(p.value.replace(/[^0-9.-]+/g, ''));
    return sum + (isNaN(value) ? 0 : value);
  }, 0);
  
  const averageYield = properties.reduce((sum, p) => {
    const yield = parseFloat(p.yield.replace(/[^0-9.-]+/g, ''));
    return sum + (isNaN(yield) ? 0 : yield);
  }, 0) / totalProperties;
  
  const averagePrice = totalValue / totalProperties;
  
  return {
    totalProperties,
    occupied,
    available,
    underConstruction,
    totalValue,
    averageYield,
    averagePrice
  };
};

export const getPropertyScore = (property: Property): number => {
  let score = 0;
  
  // Value score (0-30 points)
  const value = parseFloat(property.value.replace(/[^0-9.-]+/g, ''));
  if (value > 5000000) score += 30;
  else if (value > 2000000) score += 20;
  else if (value > 500000) score += 10;
  
  // Yield score (0-30 points)
  const yield = parseFloat(property.yield.replace(/[^0-9.-]+/g, ''));
  if (yield > 15) score += 30;
  else if (yield > 10) score += 20;
  else if (yield > 5) score += 10;
  
  // Status score (0-20 points)
  if (property.status === 'available') score += 20;
  else if (property.status === 'occupied') score += 15;
  else if (property.status === 'under construction') score += 10;
  
  // Features score (0-20 points)
  if (property.features && property.features.length > 5) score += 20;
  else if (property.features && property.features.length > 3) score += 15;
  else if (property.features && property.features.length > 1) score += 10;
  
  return Math.min(score, 100);
};

export const getPropertyRating = (score: number): string => {
  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Very Good';
  if (score >= 60) return 'Good';
  if (score >= 45) return 'Fair';
  return 'Poor';
};

export const getPropertyRatingColor = (score: number): string => {
  if (score >= 90) return 'text-green-600 dark:text-green-400';
  if (score >= 75) return 'text-blue-600 dark:text-blue-400';
  if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
  if (score >= 45) return 'text-orange-600 dark:text-orange-400';
  return 'text-red-600 dark:text-red-400';
}; 