import { AttendanceStatus, AttendanceStats, AttendanceRate } from './types';

export const getStatusIcon = (status: AttendanceStatus) => {
  const iconClasses = {
    present: 'w-4 h-4 text-green-600 dark:text-green-400',
    absent: 'w-4 h-4 text-red-600 dark:text-red-400',
    late: 'w-4 h-4 text-orange-600 dark:text-orange-400',
    on_leave: 'w-4 h-4 text-blue-600 dark:text-blue-400'
  };
  
  return iconClasses[status] || 'w-4 h-4 text-gray-600 dark:text-gray-400';
};

export const getStatusColor = (status: AttendanceStatus) => {
  const colorClasses = {
    present: 'text-green-600 bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    absent: 'text-red-600 bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    late: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    on_leave: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  };
  
  return colorClasses[status] || 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
};

export const getStatusLabel = (status: AttendanceStatus) => {
  const labels = {
    present: 'Present',
    absent: 'Absent',
    late: 'Late',
    on_leave: 'On Leave'
  };
  
  return labels[status] || 'Unknown';
};

export const calculateAttendanceRate = (stats: AttendanceStats): AttendanceRate => {
  const percentage = stats.total > 0 ? (stats.present / stats.total) * 100 : 0;
  
  return {
    percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal place
    present: stats.present,
    total: stats.total
  };
};

export const getDepartmentColor = (department: string) => {
  const colors: { [key: string]: string } = {
    'Construction': 'text-orange-600 dark:text-orange-400',
    'Accounting': 'text-blue-600 dark:text-blue-400',
    'Sales': 'text-green-600 dark:text-green-400',
    'HR': 'text-purple-600 dark:text-purple-400',
    'IT': 'text-indigo-600 dark:text-indigo-400',
    'Marketing': 'text-pink-600 dark:text-pink-400'
  };
  
  return colors[department] || 'text-gray-600 dark:text-gray-400';
};

export const formatTime = (time: string) => {
  if (time === '-') return 'Not checked in';
  return time;
};

export const getTimeStatus = (checkIn: string) => {
  if (checkIn === '-') return 'not-checked-in';
  
  const checkInTime = new Date(`2000-01-01T${checkIn}`);
  const standardTime = new Date('2000-01-01T08:00');
  
  if (checkInTime <= standardTime) return 'on-time';
  if (checkInTime <= new Date('2000-01-01T09:00')) return 'slightly-late';
  return 'late';
}; 