'use client';

import { AuditReport } from './types';
import AuditReportsHeader from './AuditReportsHeader';
import AuditReportsList from './AuditReportsList';
import AuditStats from './AuditStats';

interface AuditReportsContentProps {
  reports: AuditReport[];
  stats: {
    completed: number;
    inProgress: number;
    totalFindings: number;
  };
  onView?: (report: AuditReport) => void;
  onDownload?: (report: AuditReport) => void;
  className?: string;
}

export default function AuditReportsContent({
  reports,
  stats,
  onView,
  onDownload,
  className = ""
}: AuditReportsContentProps) {
  return (
    <div className={`h-full ${className}`}>
      <AuditReportsHeader />
      
      <AuditReportsList
        reports={reports}
        onView={onView}
        onDownload={onDownload}
      />
      
      <AuditStats stats={stats} className="mt-4" />
    </div>
  );
} 