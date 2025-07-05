# Safety Reports Components

A comprehensive set of modular components for displaying and managing safety reports, incidents, metrics, and alerts in a real estate management dashboard.

## Overview

The Safety Reports module provides a complete solution for tracking and managing workplace safety data, including:

- **Safety Metrics**: Key performance indicators and safety scores
- **Incident Management**: Detailed incident tracking and reporting
- **Safety Alerts**: Real-time notifications and warnings
- **Analytics**: Trends and statistical analysis
- **Compliance**: Regulatory compliance tracking

## Components

### Core Components

#### `SafetyContent`
Main orchestrator component that manages the overall safety reports interface.

**Features:**
- Tabbed interface (Overview, Incidents, Alerts)
- Responsive layout
- Event handling for user interactions
- Configurable display options

**Props:**
```typescript
interface SafetyReportsProps {
  className?: string;
  showMetrics?: boolean;
  showIncidents?: boolean;
  showTrends?: boolean;
  maxIncidents?: number;
  onIncidentClick?: (incident: SafetyIncident) => void;
  onMetricClick?: (metric: SafetyMetric) => void;
}
```

#### `SafetyHeader`
Header component with safety statistics and status indicators.

**Features:**
- Safety score display
- Incident count badge
- Live status indicators
- Responsive design

#### `SafetyMetricsGrid`
Grid layout for displaying safety metrics and KPIs.

**Features:**
- Multiple layout options (grid, list, compact)
- Interactive metric cards
- Trend indicators
- Progress visualization

#### `IncidentList`
Comprehensive incident management interface.

**Features:**
- Search and filtering
- Sorting by multiple criteria
- Pagination support
- Detailed incident cards
- Status tracking

#### `IncidentCard`
Individual incident display component.

**Features:**
- Severity and status indicators
- Cost and time tracking
- Location and department info
- Attachment support
- Interactive elements

#### `SafetyAlerts`
Real-time safety alert management.

**Features:**
- Priority-based alert display
- Acknowledgment tracking
- Action requirement indicators
- Alert categorization

### Utility Components

#### `IncidentSeverity`
Visual severity indicator with color coding.

#### `IncidentStatus`
Status display with icons and color coding.

## Types

### Core Types

```typescript
interface SafetyMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  color: 'green' | 'orange' | 'red' | 'blue' | 'yellow';
  icon: any;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  description?: string;
}

interface SafetyIncident {
  id: string;
  type: string;
  worker: string;
  date: string;
  status: 'Resolved' | 'Under Review' | 'Pending' | 'Escalated' | 'Closed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description?: string;
  location?: string;
  department?: string;
  supervisor?: string;
  actionTaken?: string;
  followUpRequired?: boolean;
  cost?: number;
  timeLost?: number;
  witnesses?: string[];
  attachments?: string[];
}

interface SafetyAlert {
  id: string;
  type: 'warning' | 'critical' | 'info' | 'success';
  title: string;
  message: string;
  date: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  acknowledged?: boolean;
  actionRequired?: boolean;
}
```

## Utilities

### Color and Styling
- `getSeverityColor()`: Severity-based color schemes
- `getStatusColor()`: Status-based color schemes
- `getMetricColor()`: Metric color utilities
- `getAlertColor()`: Alert color schemes

### Formatting
- `formatDate()`: Date formatting with relative time
- `formatCurrency()`: Currency formatting (GHS)
- `formatTime()`: Time duration formatting

### Data Processing
- `calculateSafetyStats()`: Statistical calculations
- `filterIncidents()`: Advanced filtering
- `sortIncidents()`: Multi-criteria sorting
- `getIncidentPriority()`: Priority determination

## Usage Examples

### Basic Implementation

```tsx
import { SafetyContent } from './safety-reports';

function Dashboard() {
  const handleIncidentClick = (incident) => {
    console.log('Incident clicked:', incident);
    // Navigate to detail view or open modal
  };

  const handleMetricClick = (metric) => {
    console.log('Metric clicked:', metric);
    // Show detailed analytics
  };

  return (
    <SafetyContent
      showMetrics={true}
      showIncidents={true}
      maxIncidents={10}
      onIncidentClick={handleIncidentClick}
      onMetricClick={handleMetricClick}
    />
  );
}
```

### Custom Incident List

```tsx
import { IncidentList, mockIncidents } from './safety-reports';

function CustomIncidentView() {
  return (
    <IncidentList
      incidents={mockIncidents}
      showFilters={true}
      maxHeight="40rem"
      onIncidentClick={(incident) => {
        // Custom incident handling
      }}
    />
  );
}
```

### Standalone Metrics

```tsx
import { SafetyMetricsGrid, mockSafetyMetrics } from './safety-reports';

function MetricsDashboard() {
  return (
    <SafetyMetricsGrid
      metrics={mockSafetyMetrics}
      layout="grid"
      onMetricClick={(metric) => {
        // Handle metric interaction
      }}
    />
  );
}
```

## Styling

### Design System
- **Colors**: Consistent color scheme for severity, status, and metrics
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
- **Virtual Scrolling**: For large incident lists
- **Debounced Search**: Optimized filtering
- **Efficient Rendering**: Minimal re-renders

### Bundle Size
- Tree-shakable imports
- Modular component structure
- Optimized dependencies
- Code splitting support

## Domain-Specific Features

### Real Estate Safety Management
- **Site-specific tracking**: Location-based incident management
- **Department coordination**: Cross-department safety oversight
- **Regulatory compliance**: Industry-specific safety standards
- **Cost tracking**: Incident-related financial impact
- **Time management**: Lost time and productivity tracking

### Construction Safety
- **Equipment safety**: Machinery and tool incident tracking
- **Worker safety**: Personal protective equipment monitoring
- **Site hazards**: Environmental and structural safety
- **Training records**: Safety certification tracking
- **Inspection schedules**: Regular safety audit management

## Integration

### Event Handling
```typescript
// Incident events
onIncidentClick: (incident: SafetyIncident) => void
onIncidentUpdate: (incident: SafetyIncident) => void
onIncidentDelete: (incidentId: string) => void

// Metric events
onMetricClick: (metric: SafetyMetric) => void
onMetricUpdate: (metric: SafetyMetric) => void

// Alert events
onAlertAcknowledge: (alertId: string) => void
onAlertDismiss: (alertId: string) => void
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
- Safety metrics
- Incident records
- Alert notifications
- Trend data

## Future Enhancements

### Planned Features
- **Real-time notifications**: WebSocket integration
- **Advanced analytics**: Machine learning insights
- **Mobile app**: Native mobile support
- **Offline mode**: PWA capabilities
- **Multi-language**: Internationalization support
- **Custom dashboards**: User-configurable layouts
- **Integration APIs**: Third-party system connections
- **Reporting tools**: Advanced reporting capabilities

### Roadmap
- Q1: Real-time updates and notifications
- Q2: Advanced analytics and ML insights
- Q3: Mobile app development
- Q4: Enterprise features and integrations 