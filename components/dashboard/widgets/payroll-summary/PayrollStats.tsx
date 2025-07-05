'use client';

import { TrendingUp, Calculator, DollarSign, AlertCircle } from 'lucide-react';
import { PayrollData } from './types';
import { calculatePayrollStats, getPayrollHealth, getHealthColor, formatCurrency } from './utils';

interface PayrollStatsProps {
  payrollData: PayrollData;
  className?: string;
}

export default function PayrollStats({ payrollData, className = "" }: PayrollStatsProps) {
  const stats = calculatePayrollStats(payrollData);
  const health = getPayrollHealth(stats);
  const healthColor = getHealthColor(health);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Payroll Analytics</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
              {stats.deductionPercentage}%
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Deduction Rate</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-lg">
              {formatCurrency(stats.costPerEmployee)}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Cost/Employee</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Total Deductions</span>
          <span className="font-medium text-red-600 dark:text-red-400">
            {formatCurrency(stats.totalDeductions)}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Average Salary</span>
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {formatCurrency(stats.avgSalary)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Payroll Health</span>
          <div className="flex items-center space-x-1">
            <AlertCircle className={`w-3 h-3 ${healthColor}`} />
            <span className={`font-medium capitalize ${healthColor}`}>
              {health}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 