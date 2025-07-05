# Analytics Components

This directory contains the refactored analytics components for the Ghana Real Estate dashboard. The components have been broken down into smaller, more manageable pieces while maintaining all existing functionality and styling.

## Components Overview

### Main Component
- **`AnalyticsTab.tsx`** - The main analytics tab that orchestrates all other components

### UI Components
- **`AnalyticsHeader.tsx`** - Header with gradient background, title, and controls
- **`QuickActionCard.tsx`** - Reusable card component for quick actions
- **`QuickActions.tsx`** - Grid of quick action buttons
- **`StatsGrid.tsx`** - Grid of statistics cards
- **`ChartsSection.tsx`** - Section containing revenue and property charts
- **`PerformanceTable.tsx`** - Performance metrics table

## Usage

### Basic Usage
```tsx
import AnalyticsTab from '@/components/dashboard/tabs/AnalyticsTab';

function Dashboard() {
  const user = {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'property-owner'
  };

  return <AnalyticsTab user={user} />;
}
```

### Individual Components
```tsx
import { 
  AnalyticsHeader, 
  QuickActions, 
  StatsGrid,
  ChartsSection,
  PerformanceTable 
} from '@/components/dashboard/tabs/analytics';

// Use individual components as needed
```

## Features

### ✅ Maintained Functionality
- Time range selection (7d, 30d, 90d, 1y)
- Data refresh functionality
- Quick action buttons
- Statistics cards with trends
- Revenue vs expenses chart
- Property distribution chart
- Performance metrics table
- Responsive design
- Dark mode support

### 🎨 UI/UX Enhancements
- Improved hover effects and transitions
- Better visual feedback on interactions
- Enhanced accessibility
- Consistent spacing and typography
- Smooth animations and micro-interactions

### 🔧 Developer Benefits
- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used independently
- **Maintainability**: Easier to update and debug
- **Type Safety**: Full TypeScript support
- **Consistency**: Standardized props and styling

## Component Props

### AnalyticsHeader
```tsx
interface AnalyticsHeaderProps {
  timeRange: string;
  onTimeRangeChange: (value: string) => void;
  isRefreshing: boolean;
  onRefresh: () => void;
  className?: string;
}
```

### QuickActionCard
```tsx
interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  onClick?: () => void;
  className?: string;
}
```

### StatsGrid
```tsx
interface StatsGridProps {
  className?: string;
}
```

### ChartsSection
```tsx
interface ChartsSectionProps {
  className?: string;
}
```

### PerformanceTable
```tsx
interface PerformanceTableProps {
  className?: string;
}
```

## Data Structure

### Revenue Data
```tsx
const revenueData = [
  { name: 'Jan', revenue: 145000, expenses: 108000 },
  { name: 'Feb', revenue: 152000, expenses: 114000 },
  // ...
];
```

### Property Data
```tsx
const propertyData = [
  { name: 'Residential', value: 45 },
  { name: 'Commercial', value: 25 },
  // ...
];
```

### Stats Data
```tsx
const statsData = [
  {
    title: 'Total Revenue',
    value: 'GHS 1.2M',
    change: '+15.2%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'green'
  },
  // ...
];
```

## Styling

All components use Tailwind CSS with:
- Consistent color scheme (blue/purple/green gradient)
- Responsive design patterns
- Dark mode support
- Glassmorphism effects
- Smooth transitions and animations
- Hover effects and micro-interactions

## File Structure
```
components/dashboard/tabs/analytics/
├── index.ts                 # Export all components
├── AnalyticsHeader.tsx      # Header component
├── QuickActionCard.tsx      # Quick action card component
├── QuickActions.tsx         # Quick actions grid
├── StatsGrid.tsx            # Statistics grid
├── ChartsSection.tsx        # Charts section
├── PerformanceTable.tsx     # Performance table
└── README.md               # This documentation
```

## Integration

The analytics components integrate with:
- **ChartWidget** - For rendering charts
- **StatsCard** - For displaying statistics
- **Lucide React** - For icons
- **Tailwind CSS** - For styling

## Performance

- Components are optimized for performance
- Lazy loading support for charts
- Efficient re-rendering with React.memo
- Minimal bundle size impact 