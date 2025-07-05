'use client';

import { useState } from 'react';
import CameraIntegration from '../../mobile/CameraIntegration';
import AccountantHeader from './accountant/AccountantHeader';
import QuickActions from './accountant/QuickActions';
import DashboardContent from './accountant/DashboardContent';
import NavigationTabs from './accountant/NavigationTabs';

export default function AccountantDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'revenue-chart', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'invoice-generator', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'payment-tracker', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const handleReceiptScanner = () => {
    setActiveView('receipts');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Header */}
            <AccountantHeader />

            {/* Quick Actions */}
            <QuickActions onReceiptScanner={handleReceiptScanner} />

            {/* Dashboard Grid */}
            <DashboardContent
              widgets={widgets}
              onWidgetsChange={setWidgets}
            />
          </div>
        );
      case 'receipts':
        return <CameraIntegration user={{ role: 'accountant' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      {activeView !== 'dashboard' && (
        <NavigationTabs
          activeView={activeView}
          onViewChange={setActiveView}
        />
      )}

      {renderContent()}
    </div>
  );
}