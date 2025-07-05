'use client';

import StatsGrid from './StatsGrid';
import WorkerAttendance from '../../widgets/WorkerAttendance';
import SafetyReports from '../../widgets/SafetyReports';
import DailyActivityLog from './DailyActivityLog';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'attendance':
      return <WorkerAttendance />;
    case 'safety':
      return <SafetyReports />;
    case 'daily-log':
      return <DailyActivityLog />;
    default:
      return <div>Widget not found</div>;
  }
} 