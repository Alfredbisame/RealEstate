'use client';

import { DollarSign, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { PaymentSummaryProps } from './types';

export default function PaymentSummary({ 
  paidAmount, 
  pendingAmount, 
  overdueAmount, 
  className = "" 
}: PaymentSummaryProps) {
  return (
    <div className={`bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/10 rounded-lg p-4 border border-blue-200 dark:border-blue-800 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Payment Summary</h4>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-100 dark:border-green-800">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="font-semibold text-green-600 dark:text-green-400">{paidAmount}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Paid</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-orange-100 dark:border-orange-800">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <p className="font-semibold text-orange-600 dark:text-orange-400">{pendingAmount}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Pending</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-800">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <p className="font-semibold text-red-600 dark:text-red-400">{overdueAmount}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Overdue</p>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Cash Flow Status</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">Healthy</span>
          </div>
        </div>
      </div>
    </div>
  );
} 