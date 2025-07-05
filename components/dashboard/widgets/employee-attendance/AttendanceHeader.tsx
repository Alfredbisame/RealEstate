'use client';

import { Users, Activity } from 'lucide-react';

interface AttendanceHeaderProps {
  title?: string;
  className?: string;
}

export default function AttendanceHeader({ 
  title = "Employee Attendance", 
  className = "" 
}: AttendanceHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="relative">
        <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-pink-600 dark:text-pink-400">
          <Activity className="w-3 h-3" />
          <span>Live</span>
        </div>
      </div>
    </div>
  );
} 