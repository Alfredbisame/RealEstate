'use client';

import { AlertTriangle, ShoppingCart } from 'lucide-react';
import { StockAlertProps } from './types';
import { getOrderQuantity } from './utils';

export default function StockAlert({ 
  material, 
  className = "" 
}: StockAlertProps) {
  const orderQuantity = getOrderQuantity(material);
  const percentage = (material.current / material.required) * 100;

  if (percentage >= 50) return null;

  return (
    <div className={`mt-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border border-red-200 dark:border-red-800 ${className}`}>
      <div className="flex items-start space-x-2">
        <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-medium text-red-700 dark:text-red-400">
              Low Stock Alert!
            </span>
            <div className="flex items-center space-x-1 text-xs text-red-600 dark:text-red-400">
              <ShoppingCart className="w-3 h-3" />
              <span>Order Required</span>
            </div>
          </div>
          <p className="text-xs text-red-600 dark:text-red-400">
            Order {orderQuantity} more {material.unit} to maintain adequate stock levels.
          </p>
        </div>
      </div>
    </div>
  );
} 