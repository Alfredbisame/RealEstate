import { LucideIcon } from 'lucide-react';

// Define a more flexible icon type that works with both lucide-react and react-icons
export type StatsCardIconType = React.ComponentType<{ 
  size?: number | string; 
  className?: string;
}>;

export interface StatsCardProps {
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

export interface StatsCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: StatsCardProps['color'];
  trend?: 'up' | 'down' | 'stable';
  period?: string;
}

export interface StatsCardHeaderProps {
  icon: StatsCardIconType;
  color: StatsCardProps['color'];
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  className?: string;
  size?: StatsCardProps['size'];
  showTrend?: boolean;
  trend?: 'up' | 'down' | 'stable';
}

export interface StatsCardContentProps {
  title: string;
  value: string;
  description?: string;
  target?: string;
  period?: string;
  className?: string;
  size?: StatsCardProps['size'];
  variant?: StatsCardProps['variant'];
}

export interface StatsCardIconProps {
  icon: StatsCardIconType;
  color: StatsCardProps['color'];
  className?: string;
  size?: StatsCardProps['size'];
  animated?: boolean;
}

export interface StatsCardChangeProps {
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  className?: string;
  size?: StatsCardProps['size'];
  showTrend?: boolean;
  trend?: 'up' | 'down' | 'stable';
}

export interface StatsCardGridProps {
  cards: StatsCardProps[];
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
  onCardClick?: (data: StatsCardData) => void;
}

export interface StatsCardSkeletonProps {
  className?: string;
  size?: StatsCardProps['size'];
  variant?: StatsCardProps['variant'];
}

export interface StatsCardTrendProps {
  trend: 'up' | 'down' | 'stable';
  className?: string;
  size?: StatsCardProps['size'];
  animated?: boolean;
}

export interface StatsCardProgressProps {
  current: number;
  target: number;
  className?: string;
  color?: StatsCardProps['color'];
  showPercentage?: boolean;
  size?: StatsCardProps['size'];
}

export interface StatsCardComparisonProps {
  current: string;
  previous: string;
  period: string;
  className?: string;
  color?: StatsCardProps['color'];
  showPercentage?: boolean;
}

export interface StatsCardMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: StatsCardIconType;
  color: StatsCardProps['color'];
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  target?: string;
  period?: string;
  category?: string;
  priority?: 'low' | 'medium' | 'high';
  lastUpdated?: string;
}

export interface StatsCardCategory {
  id: string;
  name: string;
  description?: string;
  color: StatsCardProps['color'];
  icon: StatsCardIconType;
  metrics: StatsCardMetric[];
}

export interface StatsCardFilter {
  category?: string;
  period?: string;
  priority?: 'low' | 'medium' | 'high';
  trend?: 'up' | 'down' | 'stable';
  color?: StatsCardProps['color'];
}

export interface StatsCardLayout {
  type: 'grid' | 'list' | 'carousel' | 'tabs';
  columns?: number;
  gap?: string;
  responsive?: boolean;
  showFilters?: boolean;
  showSearch?: boolean;
  showCategories?: boolean;
}

export interface StatsCardConfig {
  layout: StatsCardLayout;
  filters: StatsCardFilter;
  animations: {
    enabled: boolean;
    duration: number;
    easing: string;
  };
  interactions: {
    hover: boolean;
    click: boolean;
    focus: boolean;
  };
  accessibility: {
    screenReader: boolean;
    keyboardNavigation: boolean;
    highContrast: boolean;
  };
}