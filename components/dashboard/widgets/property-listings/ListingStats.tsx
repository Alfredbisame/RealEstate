'use client';

import { Eye, Heart, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ListingStatsProps } from './types';

export default function ListingStats({ 
  views, 
  interested, 
  className = "" 
}: ListingStatsProps) {
  const engagementRate = views > 0 ? (interested / views) * 100 : 0;
  
  const getEngagementColor = () => {
    if (engagementRate >= 20) return 'text-green-600 dark:text-green-400';
    if (engagementRate >= 10) return 'text-blue-600 dark:text-blue-400';
    if (engagementRate >= 5) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getEngagementIcon = () => {
    if (engagementRate >= 20) return <TrendingUp className="w-3 h-3" />;
    if (engagementRate >= 10) return <TrendingUp className="w-3 h-3" />;
    if (engagementRate >= 5) return <Minus className="w-3 h-3" />;
    return <TrendingDown className="w-3 h-3" />;
  };

  return (
    <div className={`flex items-center justify-between text-sm ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <Eye className="w-4 h-4" />
          <span className="font-medium">{views}</span>
          <span className="text-xs">views</span>
        </div>
        <div className="flex items-center space-x-1 text-red-500">
          <Heart className="w-4 h-4" />
          <span className="font-medium">{interested}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">interested</span>
        </div>
      </div>
      
      {/* Engagement rate */}
      <div className="flex items-center space-x-1">
        {getEngagementIcon()}
        <span className={`text-xs font-medium ${getEngagementColor()}`}>
          {engagementRate.toFixed(1)}%
        </span>
      </div>
      
      {/* Engagement indicator */}
      <div className={`
        w-2 h-2 rounded-full
        ${engagementRate >= 20 ? 'bg-green-500' : ''}
        ${engagementRate >= 10 && engagementRate < 20 ? 'bg-blue-500' : ''}
        ${engagementRate >= 5 && engagementRate < 10 ? 'bg-orange-500' : ''}
        ${engagementRate < 5 ? 'bg-red-500' : ''}
        animate-pulse
      `} />
    </div>
  );
} 