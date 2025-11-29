'use client';

import StatsGrid from './StatsGrid';
import ComplianceTracker from '../../widgets/ComplianceTracker';
import AuditReports from '../../widgets/AuditReports';
import TransactionsScreen from './TransactionsScreen';
import FinancialReviewScreen from './FinancialReviewScreen';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'reports':
      return <AuditReports />;
    case 'transactions':
      return <TransactionsScreen />;
    case 'financial-review':
      return <FinancialReviewScreen />;
    default:
      return <div>Widget not found</div>;
  }
} 