'use client';

import { Calculator, TrendingUp } from 'lucide-react';

interface ProfitHeaderProps {
  title?: string;
  className?: string;
}

export default function ProfitHeader({ 
  title = "Profit Calculator", 
  className = "" 
}: ProfitHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-6 ${className}`}>
      <div className="relative">
        <Calculator className="w-6 h-6 text-green-600 dark:text-green-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
          <TrendingUp className="w-3 h-3" />
          <span>Real-time</span>
        </div>
      </div>
    </div>
  );
} 