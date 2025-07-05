'use client';

import { Download, Eye, Calendar, AlertTriangle } from 'lucide-react';
import { AuditReport } from './types';
import { getStatusColor, getTypeColor, formatDate } from './utils';

interface AuditReportCardProps {
  report: AuditReport;
  onView?: (report: AuditReport) => void;
  onDownload?: (report: AuditReport) => void;
  className?: string;
}

export default function AuditReportCard({ 
  report, 
  onView, 
  onDownload, 
  className = "" 
}: AuditReportCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {report.title}
          </h4>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500 dark:text-gray-400 font-mono">{report.id}</span>
            <span className="text-gray-400">•</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
              {report.type}
            </span>
          </div>
        </div>
        <span className={`px-3 py-1 text-xs rounded-full font-medium border ${getStatusColor(report.status)}`}>
          {report.status}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div className="flex items-center space-x-1">
          <Calendar size={14} className="text-blue-500" />
          <span>{formatDate(report.date)}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-medium">{report.size}</span>
          {report.findings > 0 && (
            <div className="flex items-center space-x-1 text-orange-600">
              <AlertTriangle size={14} />
              <span className="font-medium">{report.findings} findings</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => onView?.(report)}
          className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200 text-sm font-medium hover:scale-105"
        >
          <Eye size={14} />
          <span>View</span>
        </button>
        <button 
          onClick={() => onDownload?.(report)}
          className="flex items-center space-x-1 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200 text-sm font-medium hover:scale-105"
        >
          <Download size={14} />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
} 