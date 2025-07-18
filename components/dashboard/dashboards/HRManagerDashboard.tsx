'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import HRManagerHeader from './hr-manager/HRManagerHeader';
import QuickActions from './hr-manager/QuickActions';
import DashboardContent from './hr-manager/DashboardContent';

export default function HRManagerDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'attendance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'payroll', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'performance', x: 6, y: 4, w: 6, h: 3 },
    { id: '5', type: 'recruitment', x: 0, y: 6, w: 12, h: 4 },
    { id: '6', type: 'training', x: 0, y: 10, w: 12, h: 4 },
  ]);

  const handleAddEmployee = () => {
    console.log('Add Employee clicked');
    // Add employee logic here
  };

  const handleProcessPayroll = () => {
    console.log('Process Payroll clicked');
    // Process payroll logic here
  };

  const handleLeaveManagement = () => {
    console.log('Leave Management clicked');
    // Leave management logic here
  };

  const handlePerformanceReview = () => {
    console.log('Performance Review clicked');
    // Performance review logic here
  };

  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <HRManagerHeader />

      {/* Quick Actions */}
      <QuickActions
        onAddEmployee={handleAddEmployee}
        onProcessPayroll={handleProcessPayroll}
        onLeaveManagement={handleLeaveManagement}
        onPerformanceReview={handlePerformanceReview}
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