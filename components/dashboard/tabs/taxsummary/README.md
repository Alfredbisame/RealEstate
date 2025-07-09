# Tax Summary Tab Components

This directory contains the modular components for the Tax Summary Tab, designed for the property owner and other roles with tax analysis needs.

## Components Overview

### Core Components

#### `TaxSummaryHeader.tsx`
- **Purpose**: Displays the main header with title, description, and last updated info
- **Features**:
  - Gradient background
  - Responsive design
  - Last updated indicator

#### `TaxSummaryStats.tsx`
- **Purpose**: Shows summary statistics (total tax, paid, due, compliance)
- **Features**:
  - Color-coded stat cards
  - Hover effects and transitions

#### `TaxSummaryContent.tsx`
- **Purpose**: Manages navigation and view content for the tax summary tab
- **Features**:
  - Tab navigation (Tax Breakdown, Compliance)
  - Conditional rendering of views

#### `TaxBreakdownView.tsx`
- **Purpose**: Main tax breakdown chart and table
- **Features**:
  - Bar chart of taxes by quarter
  - Table of tax items

#### `TaxComplianceView.tsx`
- **Purpose**: Compliance and filing status
- **Features**:
  - Compliance status
  - Next filing date
  - Placeholder for future analytics

### Usage

```tsx
import { TaxSummaryTab } from './taxsummary';

<TaxSummaryTab user={user} />
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