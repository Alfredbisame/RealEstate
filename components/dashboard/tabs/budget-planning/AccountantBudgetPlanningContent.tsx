import PettyCashManagementView from './PettyCashManagementView';
import BudgetForecastingView from './BudgetForecastingView';
import ExpenseTrackingView from './ExpenseTrackingView';
import BudgetAnalysisView from './BudgetAnalysisView';
import FinancialPlanningView from './FinancialPlanningView';

interface AccountantBudgetPlanningContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantBudgetPlanningContent({ activeView, onViewChange, user }: AccountantBudgetPlanningContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'petty-cash' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('petty-cash')}
        >
          Petty Cash Management
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'forecasting' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('forecasting')}
        >
          Budget Forecasting
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'expenses' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('expenses')}
        >
          Expense Tracking
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analysis' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analysis')}
        >
          Budget Analysis
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'planning' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('planning')}
        >
          Financial Planning
        </button>
      </div>
      {activeView === 'petty-cash' && <PettyCashManagementView user={user} />}
      {activeView === 'forecasting' && <BudgetForecastingView user={user} />}
      {activeView === 'expenses' && <ExpenseTrackingView user={user} />}
      {activeView === 'analysis' && <BudgetAnalysisView user={user} />}
      {activeView === 'planning' && <FinancialPlanningView user={user} />}
    </div>
  );
} 