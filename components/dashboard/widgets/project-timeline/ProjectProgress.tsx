'use client';

import { ProjectProgressProps } from './types';
import { getProgressColor, getProgressLabel } from './utils';

export default function ProjectProgress({ 
  progress, 
  className = "",
  showPercentage = true 
}: ProjectProgressProps) {
  const progressColor = getProgressColor(progress);
  const progressLabel = getProgressLabel(progress);

  return (
    <div className={`space-y-2 ${className}`}>
      {showPercentage && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Progress</span>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 dark:text-white">
              {progress}%
            </span>
            <span className={`
              text-xs px-2 py-1 rounded-full font-medium
              ${progress >= 80 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : ''}
              ${progress >= 50 && progress < 80 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : ''}
              ${progress >= 25 && progress < 50 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' : ''}
              ${progress < 25 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : ''}
            `}>
              {progressLabel}
            </span>
          </div>
        </div>
      )}
      
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ease-out ${progressColor}`}
            style={{ 
              width: `${progress}%`,
              transition: 'width 0.5s ease-out'
            }}
          />
        </div>
        
        {/* Progress indicator dots */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          {[25, 50, 75, 100].map((milestone) => (
            <div 
              key={milestone}
              className={`
                w-1 h-1 rounded-full transition-all duration-300
                ${progress >= milestone 
                  ? 'bg-white dark:bg-gray-800 shadow-sm' 
                  : 'bg-transparent'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 