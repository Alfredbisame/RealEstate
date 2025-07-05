'use client';

import RevenueChart from './RevenueChart';
import CashFlowSummary from './CashFlowSummary';
import RecentInvoices from './RecentInvoices';
import { ReportsGrid } from './ReportCard';
import InvoiceGenerator from '../../widgets/InvoiceGenerator';
import PaymentTracker from '../../widgets/PaymentTracker';

interface Invoice {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  type: string;
}

interface ViewContentProps {
  activeView: string;
  invoices: Invoice[];
  onInvoiceClick?: (invoice: Invoice) => void;
}

export default function ViewContent({
  activeView,
  invoices,
  onInvoiceClick
}: ViewContentProps) {
  const invoiceData = {
    clientName: '',
    projectName: '',
    materials: [
      { item: 'Cement (50kg bags)', quantity: 100, unitPrice: 45, total: 4500 },
      { item: 'Steel Bars (12mm)', quantity: 5, unitPrice: 180, total: 900 },
      { item: 'Blocks (6inch)', quantity: 500, unitPrice: 2.5, total: 1250 }
    ],
    labor: 15000,
    permits: 2500,
    subtotal: 24150,
    vat: 3622.5,
    total: 27772.5
  };

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <CashFlowSummary />
            </div>
          </div>
        );

      case 'invoices':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InvoiceGenerator data={invoiceData} />
            <RecentInvoices 
              invoices={invoices} 
              onInvoiceClick={onInvoiceClick} 
            />
          </div>
        );

      case 'payments':
        return <PaymentTracker payments={invoices} />;

      case 'reports':
        return <ReportsGrid />;

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Select a view to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="animate-in slide-in-from-bottom-4 duration-500">
        {renderContent()}
      </div>
    </div>
  );
} 