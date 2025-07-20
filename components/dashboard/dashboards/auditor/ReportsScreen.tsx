'use client';

import { useState } from 'react';
import AuditorReportsContent from '../../tabs/reports/AuditorReportsContent';

export default function AuditorReportsScreen({ user }: { user: any }) {
  const [activeView, setActiveView] = useState('financial');
  return (
    <AuditorReportsContent activeView={activeView} onViewChange={setActiveView} user={user} />
  );
} 