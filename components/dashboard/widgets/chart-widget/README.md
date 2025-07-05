# Chart Widget Components

A modular component system for creating interactive charts and data visualizations using Recharts library.

## Overview

The chart widget system provides a comprehensive interface for displaying various types of charts with enhanced UI/UX features including animations, gradients, and responsive design.

## Components

### Core Components

#### `ChartHeader`
- **Purpose**: Displays chart title with type-specific icons and badges
- **Features**: 
  - Dynamic icons based on chart type
  - Type badges with color coding
  - Real-time data indicator
  - Animated pulse indicator
- **Props**: `title`, `type`, `className`

#### `AreaChartComponent`
- **Purpose**: Renders area charts with gradient fills and smooth animations
- **Features**:
  - Multiple gradient definitions
  - Interactive tooltips with currency formatting
  - Smooth animations and transitions
  - Responsive design
  - Custom styling for axes and grid
- **Props**: `data`, `className`

#### `BarChartComponent`
- **Purpose**: Renders bar charts with gradient fills and rounded corners
- **Features**:
  - Gradient bar fills
  - Rounded bar corners
  - Interactive tooltips
  - Smooth animations
  - Custom cursor effects
- **Props**: `data`, `className`

#### `PieChartComponent`
- **Purpose**: Renders pie and doughnut charts with gradient fills
- **Features**:
  - Support for both pie and doughnut types
  - Gradient fills for each segment
  - Interactive tooltips
  - Custom legend with color coding
  - Smooth animations
- **Props**: `data`, `type`, `className`

#### `ChartRenderer`
- **Purpose**: Routes to appropriate chart component based on type
- **Features**:
  - Type-based routing
  - Fallback for unsupported types
  - Clean error handling
- **Props**: `type`, `data`, `className`

#### `ChartWidgetContent`
- **Purpose**: Main container combining header and chart
- **Features**:
  - Orchestrates header and chart components
  - Handles layout and spacing
  - Consistent structure
- **Props**: `title`, `data`, `type`, `className`

### Utility Files

#### `types.ts`
- **ChartWidgetProps**: Main props interface
- **ChartType**: Supported chart types
- **ChartData**: Data structure interface
- **Dataset**: Dataset structure interface
- **TransformedDataPoint**: Transformed data point interface
- **ChartColors**: Color palette interface

#### `utils.ts`
- **CHART_COLORS**: Color constants for charts
- **PIE_CHART_COLORS**: Color array for pie charts
- **TOOLTIP_STYLE**: Consistent tooltip styling
- **AXIS_STYLE**: Consistent axis styling
- **transformLineData()**: Transform Chart.js to Recharts format for line/area charts
- **transformBarData()**: Transform Chart.js to Recharts format for bar charts
- **transformPieData()**: Transform Chart.js to Recharts format for pie charts
- **formatCurrency()**: Format numbers as currency
- **getChartData()**: Get chart data with format detection

## Usage

### Basic Implementation

```tsx
import { ChartWidgetContent } from './chart-widget';

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [{
    label: 'Revenue',
    data: [12000, 19000, 15000, 25000],
    borderColor: '#10b981'
  }]
};

export default function MyComponent() {
  return (
    <ChartWidgetContent
      title="Monthly Revenue"
      data={chartData}
      type="area"
    />
  );
}
```

### Individual Components

```tsx
import { 
  ChartHeader, 
  AreaChartComponent, 
  BarChartComponent,
  PieChartComponent 
} from './chart-widget';

// Use individual components for custom layouts
<ChartHeader title="Custom Chart" type="area" />
<AreaChartComponent data={areaData} />
<BarChartComponent data={barData} />
<PieChartComponent data={pieData} type="doughnut" />
```

## Features

### UI/UX Enhancements
- **Gradient Fills**: Beautiful gradient backgrounds for all chart types
- **Smooth Animations**: 1000ms animation duration with easing
- **Interactive Tooltips**: Enhanced tooltips with backdrop blur
- **Responsive Design**: Works across all screen sizes
- **Dark Mode Support**: Full dark mode compatibility
- **Hover Effects**: Enhanced hover states and cursor effects

### Chart Types Supported
- **Area Charts**: Trend visualization with gradient fills
- **Bar Charts**: Comparison charts with rounded corners
- **Pie Charts**: Distribution charts with gradient segments
- **Doughnut Charts**: Distribution charts with center cutout

### Data Format Support
- **Chart.js Format**: Compatible with Chart.js data structure
- **Recharts Format**: Direct Recharts data format
- **Automatic Detection**: Automatically detects and transforms data format

### Styling System
- **Consistent Colors**: Unified color palette across all charts
- **Typography**: Proper font weights and sizes
- **Spacing**: Consistent spacing using Tailwind classes
- **Borders**: Subtle borders and shadows
- **Gradients**: Multiple gradient definitions for visual appeal

## Data Structure

### Chart.js Format
```typescript
interface ChartData {
  labels?: string[];
  datasets?: Dataset[];
}

interface Dataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}
```

### Recharts Format
```typescript
interface TransformedDataPoint {
  name: string;
  value?: number;
  [key: string]: any;
}
```

## Customization

### Styling Customization
All components accept `className` props for custom styling:

```tsx
<ChartWidgetContent
  title="Custom Chart"
  data={data}
  type="area"
  className="custom-chart-styles"
/>
```

### Color Customization
Modify colors in `utils.ts`:

```typescript
export const CHART_COLORS = {
  primary: '#your-color',
  secondary: '#your-color',
  // ... other colors
};
```

### Animation Customization
Adjust animation duration in chart components:

```typescript
animationDuration={1500} // Custom duration
animationBegin={200}     // Custom delay
```

## Performance

### Optimization Features
- **Lazy Loading**: Components can be easily lazy-loaded
- **Memoization Ready**: Components structured for React.memo optimization
- **Efficient Rendering**: Minimal re-renders with proper prop structure
- **Tree Shaking**: Modular architecture for better bundle optimization

### Memory Management
- **Proper Cleanup**: Components handle cleanup properly
- **Event Handling**: Efficient event handling and cleanup
- **Resource Management**: Proper resource allocation and deallocation

## Accessibility

### Screen Reader Support
- **ARIA Labels**: Proper ARIA labels for chart elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling
- **Semantic HTML**: Meaningful HTML structure

### Visual Accessibility
- **Color Contrast**: WCAG compliant color combinations
- **High Contrast Mode**: Support for high contrast themes
- **Reduced Motion**: Respects user's motion preferences
- **Font Scaling**: Supports font size scaling

## Future Enhancements

### Planned Features
- **More Chart Types**: Line charts, scatter plots, radar charts
- **Advanced Interactions**: Zoom, pan, brush selection
- **Real-time Updates**: WebSocket integration for live data
- **Export Options**: PNG, SVG, PDF export
- **Custom Themes**: Multiple theme options
- **Data Filtering**: Interactive data filtering

### Technical Improvements
- **Virtual Scrolling**: For large datasets
- **WebGL Rendering**: For performance with large datasets
- **Server-side Rendering**: For SEO and performance
- **Caching**: Implement chart data caching
- **Analytics**: Track chart interactions and usage

## Integration

### With Dashboard
- Integrates seamlessly with existing dashboard layout
- Follows dashboard design patterns and conventions
- Compatible with dashboard state management

### With Data Sources
- Ready for API integration
- Supports real-time data updates
- Handles loading and error states
- Compatible with various data formats

## Testing

### Component Testing
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Visual Regression Testing**: UI consistency testing
- **Accessibility Testing**: Screen reader and keyboard navigation

### Data Testing
- **Format Validation**: Test data format handling
- **Transformation Testing**: Test data transformation functions
- **Error Scenarios**: Test error handling and edge cases
- **Performance Testing**: Test with large datasets

## Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Polyfills
- **SVG Support**: Full SVG support required
- **CSS Grid**: CSS Grid support required
- **Flexbox**: Flexbox support required
- **ES6+**: Modern JavaScript features required 