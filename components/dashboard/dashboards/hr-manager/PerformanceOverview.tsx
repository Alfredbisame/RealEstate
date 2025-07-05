'use client';

import { Award, TrendingUp, AlertCircle } from 'lucide-react';

interface PerformanceMetric {
  id: string;
  title: string;
  value: string;
  icon: any;
  bgColor: string;
  textColor: string;
}

export default function PerformanceOverview() {
  const metrics: PerformanceMetric[] = [
    {
      id: '1',
      title: 'Top Performers',
      value: '12',
      icon: Award,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600'
    },
    {
      id: '2',
      title: 'Avg Performance',
      value: '84%',
      icon: TrendingUp,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600'
    },
    {
      id: '3',
      title: 'Need Improvement',
      value: '3',
      icon: AlertCircle,
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Performance Overview</h3>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div 
            key={metric.id}
            className={`flex items-center justify-between p-3 ${metric.bgColor} rounded-lg hover:shadow-sm transition-shadow duration-200`}
          >
            <div className="flex items-center space-x-3">
              <metric.icon className={`w-5 h-5 ${metric.textColor}`} />
              <span className="font-medium text-gray-900 dark:text-white">{metric.title}</span>
            </div>
            <span className={`${metric.textColor} font-semibold`}>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 