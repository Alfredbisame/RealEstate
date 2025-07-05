'use client';

import { Building2, TrendingUp, Eye, Heart } from 'lucide-react';
import { ListingsHeaderProps } from './types';

export default function ListingsHeader({ 
  title = "Property Listings", 
  totalListings = 0,
  activeListings = 0,
  className = "",
  showStats = true 
}: ListingsHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-3">
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
          {totalListings > 0 && (
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
              {totalListings} listings
            </span>
          )}
        </div>
      </div>
      
      {showStats && (
        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span>{activeListings} active</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3 text-blue-500" />
            <span>Live</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3 text-red-500" />
            <span>Real-time</span>
          </div>
        </div>
      )}
    </div>
  );
} 