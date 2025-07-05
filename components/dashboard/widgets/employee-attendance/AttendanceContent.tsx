'use client';

import { EmployeeAttendanceProps, Employee, AttendanceStats as AttendanceStatsType } from './types';
import { calculateAttendanceRate } from './utils';
import { mockAttendanceData, mockAttendanceStats } from './mockData';
import AttendanceHeader from './AttendanceHeader';
import AttendanceStats from './AttendanceStats';
import EmployeeList from './EmployeeList';
import AttendanceRate from './AttendanceRate';

export default function AttendanceContent({
  data = mockAttendanceData,
  stats = mockAttendanceStats,
  className = ""
}: EmployeeAttendanceProps) {
  const rate = calculateAttendanceRate(stats);

  return (
    <div className={`h-full ${className}`}>
      <AttendanceHeader />
      
      <AttendanceStats stats={stats} />
      
      <EmployeeList employees={data} />
      
      <AttendanceRate rate={rate} className="mt-4" />
    </div>
  );
} 