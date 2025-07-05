'use client';

import { DollarSign, Package, Calendar } from 'lucide-react';
import { MaterialCardProps } from './types';
import { getStockStatus, formatCurrency, calculateStockPercentage, formatDate } from './utils';
import ProgressBar from './ProgressBar';
import StockAlert from './StockAlert';

export default function MaterialCard({ 
  material, 
  onUpdate, 
  onOrder, 
  className = "" 
}: MaterialCardProps) {
  const stockStatus = getStockStatus(material.current, material.required);
  const percentage = calculateStockPercentage(material.current, material.required);
  const StatusIcon = stockStatus.icon;

  const handleUpdate = () => {
    onUpdate?.(material);
  };

  const handleOrder = () => {
    onOrder?.(material);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="font-medium text-gray-900 dark:text-white">{material.name}</h4>
          </div>
          
          <div className="flex items-center space-x-2 text-sm mb-1">
            <StatusIcon size={16} className={stockStatus.color} />
            <span className={stockStatus.color}>
              {material.current}/{material.required} {material.unit}
            </span>
          </div>
          
          {material.category && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <span>Category: {material.category}</span>
            </div>
          )}
          
          {material.lastUpdated && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>Updated: {formatDate(material.lastUpdated)}</span>
            </div>
          )}
        </div>
        
        <div className="text-right text-sm">
          <div className="flex items-center space-x-1 mb-1">
            <DollarSign className="w-3 h-3 text-green-600 dark:text-green-400" />
            <p className="font-medium text-gray-900 dark:text-white">
              {formatCurrency(material.price)}
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">per {material.unit}</p>
        </div>
      </div>

      <ProgressBar 
        current={material.current} 
        required={material.required} 
      />

      <StockAlert material={material} />

      <div className="mt-3 flex space-x-2">
        <button 
          onClick={handleUpdate}
          className="flex-1 px-3 py-1.5 bg-blue-100 text-blue-600 rounded text-xs font-medium hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 transition-colors"
        >
          Update Stock
        </button>
        <button 
          onClick={handleOrder}
          className="flex-1 px-3 py-1.5 bg-green-100 text-green-600 rounded text-xs font-medium hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 transition-colors"
        >
          Order More
        </button>
      </div>
    </div>
  );
} 