'use client';

import { Users, FileCheck } from 'lucide-react';
import { CostBreakdown as CostBreakdownType } from './types';

interface CostBreakdownProps {
  costs: CostBreakdownType;
  onCostsChange: (field: keyof CostBreakdownType, value: number) => void;
  className?: string;
}

export default function CostBreakdown({ 
  costs, 
  onCostsChange, 
  className = "" 
}: CostBreakdownProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Labor Cost (GHS)</span>
          </div>
        </label>
        <input
          type="number"
          value={costs.labor}
          onChange={(e) => onCostsChange('labor', Number(e.target.value) || 0)}
          min="0"
          step="0.01"
          className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <Users className="absolute left-3 top-9 w-4 h-4 text-gray-400" />
      </div>
      
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center space-x-1">
            <FileCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span>Permits & Fees (GHS)</span>
          </div>
        </label>
        <input
          type="number"
          value={costs.permits}
          onChange={(e) => onCostsChange('permits', Number(e.target.value) || 0)}
          min="0"
          step="0.01"
          className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
        <FileCheck className="absolute left-3 top-9 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
} 