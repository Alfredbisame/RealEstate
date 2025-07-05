'use client';

import InvoiceCard from './InvoiceCard';

interface Invoice {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  type: string;
}

interface RecentInvoicesProps {
  invoices: Invoice[];
  onInvoiceClick?: (invoice: Invoice) => void;
}

export default function RecentInvoices({ invoices, onInvoiceClick }: RecentInvoicesProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800 dark:text-white flex items-center">
        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
        Recent Invoices
      </h3>
      <div className="space-y-3">
        {invoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            onClick={onInvoiceClick}
          />
        ))}
      </div>
      {invoices.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No invoices found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Create your first invoice to get started
          </p>
        </div>
      )}
    </div>
  );
} 