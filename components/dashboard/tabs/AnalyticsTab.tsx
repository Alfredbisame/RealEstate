'use client';

import { useState } from 'react';
import AnalyticsHeader from './analytics/AnalyticsHeader';
import QuickActions from './analytics/QuickActions';
import StatsGrid from './analytics/StatsGrid';
import ChartsSection from './analytics/ChartsSection';
import PerformanceTable from './analytics/PerformanceTable';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface AnalyticsTabProps {
  user: User;
}

export default function AnalyticsTab({ user }: AnalyticsTabProps) {
  const [timeRange, setTimeRange] = useState('30d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <AnalyticsHeader
        timeRange={timeRange}
        onTimeRangeChange={handleTimeRangeChange}
        isRefreshing={isRefreshing}
        onRefresh={handleRefresh}
      />

      {/* Quick Actions */}
      <QuickActions />

      {/* Stats Cards */}
      <StatsGrid />

      {/* Charts */}
      <ChartsSection />

      {/* Performance Table */}
      <PerformanceTable />
    </div>
  );
}