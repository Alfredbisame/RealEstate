import BankAccountsView from './BankAccountsView';
import TransactionMatchingView from './TransactionMatchingView';
import DiscrepancyResolutionView from './DiscrepancyResolutionView';
import AutoReconciliationView from './AutoReconciliationView';
import ReconciliationReportsView from './ReconciliationReportsView';

interface AccountantReconciliationContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantReconciliationContent({ activeView, onViewChange, user }: AccountantReconciliationContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'accounts' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('accounts')}
        >
          Bank Accounts
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'matching' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('matching')}
        >
          Transaction Matching
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'discrepancies' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('discrepancies')}
        >
          Discrepancy Resolution
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'auto' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('auto')}
        >
          Auto Reconciliation
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'reports' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('reports')}
        >
          Reconciliation Reports
        </button>
      </div>
      {activeView === 'accounts' && <BankAccountsView user={user} />}
      {activeView === 'matching' && <TransactionMatchingView user={user} />}
      {activeView === 'discrepancies' && <DiscrepancyResolutionView user={user} />}
      {activeView === 'auto' && <AutoReconciliationView user={user} />}
      {activeView === 'reports' && <ReconciliationReportsView user={user} />}
    </div>
  );
} 