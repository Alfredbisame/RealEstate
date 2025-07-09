import { DollarSign, TrendingUp, AlertTriangle, CheckCircle, Wallet } from 'lucide-react';

const stats = [
  {
    label: 'Total Budget',
    value: 'GHS 2.8M',
    icon: DollarSign,
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
  },
  {
    label: 'Petty Cash',
    value: 'GHS 45,000',
    icon: Wallet,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Budget Variance',
    value: '+12.5%',
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200'
  },
  {
    label: 'Overspending',
    value: '3',
    icon: AlertTriangle,
    color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
  }
];

export default function AccountantBudgetPlanningStats() {
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