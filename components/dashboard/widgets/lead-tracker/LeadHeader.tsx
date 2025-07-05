'use client';

import { Users, TrendingUp } from 'lucide-react';

interface LeadHeaderProps {
  title?: string;
  className?: string;
}

export default function LeadHeader({ 
  title = "Lead Tracker", 
  className = "" 
}: LeadHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="relative">
        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-purple-600 dark:text-purple-400">
          <TrendingUp className="w-3 h-3" />
          <span>Active Pipeline</span>
        </div>
      </div>
    </div>
  );
} 