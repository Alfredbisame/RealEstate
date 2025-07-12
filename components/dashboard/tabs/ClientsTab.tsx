import { useState } from 'react';
import ClientsHeader from './clients/ClientsHeader';
import ClientsStats from './clients/ClientsStats';
import ClientsContent from './clients/ClientsContent';

interface ClientsTabProps {
  user: any;
}

export default function ClientsTab({ user }: ClientsTabProps) {
  const [activeView, setActiveView] = useState('communication');

  return (
    <div className="space-y-6">
      <ClientsHeader />
      <ClientsStats />
      <ClientsContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 