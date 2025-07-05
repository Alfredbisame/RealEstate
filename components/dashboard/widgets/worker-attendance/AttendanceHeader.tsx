'use client';

import { Users, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AttendanceHeaderProps } from './types';

export function AttendanceHeader({
  title = 'Worker Attendance',
  subtitle,
  showRefresh = true,
  onRefresh,
  className = ''
}: AttendanceHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <Users className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {showRefresh && onRefresh && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onRefresh}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      )}
    </div>
  );
} 