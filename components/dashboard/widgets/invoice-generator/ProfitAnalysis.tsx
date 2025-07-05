'use client';

import { TrendingUp, DollarSign } from 'lucide-react';
import { InvoiceCalculations } from './types';
import { formatCurrency } from './utils';

interface ProfitAnalysisProps {
  calculations: InvoiceCalculations;
  className?: string;
}

export default function ProfitAnalysis({ 
  calculations, 
  className = "" 
}: ProfitAnalysisProps) {
  const { profit, total } = calculations;
  const profitPercentage = total > 0 ? (profit / total) * 100 : 0;

  return (
    <div className={`bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800 ${className}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-green-700 dark:text-green-400 font-medium">
            Estimated Profit ({profitPercentage.toFixed(1)}%)
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-green-600 dark:text-green-400 font-semibold text-lg">
            {formatCurrency(profit)}
          </span>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(profitPercentage, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
} 