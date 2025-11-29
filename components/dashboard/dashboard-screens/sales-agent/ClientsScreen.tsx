'use client';

import { useState } from 'react';
import ClientsHeader from './ClientsHeader';
import ClientsStats from './ClientsStats';
import ClientsContent from './ClientsContent';

interface ClientsScreenProps {
  user: any;
}

export default function ClientsScreen({ user }: ClientsScreenProps) {
  const [activeView, setActiveView] = useState('communication');

  return (
    <div className="space-y-6">
      <ClientsHeader />
      <ClientsStats />
      <ClientsContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 