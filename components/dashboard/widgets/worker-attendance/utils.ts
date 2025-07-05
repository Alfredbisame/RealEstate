import { Worker, AttendanceStats, AttendanceAlert } from './types';

export const getStatusIcon = (status: Worker['status']) => {
  switch (status) {
    case 'present':
      return 'UserCheck';
    case 'absent':
      return 'UserX';
    case 'late':
      return 'Clock';
    default:
      return 'Users';
  }
};

export const getStatusColor = (status: Worker['status']) => {
  switch (status) {
    case 'present':
      return {
        text: 'text-green-600',
        bg: 'bg-green-100 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'text-green-600'
      };
    case 'absent':
      return {
        text: 'text-red-600',
        bg: 'bg-red-100 dark:bg-red-900/20',
        border: 'border-red-200 dark:border-red-800',
        icon: 'text-red-600'
      };
    case 'late':
      return {
        text: 'text-orange-600',
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        icon: 'text-orange-600'
      };
    default:
      return {
        text: 'text-gray-600',
        bg: 'bg-gray-100 dark:bg-gray-900/20',
        border: 'border-gray-200 dark:border-gray-800',
        icon: 'text-gray-600'
      };
  }
};

export const getStatusLabel = (status: Worker['status']) => {
  switch (status) {
    case 'present':
      return 'Present';
    case 'absent':
      return 'Absent';
    case 'late':
      return 'Late';
    default:
      return 'Unknown';
  }
};

export const calculateAttendanceStats = (workers: Worker[]): AttendanceStats => {
  const present = workers.filter(w => w.status === 'present').length;
  const late = workers.filter(w => w.status === 'late').length;
  const absent = workers.filter(w => w.status === 'absent').length;
  const total = workers.length;
  const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

  return {
    present,
    late,
    absent,
    total,
    percentage
  };
};

export const generateAttendanceAlerts = (workers: Worker[]): AttendanceAlert[] => {
  const alerts: AttendanceAlert[] = [];
  const now = new Date();
  const currentHour = now.getHours();

  workers.forEach(worker => {
    if (worker.status === 'late') {
      alerts.push({
        id: `late-${worker.id}`,
        type: 'late',
        message: `${worker.name} arrived late at ${worker.checkIn}`,
        workerId: worker.id,
        workerName: worker.name,
        timestamp: new Date().toISOString(),
        severity: 'medium'
      });
    }

    if (worker.status === 'absent') {
      alerts.push({
        id: `absent-${worker.id}`,
        type: 'absent',
        message: `${worker.name} is absent today`,
        workerId: worker.id,
        workerName: worker.name,
        timestamp: new Date().toISOString(),
        severity: 'high'
      });
    }

    // Check for overtime (assuming work day starts at 7 AM)
    if (worker.status === 'present' && currentHour > 17) {
      alerts.push({
        id: `overtime-${worker.id}`,
        type: 'overtime',
        message: `${worker.name} is working overtime`,
        workerId: worker.id,
        workerName: worker.name,
        timestamp: new Date().toISOString(),
        severity: 'low'
      });
    }
  });

  return alerts.sort((a, b) => {
    const severityOrder = { high: 3, medium: 2, low: 1 };
    return severityOrder[b.severity] - severityOrder[a.severity];
  });
};

export const formatTime = (time: string) => {
  if (time === '-') return time;
  
  try {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  } catch {
    return time;
  }
};

export const getTimeDifference = (checkIn: string) => {
  if (checkIn === '-') return null;
  
  try {
    const [hours, minutes] = checkIn.split(':').map(Number);
    const checkInTime = new Date();
    checkInTime.setHours(hours, minutes, 0, 0);
    
    const now = new Date();
    const diffMs = now.getTime() - checkInTime.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m`;
    }
    return `${diffMinutes}m`;
  } catch {
    return null;
  }
};

export const filterWorkers = (
  workers: Worker[],
  filters: {
    status: string[];
    site: string[];
    role: string[];
  }
) => {
  return workers.filter(worker => {
    const statusMatch = filters.status.length === 0 || filters.status.includes(worker.status);
    const siteMatch = filters.site.length === 0 || filters.site.includes(worker.site);
    const roleMatch = filters.role.length === 0 || filters.role.includes(worker.role);
    
    return statusMatch && siteMatch && roleMatch;
  });
};

export const sortWorkers = (workers: Worker[], sortBy: string, sortOrder: 'asc' | 'desc' = 'asc') => {
  return [...workers].sort((a, b) => {
    let aValue: any;
    let bValue: any;

    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'role':
        aValue = a.role.toLowerCase();
        bValue = b.role.toLowerCase();
        break;
      case 'site':
        aValue = a.site.toLowerCase();
        bValue = b.site.toLowerCase();
        break;
      case 'checkIn':
        aValue = a.checkIn === '-' ? '23:59' : a.checkIn;
        bValue = b.checkIn === '-' ? '23:59' : b.checkIn;
        break;
      case 'status':
        const statusOrder = { present: 1, late: 2, absent: 3 };
        aValue = statusOrder[a.status];
        bValue = statusOrder[b.status];
        break;
      default:
        return 0;
    }

    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
}; 