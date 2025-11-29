# Property Owner Dashboard Components

This directory contains the modular components for the Property Owner Dashboard, providing a comprehensive overview of real estate portfolio management.

## Components

### PropertyOwnerHeader
- **Purpose**: Displays the main dashboard header with title, description, and key metrics
- **Features**: 
  - Gradient background with exchange rate and last updated information
  - Responsive design with backdrop blur effects
  - Configurable exchange rate and timestamp

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common property owner tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for Add Property, ROI Calculator, Generate Invoice, and Payment Tracker
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key portfolio statistics in a grid layout
- **Features**:
  - Total Portfolio Value, Monthly Revenue, Active Properties, Average ROI
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### PortfolioChart
- **Purpose**: Visualizes portfolio performance over time
- **Features**:
  - Area chart showing property value and monthly income trends
  - 6-month historical data visualization
  - Responsive chart design

### PropertiesList
- **Purpose**: Shows recent properties with key details
- **Features**:
  - Property cards with images, location, value, and yield information
  - Status indicators (Occupied, Available, Under Construction)
  - Scrollable list for multiple properties

### CashFlowChart
- **Purpose**: Displays quarterly cash flow analysis
- **Features**:
  - Bar chart showing quarterly cash flow data
  - Simple and clear visualization
  - Consistent with other chart components

### DashboardContent
- **Purpose**: Central widget renderer that maps widget types to components
- **Features**:
  - Switch statement for different widget types
  - Clean separation of concerns
  - Easy to extend with new widget types

## Usage

```tsx
import { 
  PropertyOwnerHeader, 
  QuickActions, 
  DashboardContent 
} from './property-owner';

// In your main dashboard component
<PropertyOwnerHeader />
<QuickActions 
  onAddProperty={handleAddProperty}
  onROICalculator={handleROICalculator}
  onGenerateInvoice={handleGenerateInvoice}
  onPaymentTracker={handlePaymentTracker}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with portfolio metrics
- `chart`: Portfolio performance area chart
- `properties`: Recent properties list
- `profit-calc`: Profit calculator widget
- `cash-flow`: Cash flow analysis bar chart

## Styling

All components use:
- Tailwind CSS for styling
- Dark mode support
- Consistent spacing and typography
- Hover effects and transitions
- Responsive design patterns

## Accessibility

Components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## Performance

- Components are optimized for re-rendering
- Lazy loading for charts and images
- Efficient state management
- Minimal bundle size impact 