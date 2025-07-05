'use client';

import { Calendar, TrendingUp, Clock } from 'lucide-react';
import { TimelineHeaderProps } from './types';

export default function TimelineHeader({ 
  title = "Project Timeline", 
  totalProjects = 0,
  className = "" 
}: TimelineHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
          {totalProjects > 0 && (
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
              {totalProjects} projects
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <TrendingUp className="w-3 h-3" />
          <span>Live</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>Real-time</span>
        </div>
      </div>
    </div>
  );
} 