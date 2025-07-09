import { useState } from 'react';
import FoundationChecklistView from './FoundationChecklistView';
import FramingChecklistView from './FramingChecklistView';
import FinishingChecklistView from './FinishingChecklistView';
import HandoverChecklistView from './HandoverChecklistView';

interface QualityControlContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function QualityControlContent({ activeView, onViewChange }: QualityControlContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'foundation' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('foundation')}
        >
          Foundation Stage
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'framing' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('framing')}
        >
          Framing Stage
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'finishing' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('finishing')}
        >
          Finishing Stage
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'handover' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('handover')}
        >
          Handover & Final QA
        </button>
      </div>
      {activeView === 'foundation' && <FoundationChecklistView />}
      {activeView === 'framing' && <FramingChecklistView />}
      {activeView === 'finishing' && <FinishingChecklistView />}
      {activeView === 'handover' && <HandoverChecklistView />}
    </div>
  );
} 