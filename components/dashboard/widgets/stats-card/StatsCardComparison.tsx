'use client';

import { StatsCardComparisonProps } from './types';
import { getColorClasses, calculatePercentage, formatPercentage } from './utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function StatsCardComparison({ 
  current, 
  previous, 
  period, 
  className = "",
  color = 'blue',
  showPercentage = true 
}: StatsCardComparisonProps) {
  const colors = getColorClasses(color);
  const currentValue = parseFloat(current.replace(/[^\d.-]/g, ''));
  const previousValue = parseFloat(previous.replace(/[^\d.-]/g, ''));
  const percentage = calculatePercentage(currentValue, previousValue);
  const isPositive = percentage >= 0;
  const isNeutral = percentage === 0;

  const getTrendIcon = () => {
    if (isNeutral) return <Minus className="w-3 h-3 text-gray-600 dark:text-gray-400" />;
    return isPositive ? 
      <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" /> :
      <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />;
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          vs {period}
        </span>
        {showPercentage && (
          <div className="flex items-center space-x-1">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${
              isPositive ? 'text-green-600 dark:text-green-400' :
              isNeutral ? 'text-gray-600 dark:text-gray-400' :
              'text-red-600 dark:text-red-400'
            }`}>
              {formatPercentage(percentage)}
            </span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Current</p>
          <p className="font-medium text-gray-900 dark:text-white">{current}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Previous</p>
          <p className="font-medium text-gray-900 dark:text-white">{previous}</p>
        </div>
      </div>
    </div>
  );
} 