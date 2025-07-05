'use client';

import { Shield, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export default function ComplianceTracker() {
  const complianceItems = [
    {
      category: 'Tax Compliance',
      items: [
        { name: 'VAT Returns', status: 'compliant', dueDate: '2024-02-20', lastUpdate: '2024-02-15' },
        { name: 'PAYE Returns', status: 'pending', dueDate: '2024-02-25', lastUpdate: '2024-01-28' },
        { name: 'Corporate Tax', status: 'compliant', dueDate: '2024-03-31', lastUpdate: '2024-02-10' }
      ]
    },
    {
      category: 'Labor Compliance',
      items: [
        { name: 'SSNIT Contributions', status: 'compliant', dueDate: '2024-02-28', lastUpdate: '2024-02-14' },
        { name: 'Workers Compensation', status: 'warning', dueDate: '2024-02-22', lastUpdate: '2024-01-30' },
        { name: 'Safety Certifications', status: 'compliant', dueDate: '2024-03-15', lastUpdate: '2024-02-05' }
      ]
    },
    {
      category: 'Building Permits',
      items: [
        { name: 'Construction Permits', status: 'compliant', dueDate: '2024-04-01', lastUpdate: '2024-01-15' },
        { name: 'Environmental Clearance', status: 'pending', dueDate: '2024-02-28', lastUpdate: '2024-02-01' },
        { name: 'Fire Safety Certificate', status: 'compliant', dueDate: '2024-05-20', lastUpdate: '2024-01-20' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'overdue': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'warning': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'pending': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      case 'overdue': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getOverallScore = () => {
    const allItems = complianceItems.flatMap(cat => cat.items);
    const compliantItems = allItems.filter(item => item.status === 'compliant').length;
    return Math.round((compliantItems / allItems.length) * 100);
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Compliance Tracker</h3>
      </div>

      {/* Overall Score */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-green-700 dark:text-green-400">Overall Compliance Score</p>
            <p className="text-2xl font-bold text-green-600">{getOverallScore()}%</p>
          </div>
          <div className="w-16 h-16 relative">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-200 dark:text-gray-700"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${getOverallScore()}, 100`}
                className="text-green-600"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Compliance Categories */}
      <div className="space-y-4 overflow-y-auto max-h-64">
        {complianceItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-sm">{category.category}</h4>
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-1">
                    {getStatusIcon(item.status)}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Due: {new Date(item.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}