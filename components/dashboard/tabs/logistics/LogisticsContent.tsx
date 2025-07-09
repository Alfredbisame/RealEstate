import { useState } from 'react';
import TransportCostOptimizerView from './TransportCostOptimizerView';
import RoutePlannerView from './RoutePlannerView';
import DeliveryScheduleView from './DeliveryScheduleView';
import LogisticsAnalyticsView from './LogisticsAnalyticsView';

interface LogisticsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function LogisticsContent({ activeView, onViewChange, user }: LogisticsContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'optimizer' ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('optimizer')}
        >
          Transport Cost Optimizer
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'route' ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('route')}
        >
          Route Planner
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'schedule' ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('schedule')}
        >
          Delivery Schedule
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Logistics Analytics
        </button>
      </div>
      {activeView === 'optimizer' && <TransportCostOptimizerView user={user} />}
      {activeView === 'route' && <RoutePlannerView user={user} />}
      {activeView === 'schedule' && <DeliveryScheduleView user={user} />}
      {activeView === 'analytics' && <LogisticsAnalyticsView user={user} />}
    </div>
  );
} 