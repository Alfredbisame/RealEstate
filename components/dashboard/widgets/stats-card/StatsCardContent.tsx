'use client';

import { StatsCardContentProps } from './types';
import { getSizeClasses } from './utils';

export default function StatsCardContent({ 
  title, 
  value, 
  description,
  target,
  period,
  className = "",
  size = 'md',
  variant = 'default'
}: StatsCardContentProps) {
  const sizes = getSizeClasses(size);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="space-y-1">
        <p className={`${sizes.value} font-bold text-gray-900 dark:text-white`}>
          {value}
        </p>
        <p className={`${sizes.title} text-gray-500 dark:text-gray-400 font-medium`}>
          {title}
        </p>
      </div>
      
      {(description || target || period) && variant === 'detailed' && (
        <div className="space-y-1 pt-2 border-t border-gray-100 dark:border-gray-700">
          {description && (
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
          
          <div className="flex items-center justify-between text-xs">
            {target && (
              <span className="text-gray-500 dark:text-gray-400">
                Target: {target}
              </span>
            )}
            {period && (
              <span className="text-gray-500 dark:text-gray-400">
                {period}
              </span>
            )}
          </div>
        </div>
      )}
      
      {variant === 'minimal' && period && (
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {period}
        </p>
      )}
    </div>
  );
} 