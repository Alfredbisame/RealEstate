export interface Worker {
  id: string;
  name: string;
  role: string;
  status: 'present' | 'absent' | 'late';
  checkIn: string;
  site: string;
  avatar?: string;
  phone?: string;
  email?: string;
  department?: string;
  shift?: 'morning' | 'afternoon' | 'night';
  lastCheckIn?: string;
  totalHours?: number;
  overtime?: number;
}

export interface AttendanceStats {
  present: number;
  late: number;
  absent: number;
  total: number;
  percentage: number;
}

export interface AttendanceSummary {
  stats: AttendanceStats;
  recentActivity: Worker[];
  alerts: AttendanceAlert[];
}

export interface AttendanceAlert {
  id: string;
  type: 'late' | 'absent' | 'overtime' | 'early_departure';
  message: string;
  workerId: string;
  workerName: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

export interface WorkerAttendanceProps {
  workers?: Worker[];
  showDetails?: boolean;
  showActions?: boolean;
  maxWorkers?: number;
  className?: string;
  onWorkerClick?: (worker: Worker) => void;
  onStatusChange?: (workerId: string, status: Worker['status']) => void;
}

export interface AttendanceSummaryProps {
  stats: AttendanceStats;
  className?: string;
}

export interface WorkerCardProps {
  worker: Worker;
  showDetails?: boolean;
  showActions?: boolean;
  onClick?: (worker: Worker) => void;
  onStatusChange?: (workerId: string, status: Worker['status']) => void;
  className?: string;
}

export interface WorkerListProps {
  workers: Worker[];
  showDetails?: boolean;
  showActions?: boolean;
  maxWorkers?: number;
  onWorkerClick?: (worker: Worker) => void;
  onStatusChange?: (workerId: string, status: Worker['status']) => void;
  className?: string;
}

export interface AttendanceHeaderProps {
  title?: string;
  subtitle?: string;
  showRefresh?: boolean;
  onRefresh?: () => void;
  className?: string;
}

export interface AttendanceAlertsProps {
  alerts: AttendanceAlert[];
  maxAlerts?: number;
  className?: string;
}

export interface AttendanceFiltersProps {
  filters: {
    status: string[];
    site: string[];
    role: string[];
  };
  onFilterChange: (filterType: string, value: string) => void;
  className?: string;
} 