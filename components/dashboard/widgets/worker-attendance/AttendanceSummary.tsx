'use client';

import { UserCheck, UserX, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { AttendanceSummaryProps } from './types';
import { cn } from '@/lib/utils';

export function AttendanceSummary({ stats, className = '' }: AttendanceSummaryProps) {
  const { present, late, absent, total, percentage } = stats;
  
  const getPercentageChange = () => {
    // Mock data - in real app this would compare with previous period
    return Math.random() > 0.5 ? 2.5 : -1.2;
  };

  const percentageChange = getPercentageChange();
  const isPositive = percentageChange > 0;

  return (
    <div className={cn('grid grid-cols-3 gap-3', className)}>
      {/* Present */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-between mb-2">
          <UserCheck className="w-5 h-5 text-green-600" />
          <span className="text-xs font-medium text-green-700 dark:text-green-400 bg-green-200 dark:bg-green-800 px-2 py-1 rounded-full">
            {Math.round((present / total) * 100)}%
          </span>
        </div>
        <p className="text-2xl font-bold text-green-700 dark:text-green-300">
          {present}
        </p>
        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
          Present
        </p>
      </div>

      {/* Late */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
        <div className="flex items-center justify-between mb-2">
          <Clock className="w-5 h-5 text-orange-600" />
          <span className="text-xs font-medium text-orange-700 dark:text-orange-400 bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded-full">
            {Math.round((late / total) * 100)}%
          </span>
        </div>
        <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
          {late}
        </p>
        <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
          Late
        </p>
      </div>

      {/* Absent */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
        <div className="flex items-center justify-between mb-2">
          <UserX className="w-5 h-5 text-red-600" />
          <span className="text-xs font-medium text-red-700 dark:text-red-400 bg-red-200 dark:bg-red-800 px-2 py-1 rounded-full">
            {Math.round((absent / total) * 100)}%
          </span>
        </div>
        <p className="text-2xl font-bold text-red-700 dark:text-red-300">
          {absent}
        </p>
        <p className="text-sm text-red-600 dark:text-red-400 font-medium">
          Absent
        </p>
      </div>

      {/* Overall Attendance Rate */}
      <div className="col-span-3 mt-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Overall Attendance Rate
            </p>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {percentage}%
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {isPositive ? (
              <TrendingUp className="w-5 h-5 text-green-600" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-600" />
            )}
            <span className={cn(
              'text-sm font-medium',
              isPositive ? 'text-green-600' : 'text-red-600'
            )}>
              {isPositive ? '+' : ''}{percentageChange}%
            </span>
          </div>
        </div>
        <div className="mt-2 w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
} 