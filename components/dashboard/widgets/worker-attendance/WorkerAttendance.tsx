'use client';

import { AttendanceContent } from './AttendanceContent';
import { WorkerAttendanceProps } from './types';

export default function WorkerAttendance(props: WorkerAttendanceProps) {
  return (
    <div className="h-full">
      <AttendanceContent {...props} />
    </div>
  );
} 