# HR Manager Dashboard Components

This directory contains the modular components for the HR Manager Dashboard, providing comprehensive employee management and payroll oversight capabilities.

## Components

### HRManagerHeader
- **Purpose**: Displays the main dashboard header with title, description, and employee information
- **Features**: 
  - Gradient background with total employees and compliance status
  - Responsive design with backdrop blur effects
  - Configurable employee count and compliance status

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common HR tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for Add Employee, Process Payroll, Leave Management, and Performance Review
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key HR statistics in a grid layout
- **Features**:
  - Total Employees, Present Today, Monthly Payroll, Leave Requests
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### PerformanceOverview
- **Purpose**: Shows employee performance metrics and categories
- **Features**:
  - Performance cards with color-coded categories
  - Top Performers, Average Performance, Need Improvement metrics
  - Hover effects and smooth transitions

### DashboardContent
- **Purpose**: Central widget renderer that maps widget types to components
- **Features**:
  - Switch statement for different widget types
  - Clean separation of concerns
  - Easy to extend with new widget types

## Usage

```tsx
import { 
  HRManagerHeader, 
  QuickActions, 
  DashboardContent 
} from './hr-manager';

// In your main dashboard component
<HRManagerHeader />
<QuickActions 
  onAddEmployee={handleAddEmployee}
  onProcessPayroll={handleProcessPayroll}
  onLeaveManagement={handleLeaveManagement}
  onPerformanceReview={handlePerformanceReview}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with HR metrics
- `attendance`: Employee attendance widget
- `payroll`: Payroll summary widget
- `performance`: Performance overview widget

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

## HR Features

- Employee count tracking
- Attendance monitoring
- Payroll processing
- Leave management
- Performance evaluation
- SSNIT compliance indicators 