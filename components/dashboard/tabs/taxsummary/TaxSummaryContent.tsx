import TaxBreakdownView from './TaxBreakdownView';
import TaxComplianceView from './TaxComplianceView';

interface TaxSummaryContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function TaxSummaryContent({ activeView, onViewChange }: TaxSummaryContentProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 mt-4">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'breakdown' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('breakdown')}
        >
          Tax Breakdown
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'compliance' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('compliance')}
        >
          Compliance
        </button>
      </div>
      {activeView === 'breakdown' && <TaxBreakdownView />}
      {activeView === 'compliance' && <TaxComplianceView />}
    </div>
  );
} 