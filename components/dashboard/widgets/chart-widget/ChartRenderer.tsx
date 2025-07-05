'use client';

import { ChartType, ChartData } from './types';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

interface ChartRendererProps {
  type: ChartType;
  data: ChartData | any;
  className?: string;
}

export default function ChartRenderer({ type, data, className = "" }: ChartRendererProps) {
  const renderChart = () => {
    switch (type) {
      case 'area':
        return <AreaChartComponent data={data} className={className} />;
      
      case 'bar':
        return <BarChartComponent data={data} className={className} />;
      
      case 'doughnut':
      case 'pie':
        return <PieChartComponent data={data} type={type} className={className} />;
      
      default:
        return (
          <div className={`flex items-center justify-center h-full ${className}`}>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-lg font-medium">Chart type not supported</p>
              <p className="text-sm">Please select a supported chart type</p>
            </div>
          </div>
        );
    }
  };

  return renderChart();
} 