'use client';

import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { AuditStats as AuditStatsType } from './types';

interface AuditStatsProps {
  stats: AuditStatsType;
  className?: string;
}

export default function AuditStats({ stats, className = "" }: AuditStatsProps) {
  return (
    <div className={`bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 ${className}`}>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="group">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
          </div>
          <p className="font-bold text-lg text-green-600 group-hover:text-green-700 transition-colors">
            {stats.completed}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Completed</p>
        </div>
        
        <div className="group">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <p className="font-bold text-lg text-blue-600 group-hover:text-blue-700 transition-colors">
            {stats.inProgress}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">In Progress</p>
        </div>
        
        <div className="group">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform" />
          </div>
          <p className="font-bold text-lg text-orange-600 group-hover:text-orange-700 transition-colors">
            {stats.totalFindings}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Findings</p>
        </div>
      </div>
    </div>
  );
} 