'use client';

import { StatsCardProgressProps } from './types';
import { getColorClasses, getSizeClasses } from './utils';

export default function StatsCardProgress({ 
  current, 
  target, 
  className = "",
  color = 'blue',
  showPercentage = true,
  size = 'md'
}: StatsCardProgressProps) {
  const colors = getColorClasses(color);
  const sizes = getSizeClasses(size);
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <span className={`${sizes.title} text-gray-600 dark:text-gray-400`}>
          Progress
        </span>
        {showPercentage && (
          <span className={`${sizes.title} font-medium ${colors.text}`}>
            {percentage.toFixed(1)}%
          </span>
        )}
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${colors.bg.replace('bg-', 'bg-').replace('/30', '')}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{current.toLocaleString()}</span>
        <span>{target.toLocaleString()}</span>
      </div>
    </div>
  );
} 