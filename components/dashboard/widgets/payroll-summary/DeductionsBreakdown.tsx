'use client';

import { Receipt, TrendingDown } from 'lucide-react';
import { DeductionsBreakdownProps } from './types';
import { getDeductionLabel, formatCurrency } from './utils';
import DeductionItem from './DeductionItem';

export default function DeductionsBreakdown({ 
  deductions, 
  className = "" 
}: DeductionsBreakdownProps) {
  const totalDeductions = deductions.ssnit + deductions.paye + deductions.other;
  const totalPayroll = totalDeductions + (totalDeductions * 0.3); // Approximate total

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Deductions</h4>
      </div>
      
      <div className="space-y-2">
        <DeductionItem
          label={getDeductionLabel('ssnit')}
          amount={deductions.ssnit}
          percentage={Math.round((deductions.ssnit / totalPayroll) * 100)}
        />
        <DeductionItem
          label={getDeductionLabel('paye')}
          amount={deductions.paye}
          percentage={Math.round((deductions.paye / totalPayroll) * 100)}
        />
        <DeductionItem
          label={getDeductionLabel('other')}
          amount={deductions.other}
          percentage={Math.round((deductions.other / totalPayroll) * 100)}
        />
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900 dark:text-white">Total Deductions</span>
          <span className="font-semibold text-red-600 dark:text-red-400">
            {formatCurrency(totalDeductions)}
          </span>
        </div>
      </div>
    </div>
  );
} 