# Resources Tab Components

This directory contains the modular components for the Resources Tab, designed for project managers to plan, allocate, and optimize project resources.

## Components Overview

### Core Components

#### `ResourcesHeader.tsx`
- **Purpose**: Displays the main header with title, description, and action buttons
- **Features**:
  - Gradient background
  - Responsive design
  - Action buttons (Add Resource, Export, Tools)

#### `ResourcesStats.tsx`
- **Purpose**: Shows summary statistics (total resources, allocated, available, critical shortage)
- **Features**:
  - Color-coded stat cards
  - Modern icons
  - Hover effects and transitions

#### `ResourcesContent.tsx`
- **Purpose**: Manages navigation and view content for the resources tab
- **Features**:
  - Tab navigation (Planning, Allocation)
  - Conditional rendering of views

#### `ResourcePlanningView.tsx`
- **Purpose**: Material and labor requirement forecasting
- **Features**:
  - Bar chart for forecast
  - Add requirement form
  - Summary list

#### `ResourceAllocationView.tsx`
- **Purpose**: Visual and tabular resource allocation
- **Features**:
  - Calendar-style grid
  - Detailed allocation table
  - Modern, advanced UI

### Usage

```tsx
import { ResourcesTab } from './resources';

<ResourcesTab user={user} />
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