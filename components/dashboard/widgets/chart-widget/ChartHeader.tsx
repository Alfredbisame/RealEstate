'use client';

import { TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { ChartType } from './types';

interface ChartHeaderProps {
  title: string;
  type: ChartType;
  className?: string;
}

export default function ChartHeader({ title, type, className = "" }: ChartHeaderProps) {
  const getChartIcon = (chartType: ChartType) => {
    switch (chartType) {
      case 'area':
        return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'bar':
        return <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'pie':
      case 'doughnut':
        return <PieChart className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getTypeBadge = (chartType: ChartType) => {
    const typeLabels = {
      area: 'Trend',
      bar: 'Comparison',
      pie: 'Distribution',
      doughnut: 'Distribution'
    };

    const typeColors = {
      area: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      bar: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      pie: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      doughnut: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium ${typeColors[chartType]}`}>
        {typeLabels[chartType]}
      </span>
    );
  };

  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          {getChartIcon(type)}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            {getTypeBadge(type)}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Real-time data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 