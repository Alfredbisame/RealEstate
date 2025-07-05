'use client';

import { ProgressBarProps } from './types';
import { calculateStockPercentage, getProgressBarColor, getProgressBarBackground } from './utils';

export default function ProgressBar({ 
  current, 
  required, 
  className = "" 
}: ProgressBarProps) {
  const percentage = calculateStockPercentage(current, required);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Stock Level</span>
        <span className="font-medium text-gray-900 dark:text-white">
          {percentage.toFixed(0)}%
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ease-out ${getProgressBarColor(current, required)}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Animated glow effect for low stock */}
        {percentage < 50 && (
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
        )}
      </div>
    </div>
  );
} 