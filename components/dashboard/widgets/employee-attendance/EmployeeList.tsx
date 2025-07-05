'use client';

import { Employee } from './types';
import EmployeeCard from './EmployeeCard';

interface EmployeeListProps {
  employees: Employee[];
  className?: string;
}

export default function EmployeeList({ employees, className = "" }: EmployeeListProps) {
  return (
    <div className={`space-y-2 overflow-y-auto max-h-64 ${className}`}>
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          employee={employee}
        />
      ))}
      
      {employees.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <p className="text-lg font-medium">No employees found</p>
          <p className="text-sm">Employee attendance data will appear here</p>
        </div>
      )}
    </div>
  );
} 