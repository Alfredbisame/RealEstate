# Auditor Dashboard Components

This directory contains the modular components for the Auditor Dashboard, providing read-only access to system data and compliance monitoring capabilities.

## Components

### AuditorHeader
- **Purpose**: Displays the main dashboard header with title, description, and access information
- **Features**: 
  - Gradient background with access type and compliance status
  - Responsive design with backdrop blur effects
  - Configurable access type and compliance status

### QuickActionCard
- **Purpose**: Individual quick action button with icon and description
- **Features**:
  - Hover animations and scale effects
  - Color-coded icons for different action types
  - Accessible button design with proper focus states

### QuickActions
- **Purpose**: Grid layout of quick action cards for common auditor tasks
- **Features**:
  - Responsive grid layout (1 column on mobile, 4 on desktop)
  - Handlers for View Reports, Search Records, Compliance Check, and Analytics
  - Consistent styling and spacing

### StatsGrid
- **Purpose**: Displays key audit statistics in a grid layout
- **Features**:
  - Compliance Score, Reports Generated, Issues Identified, Audit Progress
  - Uses StatsCard components with trend indicators
  - 2x2 grid layout for optimal space utilization

### TransactionsList
- **Purpose**: Shows recent transactions with status and amounts
- **Features**:
  - Transaction cards with title, reference, amount, and status
  - Color-coded status indicators (Approved, Verified, Pending Review)
  - Hover effects for better user interaction

### DashboardContent
- **Purpose**: Central widget renderer that maps widget types to components
- **Features**:
  - Switch statement for different widget types
  - Clean separation of concerns
  - Easy to extend with new widget types

## Usage

```tsx
import { 
  AuditorHeader, 
  QuickActions, 
  DashboardContent 
} from './auditor';

// In your main dashboard component
<AuditorHeader />
<QuickActions 
  onViewReports={handleViewReports}
  onSearchRecords={handleSearchRecords}
  onComplianceCheck={handleComplianceCheck}
  onAnalytics={handleAnalytics}
/>
<DashboardContent widgetType="stats" />
```

## Widget Types

The dashboard supports the following widget types:
- `stats`: Statistics grid with audit metrics
- `compliance`: Compliance tracker widget
- `reports`: Audit reports widget
- `transactions`: Recent transactions list

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

## Security Features

- Read-only access indicators
- Compliance status display
- Audit trail visibility
- Secure data handling patterns 