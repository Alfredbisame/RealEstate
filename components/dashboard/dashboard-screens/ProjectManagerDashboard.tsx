'use client';

import { useState } from 'react';
import NavigationTabs from './project-manager/NavigationTabs';
import ViewContent from './project-manager/ViewContent';

export default function ProjectManagerDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'timeline', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'materials', x: 0, y: 2, w: 4, h: 3 },
    { id: '4', type: 'budget-chart', x: 4, y: 4, w: 8, h: 3 },
  ]);

  const handleNewProject = () => {
    console.log('New Project clicked');
    // New project logic here
  };

  const handleBudgetPlanner = () => {
    console.log('Budget Planner clicked');
    // Budget planner logic here
  };

  const handlePhotoDocumentation = () => {
    setActiveView('documentation');
  };

  const handleSiteManagement = () => {
    setActiveView('location');
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
        onNewProject={handleNewProject}
        onBudgetPlanner={handleBudgetPlanner}
        onPhotoDocumentation={handlePhotoDocumentation}
        onSiteManagement={handleSiteManagement}
      />
    </div>
  );
}