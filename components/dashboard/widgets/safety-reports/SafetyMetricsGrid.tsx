'use client';

import { SafetyMetricsGridProps } from './types';
import SafetyMetricCard from './SafetyMetricCard';

export default function SafetyMetricsGrid({ 
  metrics, 
  className = "",
  layout = 'grid',
  onMetricClick 
}: SafetyMetricsGridProps) {
  const getGridClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';
      case 'list':
        return 'space-y-3';
      case 'compact':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-3';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';
    }
  };

  return (
    <div className={`${getGridClasses()} ${className}`}>
      {metrics.map((metric) => (
        <SafetyMetricCard
          key={metric.id}
          metric={metric}
          onClick={onMetricClick}
          showTrend={layout !== 'compact'}
          className={layout === 'compact' ? 'p-3' : ''}
        />
      ))}
    </div>
  );
} 