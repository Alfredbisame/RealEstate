import PaymentTableView from './PaymentTableView';
import NewPaymentView from './NewPaymentView';
import PaymentIntegrationsView from './PaymentIntegrationsView';
import PaymentAnalyticsView from './PaymentAnalyticsView';
import PaymentRemindersView from './PaymentRemindersView';

interface AccountantPaymentsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantPaymentsContent({ activeView, onViewChange, user }: AccountantPaymentsContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'table' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('table')}
        >
          Payment Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'new' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('new')}
        >
          New Payment
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'integrations' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('integrations')}
        >
          Integrations
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Analytics
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'reminders' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('reminders')}
        >
          Reminders
        </button>
      </div>
      {activeView === 'table' && <PaymentTableView user={user} />}
      {activeView === 'new' && <NewPaymentView user={user} />}
      {activeView === 'integrations' && <PaymentIntegrationsView user={user} />}
      {activeView === 'analytics' && <PaymentAnalyticsView user={user} />}
      {activeView === 'reminders' && <PaymentRemindersView user={user} />}
    </div>
  );
} 