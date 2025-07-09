import InvoiceTableView from './InvoiceTableView';
import NewInvoiceView from './NewInvoiceView';
import InvoiceAnalyticsView from './InvoiceAnalyticsView';

interface AccountantInvoicesContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantInvoicesContent({ activeView, onViewChange, user }: AccountantInvoicesContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'table' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('table')}
        >
          Invoice Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'new' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('new')}
        >
          New Invoice
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Analytics
        </button>
      </div>
      {activeView === 'table' && <InvoiceTableView user={user} />}
      {activeView === 'new' && <NewInvoiceView user={user} />}
      {activeView === 'analytics' && <InvoiceAnalyticsView user={user} />}
    </div>
  );
} 