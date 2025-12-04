import { Truck, MapPin, DollarSign, Timer } from 'lucide-react';

const stats = [
  {
    label: 'Total Deliveries',
    value: '42',
    icon: Truck,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Active Routes',
    value: '7',
    icon: MapPin,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Avg. Cost/Delivery',
    value: 'GHS 1,200',
    icon: DollarSign,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Avg. Delivery Time',
    value: '2.5 hrs',
    icon: Timer,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  }
];

export default function LogisticsStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className={`flex items-center p-4 rounded-xl shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform ${stat.color}`}>
          <stat.icon className="w-6 h-6 mr-3" />
          <div>
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}