'use client';

import ProjectManagerHeader from './ProjectManagerHeader';
import QuickActions from './QuickActions';
import DashboardGrid from '../../DashboardGrid';
import DashboardContent from './DashboardContent';
import CameraIntegration from '../../../mobile/CameraIntegration';
import GPSFeatures from '../../../mobile/GPSFeatures';

interface ViewContentProps {
  activeView: string;
  widgets: any[];
  onWidgetsChange: (widgets: any[]) => void;
  onNewProject?: () => void;
  onBudgetPlanner?: () => void;
  onPhotoDocumentation?: () => void;
  onSiteManagement?: () => void;
}

export default function ViewContent({
  activeView,
  widgets,
  onWidgetsChange,
  onNewProject,
  onBudgetPlanner,
  onPhotoDocumentation,
  onSiteManagement
}: ViewContentProps) {
  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  switch (activeView) {
    case 'dashboard':
      return (
        <div className="space-y-6">
          <ProjectManagerHeader />
          <QuickActions
            onNewProject={onNewProject}
            onBudgetPlanner={onBudgetPlanner}
            onPhotoDocumentation={onPhotoDocumentation}
            onSiteManagement={onSiteManagement}
          />
          <DashboardGrid
            widgets={widgets}
            onWidgetsChange={onWidgetsChange}
            renderWidget={renderWidget}
          />
        </div>
      );
    case 'documentation':
      return <CameraIntegration user={{ role: 'project-manager' }} />;
    case 'location':
      return <GPSFeatures user={{ role: 'project-manager' }} />;
    default:
      return null;
  }
} 