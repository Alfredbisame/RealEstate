'use client';

import { useState } from 'react';
import AttendanceHeader from './AttendanceHeader';
import AttendanceStats from './AttendanceStats';
import AttendanceContent from './AttendanceContent';

interface AttendanceScreenProps {
  user: any;
}

export default function AttendanceScreen({ user }: AttendanceScreenProps) {
  const [activeView, setActiveView] = useState('reports');

  return (
    <div className="space-y-6">
      <AttendanceHeader />
      <AttendanceStats />
      <AttendanceContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 