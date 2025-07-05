# Accountant Dashboard Components

This directory contains the refactored accountant dashboard components for the Ghana Real Estate platform. The components have been broken down into smaller, more manageable pieces while maintaining all existing functionality and enhancing the UI/UX.

## Components Overview

### Main Component
- **`AccountantDashboard.tsx`** - The main accountant dashboard that orchestrates all other components

### UI Components
- **`AccountantHeader.tsx`** - Header with gradient background, title, and compliance info
- **`QuickActionCard.tsx`** - Reusable card component for quick actions
- **`QuickActions.tsx`** - Grid of quick action buttons
- **`StatsGrid.tsx`** - Grid of statistics cards
- **`RevenueChart.tsx`** - Revenue vs expenses chart
- **`InvoiceWidget.tsx`** - Invoice generator widget
- **`PaymentWidget.tsx`** - Payment tracker widget
- **`NavigationTabs.tsx`** - Navigation tabs for different views

### Feature Components
- **`DashboardContent.tsx`** - Main dashboard content with widget grid

## Usage

### Basic Usage
```tsx
import AccountantDashboard from '@/components/dashboard/dashboards/AccountantDashboard';

function Dashboard() {
  return <AccountantDashboard />;
}
```

### Individual Components
```tsx
import { 
  AccountantHeader, 
  QuickActions, 
  StatsGrid,
  RevenueChart,
  DashboardContent 
} from '@/components/dashboard/dashboards/accountant';

// Use individual components as needed
```

## Features

### ✅ Maintained Functionality
- Financial statistics overview
- Revenue vs expenses chart
- Invoice generation
- Payment tracking
- Receipt scanning
- GRA compliance indicators
- Responsive design
- Dark mode support

### 🎨 UI/UX Enhancements
- Improved hover effects and transitions
- Better visual feedback on interactions
- Enhanced accessibility
- Consistent spacing and typography
- Smooth animations and micro-interactions
- Glassmorphism effects
- Enhanced compliance indicators

### 🔧 Developer Benefits
- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used independently
- **Maintainability**: Easier to update and debug
- **Type Safety**: Full TypeScript support
- **Consistency**: Standardized props and styling

## Component Props

### AccountantHeader
```tsx
interface AccountantHeaderProps {
  className?: string;
}
```

### QuickActionCard
```tsx
interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  onClick?: () => void;
  className?: string;
}
```

### QuickActions
```tsx
interface QuickActionsProps {
  onReceiptScanner?: () => void;
  className?: string;
}
```

### StatsGrid
```tsx
interface StatsGridProps {
  className?: string;
}
```

### RevenueChart
```tsx
interface RevenueChartProps {
  className?: string;
}
```

### DashboardContent
```tsx
interface DashboardContentProps {
  widgets: Array<{ id: string; type: string; x: number; y: number; w: number; h: number }>;
  onWidgetsChange: (widgets: Array<{ id: string; type: string; x: number; y: number; w: number; h: number }>) => void;
  className?: string;
}
```

### NavigationTabs
```tsx
interface NavigationTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
  className?: string;
}
```

## Data Structure

### Stats Data
```tsx
const statsData = [
  {
    title: 'Monthly Revenue',
    value: 'GHS 180,400',
    change: '+15.2%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'green'
  },
  // ...
];
```

### Revenue Chart Data
```tsx
const revenueChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue (GHS)',
      data: [145000, 152000, 168000, 175000, 182000, 180400],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      tension: 0.4
    },
    // ...
  ]
};
```

### Invoice Data
```tsx
const invoiceData = {
  clientName: '',
  projectName: '',
  materials: [
    { item: 'Cement (50kg bags)', quantity: 100, unitPrice: 45, total: 4500 },
    // ...
  ],
  labor: 15000,
  permits: 2500,
  subtotal: 24150,
  vat: 3622.5,
  total: 27772.5
};
```

### Payment Data
```tsx
const paymentData = [
  {
    id: 'INV-001',
    client: 'East Legon Development',
    amount: 'GHS 45,200',
    dueDate: '2024-02-15',
    status: 'Overdue',
    type: 'Construction'
  },
  // ...
];
```

## Styling

All components use Tailwind CSS with:
- Consistent color scheme (orange/red gradient for header)
- Responsive design patterns
- Dark mode support
- Glassmorphism effects
- Smooth transitions and animations
- Hover effects and micro-interactions
- Enhanced compliance indicators with backdrop blur

## File Structure
```
components/dashboard/dashboards/accountant/
├── index.ts                 # Export all components
├── AccountantHeader.tsx     # Header component
├── QuickActionCard.tsx      # Quick action card component
├── QuickActions.tsx         # Quick actions grid
├── StatsGrid.tsx            # Statistics grid
├── RevenueChart.tsx         # Revenue chart component
├── InvoiceWidget.tsx        # Invoice widget component
├── PaymentWidget.tsx        # Payment widget component
├── DashboardContent.tsx     # Dashboard content component
├── NavigationTabs.tsx       # Navigation tabs component
└── README.md               # This documentation
```

## Integration

The accountant components integrate with:
- **DashboardGrid** - For widget layout management
- **StatsCard** - For displaying statistics
- **ChartWidget** - For rendering charts
- **InvoiceGenerator** - For invoice creation
- **PaymentTracker** - For payment tracking
- **CameraIntegration** - For receipt scanning
- **Lucide React** - For icons
- **Tailwind CSS** - For styling

## Performance

- Components are optimized for performance
- Efficient re-rendering with proper prop handling
- Minimal bundle size impact
- Lazy loading support for widgets

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast support
- Compliance indicators for GRA requirements 