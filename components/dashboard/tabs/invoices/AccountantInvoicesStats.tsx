import { FileText, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react';

const stats = [
  {
    label: 'Total Invoices',
    value: '128',
    icon: FileText,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
  },
  {
    label: 'Paid',
    value: '102',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
  },
  {
    label: 'Outstanding',
    value: '18',
    icon: AlertTriangle,
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
  },
  {
    label: 'Total Amount',
    value: 'GHS 1,200,000',
    icon: DollarSign,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  }
];

export default function AccountantInvoicesStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className={`flex items-center p-4 rounded-xl shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform ${stat.color}`}>
          <stat.icon className="w-6 h-6 mr-3" />
          <div>
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-xs font-medium opacity-80">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 