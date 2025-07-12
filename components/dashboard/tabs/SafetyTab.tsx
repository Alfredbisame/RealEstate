import { useState } from 'react';
import SafetyHeader from './safety/SafetyHeader';
import SafetyStats from './safety/SafetyStats';
import SafetyContent from './safety/SafetyContent';

interface SafetyTabProps {
  user: any;
}

export default function SafetyTab({ user }: SafetyTabProps) {
  const [activeView, setActiveView] = useState('incidents');

  return (
    <div className="space-y-6">
      <SafetyHeader />
      <SafetyStats />
      <SafetyContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 