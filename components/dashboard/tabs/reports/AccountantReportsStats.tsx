import { FileText, BarChart3, PieChart } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

const stats = [
  {
    label: 'Reports Generated',
    value: '24',
    icon: FileText,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Financial Statements',
    value: '8',
    icon: BarChart3,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200'
  },
  {
    label: 'Balance Sheets',
    value: '6',
    icon: PieChart,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Total Revenue',
    value: 'GHS 2,400,000',
    icon: FaCediSign,
    color: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  }
];

export default function AccountantReportsStats() {
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