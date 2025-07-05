'use client';

import { DollarSign, TrendingUp } from 'lucide-react';

interface PayrollHeaderProps {
  title?: string;
  className?: string;
}

export default function PayrollHeader({ 
  title = "Payroll Summary", 
  className = "" 
}: PayrollHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="relative">
        <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
          <TrendingUp className="w-3 h-3" />
          <span>Monthly</span>
        </div>
      </div>
    </div>
  );
} 