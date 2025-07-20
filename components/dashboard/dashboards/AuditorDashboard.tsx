'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import AuditorHeader from './auditor/AuditorHeader';
import QuickActions from './auditor/QuickActions';
import DashboardContent from './auditor/DashboardContent';

export default function AuditorDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'compliance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'reports', x: 0, y: 2, w: 6, h: 4 },
  ]);

  const handleViewReports = () => {
    console.log('View Reports clicked');
    // View reports logic here
  };

  const handleSearchRecords = () => {
    console.log('Search Records clicked');
    // Search records logic here
  };

  const handleComplianceCheck = () => {
    console.log('Compliance Check clicked');
    // Compliance check logic here
  };

  const handleAnalytics = () => {
    console.log('Analytics clicked');
    // Analytics logic here
  };

  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <AuditorHeader />

      {/* Quick Actions */}
      <QuickActions
        onViewReports={handleViewReports}
        onSearchRecords={handleSearchRecords}
        onComplianceCheck={handleComplianceCheck}
        onAnalytics={handleAnalytics}
      />

      {/* Dashboard Grid */}
      <DashboardGrid
        widgets={widgets}
        onWidgetsChange={setWidgets}
        renderWidget={renderWidget}
      />
    </div>
  );
}