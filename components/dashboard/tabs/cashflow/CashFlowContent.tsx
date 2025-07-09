import { useState } from 'react';
import CashFlowChartView from './CashFlowChartView';
import CashFlowDetailsView from './CashFlowDetailsView';

interface CashFlowContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function CashFlowContent({ activeView, onViewChange }: CashFlowContentProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 mt-4">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'overview' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'details' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('details')}
        >
          Details
        </button>
      </div>
      {activeView === 'overview' && <CashFlowChartView />}
      {activeView === 'details' && <CashFlowDetailsView />}
    </div>
  );
} 