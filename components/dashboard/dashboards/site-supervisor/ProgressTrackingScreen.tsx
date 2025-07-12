'use client';

import { useState } from 'react';
import ProgressTrackingHeader from './ProgressTrackingHeader';
import ProgressTrackingStats from './ProgressTrackingStats';
import ProgressTrackingContent from './ProgressTrackingContent';

interface ProgressTrackingScreenProps {
  user: any;
}

export default function ProgressTrackingScreen({ user }: ProgressTrackingScreenProps) {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="space-y-6">
      <ProgressTrackingHeader />
      <ProgressTrackingStats />
      <ProgressTrackingContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 