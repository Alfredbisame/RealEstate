# Project Manager Dashboard Components

This directory contains the modular components for the Project Manager Dashboard, providing comprehensive construction project and resource management capabilities.

## Components

### ProjectManagerHeader
- **Purpose**: Displays the main dashboard header with title, description, and project information
- **Features**: 
  - Gradient background with active projects and workers count
  - Responsive design with backdrop blur effects
  - Configurable project count and worker information

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common project management tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for New Project, Budget Planner, Photo Documentation, and Site Management
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key project statistics in a grid layout
- **Features**:
  - Active Projects, Completed This Month, Budget Utilization, Overdue Tasks
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### BudgetChart
- **Purpose**: Visualizes budget allocation across different categories
- **Features**:
  - Doughnut chart showing budget distribution
  - Materials, Labor, Equipment, Permits, Contingency categories
  - Color-coded segments for easy identification

### DashboardContent
- **Purpose**: Central widget renderer that maps widget types to components
- **Features**:
  - Switch statement for different widget types
  - Clean separation of concerns
  - Easy to extend with new widget types

### NavigationTabs
- **Purpose**: Handles navigation between different dashboard views
- **Features**:
  - Tab-based navigation with active state indicators
  - Color-coded tabs for different sections
  - Smooth transitions and hover effects

### ViewContent
- **Purpose**: Manages the content rendering for different dashboard views
- **Features**:
  - Conditional rendering based on active view
  - Integration with mobile components (Camera, GPS)
  - Clean separation of dashboard and mobile features

## Usage

```tsx
import { 
  ProjectManagerHeader, 
  QuickActions, 
  DashboardContent,
  NavigationTabs,
  ViewContent
} from './project-manager';

// In your main dashboard component
<ProjectManagerHeader />
<QuickActions 
  onNewProject={handleNewProject}
  onBudgetPlanner={handleBudgetPlanner}
  onPhotoDocumentation={handlePhotoDocumentation}
  onSiteManagement={handleSiteManagement}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with project metrics
- `timeline`: Project timeline widget
- `materials`: Material tracker widget
- `budget-chart`: Budget allocation chart

## View Types

The dashboard supports the following view types:
- `dashboard`: Main dashboard with widgets and quick actions
- `documentation`: Photo documentation using mobile camera integration
- `location`: Site management using GPS features

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

## Project Management Features

- Project timeline tracking
- Budget allocation and monitoring
- Material inventory management
- Photo documentation
- Site location tracking
- Worker management
- Task scheduling and monitoring 