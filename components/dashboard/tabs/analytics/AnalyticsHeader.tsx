'use client';

import { RefreshCw } from 'lucide-react';

interface AnalyticsHeaderProps {
  timeRange: string;
  onTimeRangeChange: (value: string) => void;
  isRefreshing: boolean;
  onRefresh: () => void;
  className?: string;
}

export default function AnalyticsHeader({
  timeRange,
  onTimeRangeChange,
  isRefreshing,
  onRefresh,
  className = ''
}: AnalyticsHeaderProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="opacity-90">Comprehensive business intelligence and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={timeRange}
            onChange={(e) => onTimeRangeChange(e.target.value)}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <option value="7d" className="text-gray-900">Last 7 days</option>
            <option value="30d" className="text-gray-900">Last 30 days</option>
            <option value="90d" className="text-gray-900">Last 90 days</option>
            <option value="1y" className="text-gray-900">Last year</option>
          </select>
          <button 
            onClick={onRefresh}
            disabled={isRefreshing}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
} 