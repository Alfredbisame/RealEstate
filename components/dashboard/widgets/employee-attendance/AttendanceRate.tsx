'use client';

import { TrendingUp, Users } from 'lucide-react';
import { AttendanceRate as AttendanceRateType } from './types';

interface AttendanceRateProps {
  rate: AttendanceRateType;
  className?: string;
}

export default function AttendanceRate({ rate, className = "" }: AttendanceRateProps) {
  const getRateColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 dark:text-green-400';
    if (percentage >= 75) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className={`bg-gradient-to-r from-gray-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 ${className}`}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Users className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Attendance Rate</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className={`font-bold text-lg ${getRateColor(rate.percentage)}`}>
            {rate.percentage}%
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Progress</span>
          <span>{rate.present}/{rate.total} employees</span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(rate.percentage)} relative`}
            style={{ width: `${rate.percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
} 