'use client';

import { FileText, TrendingUp, CreditCard } from 'lucide-react';

interface ReportCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

export default function ReportCard({ icon: Icon, title, description, color, onClick }: ReportCardProps) {
  return (
    <button 
      onClick={onClick}
      className="p-6 bg-white/50 dark:bg-gray-700/50 rounded-xl text-left hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 group"
    >
      <Icon className={`w-8 h-8 ${color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </button>
  );
}

export function ReportsGrid() {
  const reports = [
    {
      icon: FileText,
      title: 'Profit & Loss',
      description: 'Comprehensive P&L statement',
      color: 'text-blue-600',
      onClick: () => console.log('Profit & Loss clicked')
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow',
      description: 'Monthly cash flow analysis',
      color: 'text-green-600',
      onClick: () => console.log('Cash Flow clicked')
    },
    {
      icon: CreditCard,
      title: 'Tax Summary',
      description: 'GRA compliance report',
      color: 'text-orange-600',
      onClick: () => console.log('Tax Summary clicked')
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <ReportCard key={index} {...report} />
        ))}
      </div>
    </div>
  );
} 