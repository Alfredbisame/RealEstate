'use client';

import { StatsCardChangeProps } from './types';
import { getChangeColorClasses, getSizeClasses, getTrendIcon, getTrendDirection } from './utils';

export default function StatsCardChange({ 
  change, 
  changeType, 
  className = "",
  size = 'md',
  showTrend = true,
  trend 
}: StatsCardChangeProps) {
  const colors = getChangeColorClasses(changeType);
  const sizes = getSizeClasses(size);
  const trendDirection = trend || getTrendDirection(change);

  return (
    <div className={`
      inline-flex items-center space-x-1 px-2 py-1 rounded-lg
      ${colors.bg} ${colors.border} border
      transition-all duration-200 hover:scale-105
      ${className}
    `}>
      {showTrend && getTrendIcon(trendDirection)}
      <span className={`${sizes.change} font-medium ${colors.text}`}>
        {change}
      </span>
    </div>
  );
} 