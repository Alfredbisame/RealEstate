# Budget Tracker Tab Components

This directory contains the modular components for the Budget Tracker Tab, designed for property owners and other roles to plan, track, and optimize budgets.

## Components Overview

### Core Components

#### `BudgetTrackerHeader.tsx`
- **Purpose**: Displays the main header with title, description, and action buttons
- **Features**:
  - Gradient background
  - Responsive design
  - Action buttons (Add Item, Export, Tools)

#### `BudgetTrackerStats.tsx`
- **Purpose**: Shows summary statistics (total budget, spent, remaining, utilization)
- **Features**:
  - Color-coded stat cards
  - Modern icons
  - Hover effects and transitions

#### `BudgetTrackerContent.tsx`
- **Purpose**: Manages navigation and view content for the budget tracker tab
- **Features**:
  - Tab navigation (Table, Analytics, Tools)
  - Conditional rendering of views

#### `BudgetTableView.tsx`
- **Purpose**: Detailed, editable, filterable table of budget items
- **Features**:
  - Inline editing, status badges, controls
  - Modern table design

#### `BudgetAnalyticsView.tsx`
- **Purpose**: Advanced analytics (charts, trends, breakdowns)
- **Features**:
  - Bar and pie charts
  - Dashboard layout

#### `BudgetToolsPanel.tsx`
- **Purpose**: Budgeting tools (add item, adjust, export, etc.)
- **Features**:
  - Action buttons
  - Placeholder for future features

### Usage

```tsx
import { BudgetTrackerTab } from './budget-tracker';

<BudgetTrackerTab user={user} />
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