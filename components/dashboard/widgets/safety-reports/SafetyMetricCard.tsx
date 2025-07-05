'use client';

import { SafetyMetricCardProps } from './types';
import { getMetricColor, getMetricBgColor, getTrendIcon, getTrendDirection } from './utils';

export default function SafetyMetricCard({ 
  metric, 
  className = "",
  onClick,
  showTrend = true 
}: SafetyMetricCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(metric);
    }
  };

  const trendDirection = getTrendDirection(metric.change);
  const metricColor = getMetricColor(metric.color);
  const metricBgColor = getMetricBgColor(metric.color);

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-xl p-4 transition-all duration-300 group
        hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${metricBgColor}
          `}>
            <metric.icon className={`w-5 h-5 ${metricColor}`} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
              {metric.label}
            </h4>
            {metric.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </p>
            )}
          </div>
        </div>
        
        {showTrend && (
          <div className="flex items-center space-x-1">
            {getTrendIcon(trendDirection)}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {metric.value}
          </span>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-medium ${metricColor}`}>
              {metric.change}
            </span>
            {metric.target && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Target: {metric.target}
              </span>
            )}
          </div>
        </div>
        
        {/* Progress indicator */}
        {metric.target && (
          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-300 ${metricColor.replace('text-', 'bg-')}`}
              style={{ 
                width: `${Math.min(parseFloat(metric.value) / parseFloat(metric.target) * 100, 100)}%`
              }}
            />
          </div>
        )}
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-300 pointer-events-none" />
    </div>
  );
} 