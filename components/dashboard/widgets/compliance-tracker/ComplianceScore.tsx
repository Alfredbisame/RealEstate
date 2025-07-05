'use client';

import { ComplianceScore as ComplianceScoreType } from './types';

interface ComplianceScoreProps {
  score: ComplianceScoreType;
  className?: string;
}

export default function ComplianceScore({ score, className = "" }: ComplianceScoreProps) {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 dark:text-green-400';
    if (percentage >= 70) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-50 dark:bg-green-900/20';
    if (percentage >= 70) return 'bg-orange-50 dark:bg-orange-900/20';
    return 'bg-red-50 dark:bg-red-900/20';
  };

  const getScoreTextColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-700 dark:text-green-400';
    if (percentage >= 70) return 'text-orange-700 dark:text-orange-400';
    return 'text-red-700 dark:text-red-400';
  };

  return (
    <div className={`${getScoreBgColor(score.percentage)} rounded-lg p-4 mb-4 border border-green-200 dark:border-green-800 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${getScoreTextColor(score.percentage)}`}>
            Overall Compliance Score
          </p>
          <p className={`text-2xl font-bold ${getScoreColor(score.percentage)}`}>
            {score.percentage}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {score.compliant} of {score.total} items compliant
          </p>
        </div>
        
        <div className="w-16 h-16 relative">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Progress circle */}
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${score.percentage}, 100`}
              className={getScoreColor(score.percentage)}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xs font-bold ${getScoreColor(score.percentage)}`}>
              {score.percentage}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span>{score.compliant}/{score.total}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getScoreColor(score.percentage).replace('text-', 'bg-')}`}
            style={{ width: `${score.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
} 