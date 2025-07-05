'use client';

import { Package, AlertTriangle, CheckCircle } from 'lucide-react';

interface Material {
  name: string;
  current: number;
  required: number;
  price: number;
  unit: string;
}

interface MaterialTrackerProps {
  materials: Material[];
}

export default function MaterialTracker({ materials }: MaterialTrackerProps) {
  const getStockStatus = (current: number, required: number) => {
    const percentage = (current / required) * 100;
    if (percentage >= 90) return { status: 'adequate', color: 'text-green-600', icon: CheckCircle };
    if (percentage >= 50) return { status: 'low', color: 'text-orange-600', icon: AlertTriangle };
    return { status: 'critical', color: 'text-red-600', icon: AlertTriangle };
  };

  const getProgressBarColor = (current: number, required: number) => {
    const percentage = (current / required) * 100;
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Package className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Material Tracker</h3>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-64">
        {materials.map((material, index) => {
          const stockStatus = getStockStatus(material.current, material.required);
          const percentage = Math.min((material.current / material.required) * 100, 100);
          const StatusIcon = stockStatus.icon;

          return (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">{material.name}</h4>
                  <div className="flex items-center space-x-2 text-sm">
                    <StatusIcon size={16} className={stockStatus.color} />
                    <span className={stockStatus.color}>
                      {material.current}/{material.required} {material.unit}
                    </span>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    GHS {material.price.toFixed(2)}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">per {material.unit}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Stock Level</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(material.current, material.required)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {percentage < 50 && (
                <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-700 dark:text-red-400">
                  Low stock alert! Order {material.required - material.current} more {material.unit}.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}