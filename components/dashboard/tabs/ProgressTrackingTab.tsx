import { useState } from 'react';
import ProgressTrackingHeader from './progress-tracking/ProgressTrackingHeader';
import ProgressTrackingStats from './progress-tracking/ProgressTrackingStats';
import ProgressTrackingContent from './progress-tracking/ProgressTrackingContent';

interface ProgressTrackingTabProps {
  user: any;
}

export default function ProgressTrackingTab({ user }: ProgressTrackingTabProps) {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="space-y-6">
      <ProgressTrackingHeader />
      <ProgressTrackingStats />
      <ProgressTrackingContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 