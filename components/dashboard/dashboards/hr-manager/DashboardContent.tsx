'use client';

import StatsGrid from './StatsGrid';
import AttendanceScreen from './AttendanceScreen';
import PayrollScreen from './PayrollScreen';
import PerformanceScreen from './PerformanceScreen';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'attendance':
      return <AttendanceScreen />;
    case 'payroll':
      return <PayrollScreen />;
    case 'performance':
      return <PerformanceScreen />;
    default:
      return <div>Widget not found</div>;
  }
} 