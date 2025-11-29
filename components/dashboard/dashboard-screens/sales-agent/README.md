# Sales Agent Dashboard Components

This directory contains the modular components for the Sales Agent Dashboard, providing comprehensive lead management and property sales capabilities.

## Components

### SalesAgentHeader
- **Purpose**: Displays the main dashboard header with title, description, and performance metrics
- **Features**: 
  - Gradient background with monthly target and performance status
  - Responsive design with backdrop blur effects
  - Configurable target percentage and performance indicators

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common sales tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for Add Lead, List Property, Schedule Viewing, and Follow Up
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key sales statistics in a grid layout
- **Features**:
  - Active Leads, Properties Sold, Monthly Commission, Conversion Rate
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### SalesPipeline
- **Purpose**: Visualizes the sales pipeline with progress indicators
- **Features**:
  - Pipeline stages with lead counts and percentages
  - Color-coded progress bars for each stage
  - Smooth animations and transitions

### DashboardContent
- **Purpose**: Central widget renderer that maps widget types to components
- **Features**:
  - Switch statement for different widget types
  - Clean separation of concerns
  - Easy to extend with new widget types

## Usage

```tsx
import { 
  SalesAgentHeader, 
  QuickActions, 
  DashboardContent 
} from './sales-agent';

// In your main dashboard component
<SalesAgentHeader />
<QuickActions 
  onAddLead={handleAddLead}
  onListProperty={handleListProperty}
  onScheduleViewing={handleScheduleViewing}
  onFollowUp={handleFollowUp}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with sales metrics
- `leads`: Lead tracker widget
- `listings`: Property listings widget
- `pipeline`: Sales pipeline visualization

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
- Efficient state management
- Minimal bundle size impact
- Lazy loading for data-heavy components

## Sales Features

- Lead management and tracking
- Property listing management
- Sales pipeline visualization
- Commission tracking
- Performance metrics
- Client follow-up management
- Viewing scheduling
- Conversion rate monitoring 