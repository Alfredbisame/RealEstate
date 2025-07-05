'use client';

import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { ProjectBudgetProps } from './types';

export default function ProjectBudget({ 
  budget, 
  spent, 
  className = "" 
}: ProjectBudgetProps) {
  const budgetAmount = parseFloat(budget.replace(/[^0-9.-]+/g, ''));
  const spentAmount = parseFloat(spent.replace(/[^0-9.-]+/g, ''));
  const remaining = budgetAmount - spentAmount;
  const percentageUsed = budgetAmount > 0 ? (spentAmount / budgetAmount) * 100 : 0;
  const isOverBudget = spentAmount > budgetAmount;
  const isNearBudget = percentageUsed >= 90 && !isOverBudget;

  const getBudgetStatusColor = () => {
    if (isOverBudget) return 'text-red-600 dark:text-red-400';
    if (isNearBudget) return 'text-orange-600 dark:text-orange-400';
    return 'text-green-600 dark:text-green-400';
  };

  const getBudgetStatusIcon = () => {
    if (isOverBudget) return <TrendingDown className="w-3 h-3" />;
    if (isNearBudget) return <TrendingUp className="w-3 h-3" />;
    return <DollarSign className="w-3 h-3" />;
  };

  return (
    <div className={`text-right text-sm ${className}`}>
      <div className="flex items-center justify-end space-x-1 mb-1">
        <DollarSign className="w-3 h-3 text-gray-500 dark:text-gray-400" />
        <p className="font-medium text-gray-900 dark:text-white">{budget}</p>
      </div>
      
      <div className="flex items-center justify-end space-x-1">
        {getBudgetStatusIcon()}
        <p className={`text-xs ${getBudgetStatusColor()}`}>
          Spent: {spent}
        </p>
      </div>
      
      {!isOverBudget && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {percentageUsed.toFixed(1)}% used
        </p>
      )}
      
      {isOverBudget && (
        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
          {(percentageUsed - 100).toFixed(1)}% over budget
        </p>
      )}
      
      {/* Budget progress bar */}
      <div className="mt-2 w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`
            h-full rounded-full transition-all duration-300
            ${isOverBudget ? 'bg-red-500' : ''}
            ${isNearBudget ? 'bg-orange-500' : ''}
            ${!isOverBudget && !isNearBudget ? 'bg-green-500' : ''}
          `}
          style={{ 
            width: `${Math.min(percentageUsed, 100)}%`
          }}
        />
      </div>
    </div>
  );
} 