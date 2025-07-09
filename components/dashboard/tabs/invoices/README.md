# Invoices Tab Components (Super Admin)

This directory contains the modular components for the Invoices Tab, designed for the super admin to manage, analyze, and control all invoices across the platform.

## Components Overview

### Core Components

#### `InvoicesHeader.tsx`
- **Purpose**: Displays the main header with title, description, and action buttons
- **Features**:
  - Gradient background
  - Responsive design
  - Action buttons (New Invoice, Export, Filter)

#### `InvoicesStats.tsx`
- **Purpose**: Shows summary statistics (total invoices, paid, overdue, revenue)
- **Features**:
  - Color-coded stat cards
  - Modern icons
  - Hover effects and transitions

#### `InvoicesContent.tsx`
- **Purpose**: Manages navigation and view content for the invoices tab
- **Features**:
  - Tab navigation (Table, Analytics, Actions)
  - Conditional rendering of views

#### `InvoiceTableView.tsx`
- **Purpose**: Detailed, filterable, sortable, paginated table of invoices
- **Features**:
  - Search, status badges, pagination
  - Modern table design

#### `InvoiceAnalyticsView.tsx`
- **Purpose**: Advanced analytics (charts, trends, breakdowns)
- **Features**:
  - Bar and pie charts
  - Dashboard layout

#### `InvoiceActionsPanel.tsx`
- **Purpose**: Bulk actions, export, and advanced controls
- **Features**:
  - Action buttons (Export, Mark as Paid, Delete)
  - Placeholder for future features

### Usage

```tsx
import { InvoicesTab } from './invoices';

<InvoicesTab user={user} />
```

## Styling
- Tailwind CSS
- Dark mode support
- Responsive layouts
- Consistent with other dashboard tabs

## Accessibility
- Keyboard navigation
- ARIA labels
- High contrast support 