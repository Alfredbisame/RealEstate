import { useState } from 'react';
import BudgetTableView from './BudgetTableView';
import BudgetAnalyticsView from './BudgetAnalyticsView';
import BudgetToolsPanel from './BudgetToolsPanel';

interface BudgetTrackerContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function BudgetTrackerContent({ activeView, onViewChange }: BudgetTrackerContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'table' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('table')}
        >
          Budget Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Analytics
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'tools' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('tools')}
        >
          Tools
        </button>
      </div>
      {activeView === 'table' && <BudgetTableView />}
      {activeView === 'analytics' && <BudgetAnalyticsView />}
      {activeView === 'tools' && <BudgetToolsPanel />}
    </div>
  );
} 