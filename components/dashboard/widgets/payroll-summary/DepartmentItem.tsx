'use client';

import { DepartmentItemProps } from './types';
import { formatCurrency, getDepartmentIcon } from './utils';

export default function DepartmentItem({ 
  department, 
  className = "" 
}: DepartmentItemProps) {
  return (
    <div className={`flex justify-between items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-all duration-200 ${className}`}>
      <div className="flex items-center space-x-2">
        <span className="text-lg">{getDepartmentIcon(department.department)}</span>
        <div>
          <p className="font-medium text-gray-900 dark:text-white text-sm">
            {department.department}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {department.employees} employee{department.employees !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <div className="text-right">
        <span className="font-medium text-gray-900 dark:text-white">
          {formatCurrency(department.amount)}
        </span>
        {department.percentage && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {department.percentage}% of total
          </div>
        )}
      </div>
    </div>
  );
} 