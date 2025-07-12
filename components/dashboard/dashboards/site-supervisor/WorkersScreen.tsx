'use client';

import { useState } from 'react';
import WorkersHeader from '../../tabs/workers/WorkersHeader';
import WorkersStats from '../../tabs/workers/WorkersStats';
import WorkersContent from '../../tabs/workers/WorkersContent';

interface WorkersScreenProps {
  user: any;
}

export default function WorkersScreen({ user }: WorkersScreenProps) {
  const [activeView, setActiveView] = useState('attendance');

  return (
    <div className="space-y-6">
      <WorkersHeader />
      <WorkersStats />
      <WorkersContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 