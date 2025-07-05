'use client';

import { AuditReport } from './types';
import AuditReportCard from './AuditReportCard';

interface AuditReportsListProps {
  reports: AuditReport[];
  onView?: (report: AuditReport) => void;
  onDownload?: (report: AuditReport) => void;
  className?: string;
}

export default function AuditReportsList({ 
  reports, 
  onView, 
  onDownload, 
  className = "" 
}: AuditReportsListProps) {
  return (
    <div className={`space-y-3 overflow-y-auto max-h-80 ${className}`}>
      {reports.map((report) => (
        <AuditReportCard
          key={report.id}
          report={report}
          onView={onView}
          onDownload={onDownload}
        />
      ))}
      
      {reports.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-lg font-medium">No audit reports found</p>
          <p className="text-sm">Reports will appear here once they are generated</p>
        </div>
      )}
    </div>
  );
} 