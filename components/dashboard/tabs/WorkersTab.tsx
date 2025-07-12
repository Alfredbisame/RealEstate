import { useState } from 'react';
import WorkersHeader from './workers/WorkersHeader';
import WorkersStats from './workers/WorkersStats';
import WorkersContent from './workers/WorkersContent';

interface WorkersTabProps {
  user: any;
}

export default function WorkersTab({ user }: WorkersTabProps) {
  const [activeView, setActiveView] = useState('attendance');

  return (
    <div className="space-y-6">
      <WorkersHeader />
      <WorkersStats />
      <WorkersContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 