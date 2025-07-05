'use client';

import { AlertCircle, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ResultsCardProps } from './types';
import { getColorClasses } from './utils';

export default function ResultsCard({
  title,
  value,
  color = 'gray',
  icon,
  subtitle,
  className = ""
}: ResultsCardProps) {
  const colors = getColorClasses(color);
  
  const getIcon = () => {
    if (icon) return icon;
    
    if (typeof value === 'number') {
      if (value > 0) return <TrendingUp className="w-4 h-4" />;
      if (value < 0) return <TrendingDown className="w-4 h-4" />;
      return <Minus className="w-4 h-4" />;
    }
    
    return null;
  };

  const shouldShowAlert = color === 'red' && typeof value === 'number' && value < 0;

  return (
    <div className={`
      bg-white dark:bg-gray-800 rounded-lg p-4 text-center
      border border-gray-200 dark:border-gray-700
      hover:shadow-md transition-all duration-200
      ${className}
    `}>
      <div className="flex items-center justify-center space-x-2 mb-2">
        {getIcon()}
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        {shouldShowAlert && <AlertCircle className="w-4 h-4 text-red-500" />}
      </div>
      
      <p className={`
        text-xl font-bold mb-1
        ${color === 'gray' ? 'text-gray-900 dark:text-white' : colors.text}
      `}>
        {typeof value === 'number' && value < 0 ? '-' : ''}
        {typeof value === 'number' ? `GHS ${Math.abs(value).toLocaleString()}` : value}
      </p>
      
      {subtitle && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      
      {color !== 'gray' && (
        <div className={`
          mt-2 h-1 rounded-full bg-gray-200 dark:bg-gray-700
          ${color === 'green' ? 'bg-green-200 dark:bg-green-800' : ''}
          ${color === 'orange' ? 'bg-orange-200 dark:bg-orange-800' : ''}
          ${color === 'red' ? 'bg-red-200 dark:bg-red-800' : ''}
        `}>
          <div className={`
            h-full rounded-full transition-all duration-300
            ${color === 'green' ? 'bg-green-500' : ''}
            ${color === 'orange' ? 'bg-orange-500' : ''}
            ${color === 'red' ? 'bg-red-500' : ''}
          `} style={{ width: `${Math.min(Math.abs(Number(value) || 0) / 1000, 100)}%` }}></div>
        </div>
      )}
    </div>
  );
} 