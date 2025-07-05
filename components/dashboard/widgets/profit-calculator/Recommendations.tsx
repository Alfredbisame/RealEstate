'use client';

import { TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { RecommendationsProps } from './types';
import { getProfitStats } from './utils';

export default function Recommendations({
  profitMargin,
  className = ""
}: RecommendationsProps) {
  const stats = getProfitStats({ 
    totalCosts: 0, 
    grossProfit: 0, 
    profitMargin, 
    netProfit: 0 
  });

  const getIcon = () => {
    switch (stats.profitLevel) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'good':
        return <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'fair':
        return <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />;
      default:
        return <Lightbulb className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getHeaderColor = () => {
    switch (stats.profitLevel) {
      case 'excellent':
        return 'text-green-600 dark:text-green-400';
      case 'good':
        return 'text-blue-600 dark:text-blue-400';
      case 'fair':
        return 'text-orange-600 dark:text-orange-400';
      case 'poor':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getBgColor = () => {
    switch (stats.profitLevel) {
      case 'excellent':
        return 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20';
      case 'good':
        return 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20';
      case 'fair':
        return 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20';
      case 'poor':
        return 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20';
      default:
        return 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20';
    }
  };

  return (
    <div className={`
      bg-gradient-to-r ${getBgColor()} 
      rounded-xl p-4 border border-gray-200 dark:border-gray-600
      ${className}
    `}>
      <div className="flex items-center space-x-2 mb-3">
        {getIcon()}
        <h5 className={`font-medium ${getHeaderColor()}`}>Recommendations</h5>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p className="font-medium mb-2">• Target profit margin: 20%+ for healthy business</p>
        </div>
        
        {stats.recommendations.map((recommendation, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">•</span>
            <p className={`
              text-sm flex-1
              ${stats.profitLevel === 'poor' ? 'text-red-600 dark:text-red-400' : ''}
              ${stats.profitLevel === 'fair' ? 'text-orange-600 dark:text-orange-400' : ''}
              ${stats.profitLevel === 'good' ? 'text-blue-600 dark:text-blue-400' : ''}
              ${stats.profitLevel === 'excellent' ? 'text-green-600 dark:text-green-400' : ''}
            `}>
              {recommendation}
            </p>
          </div>
        ))}
      </div>

      {/* Risk Level Indicator */}
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">Risk Level:</span>
          <span className={`
            text-xs font-medium px-2 py-1 rounded-full
            ${stats.riskLevel === 'low' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
            ${stats.riskLevel === 'medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' : ''}
            ${stats.riskLevel === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : ''}
          `}>
            {stats.riskLevel.charAt(0).toUpperCase() + stats.riskLevel.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
} 