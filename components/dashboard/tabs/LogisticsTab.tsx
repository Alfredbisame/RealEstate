import { useState } from 'react';
import LogisticsHeader from './logistics/LogisticsHeader';
import LogisticsStats from './logistics/LogisticsStats';
import LogisticsContent from './logistics/LogisticsContent';

interface LogisticsTabProps {
  user: any;
}

export default function LogisticsTab({ user }: LogisticsTabProps) {
  const [activeView, setActiveView] = useState('optimizer');

  return (
    <div className="space-y-6">
      <LogisticsHeader />
      <LogisticsStats />
      <LogisticsContent activeView={activeView} onViewChange={setActiveView} user={user} />
    </div>
  );
} 