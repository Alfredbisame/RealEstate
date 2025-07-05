'use client';

import { CreditCard, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Payment } from './types';
import { calculatePaymentStats } from './utils';

interface PaymentStatsProps {
  payments: Payment[];
  className?: string;
}

export default function PaymentStats({ payments, className = "" }: PaymentStatsProps) {
  const stats = calculatePaymentStats(payments);
  
  const totalAmount = `GHS ${stats.totalAmount.toLocaleString()}`;
  const paidAmount = `GHS ${stats.paidAmount.toLocaleString()}`;
  const pendingAmount = `GHS ${stats.pendingAmount.toLocaleString()}`;
  const overdueAmount = `GHS ${stats.overdueAmount.toLocaleString()}`;
  
  const collectionRate = stats.totalAmount > 0 
    ? Math.round((stats.paidAmount / stats.totalAmount) * 100) 
    : 0;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Payment Analytics</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
              {stats.totalPayments}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Payments</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-lg">
              {collectionRate}%
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Collection Rate</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Paid Payments</span>
          <span className="font-medium text-green-600 dark:text-green-400">
            {stats.paidCount} ({paidAmount})
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Pending Payments</span>
          <span className="font-medium text-orange-600 dark:text-orange-400">
            {stats.pendingCount} ({pendingAmount})
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Overdue Payments</span>
          <span className="font-medium text-red-600 dark:text-red-400">
            {stats.overdueCount} ({overdueAmount})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Total Outstanding</span>
          <span className="font-medium text-orange-600 dark:text-orange-400">
            GHS {(stats.pendingAmount + stats.overdueAmount).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
} 