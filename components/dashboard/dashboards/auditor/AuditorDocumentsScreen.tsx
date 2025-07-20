'use client';

import { useState } from 'react';
import AuditorDocumentsContent from '../../tabs/reports/AuditorDocumentsContent';

export default function AuditorDocumentsScreen({ user }: { user: any }) {
  const [activeView, setActiveView] = useState('all');
  return (
    <AuditorDocumentsContent activeView={activeView} onViewChange={setActiveView} user={user} />
  );
} 