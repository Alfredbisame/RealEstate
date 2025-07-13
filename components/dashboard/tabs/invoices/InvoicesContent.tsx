import { useState } from 'react';
import InvoiceTableView from './InvoiceTableView';
import InvoiceAnalyticsView from './InvoiceAnalyticsView';
import InvoiceActionsPanel from './InvoiceActionsPanel';

interface InvoicesContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any; // or the correct User type if you have it
}

export default function InvoicesContent({ activeView, onViewChange, user }: InvoicesContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'table' ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('table')}
        >
          Invoices Table
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Analytics
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'actions' ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('actions')}
        >
          Actions
        </button>
      </div>
      {activeView === 'table' && <InvoiceTableView user={user} />}
      {activeView === 'analytics' && <InvoiceAnalyticsView user={user} />}
      {activeView === 'actions' && <InvoiceActionsPanel />}
    </div>
  );
} 