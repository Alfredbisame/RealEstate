'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import SalesAgentHeader from './sales-agent/SalesAgentHeader';
import QuickActions from './sales-agent/QuickActions';
import DashboardContent from './sales-agent/DashboardContent';

export default function SalesAgentDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'leads', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'listings', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'pipeline', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const handleAddLead = () => {
    console.log('Add Lead clicked');
    // Add lead logic here
  };

  const handleListProperty = () => {
    console.log('List Property clicked');
    // List property logic here
  };

  const handleScheduleViewing = () => {
    console.log('Schedule Viewing clicked');
    // Schedule viewing logic here
  };

  const handleFollowUp = () => {
    console.log('Follow Up clicked');
    // Follow up logic here
  };

  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <SalesAgentHeader />

      {/* Quick Actions */}
      <QuickActions
        onAddLead={handleAddLead}
        onListProperty={handleListProperty}
        onScheduleViewing={handleScheduleViewing}
        onFollowUp={handleFollowUp}
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