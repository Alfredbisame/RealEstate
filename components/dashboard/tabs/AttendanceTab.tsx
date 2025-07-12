import { useState } from 'react';
import AttendanceHeader from './attendance/AttendanceHeader';
import AttendanceStats from './attendance/AttendanceStats';
import AttendanceContent from './attendance/AttendanceContent';

interface AttendanceTabProps {
  user: any;
}

export default function AttendanceTab({ user }: AttendanceTabProps) {
  const [activeView, setActiveView] = useState('reports');

  return (
    <div className="space-y-6">
      <AttendanceHeader />
      <AttendanceStats />
      <AttendanceContent activeView={activeView} onViewChange={setActiveView} />
    </div>
  );
} 