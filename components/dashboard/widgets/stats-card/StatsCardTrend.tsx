'use client';

import { StatsCardTrendProps } from './types';
import { getTrendIcon } from './utils';

export default function StatsCardTrend({ 
  trend, 
  className = "",
  size = 'md',
  animated = false 
}: StatsCardTrendProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  return (
    <div className={`
      inline-flex items-center justify-center
      ${animated ? 'animate-pulse' : ''}
      ${className}
    `}>
      <div className={sizeClasses[size]}>
        {getTrendIcon(trend)}
      </div>
    </div>
  );
} 