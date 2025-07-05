'use client';

import { Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { SafetyHeaderProps } from './types';

export default function SafetyHeader({ 
  title = "Safety Reports", 
  totalIncidents = 0,
  safetyScore = "94%",
  className = "",
  showStats = true 
}: SafetyHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-6 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-3">
          <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
          {totalIncidents > 0 && (
            <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-medium px-2 py-1 rounded-full">
              {totalIncidents} incidents
            </span>
          )}
        </div>
      </div>
      
      {showStats && (
        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3 text-green-500" />
            <span>{safetyScore} score</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-blue-500" />
            <span>Live</span>
          </div>
          <div className="flex items-center space-x-1">
            <AlertTriangle className="w-3 h-3 text-orange-500" />
            <span>Monitoring</span>
          </div>
        </div>
      )}
    </div>
  );
} 