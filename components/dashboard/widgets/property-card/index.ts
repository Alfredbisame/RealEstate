// Main component
export { default as PropertyCard } from './PropertyCard';

// Sub-components
export { default as PropertyImage } from './PropertyImage';
export { default as PropertyHeader } from './PropertyHeader';
export { default as PropertyLocation } from './PropertyLocation';
export { default as PropertyStatus } from './PropertyStatus';
export { default as PropertyValue } from './PropertyValue';
export { default as PropertyFeatures } from './PropertyFeatures';
export { default as PropertyAgent } from './PropertyAgent';
export { default as PropertyActions } from './PropertyActions';

// Types
export type {
  Property,
  PropertyFeature,
  PropertyAgent,
  PriceHistory,
  PropertyCardProps,
  PropertyImageProps,
  PropertyHeaderProps,
  PropertyLocationProps,
  PropertyStatusProps,
  PropertyValueProps,
  PropertyFeaturesProps,
  PropertyAgentProps,
  PropertyActionsProps,
  PropertyStats,
  PropertyFilters,
  PropertyPriority
} from './types';

// Utilities
export {
  getStatusColor,
  getTypeIcon,
  getTypeColor,
  getTrendIcon,
  getTrendDirection,
  formatCurrency,
  formatYield,
  getFeatureIcon,
  getPropertyPriority,
  calculatePropertyStats,
  getPropertyScore,
  getPropertyRating,
  getPropertyRatingColor
} from './utils';

// Mock data
export { mockProperties, sampleFeatures } from './mockData'; 