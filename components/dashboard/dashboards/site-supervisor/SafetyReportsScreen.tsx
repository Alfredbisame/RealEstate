'use client';

import { useState } from 'react';
import SafetyHeader from './SafetyHeader';
import SafetyStats from './SafetyStats';
import SafetyContent from './SafetyContent';

interface SafetyReportsScreenProps {
  user: any;
}

export default function SafetyReportsScreen({ user }: SafetyReportsScreenProps) {
  const [activeView, setActiveView] = useState('incidents');

  return (
    <div className="space-y-6">
      <SafetyHeader />
      <SafetyStats />
      <SafetyContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 