'use client';

import { Building2, Users } from 'lucide-react';
import { DepartmentBreakdownProps } from './types';
import { calculateDepartmentPercentages } from './utils';
import DepartmentItem from './DepartmentItem';

export default function DepartmentBreakdown({ 
  departments, 
  className = "" 
}: DepartmentBreakdownProps) {
  const departmentsWithPercentages = calculateDepartmentPercentages(departments);

  return (
    <div className={className}>
      <div className="flex items-center space-x-2 mb-3">
        <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">By Department</h4>
      </div>
      
      <div className="space-y-2 overflow-y-auto max-h-32">
        {departmentsWithPercentages.map((dept, index) => (
          <DepartmentItem
            key={index}
            department={dept}
          />
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Total Departments</span>
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {departments.length}
          </span>
        </div>
      </div>
    </div>
  );
} 