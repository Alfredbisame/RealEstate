# Site Supervisor Dashboard Components

This directory contains the modular components for the Site Supervisor Dashboard, providing comprehensive field operations and worker management capabilities.

## Components

### SiteSupervisorHeader
- **Purpose**: Displays the main dashboard header with title, description, and worker information
- **Features**: 
  - Gradient background with worker count and safety priority
  - Responsive design with backdrop blur effects
  - Configurable worker count and safety indicators

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common site supervision tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for Clock In/Out, Safety Report, GPS Tracking, and Voice Reports
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key site supervision statistics in a grid layout
- **Features**:
  - Workers Present, Safety Score, Tasks Completed, Incidents Today
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### DailyActivityLog
- **Purpose**: Shows daily activity log with different activity types
- **Features**:
  - Activity cards with color-coded categories
  - Completed, In Progress, and Scheduled activity types
  - Hover effects and smooth transitions

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
  - Integration with mobile components (GPS, Voice Notes)
  - Clean separation of dashboard and mobile features

## Usage

```tsx
import { 
  SiteSupervisorHeader, 
  QuickActions, 
  DashboardContent,
  NavigationTabs,
  ViewContent
} from './site-supervisor';

// In your main dashboard component
<SiteSupervisorHeader />
<QuickActions 
  onClockInOut={handleClockInOut}
  onSafetyReport={handleSafetyReport}
  onGPSTracking={handleGPSTracking}
  onVoiceReports={handleVoiceReports}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with site supervision metrics
- `attendance`: Worker attendance widget
- `safety`: Safety reports widget
- `daily-log`: Daily activity log widget

## View Types

The dashboard supports the following view types:
- `dashboard`: Main dashboard with widgets and quick actions
- `location`: GPS tracking using mobile GPS features
- `voice-notes`: Voice reports using mobile voice notes

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

## Site Supervision Features

- Worker attendance tracking
- Safety incident reporting
- GPS location monitoring
- Voice note documentation
- Daily activity logging
- Task completion tracking
- Safety score monitoring
- Field operations management 