export type AttendanceStatus = 'present' | 'absent' | 'late' | 'on_leave';

export interface Employee {
  name: string;
  department: string;
  status: AttendanceStatus;
  checkIn: string;
  checkOut: string;
  avatar?: string;
}

export interface AttendanceStats {
  total: number;
  present: number;
  absent: number;
  late: number;
  onTime: number;
  onLeave: number;
}

export interface AttendanceRate {
  percentage: number;
  present: number;
  total: number;
}

export interface EmployeeAttendanceProps {
  data?: Employee[];
  stats?: AttendanceStats;
  className?: string;
} 