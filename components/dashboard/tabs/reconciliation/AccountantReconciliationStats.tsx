import { Shield, DollarSign, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Total Accounts',
    value: '8',
    icon: Shield,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Reconciled Amount',
    value: 'GHS 2.5M',
    icon: CheckCircle,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200'
  },
  {
    label: 'Pending Items',
    value: '23',
    icon: Clock,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Discrepancies',
    value: '5',
    icon: AlertTriangle,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  }
];

export default function AccountantReconciliationStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className={`flex items-center p-4 rounded-xl shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform ${stat.color}`}>
          <stat.icon className="w-6 h-6 mr-3" />
          <div>
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}