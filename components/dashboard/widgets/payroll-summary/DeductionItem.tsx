'use client';

import { DeductionItemProps } from './types';
import { formatCurrency, getDeductionIcon } from './utils';

export default function DeductionItem({ 
  label, 
  amount, 
  percentage,
  className = "" 
}: DeductionItemProps) {
  return (
    <div className={`flex justify-between items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-all duration-200 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="text-lg">{getDeductionIcon(label.toLowerCase() as any)}</span>
        <div>
          <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
          {percentage && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {percentage}% of total
            </div>
          )}
        </div>
      </div>
      <span className="font-medium text-gray-900 dark:text-white">
        {formatCurrency(amount)}
      </span>
    </div>
  );
} 