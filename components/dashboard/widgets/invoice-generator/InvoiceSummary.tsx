'use client';

import { Receipt, TrendingUp } from 'lucide-react';
import { InvoiceCalculations } from './types';
import { formatCurrency } from './utils';

interface InvoiceSummaryProps {
  calculations: InvoiceCalculations;
  className?: string;
}

export default function InvoiceSummary({ 
  calculations, 
  className = "" 
}: InvoiceSummaryProps) {
  const { materialsTotal, subtotal, vat, total } = calculations;

  return (
    <div className={`bg-gradient-to-r from-orange-50 via-red-50 to-orange-100 dark:from-orange-900/20 dark:via-red-900/20 dark:to-orange-900/10 rounded-xl p-6 border border-orange-200 dark:border-orange-800 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Receipt className="w-5 h-5 text-orange-600 dark:text-orange-400" />
        <h4 className="font-medium text-gray-900 dark:text-white">Invoice Summary</h4>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Materials:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatCurrency(materialsTotal)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Labor:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatCurrency(subtotal - materialsTotal)}
          </span>
        </div>
        
        <hr className="border-gray-300 dark:border-gray-600" />
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatCurrency(subtotal)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">VAT (15%):</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatCurrency(vat)}
          </span>
        </div>
        
        <hr className="border-gray-300 dark:border-gray-600" />
        
        <div className="flex justify-between font-semibold text-lg">
          <span className="text-gray-900 dark:text-white">Total:</span>
          <span className="text-orange-600 dark:text-orange-400">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </div>
  );
} 