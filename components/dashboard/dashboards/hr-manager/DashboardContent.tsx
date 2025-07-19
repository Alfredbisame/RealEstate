'use client';

import StatsGrid from './StatsGrid';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    default:
      return <div>Unknown widget type: {widgetType}</div>;
  }
} 