import { Employee, AttendanceStats } from './types';

export const mockAttendanceData: Employee[] = [
  { 
    name: 'Kwame Asante', 
    department: 'Construction', 
    status: 'present', 
    checkIn: '08:00', 
    checkOut: '-',
    avatar: '/avatars/kwame.jpg'
  },
  { 
    name: 'Ama Osei', 
    department: 'Accounting', 
    status: 'present', 
    checkIn: '08:15', 
    checkOut: '-',
    avatar: '/avatars/ama.jpg'
  },
  { 
    name: 'Kojo Mensah', 
    department: 'Sales', 
    status: 'absent', 
    checkIn: '-', 
    checkOut: '-',
    avatar: '/avatars/kojo.jpg'
  },
  { 
    name: 'Akosua Frimpong', 
    department: 'HR', 
    status: 'present', 
    checkIn: '07:45', 
    checkOut: '-',
    avatar: '/avatars/akosua.jpg'
  },
  { 
    name: 'Yaw Boateng', 
    department: 'Construction', 
    status: 'late', 
    checkIn: '09:30', 
    checkOut: '-',
    avatar: '/avatars/yaw.jpg'
  },
  { 
    name: 'Efua Addo', 
    department: 'IT', 
    status: 'present', 
    checkIn: '08:05', 
    checkOut: '-',
    avatar: '/avatars/efua.jpg'
  },
  { 
    name: 'Kofi Owusu', 
    department: 'Marketing', 
    status: 'on_leave', 
    checkIn: '-', 
    checkOut: '-',
    avatar: '/avatars/kofi.jpg'
  },
  { 
    name: 'Abena Kufuor', 
    department: 'Sales', 
    status: 'present', 
    checkIn: '08:20', 
    checkOut: '-',
    avatar: '/avatars/abena.jpg'
  }
];

export const mockAttendanceStats: AttendanceStats = {
  total: 48,
  present: 42,
  absent: 3,
  late: 3,
  onTime: 39,
  onLeave: 2
}; 