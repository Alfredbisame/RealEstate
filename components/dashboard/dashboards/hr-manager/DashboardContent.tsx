'use client';

import StatsGrid from './StatsGrid';
import AttendanceScreen from './AttendanceScreen';
import PayrollScreen from './PayrollScreen';
import PerformanceScreen from './PerformanceScreen';
import RecruitmentScreen from './RecruitmentScreen';
import TrainingScreen from './TrainingScreen';
import BenefitsScreen from './BenefitsScreen';

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
    case 'recruitment':
      return <RecruitmentScreen />;
    case 'training':
      return <TrainingScreen />;
    case 'benefits':
      return <BenefitsScreen />;
    default:
      return <div>Widget not found</div>;
  }
} 