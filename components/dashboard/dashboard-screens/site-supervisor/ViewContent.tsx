'use client';

import SiteSupervisorHeader from './SiteSupervisorHeader';
import QuickActions from './QuickActions';
import DashboardGrid from '../../DashboardGrid';
import DashboardContent from './DashboardContent';
import GPSFeatures from '../../../mobile/GPSFeatures';
import VoiceNotes from '../../../mobile/VoiceNotes';

interface ViewContentProps {
  activeView: string;
  widgets: any[];
  onWidgetsChange: (widgets: any[]) => void;
  onClockInOut?: () => void;
  onSafetyReport?: () => void;
  onGPSTracking?: () => void;
  onVoiceReports?: () => void;
}

export default function ViewContent({
  activeView,
  widgets,
  onWidgetsChange,
  onClockInOut,
  onSafetyReport,
  onGPSTracking,
  onVoiceReports
}: ViewContentProps) {
  const renderWidget = (widget: any) => {
    return <DashboardContent widgetType={widget.type} />;
  };

  switch (activeView) {
    case 'dashboard':
      return (
        <div className="space-y-6">
          <SiteSupervisorHeader />
          <QuickActions
            onClockInOut={onClockInOut}
            onSafetyReport={onSafetyReport}
            onGPSTracking={onGPSTracking}
            onVoiceReports={onVoiceReports}
          />
          <DashboardGrid
            widgets={widgets}
            onWidgetsChange={onWidgetsChange}
            renderWidget={renderWidget}
          />
        </div>
      );
    case 'location':
      return <GPSFeatures user={{ role: 'site-supervisor' }} />;
    case 'voice-notes':
      return <VoiceNotes user={{ role: 'site-supervisor' }} />;
    default:
      return null;
  }
} 