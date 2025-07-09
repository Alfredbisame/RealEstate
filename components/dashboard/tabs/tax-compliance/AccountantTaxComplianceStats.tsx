import { Shield, DollarSign, FileText, CheckCircle } from 'lucide-react';

const stats = [
  {
    label: 'Total Tax Paid',
    value: 'GHS 450,000',
    icon: DollarSign,
    color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
  },
  {
    label: 'GRA Compliance',
    value: '98%',
    icon: Shield,
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
  },
  {
    label: 'SSNIT Contributions',
    value: 'GHS 120,000',
    icon: CheckCircle,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    label: 'Audit Reports',
    value: '12',
    icon: FileText,
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200'
  }
];

export default function AccountantTaxComplianceStats() {
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