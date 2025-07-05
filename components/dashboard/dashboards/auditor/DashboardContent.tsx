'use client';

import StatsGrid from './StatsGrid';
import ComplianceTracker from '../../widgets/ComplianceTracker';
import AuditReports from '../../widgets/AuditReports';
import TransactionsList from './TransactionsList';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'compliance':
      return <ComplianceTracker />;
    case 'reports':
      return <AuditReports />;
    case 'transactions':
      return <TransactionsList />;
    default:
      return <div>Widget not found</div>;
  }
} 