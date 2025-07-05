'use client';

import { PropertyValueProps } from './types';
import { getTrendIcon, getTrendDirection, formatCurrency, formatYield } from './utils';

export default function PropertyValue({ 
  value, 
  yield: yieldValue, 
  className = "",
  showTrend = true,
  trendDirection 
}: PropertyValueProps) {
  const direction = trendDirection || getTrendDirection(yieldValue);
  const formattedValue = formatCurrency(value);
  const formattedYield = formatYield(yieldValue);

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex flex-col">
        <span className="font-bold text-lg text-gray-900 dark:text-white">
          {formattedValue}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Market Value
        </span>
      </div>
      
      {showTrend && (
        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-1">
            {getTrendIcon(direction)}
            <span className={`
              text-sm font-semibold
              ${direction === 'up' ? 'text-green-600 dark:text-green-400' : ''}
              ${direction === 'down' ? 'text-red-600 dark:text-red-400' : ''}
              ${direction === 'stable' ? 'text-gray-600 dark:text-gray-400' : ''}
            `}>
              {formattedYield}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Annual Yield
          </span>
        </div>
      )}
      
      {/* Value change indicator */}
      <div className={`
        absolute top-2 right-2 w-2 h-2 rounded-full
        ${direction === 'up' ? 'bg-green-500' : ''}
        ${direction === 'down' ? 'bg-red-500' : ''}
        ${direction === 'stable' ? 'bg-gray-500' : ''}
        animate-pulse
      `} />
    </div>
  );
} 