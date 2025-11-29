'use client';

import { useState } from 'react';
import MaterialRequestsHeader from './MaterialRequestsHeader';
import MaterialRequestsStats from './MaterialRequestsStats';
import MaterialRequestsContent from './MaterialRequestsContent';

interface MaterialRequestsScreenProps {
  user: any;
}

export default function MaterialRequestsScreen({ user }: MaterialRequestsScreenProps) {
  const [activeView, setActiveView] = useState('requests');

  return (
    <div className="space-y-6">
      <MaterialRequestsHeader />
      <MaterialRequestsStats />
      <MaterialRequestsContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 