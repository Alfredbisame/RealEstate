'use client';

import { PayrollCardProps } from './types';
import { getColorClasses } from './utils';

export default function PayrollCard({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  subtitle,
  className = "" 
}: PayrollCardProps) {
  const colors = getColorClasses(color);

  return (
    <div className={`${colors.bg} rounded-lg p-3 hover:shadow-md transition-all duration-200 ${className}`}>
      <div className="flex items-center space-x-2 mb-1">
        <Icon className={`w-4 h-4 ${colors.text}`} />
        <span className={`text-sm ${colors.label}`}>{title}</span>
      </div>
      <p className={`text-lg font-bold ${colors.text}`}>
        {typeof value === 'number' ? `GHS ${value.toLocaleString()}` : value}
      </p>
      {subtitle && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
} 