# Stats Card Components

A comprehensive set of modular components for displaying key performance indicators, metrics, and statistics in a real estate management dashboard.

## Overview

The Stats Card module provides a complete solution for displaying and managing business metrics, including:

- **Key Performance Indicators**: Revenue, properties, clients, and more
- **Trend Analysis**: Change indicators and trend visualization
- **Interactive Cards**: Clickable cards with detailed information
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Accessibility**: WCAG compliant with keyboard navigation

## Components

### Core Components

#### `StatsCard`
Main card component for displaying individual metrics.

**Features:**
- Multiple size variants (sm, md, lg, xl)
- Multiple visual variants (default, minimal, detailed, compact)
- Interactive with click handlers
- Loading states with skeletons
- Animated value transitions
- Trend indicators

**Props:**
```typescript
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink' | 'yellow' | 'indigo' | 'teal' | 'cyan';
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  period?: string;
  className?: string;
  onClick?: (data: StatsCardData) => void;
  loading?: boolean;
  animated?: boolean;
  showTrend?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'minimal' | 'detailed' | 'compact';
}
```

#### `StatsContent`
Main orchestrator component for the complete stats interface.

**Features:**
- Search and filtering capabilities
- Category-based organization
- Sorting options
- Responsive grid layout
- Event handling

#### `StatsCardGrid`
Grid layout for displaying multiple stats cards.

**Features:**
- Configurable columns (1-6)
- Responsive design
- Gap customization
- Event propagation

#### `StatsCardHeader`
Header section of stats cards with icon and change indicator.

#### `StatsCardContent`
Content section with value, title, and optional details.

#### `StatsCardIcon`
Icon component with color coding and animations.

#### `StatsCardChange`
Change indicator with trend icons and color coding.

### Utility Components

#### `StatsCardSkeleton`
Loading skeleton for stats cards.

#### `StatsCardTrend`
Trend visualization component.

#### `StatsCardProgress`
Progress bar for target-based metrics.

#### `StatsCardComparison`
Comparison component for period-over-period analysis.

## Types

### Core Types

```typescript
interface StatsCardMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink' | 'yellow' | 'indigo' | 'teal' | 'cyan';
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  period?: string;
  category?: string;
  priority?: 'low' | 'medium' | 'high';
  lastUpdated?: string;
}

interface StatsCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: StatsCardProps['color'];
  trend?: 'up' | 'down' | 'stable';
  period?: string;
}

interface StatsCardCategory {
  id: string;
  name: string;
  description?: string;
  color: StatsCardProps['color'];
  icon: LucideIcon;
  metrics: StatsCardMetric[];
}
```

## Utilities

### Color and Styling
- `getColorClasses()`: Color scheme management
- `getChangeColorClasses()`: Change indicator styling
- `getSizeClasses()`: Size variant management
- `getVariantClasses()`: Visual variant styling

### Formatting
- `formatValue()`: Value formatting with K/M suffixes
- `calculatePercentage()`: Percentage calculations
- `formatPercentage()`: Percentage formatting
- `getChangeType()`: Change type determination

### Data Processing
- `filterMetrics()`: Advanced filtering
- `sortMetrics()`: Multi-criteria sorting
- `getGridClasses()`: Grid layout generation
- `animateValue()`: Value animation utilities

## Usage Examples

### Basic Implementation

```tsx
import { StatsCard } from './stats-card';

function Dashboard() {
  const handleCardClick = (data) => {
    console.log('Card clicked:', data);
    // Navigate to detail view or open modal
  };

  return (
    <StatsCard
      title="Total Revenue"
      value="₵2.4M"
      change="+12.5%"
      changeType="positive"
      icon={DollarSign}
      color="green"
      onClick={handleCardClick}
      animated={true}
    />
  );
}
```

### Grid Layout

```tsx
import { StatsCardGrid, mockStatsCards } from './stats-card';

function MetricsDashboard() {
  return (
    <StatsCardGrid
      cards={mockStatsCards}
      columns={4}
      gap="md"
      onCardClick={(data) => {
        // Handle card interaction
      }}
    />
  );
}
```

### Complete Interface

```tsx
import { StatsContent } from './stats-card';

function AnalyticsPage() {
  return (
    <StatsContent
      showFilters={true}
      showSearch={true}
      showCategories={true}
      maxCards={12}
      onCardClick={(data) => {
        // Handle card click
      }}
    />
  );
}
```

### Custom Styling

```tsx
import { StatsCard } from './stats-card';

function CustomMetrics() {
  return (
    <StatsCard
      title="Custom Metric"
      value="1,234"
      change="+5.6%"
      changeType="positive"
      icon={TrendingUp}
      color="purple"
      size="lg"
      variant="detailed"
      description="Custom description"
      target="1,500"
      period="This month"
    />
  );
}
```

## Styling

### Design System
- **Colors**: 10 color variants with consistent theming
- **Typography**: Hierarchical text sizing and weights
- **Spacing**: Consistent padding and margins
- **Borders**: Subtle borders with hover effects
- **Shadows**: Depth indicators for interactive elements

### Dark Mode Support
All components include comprehensive dark mode support with:
- Color scheme adaptation
- Contrast optimization
- Accessibility compliance

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive component sizing
- Touch-friendly interactions

## Accessibility

### Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliance
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper HTML structure

### Best Practices
- Use semantic HTML elements
- Provide alt text for images
- Ensure sufficient color contrast
- Support keyboard-only navigation
- Include ARIA labels where needed

## Performance

### Optimization Strategies
- **Lazy Loading**: Components load on demand
- **Memoization**: React.memo for expensive components
- **Efficient Rendering**: Minimal re-renders
- **Bundle Optimization**: Tree-shakable imports

### Bundle Size
- Tree-shakable imports
- Modular component structure
- Optimized dependencies
- Code splitting support

## Domain-Specific Features

### Real Estate Metrics
- **Revenue Tracking**: Monthly and annual revenue metrics
- **Property Management**: Occupancy rates and property counts
- **Client Relations**: Client acquisition and satisfaction
- **Market Analysis**: Market share and competitive metrics
- **Financial Performance**: Profit margins and cost analysis

### Business Intelligence
- **Trend Analysis**: Period-over-period comparisons
- **Target Tracking**: Goal-based progress visualization
- **Performance Monitoring**: Real-time metric updates
- **Data Visualization**: Chart and graph integration
- **Alert Systems**: Threshold-based notifications

## Integration

### Event Handling
```typescript
// Card events
onCardClick: (data: StatsCardData) => void
onCardHover: (data: StatsCardData) => void
onCardFocus: (data: StatsCardData) => void

// Grid events
onGridSort: (sortBy: string, order: 'asc' | 'desc') => void
onGridFilter: (filters: StatsCardFilter) => void
onGridSearch: (searchTerm: string) => void
```

### Data Integration
- REST API support
- Real-time updates
- Offline capability
- Data synchronization
- Export functionality

## Testing

### Component Testing
- Unit tests for utilities
- Integration tests for components
- Accessibility testing
- Performance testing
- Cross-browser testing

### Mock Data
Comprehensive mock data provided for:
- Financial metrics
- Property statistics
- Client data
- Market indicators

## Future Enhancements

### Planned Features
- **Real-time updates**: WebSocket integration
- **Advanced analytics**: Machine learning insights
- **Custom dashboards**: User-configurable layouts
- **Export capabilities**: PDF and Excel export
- **Drill-down views**: Detailed metric analysis
- **Alert systems**: Threshold-based notifications
- **Mobile optimization**: Native mobile experience
- **Multi-language**: Internationalization support

### Roadmap
- Q1: Real-time updates and advanced filtering
- Q2: Custom dashboards and drill-down views
- Q3: Mobile optimization and export features
- Q4: AI-powered insights and alert systems

## Best Practices

### Component Usage
- Use appropriate size variants for context
- Implement loading states for data fetching
- Provide meaningful descriptions for metrics
- Use consistent color coding across related metrics
- Implement proper error handling

### Performance
- Lazy load components when possible
- Use React.memo for expensive components
- Optimize re-renders with proper dependencies
- Implement virtual scrolling for large datasets

### Accessibility
- Provide meaningful ARIA labels
- Ensure keyboard navigation support
- Maintain sufficient color contrast
- Test with screen readers
- Follow WCAG guidelines

### Styling
- Use design system tokens
- Maintain consistent spacing
- Implement responsive breakpoints
- Support dark mode themes
- Follow component composition patterns 