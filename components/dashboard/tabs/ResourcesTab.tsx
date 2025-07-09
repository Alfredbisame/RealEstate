import { useState } from 'react';
import ResourcesHeader from './resources/ResourcesHeader';
import ResourcesStats from './resources/ResourcesStats';
import ResourcesContent from './resources/ResourcesContent';

interface ResourcesTabProps {
  user: any;
}

export default function ResourcesTab({ user }: ResourcesTabProps) {
  const [activeView, setActiveView] = useState('planning');

  return (
    <div className="space-y-6">
      <ResourcesHeader />
      <ResourcesStats />
      <ResourcesContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 