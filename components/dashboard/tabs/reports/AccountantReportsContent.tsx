import FinancialStatementView from './FinancialStatementView';
import BalanceSheetView from './BalanceSheetView';
import JournalEntriesView from './JournalEntriesView';
import ReportsAnalyticsView from './ReportsAnalyticsView';

interface AccountantReportsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantReportsContent({ activeView, onViewChange, user }: AccountantReportsContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'financial' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('financial')}
        >
          Financial Statement
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'balance' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('balance')}
        >
          Balance Sheet
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'journal' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('journal')}
        >
          Journal Entries
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Analytics
        </button>
      </div>
      {activeView === 'financial' && <FinancialStatementView user={user} />}
      {activeView === 'balance' && <BalanceSheetView user={user} />}
      {activeView === 'journal' && <JournalEntriesView user={user} />}
      {activeView === 'analytics' && <ReportsAnalyticsView user={user} />}
    </div>
  );
} 