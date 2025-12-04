# Stats Card Components

A comprehensive set of modular components for displaying key performance indicators, metrics, and statistics in a real estate management dashboard.

## Overview

The Stats Card module provides a complete solution for displaying and managing business metrics, including:

- **Key Performance Indicators**: Revenue, properties, clients, and more
- **Trend Analysis**: Change indicators and trend visualization
- **Interactive Cards**: Clickable cards with detailed information
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Accessibility**: WCAG compliant with keyboard navigation

## Components

### Core Components

#### `StatsCard`

Main card component for displaying individual metrics.

**Features:**

- Multiple size variants (sm, md, lg, xl)
- Multiple visual variants (default, minimal, detailed, compact)
- Interactive with click handlers
- Loading states with skeletons
- Animated value transitions
- Trend indicators

**Props:**

```typescript
interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: StatsCardIconType;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink' | 'yellow' | 'indigo' | 'teal' | 'cyan';
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  period?: string;
  className?: string;
  onClick?: (data: StatsCardData) => void;
  loading?: boolean;
  animated?: boolean;
  showTrend?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'minimal' | 'detailed' | 'compact';
}
```

#### `StatsContent`

Main orchestrator component for the complete stats interface.
**Features:**

- Search and filtering capabilities
- Category-based organization
- Sorting options
- Responsive grid layout
- Event handling

#### `StatsCardGrid`

Grid layout for displaying multiple stats cards.

**Features:**

- Configurable columns (1-6)
- Responsive design
- Gap customization
- Event propagation

#### `StatsCardHeader`

Header section of stats cards with icon and change indicator.

#### `StatsCardContent`

Content section with value, title, and optional details.

#### `StatsCardIcon`

Icon component with color coding and animations.

#### `StatsCardChange`

Change indicator with trend icons and color coding.

### Utility Components

#### `StatsCardSkeleton`

Loading skeleton for stats cards.

#### `StatsCardTrend`

Trend visualization component.

#### `StatsCardProgress`

Progress bar for target-based metrics.

#### `StatsCardComparison`

Comparison component for period-over-period analysis.

## Types

### Core Types

```typescript
interface StatsCardMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: StatsCardIconType;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink' | 'yellow' | 'indigo' | 'teal' | 'cyan';
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  period?: string;
  category?: string;
  priority?: 'low' | 'medium' | 'high';
  lastUpdated?: string;
}

interface StatsCardCategory {
  id: string;
  name: string;
  description?: string;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'pink' | 'yellow' | 'indigo' | 'teal' | 'cyan';
  icon: StatsCardIconType;
  metrics: StatsCardMetric[];
}
```

### Type Definitions

```typescript
// Flexible icon type that works with both lucide-react and react-icons
type StatsCardIconType = React.ComponentType<{ 
  size?: number | string; 
  className?: string;
}>;

type StatsCardData = Pick<StatsCardProps, 'title' | 'value' | 'change' | 'changeType' | 'color' | 'trend' | 'period'>;
```

## Usage Examples

### Basic Usage

```tsx
import { StatsCard } from './stats-card';
import { TrendingUp } from 'lucide-react';

function BasicMetrics() {
  return (
    <StatsCard
      title="Monthly Revenue"
      value="$42,567"
      change="+12.5%"
      changeType="positive"
      icon={TrendingUp}
      color="green"
    />
  );
}
```

### With Mixed Icon Libraries

```tsx
import { StatsCard } from './stats-card';
import { TrendingUp } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

function MixedIcons() {
  return (
    <>
      <StatsCard
        title="Total Revenue"
        value="₵2.4M"
        change="+12.5%"
        changeType="positive"
        icon={FaCediSign}
        color="green"
      />
      <StatsCard
        title="Growth Rate"
        value="15.2%"
        change="+2.3%"
        changeType="positive"
        icon={TrendingUp}
        color="blue"
      />
    </>
  );
}
```

### Grid Layout

```tsx
import { StatsCardGrid } from './stats-card';
import { 
  TrendingUp, 
  Home, 
  Users, 
  CreditCard 
} from 'lucide-react';

const metrics = [
  {
    title: "Monthly Revenue",
    value: "$42,567",
    change: "+12.5%",
    changeType: "positive",
    icon: TrendingUp,
    color: "green"
  },
  {
    title: "Active Properties",
    value: "142",
    change: "+8",
    changeType: "positive",
    icon: Home,
    color: "blue"
  },
  {
    title: "New Clients",
    value: "24",
    change: "+3",
    changeType: "positive",
    icon: Users,
    color: "purple"
  },
  {
    title: "Pending Payments",
    value: "12",
    change: "-2",
    changeType: "negative",
    icon: CreditCard,
    color: "orange"
  }
];

function MetricsGrid() {
  return (
    <StatsCardGrid 
      cards={metrics}
      columns={4}
      gap="md"
    />
  );
}
```

### Detailed View

```tsx
import { StatsCard } from './stats-card';

function DetailedMetrics() {
  return (
    <StatsCard
      title="Occupancy Rate"
      value="94.2%"
      change="+2.1%"
      changeType="positive"
      icon={Home}
      color="orange"
      description="Average property occupancy rate"
      trend="up"
      target="95%"
      period="This month"
      size="lg"
      variant="detailed"
    />
  );
}
```

### Custom Styling

```tsx
import { StatsCard } from './stats-card';

function CustomMetrics() {
  return (
    <StatsCard
      title="Custom Metric"
      value="1,234"
      change="+5.6%"
      changeType="positive"
      icon={TrendingUp}
      color="purple"
      size="lg"
      variant="detailed"
      description="Custom description"
      target="1,500"
      period="This month"
    />
  );
}
