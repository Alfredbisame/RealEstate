'use client';

interface Invoice {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  type: string;
}

interface InvoiceCardProps {
  invoice: Invoice;
  onClick?: (invoice: Invoice) => void;
}

export default function InvoiceCard({ invoice, onClick }: InvoiceCardProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div 
      className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm"
      onClick={() => onClick?.(invoice)}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white truncate">{invoice.client}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{invoice.id}</p>
        </div>
        <span className={`px-3 py-1 text-xs rounded-full border font-medium ${getStatusStyles(invoice.status)}`}>
          {invoice.status}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900 dark:text-white text-lg">{invoice.amount}</span>
        <div className="text-right">
          <span className="text-sm text-gray-500 dark:text-gray-400">Due: {invoice.dueDate}</span>
          <p className="text-xs text-gray-400 dark:text-gray-500">{invoice.type}</p>
        </div>
      </div>
    </div>
  );
} 