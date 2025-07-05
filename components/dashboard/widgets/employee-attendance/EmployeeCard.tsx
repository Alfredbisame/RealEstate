'use client';

import { UserCheck, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { Employee } from './types';
import { getStatusIcon, getStatusColor, getStatusLabel, getDepartmentColor, formatTime, getTimeStatus } from './utils';

interface EmployeeCardProps {
  employee: Employee;
  className?: string;
}

export default function EmployeeCard({ employee, className = "" }: EmployeeCardProps) {
  const timeStatus = getTimeStatus(employee.checkIn);

  return (
    <div className={`flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200 hover:border-pink-300 dark:hover:border-pink-600 ${className}`}>
      <div className="flex items-center space-x-3 flex-1">
        <div className="flex-shrink-0">
          {employee.status === 'present' && <UserCheck className="w-4 h-4 text-green-600 dark:text-green-400" />}
          {employee.status === 'absent' && <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />}
          {employee.status === 'late' && <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
          {employee.status === 'on_leave' && <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
              {employee.name}
            </p>
            {employee.avatar && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <span className="text-xs text-white font-medium">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <p className={`text-xs font-medium ${getDepartmentColor(employee.department)}`}>
              {employee.department}
            </p>
            {employee.checkIn !== '-' && (
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className={`text-xs ${
                  timeStatus === 'on-time' ? 'text-green-600 dark:text-green-400' :
                  timeStatus === 'slightly-late' ? 'text-orange-600 dark:text-orange-400' :
                  'text-red-600 dark:text-red-400'
                }`}>
                  {employee.checkIn}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-end space-y-1">
        <span className={`inline-block px-3 py-1 text-xs rounded-full font-medium border ${getStatusColor(employee.status)}`}>
          {getStatusLabel(employee.status)}
        </span>
        {employee.checkIn !== '-' && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Check-in: {formatTime(employee.checkIn)}
          </p>
        )}
      </div>
    </div>
  );
} 