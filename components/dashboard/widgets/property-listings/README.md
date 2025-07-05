# Property Listings Components

A comprehensive set of React components for displaying and managing property listings with enhanced UI/UX and rich functionality.

## Overview

The Property Listings provides a feature-rich interface for displaying real estate properties with search, filtering, sorting, and interactive management capabilities. It's designed for real estate agents, property managers, and administrators to efficiently manage property portfolios.

## Features

- **Multiple Layouts**: Grid, list, and compact view options
- **Search & Filtering**: Advanced search and filter capabilities
- **Sorting Options**: Sort by price, views, interest, date, or title
- **Interactive Cards**: Rich property cards with hover effects
- **Status Management**: Visual status indicators with color coding
- **Performance Metrics**: Views, interest rates, and engagement tracking
- **Agent Integration**: Agent profiles and contact information
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: ARIA labels and keyboard navigation

## Components

### Main Components

- **PropertyListings**: Main orchestrator component
- **ListingsHeader**: Header with title and statistics
- **ListingsContent**: Content container with search and grid
- **ListingsGrid**: Grid layout with different view options

### Card Components

- **ListingCard**: Individual property listing card
- **ListingImage**: Enhanced image display with status badges
- **ListingInfo**: Property information display
- **ListingStats**: Views and interest statistics
- **ListingActions**: Action buttons for management

## Usage

### Basic Usage

```tsx
import { PropertyListings } from './property-listings';

function Dashboard() {
  const listings = [
    {
      id: '1',
      title: 'Modern Villa in East Legon',
      price: 'GHS 450,000',
      location: 'East Legon, Accra',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      image: 'https://example.com/image.jpg',
      views: 45,
      interested: 8,
      status: 'active'
    }
  ];

  return (
    <div className="h-full">
      <PropertyListings listings={listings} />
    </div>
  );
}
```

### With Custom Configuration

```tsx
import { PropertyListings } from './property-listings';

function Dashboard() {
  return (
    <div className="h-full">
      <PropertyListings 
        listings={listings}
        layout="grid"
        maxHeight="max-h-96"
        showFilters={true}
        showSearch={true}
        showStats={true}
      />
    </div>
  );
}
```

### With Event Handlers

```tsx
import { PropertyListings } from './property-listings';

function Dashboard() {
  const handleListingClick = (listing) => {
    console.log('Listing clicked:', listing);
  };

  const handleEditListing = (listing) => {
    console.log('Edit listing:', listing);
  };

  const handleDeleteListing = (listingId) => {
    console.log('Delete listing:', listingId);
  };

  return (
    <PropertyListings 
      listings={listings}
      onListingClick={handleListingClick}
      onEditListing={handleEditListing}
      onDeleteListing={handleDeleteListing}
    />
  );
}
```

### Individual Components

```tsx
import { 
  ListingsHeader, 
  ListingsGrid, 
  ListingCard 
} from './property-listings';

function CustomListings() {
  return (
    <div className="space-y-6">
      <ListingsHeader title="My Properties" totalListings={listings.length} />
      <ListingsGrid 
        listings={listings}
        layout="grid"
        onListingClick={(listing) => console.log(listing)}
      />
    </div>
  );
}
```

## Types

### PropertyListing
```tsx
interface PropertyListing {
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
```

### ListingAgent
```tsx
interface ListingAgent {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  rating: number;
}
```

## Utilities

### Status Functions

- `getStatusColor(status)`: Get color configuration for listing status
- `getTypeIcon(type)`: Get appropriate icon for property type
- `getTypeColor(type)`: Get color class for property type
- `getPriorityConfig(priority)`: Get priority styling configuration

### Formatting Functions

- `formatCurrency(price)`: Format currency values with GHS
- `formatArea(area)`: Format area measurements
- `formatDate(dateString)`: Format dates with smart text

### Analysis Functions

- `calculateListingsSummary(listings)`: Calculate overall statistics
- `filterListings(listings, filters)`: Filter listings by criteria
- `searchListings(listings, searchTerm)`: Search listings by text
- `sortListings(listings, sortBy)`: Sort listings by various criteria
- `getListingScore(listing)`: Calculate listing performance score
- `getListingRating(score)`: Get human-readable rating
- `getListingTrend(listing)`: Determine listing trend direction

## Styling

### Status Colors

- **Green**: Active listings
- **Orange**: Pending listings
- **Blue**: Sold listings
- **Gray**: Inactive listings
- **Yellow**: Draft listings

### Property Types

- **Residential**: Home icon, blue color
- **Commercial**: Building icon, green color
- **Industrial**: Factory icon, orange color
- **Land**: Map pin icon, purple color
- **Mixed-use**: Building icon, indigo color

### Layouts

- **Grid**: Card-based layout with multiple columns
- **List**: Vertical list layout with detailed information
- **Compact**: Minimal layout for high-density display

## Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation support for all buttons
- Screen reader friendly property information
- High contrast mode support
- Focus indicators for all clickable elements

## Performance

- Efficient filtering and sorting algorithms
- Optimized re-renders with proper memoization
- Lazy loading of images with fallbacks
- Debounced search functionality

## Domain-Specific Features

### Real Estate Context

- **GHS Currency**: All amounts in Ghanaian Cedi
- **Property Types**: Residential, commercial, industrial, land, mixed-use
- **Status Management**: Active, pending, sold, inactive, draft
- **Agent Integration**: Real estate agent profiles and contact

### Property Management

- **Performance Tracking**: Views, interest rates, engagement metrics
- **Priority Management**: Urgent, high, medium, low priority levels
- **Featured Listings**: Highlighted properties with special styling
- **Tag System**: Categorization with custom tags
- **Amenities Display**: Property features and amenities

## Error Handling

- Graceful handling of missing property data
- Image loading fallbacks with error states
- Empty state handling for no listings
- Input validation for search and filters

## Testing

### Mock Data

```tsx
import { mockListings, sampleFilters } from './property-listings/mockData';

// Use mock data for testing
const testListings = mockListings;
const testFilters = sampleFilters;
```

### Test Scenarios

- Listing card rendering with different layouts
- Search and filtering functionality
- Sorting and pagination
- Interactive button functionality
- Responsive design testing
- Accessibility testing

## Future Enhancements

- **Advanced Filters**: Price range, location radius, amenities
- **Bulk Operations**: Multi-select and bulk actions
- **Export Functionality**: PDF/Excel export of listings
- **Analytics Dashboard**: Detailed performance metrics
- **Integration**: Connect with CRM and property management systems
- **Notifications**: Price change and status update alerts
- **Virtual Tours**: 360° property view integration
- **Comparisons**: Side-by-side property comparison 