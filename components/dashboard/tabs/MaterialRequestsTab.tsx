import { useState } from 'react';
import MaterialRequestsHeader from './material-requests/MaterialRequestsHeader';
import MaterialRequestsStats from './material-requests/MaterialRequestsStats';
import MaterialRequestsContent from './material-requests/MaterialRequestsContent';

interface MaterialRequestsTabProps {
  user: any;
}

export default function MaterialRequestsTab({ user }: MaterialRequestsTabProps) {
  const [activeView, setActiveView] = useState('requests');

  return (
    <div className="space-y-6">
      <MaterialRequestsHeader />
      <MaterialRequestsStats />
      <MaterialRequestsContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 