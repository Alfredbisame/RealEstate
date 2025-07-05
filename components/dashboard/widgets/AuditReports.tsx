'use client';

import { AuditReportsContent, mockAuditReports, mockAuditStats } from './audit-reports';

export default function AuditReports() {
  const handleView = (report: any) => {
    console.log('View report:', report);
    // Implement view functionality
  };

  const handleDownload = (report: any) => {
    console.log('Download report:', report);
    // Implement download functionality
  };

  return (
    <AuditReportsContent
      reports={mockAuditReports}
      stats={mockAuditStats}
      onView={handleView}
      onDownload={handleDownload}
    />
  );
}