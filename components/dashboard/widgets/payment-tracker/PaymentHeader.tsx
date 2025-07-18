'use client';

import { CreditCard, TrendingUp } from 'lucide-react';

interface PaymentHeaderProps {
  title?: string;
  className?: string;
}

export default function PaymentHeader({ 
  title = "Payment Tracker", 
  className = "" 
}: PaymentHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="relative">
        <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
          <TrendingUp className="w-3 h-3" />
          <span>Cash Flow</span>
        </div>
      </div>
    </div>
  );
} 