'use client';

import NavigationTabs from './NavigationTabs';
import ViewContent from './ViewContent';

interface Invoice {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  type: string;
}

interface FinancialsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  invoices: Invoice[];
  onInvoiceClick?: (invoice: Invoice) => void;
}

export default function FinancialsContent({
  activeView,
  onViewChange,
  invoices,
  onInvoiceClick
}: FinancialsContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      <NavigationTabs 
        activeView={activeView} 
        onViewChange={onViewChange} 
      />
      <ViewContent
        activeView={activeView}
        invoices={invoices}
        onInvoiceClick={onInvoiceClick}
      />
    </div>
  );
} 