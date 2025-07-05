'use client';

import { FileText, Download, Eye, Calendar } from 'lucide-react';

export default function AuditReports() {
  const reports = [
    {
      id: 'RPT-2024-001',
      title: 'Monthly Financial Audit',
      type: 'Financial',
      date: '2024-02-15',
      status: 'Completed',
      size: '2.4 MB',
      findings: 2
    },
    {
      id: 'RPT-2024-002',
      title: 'Project Cost Analysis',
      type: 'Project',
      date: '2024-02-12',
      status: 'Completed',
      size: '1.8 MB',
      findings: 0
    },
    {
      id: 'RPT-2024-003',
      title: 'HR Compliance Review',
      type: 'Compliance',
      date: '2024-02-10',
      status: 'In Progress',
      size: '3.2 MB',
      findings: 1
    },
    {
      id: 'RPT-2024-004',
      title: 'Tax Compliance Audit',
      type: 'Tax',
      date: '2024-02-08',
      status: 'Completed',
      size: '1.5 MB',
      findings: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'in progress': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      case 'pending': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'financial': return 'text-green-600';
      case 'project': return 'text-blue-600';
      case 'compliance': return 'text-orange-600';
      case 'tax': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Audit Reports</h3>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-80">
        {reports.map((report) => (
          <div key={report.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{report.title}</h4>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{report.id}</span>
                  <span className="text-gray-400">•</span>
                  <span className={getTypeColor(report.type)}>{report.type}</span>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                {report.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(report.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>{report.size}</span>
                {report.findings > 0 && (
                  <span className="text-orange-600">{report.findings} findings</span>
                )}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm">
                <Eye size={14} />
                <span>View</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors text-sm">
                <Download size={14} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="font-semibold text-green-600">12</p>
            <p className="text-gray-500 dark:text-gray-400">Completed</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">3</p>
            <p className="text-gray-500 dark:text-gray-400">In Progress</p>
          </div>
          <div>
            <p className="font-semibold text-orange-600">5</p>
            <p className="text-gray-500 dark:text-gray-400">Total Findings</p>
          </div>
        </div>
      </div>
    </div>
  );
}