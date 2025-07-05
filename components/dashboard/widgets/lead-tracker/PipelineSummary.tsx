'use client';

import { TrendingUp, Target, DollarSign, Users } from 'lucide-react';
import { PipelineSummaryProps } from './types';

export default function PipelineSummary({ 
  totalValue, 
  closeRate, 
  className = "" 
}: PipelineSummaryProps) {
  return (
    <div className={`bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/10 rounded-lg p-4 border border-purple-200 dark:border-purple-800 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">Pipeline Value</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-center text-sm">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-100 dark:border-purple-800">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <DollarSign className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <p className="font-semibold text-purple-600 dark:text-purple-400">{totalValue}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Total Pipeline</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-100 dark:border-green-800">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="font-semibold text-green-600 dark:text-green-400">{closeRate}%</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Close Rate</p>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400">Pipeline Health</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
} 