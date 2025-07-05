'use client';

import { Package, AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';
import { Material } from './types';
import { calculateMaterialStats, getStockLevelLabel, getStockLevelColor } from './utils';

interface MaterialStatsProps {
  materials: Material[];
  className?: string;
}

export default function MaterialStats({ materials, className = "" }: MaterialStatsProps) {
  const stats = calculateMaterialStats(materials);
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Inventory Overview</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
              {stats.totalMaterials}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Items</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-lg">
              {stats.totalValue.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Value</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Low Stock Items</span>
          <span className="font-medium text-orange-600 dark:text-orange-400">
            {stats.lowStockCount}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Critical Stock</span>
          <span className="font-medium text-red-600 dark:text-red-400">
            {stats.criticalStockCount}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 dark:text-gray-400">Average Stock Level</span>
          <span className={`font-medium ${getStockLevelColor(stats.averageStockLevel)}`}>
            {stats.averageStockLevel}% ({getStockLevelLabel(stats.averageStockLevel)})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Inventory Health</span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${getStockLevelColor(stats.averageStockLevel).replace('text-', 'bg-')}`}></div>
            <span className={`font-medium ${getStockLevelColor(stats.averageStockLevel)}`}>
              {getStockLevelLabel(stats.averageStockLevel)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 