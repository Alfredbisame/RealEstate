# Property Values Tab Components

This directory contains the modular components for the Property Values Tab, designed for the property owner and other roles with property value analysis needs.

## Components Overview

### Core Components

#### `PropertyValuesHeader.tsx`
- **Purpose**: Displays the main header with title, description, and last updated info
- **Features**:
  - Gradient background
  - Responsive design
  - Last updated indicator

#### `PropertyValuesStats.tsx`
- **Purpose**: Shows summary statistics (total value, appreciation, average, count)
- **Features**:
  - Color-coded stat cards
  - Hover effects and transitions

#### `PropertyValuesContent.tsx`
- **Purpose**: Manages navigation and view content for the property values tab
- **Features**:
  - Tab navigation (Value Trend, Properties List)
  - Conditional rendering of views

#### `PropertyValuesChartView.tsx`
- **Purpose**: Main property values chart (area chart)
- **Features**:
  - Value trend over time
  - Uses ChartWidget for visualization

#### `PropertyValuesListView.tsx`
- **Purpose**: Detailed list/table of property values
- **Features**:
  - Table of properties with value, appreciation, and status

### Usage

```tsx
import { PropertyValuesTab } from './property-values';

<PropertyValuesTab user={user} />
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