import { useState } from 'react';
import ResourcePlanningView from './ResourcePlanningView';
import ResourceAllocationView from './ResourceAllocationView';

interface ResourcesContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ResourcesContent({ activeView, onViewChange }: ResourcesContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'planning' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('planning')}
        >
          Resource Planning
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'allocation' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('allocation')}
        >
          Resource Allocation
        </button>
      </div>
      {activeView === 'planning' && <ResourcePlanningView />}
      {activeView === 'allocation' && <ResourceAllocationView />}
    </div>
  );
} 