# Portfolio Tab Components

This directory contains modular components for the Portfolio tab in the Real Estate dashboard. The components are designed to manage and display property portfolios with comprehensive filtering, search, and view options.

## Components Overview

### Core Components

#### `PortfolioHeader`
- **Purpose**: Displays the main header with title, description, and add property button
- **Features**: 
  - Gradient background with decorative elements
  - Interactive add property button with backdrop blur
  - Responsive design with smooth animations
- **Props**: `onAddProperty?: () => void`

#### `PortfolioStats`
- **Purpose**: Shows key portfolio metrics in a grid layout
- **Features**:
  - Four stat cards: Total Portfolio Value, Total Properties, Average Yield, Monthly Income
  - Hover animations and scale effects
  - Color-coded icons and backgrounds
  - Real-time statistics calculation
- **Props**: `properties: Property[]`

#### `SearchAndFilter`
- **Purpose**: Provides search functionality, property type filtering, and view mode toggle
- **Features**:
  - Search input with icon
  - Dropdown filter for property types
  - Grid/List view toggle buttons
  - Responsive layout with hover effects
- **Props**:
  - `searchTerm: string`
  - `filterType: string`
  - `viewMode: 'grid' | 'list'`
  - `onSearchChange: (term: string) => void`
  - `onFilterChange: (filter: string) => void`
  - `onViewModeChange: (mode: 'grid' | 'list') => void`

#### `PropertiesGrid`
- **Purpose**: Displays properties in a responsive grid layout
- **Features**:
  - Responsive grid with hover effects
  - Integration with PropertyCard component
  - Scale animations on hover
- **Props**: `properties: Property[]`

#### `PropertiesTable`
- **Purpose**: Displays properties in a table format
- **Features**:
  - Responsive table with hover effects
  - Status-based color coding
  - Image thumbnails with hover animations
  - Sortable columns (future enhancement)
- **Props**: `properties: Property[]`

#### `PropertiesView`
- **Purpose**: Handles switching between grid and list views
- **Features**:
  - Conditional rendering based on view mode
  - Empty state handling
  - Unified interface for both views
- **Props**:
  - `properties: Property[]`
  - `viewMode: 'grid' | 'list'`

## Property Types

### Property Categories
- **Residential**: Houses, apartments, and residential units
- **Commercial**: Office buildings, retail spaces, and commercial properties
- **Industrial**: Warehouses, factories, and industrial facilities

### Property Status
- **Occupied**: Currently rented or in use
- **Available**: Ready for rent or sale
- **Under Construction**: In development phase

## Styling & Design

### Design System
- **Backdrop Blur**: Consistent use of backdrop blur effects
- **Gradients**: Green to blue to purple gradient theme
- **Hover Effects**: Scale, shadow, and color transitions
- **Color Coding**: Status-based color schemes
- **Responsive**: Mobile-first responsive design

### Accessibility
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color combinations
- **Focus Indicators**: Clear focus states for all interactive elements
- **Image Alt Text**: Proper alt text for property images

## Performance Optimizations

### Component Structure
- **Modular Design**: Each component has a single responsibility
- **Memoization**: Components can be memoized for performance
- **Lazy Loading**: Property images can be lazy loaded
- **Event Delegation**: Efficient event handling

### Bundle Optimization
- **Tree Shaking**: Only import used components
- **Code Splitting**: Components can be code-split
- **Dynamic Imports**: Heavy components can be dynamically imported

## Usage Examples

### Basic Portfolio Tab
```tsx
import PortfolioTab from './PortfolioTab';

<PortfolioTab user={currentUser} />
```

### Individual Components
```tsx
import { PortfolioHeader, PortfolioStats } from './portfolio';

<PortfolioHeader onAddProperty={handleAddProperty} />
<PortfolioStats properties={propertiesList} />
```

### Custom Properties View
```tsx
import { PropertiesView } from './portfolio';

<PropertiesView 
  properties={filteredProperties} 
  viewMode="grid" 
/>
```

## Property Data Structure

```typescript
interface Property {
  id: string;
  name: string;
  location: string;
  value: string;
  yield: string;
  status: string;
  image: string;
  type: string;
  bedrooms: number | null;
  bathrooms: number;
  area: string;
  monthlyRent: string;
  purchaseDate: string;
  appreciation: string;
}
```

## Event Handling

### Add Property
```typescript
const handleAddProperty = () => {
  // Open property creation modal or form
  console.log('Add new property');
};
```

### Search Properties
```typescript
const handleSearch = (searchTerm: string) => {
  // Filter properties based on search term
  setSearchTerm(searchTerm);
};
```

### Filter by Type
```typescript
const handleFilterChange = (filterType: string) => {
  // Filter properties by type
  setFilterType(filterType);
};
```

### Change View Mode
```typescript
const handleViewModeChange = (mode: 'grid' | 'list') => {
  // Switch between grid and list view
  setViewMode(mode);
};
```

## Filtering and Search

### Search Functionality
- **Text Search**: Searches through property names and locations
- **Case Insensitive**: Search is not case-sensitive
- **Real-time**: Updates results as user types

### Filter Options
- **All Types**: Shows all properties
- **Residential**: Shows only residential properties
- **Commercial**: Shows only commercial properties
- **Industrial**: Shows only industrial properties

### View Modes
- **Grid View**: Card-based layout with property images
- **List View**: Table-based layout with detailed information

## Portfolio Analytics

### Key Metrics
- **Total Portfolio Value**: Sum of all property values
- **Total Properties**: Number of properties in portfolio
- **Average Yield**: Mean yield across all properties
- **Monthly Income**: Total monthly rental income

### Calculations
- **Value Calculation**: Sum of individual property values
- **Yield Calculation**: Average of individual property yields
- **Income Calculation**: Sum of monthly rental incomes

## Future Enhancements

### Planned Features
- **Property Analytics**: Detailed property performance metrics
- **Market Comparison**: Compare portfolio to market averages
- **Investment Tracking**: Track property appreciation over time
- **Rental History**: Historical rental data and trends
- **Property Management**: Integrated property management tools

### Technical Improvements
- **Real-time Updates**: Live property data updates
- **Advanced Filtering**: Multiple filter criteria
- **Sorting Options**: Sort by value, yield, date, etc.
- **Export Functionality**: Export portfolio data
- **Property Details**: Detailed property information modal

## Testing

### Unit Tests
- Component rendering tests
- Props validation tests
- Event handler tests
- Accessibility tests

### Integration Tests
- User interaction flows
- Search and filter functionality
- View mode switching
- Property data handling

### Visual Regression Tests
- Component visual consistency
- Responsive design tests
- Dark mode compatibility
- Animation smoothness

## Contributing

When adding new property types:
1. Follow the existing component structure
2. Add proper TypeScript types
3. Include accessibility features
4. Add comprehensive tests
5. Update documentation
6. Consider mobile responsiveness

## Dependencies

- **React**: Core framework
- **Lucide React**: Icons
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **PropertyCard**: Property display component 