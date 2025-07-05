'use client';

import { StatsCardSkeletonProps } from './types';
import { getSizeClasses, getVariantClasses } from './utils';

export default function StatsCardSkeleton({ 
  className = "",
  size = 'md',
  variant = 'default'
}: StatsCardSkeletonProps) {
  const sizes = getSizeClasses(size);
  const variants = getVariantClasses(variant);

  return (
    <div className={`
      ${variants.container} ${sizes.container} ${className}
      animate-pulse
    `}>
      <div className="flex items-center justify-between mb-3">
        <div className={`
          ${sizes.icon} rounded-xl bg-gray-200 dark:bg-gray-700
        `} />
        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
      
      <div className="space-y-2">
        <div className={`
          ${sizes.value.replace('text-', 'h-')} bg-gray-200 dark:bg-gray-700 rounded
        `} />
        <div className={`
          ${sizes.title.replace('text-', 'h-')} bg-gray-200 dark:bg-gray-700 rounded w-3/4
        `} />
      </div>
    </div>
  );
} 