'use client';

import StatsGrid from './StatsGrid';
import EmployeeAttendance from '../../widgets/EmployeeAttendance';
import PayrollSummary from '../../widgets/PayrollSummary';
import PerformanceOverview from './PerformanceOverview';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'attendance':
      return <EmployeeAttendance />;
    case 'payroll':
      return <PayrollSummary />;
    case 'performance':
      return <PerformanceOverview />;
    default:
      return <div>Widget not found</div>;
  }
} 