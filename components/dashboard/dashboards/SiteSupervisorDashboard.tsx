'use client';

import { useState } from 'react';
import NavigationTabs from './site-supervisor/NavigationTabs';
import ViewContent from './site-supervisor/ViewContent';

export default function SiteSupervisorDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'attendance', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'safety', x: 0, y: 2, w: 6, h: 3 },
    { id: '4', type: 'daily-log', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const handleClockInOut = () => {
    console.log('Clock In/Out clicked');
    // Clock in/out logic here
  };

  const handleSafetyReport = () => {
    console.log('Safety Report clicked');
    // Safety report logic here
  };

  const handleGPSTracking = () => {
    setActiveView('location');
  };

  const handleVoiceReports = () => {
    setActiveView('voice-notes');
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

      {/* Content */}
      <ViewContent
        activeView={activeView}
        widgets={widgets}
        onWidgetsChange={setWidgets}
        onClockInOut={handleClockInOut}
        onSafetyReport={handleSafetyReport}
        onGPSTracking={handleGPSTracking}
        onVoiceReports={handleVoiceReports}
      />
    </div>
  );
}