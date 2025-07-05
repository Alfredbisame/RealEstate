'use client';

import { UserCheck, Clock, AlertTriangle, Users } from 'lucide-react';
import { AttendanceStats as AttendanceStatsType } from './types';

interface AttendanceStatsProps {
  stats: AttendanceStatsType;
  className?: string;
}

export default function AttendanceStats({ stats, className = "" }: AttendanceStatsProps) {
  const statItems = [
    {
      label: 'Present',
      value: stats.present,
      icon: UserCheck,
      color: 'blue',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      labelColor: 'text-blue-700 dark:text-blue-400'
    },
    {
      label: 'On Time',
      value: stats.onTime,
      icon: UserCheck,
      color: 'green',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
      labelColor: 'text-green-700 dark:text-green-400'
    },
    {
      label: 'Late',
      value: stats.late,
      icon: Clock,
      color: 'orange',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400',
      labelColor: 'text-orange-700 dark:text-orange-400'
    },
    {
      label: 'Absent',
      value: stats.absent,
      icon: AlertTriangle,
      color: 'red',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400',
      labelColor: 'text-red-700 dark:text-red-400'
    }
  ];

  return (
    <div className={`grid grid-cols-4 gap-2 mb-4 ${className}`}>
      {statItems.map((item, index) => (
        <div 
          key={index} 
          className={`${item.bgColor} rounded-lg p-3 text-center hover:shadow-md transition-shadow group`}
        >
          <div className="flex items-center justify-center mb-1">
            <item.icon className={`w-4 h-4 ${item.textColor} group-hover:scale-110 transition-transform`} />
          </div>
          <p className={`text-lg font-bold ${item.textColor}`}>
            {item.value}
          </p>
          <p className={`text-xs font-medium ${item.labelColor}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
} 