import { Layers, TrendingUp, FileText } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

const stats = [
  {
    label: 'Total Material Cost',
    value: 'GHS 1,200,000',
    icon: FaCediSign,
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
  },
  {
    label: 'Categories',
    value: '6',
    icon: Layers,
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200'
  },
  {
    label: 'Land Acquisition',
    value: 'GHS 400,000',
    icon: FileText,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Professional Fees',
    value: 'GHS 150,000',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
  }
];

export default function MaterialsStats() {
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