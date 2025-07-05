'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import PropertyOwnerHeader from './property-owner/PropertyOwnerHeader';
import QuickActions from './property-owner/QuickActions';
import DashboardContent from './property-owner/DashboardContent';

export default function PropertyOwnerDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 3, h: 2 },
    { id: '2', type: 'chart', x: 3, y: 0, w: 6, h: 4 },
    { id: '3', type: 'properties', x: 9, y: 0, w: 3, h: 4 },
    { id: '4', type: 'profit-calc', x: 0, y: 2, w: 6, h: 4 },
    { id: '5', type: 'cash-flow', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const handleAddProperty = () => {
    console.log('Add Property clicked');
    // Add property logic here
  };

  const handleROICalculator = () => {
    console.log('ROI Calculator clicked');
    // ROI calculator logic here
  };

  const handleGenerateInvoice = () => {
    console.log('Generate Invoice clicked');
    // Invoice generation logic here
  };

  const handlePaymentTracker = () => {
    console.log('Payment Tracker clicked');
    // Payment tracking logic here
  };

  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <PropertyOwnerHeader />

      {/* Quick Actions */}
      <QuickActions
        onAddProperty={handleAddProperty}
        onROICalculator={handleROICalculator}
        onGenerateInvoice={handleGenerateInvoice}
        onPaymentTracker={handlePaymentTracker}
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