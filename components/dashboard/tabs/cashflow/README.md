# Cash Flow Tab Components

This directory contains the modular components for the Cash Flow Tab, designed for the property owner and other roles with cash flow analysis needs.

## Components Overview

### Core Components

#### `CashFlowHeader.tsx`
- **Purpose**: Displays the main header with title, description, and last updated info
- **Features**:
  - Gradient background
  - Responsive design
  - Last updated indicator

#### `CashFlowStats.tsx`
- **Purpose**: Shows summary statistics (inflow, outflow, net cash flow)
- **Features**:
  - Color-coded stat cards
  - Hover effects and transitions

#### `CashFlowContent.tsx`
- **Purpose**: Manages navigation and view content for the cash flow tab
- **Features**:
  - Tab navigation (Overview, Details)
  - Conditional rendering of views

#### `CashFlowChartView.tsx`
- **Purpose**: Main cash flow chart (bar chart)
- **Features**:
  - Quarterly cash flow data
  - Uses ChartWidget for visualization

#### `CashFlowDetailsView.tsx`
- **Purpose**: Placeholder for detailed cash flow breakdown
- **Features**:
  - Extensible for future analytics

### Usage

```tsx
import { CashFlowTab } from './cashflow';

<CashFlowTab user={user} />
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