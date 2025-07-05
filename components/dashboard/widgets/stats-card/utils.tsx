import { Minus, TrendingDown, TrendingUp } from 'lucide-react';
import { StatsCardProps, StatsCardMetric, StatsCardFilter } from './types';

export const getColorClasses = (color: StatsCardProps['color']) => {
  const colorClasses = {
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      hover: 'hover:bg-green-50 dark:hover:bg-green-900/50',
      gradient: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40'
    },
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/50',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-800',
      hover: 'hover:bg-orange-50 dark:hover:bg-orange-900/50',
      gradient: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/40'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/50',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/40'
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
      hover: 'hover:bg-red-50 dark:hover:bg-red-900/50',
      gradient: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/40'
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-600 dark:text-pink-400',
      border: 'border-pink-200 dark:border-pink-800',
      hover: 'hover:bg-pink-50 dark:hover:bg-pink-900/50',
      gradient: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/40'
    },
    yellow: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-600 dark:text-yellow-400',
      border: 'border-yellow-200 dark:border-yellow-800',
      hover: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/50',
      gradient: 'from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/40'
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
      hover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/50',
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/40'
    },
    teal: {
      bg: 'bg-teal-100 dark:bg-teal-900/30',
      text: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
      hover: 'hover:bg-teal-50 dark:hover:bg-teal-900/50',
      gradient: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/40'
    },
    cyan: {
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      text: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-200 dark:border-cyan-800',
      hover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/50',
      gradient: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/40'
    }
  };

  return colorClasses[color] || colorClasses.blue;
};

export const getChangeColorClasses = (changeType: 'positive' | 'negative' | 'neutral') => {
  const changeColorClasses = {
    positive: {
      text: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800'
    },
    negative: {
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800'
    },
    neutral: {
      text: 'text-gray-600 dark:text-gray-400',
      bg: 'bg-gray-50 dark:bg-gray-900/20',
      border: 'border-gray-200 dark:border-gray-800'
    }
  };

  return changeColorClasses[changeType];
};

export const getTrendIcon = (trend: 'up' | 'down' | 'stable' = 'stable') => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />;
    case 'down':
      return <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />;
    case 'stable':
      return <Minus className="w-3 h-3 text-gray-600 dark:text-gray-400" />;
    default:
      return <Minus className="w-3 h-3 text-gray-600 dark:text-gray-400" />;
  }
};

export const getTrendDirection = (change: string): 'up' | 'down' | 'stable' => {
  if (change.startsWith('+')) return 'up';
  if (change.startsWith('-')) return 'down';
  return 'stable';
};

export const getSizeClasses = (size: StatsCardProps['size'] = 'md') => {
  const sizeClasses = {
    sm: {
      container: 'p-3',
      icon: 'w-8 h-8',
      iconSize: 16,
      value: 'text-lg',
      title: 'text-xs',
      change: 'text-xs'
    },
    md: {
      container: 'p-4',
      icon: 'w-10 h-10',
      iconSize: 20,
      value: 'text-2xl',
      title: 'text-sm',
      change: 'text-sm'
    },
    lg: {
      container: 'p-6',
      icon: 'w-12 h-12',
      iconSize: 24,
      value: 'text-3xl',
      title: 'text-base',
      change: 'text-sm'
    },
    xl: {
      container: 'p-8',
      icon: 'w-14 h-14',
      iconSize: 28,
      value: 'text-4xl',
      title: 'text-lg',
      change: 'text-base'
    }
  };

  return sizeClasses[size];
};

export const getVariantClasses = (variant: StatsCardProps['variant'] = 'default') => {
  const variantClasses = {
    default: {
      container: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm',
      hover: 'hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600'
    },
    minimal: {
      container: 'bg-transparent border-none shadow-none',
      hover: 'hover:bg-gray-50 dark:hover:bg-gray-900/50'
    },
    detailed: {
      container: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg',
      hover: 'hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600'
    },
    compact: {
      container: 'bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-md',
      hover: 'hover:bg-gray-100 dark:hover:bg-gray-900/70'
    }
  };

  return variantClasses[variant];
};

export const formatValue = (value: string | number): string => {
  if (typeof value === 'number') {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  }
  return value;
};

export const calculatePercentage = (current: number, previous: number): number => {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
};

export const formatPercentage = (percentage: number): string => {
  const sign = percentage >= 0 ? '+' : '';
  return `${sign}${percentage.toFixed(1)}%`;
};

export const getChangeType = (change: string): 'positive' | 'negative' | 'neutral' => {
  if (change.startsWith('+')) return 'positive';
  if (change.startsWith('-')) return 'negative';
  return 'neutral';
};

export const filterMetrics = (metrics: StatsCardMetric[], filters: StatsCardFilter): StatsCardMetric[] => {
  return metrics.filter(metric => {
    if (filters.category && metric.category !== filters.category) return false;
    if (filters.period && metric.period !== filters.period) return false;
    if (filters.priority && metric.priority !== filters.priority) return false;
    if (filters.trend && metric.trend !== filters.trend) return false;
    if (filters.color && metric.color !== filters.color) return false;
    return true;
  });
};

export const sortMetrics = (metrics: StatsCardMetric[], sortBy: 'value' | 'change' | 'title' | 'priority' = 'value'): StatsCardMetric[] => {
  return [...metrics].sort((a, b) => {
    switch (sortBy) {
      case 'value':
        const aValue = parseFloat(a.value.replace(/[^\d.-]/g, ''));
        const bValue = parseFloat(b.value.replace(/[^\d.-]/g, ''));
        return bValue - aValue;
      case 'change':
        const aChange = parseFloat(a.change.replace(/[^\d.-]/g, ''));
        const bChange = parseFloat(b.change.replace(/[^\d.-]/g, ''));
        return bChange - aChange;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return (priorityOrder[b.priority || 'low'] || 1) - (priorityOrder[a.priority || 'low'] || 1);
      default:
        return 0;
    }
  });
};

export const getGridClasses = (columns: number = 4, gap: 'sm' | 'md' | 'lg' = 'md') => {
  const columnClasses: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return `grid ${columnClasses[columns] || columnClasses[4]} ${gapClasses[gap]}`;
};

export const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
  const startTime = performance.now();
  
  const updateValue = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValue = start + (end - start) * progress;
    callback(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateValue);
    }
  };
  
  requestAnimationFrame(updateValue);
};

export const getAccessibilityProps = (title: string, value: string, change: string) => ({
  'aria-label': `${title}: ${value}, ${change}`,
  'role': 'region',
  'aria-live': 'polite' as const
}); 