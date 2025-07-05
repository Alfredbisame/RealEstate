# Property Card Components

A comprehensive set of React components for displaying real estate properties with enhanced UI/UX and rich functionality.

## Overview

The Property Card provides a visually appealing and feature-rich way to display property information. It's designed for real estate agents, property managers, and potential buyers/renters to view property details with interactive elements.

## Features

- **Multiple Variants**: Default, compact, detailed, and featured card layouts
- **Interactive Images**: Hover effects, loading states, and action overlays
- **Rich Property Data**: Value, yield, features, agent information
- **Status Indicators**: Visual status badges with color coding
- **Agent Integration**: Agent profiles with contact options
- **Action Buttons**: Favorite, share, and contact functionality
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized image loading and animations

## Components

### Main Components

- **PropertyCard**: Main orchestrator component with multiple variants
- **PropertyImage**: Enhanced image display with overlays and interactions
- **PropertyHeader**: Property title, type, and metadata display

### Display Components

- **PropertyLocation**: Location display with distance indicators
- **PropertyStatus**: Status badges with icons and animations
- **PropertyValue**: Value and yield display with trend indicators
- **PropertyFeatures**: Feature grid with icons and values
- **PropertyAgent**: Agent profile with contact options
- **PropertyActions**: Action buttons for interactions

## Usage

### Basic Usage

```tsx
import { PropertyCard } from './property-card';

function PropertyList() {
  const property = {
    id: '1',
    name: 'Luxury Villa in East Legon',
    location: 'East Legon, Accra',
    value: 'GHS 2,500,000',
    yield: '+12.5%',
    status: 'available',
    image: 'https://example.com/image.jpg'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PropertyCard property={property} />
    </div>
  );
}
```

### Different Variants

```tsx
import { PropertyCard } from './property-card';

function PropertyGrid() {
  return (
    <div className="space-y-6">
      {/* Default variant */}
      <PropertyCard property={property} variant="default" />
      
      {/* Compact variant */}
      <PropertyCard property={property} variant="compact" />
      
      {/* Detailed variant */}
      <PropertyCard property={property} variant="detailed" showAgent={true} />
      
      {/* Featured variant */}
      <PropertyCard property={property} variant="featured" />
    </div>
  );
}
```

### With Interactions

```tsx
import { PropertyCard } from './property-card';

function InteractivePropertyCard() {
  const handlePropertyClick = (property) => {
    console.log('Property clicked:', property);
  };

  const handleFavorite = (propertyId) => {
    console.log('Favorited:', propertyId);
  };

  const handleShare = (property) => {
    console.log('Sharing:', property);
  };

  return (
    <PropertyCard 
      property={property}
      onClick={handlePropertyClick}
      onFavorite={handleFavorite}
      onShare={handleShare}
      showAgent={true}
      showFeatures={true}
    />
  );
}
```

### Individual Components

```tsx
import { 
  PropertyImage, 
  PropertyHeader, 
  PropertyValue,
  PropertyFeatures 
} from './property-card';

function CustomPropertyCard() {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <PropertyImage image={property.image} alt={property.name} />
      <div className="p-4">
        <PropertyHeader property={property} />
        <PropertyValue value={property.value} yield={property.yield} />
        <PropertyFeatures features={property.features} />
      </div>
    </div>
  );
}
```

## Types

### Property
```tsx
interface Property {
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
```

### PropertyFeature
```tsx
interface PropertyFeature {
  id: string;
  name: string;
  icon: string;
  value: string;
}
```

## Utilities

### Status Functions

- `getStatusColor(status)`: Get color configuration for property status
- `getTypeIcon(type)`: Get appropriate icon for property type
- `getTypeColor(type)`: Get color class for property type

### Value Functions

- `formatCurrency(value)`: Format currency values with GHS
- `formatYield(yield)`: Format yield percentages
- `getTrendIcon(direction)`: Get trend indicator icon
- `getTrendDirection(yield)`: Determine trend direction from yield

### Analysis Functions

- `getPropertyScore(property)`: Calculate property score (0-100)
- `getPropertyRating(score)`: Get human-readable rating
- `getPropertyRatingColor(score)`: Get color for rating
- `calculatePropertyStats(properties)`: Calculate overall statistics

## Styling

### Status Colors

- **Green**: Available, occupied
- **Blue**: Available
- **Orange**: Under construction, maintenance
- **Purple**: Sold
- **Indigo**: Rented

### Property Types

- **Residential**: Home icon, blue color
- **Commercial**: Building icon, green color
- **Industrial**: Factory icon, orange color
- **Land**: Map pin icon, purple color
- **Mixed-use**: Building icon, indigo color

### Variants

- **Default**: Full-featured card with all elements
- **Compact**: Minimal information for lists
- **Detailed**: Extended information with agent details
- **Featured**: Highlighted with special styling

## Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation support for all buttons
- Screen reader friendly property information
- High contrast mode support
- Focus indicators for all clickable elements

## Performance

- Lazy image loading with skeleton states
- Optimized animations and transitions
- Efficient re-renders with proper memoization
- Image error handling with fallbacks

## Domain-Specific Features

### Real Estate Context

- **GHS Currency**: All amounts in Ghanaian Cedi
- **Property Types**: Residential, commercial, industrial, land, mixed-use
- **Status Management**: Available, occupied, under construction, etc.
- **Agent Integration**: Real estate agent profiles and contact

### Property Management

- **Feature Display**: Bedrooms, bathrooms, area, year built
- **Amenities**: Swimming pool, security, parking, etc.
- **Price History**: Historical price changes
- **View Tracking**: Property view counts
- **Favorites**: User favorite functionality

## Error Handling

- Graceful image loading with fallback states
- Missing data handling with default values
- Invalid property data validation
- Network error recovery for images

## Testing

### Mock Data

```tsx
import { mockProperties, sampleFeatures } from './property-card/mockData';

// Use mock data for testing
const testProperty = mockProperties[0];
const testFeatures = sampleFeatures;
```

### Test Scenarios

- Property card rendering with different variants
- Image loading and error states
- Interactive button functionality
- Responsive design testing
- Accessibility testing
- Dark mode compatibility

## Future Enhancements

- **Virtual Tours**: 360° property view integration
- **Map Integration**: Interactive location maps
- **Comparisons**: Side-by-side property comparison
- **Notifications**: Price change and availability alerts
- **Analytics**: Property performance metrics
- **Social Sharing**: Enhanced sharing capabilities
- **Reviews**: Property and agent reviews
- **Booking**: Direct viewing appointment booking 