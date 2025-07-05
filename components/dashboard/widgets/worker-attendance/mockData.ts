import { Worker, AttendanceAlert } from './types';

export const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Kwame Asante',
    role: 'Mason',
    status: 'present',
    checkIn: '07:30',
    site: 'East Wing',
    avatar: '/avatars/kwame.jpg',
    phone: '+233 24 123 4567',
    email: 'kwame.asante@company.com',
    department: 'Construction',
    shift: 'morning',
    lastCheckIn: '2024-01-15T07:30:00Z',
    totalHours: 8.5,
    overtime: 1.5
  },
  {
    id: '2',
    name: 'Ama Osei',
    role: 'Electrician',
    status: 'present',
    checkIn: '07:45',
    site: 'West Wing',
    avatar: '/avatars/ama.jpg',
    phone: '+233 20 987 6543',
    email: 'ama.osei@company.com',
    department: 'Electrical',
    shift: 'morning',
    lastCheckIn: '2024-01-15T07:45:00Z',
    totalHours: 8.0,
    overtime: 0.5
  },
  {
    id: '3',
    name: 'Kojo Mensah',
    role: 'Carpenter',
    status: 'absent',
    checkIn: '-',
    site: '-',
    avatar: '/avatars/kojo.jpg',
    phone: '+233 26 555 1234',
    email: 'kojo.mensah@company.com',
    department: 'Woodwork',
    shift: 'morning',
    lastCheckIn: '2024-01-14T07:30:00Z',
    totalHours: 0,
    overtime: 0
  },
  {
    id: '4',
    name: 'Akosua Frimpong',
    role: 'Plumber',
    status: 'present',
    checkIn: '08:00',
    site: 'Main Building',
    avatar: '/avatars/akosua.jpg',
    phone: '+233 27 777 8888',
    email: 'akosua.frimpong@company.com',
    department: 'Plumbing',
    shift: 'morning',
    lastCheckIn: '2024-01-15T08:00:00Z',
    totalHours: 7.5,
    overtime: 0
  },
  {
    id: '5',
    name: 'Yaw Boateng',
    role: 'Laborer',
    status: 'late',
    checkIn: '09:15',
    site: 'East Wing',
    avatar: '/avatars/yaw.jpg',
    phone: '+233 23 444 5555',
    email: 'yaw.boateng@company.com',
    department: 'General Labor',
    shift: 'morning',
    lastCheckIn: '2024-01-15T09:15:00Z',
    totalHours: 6.5,
    overtime: 0
  },
  {
    id: '6',
    name: 'Efua Addo',
    role: 'Painter',
    status: 'present',
    checkIn: '07:20',
    site: 'North Wing',
    avatar: '/avatars/efua.jpg',
    phone: '+233 25 666 7777',
    email: 'efua.addo@company.com',
    department: 'Finishing',
    shift: 'morning',
    lastCheckIn: '2024-01-15T07:20:00Z',
    totalHours: 9.0,
    overtime: 2.0
  },
  {
    id: '7',
    name: 'Kofi Owusu',
    role: 'Welder',
    status: 'absent',
    checkIn: '-',
    site: '-',
    avatar: '/avatars/kofi.jpg',
    phone: '+233 28 999 0000',
    email: 'kofi.owusu@company.com',
    department: 'Metalwork',
    shift: 'morning',
    lastCheckIn: '2024-01-14T07:30:00Z',
    totalHours: 0,
    overtime: 0
  },
  {
    id: '8',
    name: 'Abena Kufuor',
    role: 'Foreman',
    status: 'present',
    checkIn: '06:45',
    site: 'All Sites',
    avatar: '/avatars/abena.jpg',
    phone: '+233 29 111 2222',
    email: 'abena.kufuor@company.com',
    department: 'Management',
    shift: 'morning',
    lastCheckIn: '2024-01-15T06:45:00Z',
    totalHours: 10.5,
    overtime: 3.5
  },
  {
    id: '9',
    name: 'Kwesi Anane',
    role: 'Security Guard',
    status: 'present',
    checkIn: '06:00',
    site: 'Main Gate',
    avatar: '/avatars/kwesi.jpg',
    phone: '+233 30 333 4444',
    email: 'kwesi.anane@company.com',
    department: 'Security',
    shift: 'morning',
    lastCheckIn: '2024-01-15T06:00:00Z',
    totalHours: 12.0,
    overtime: 4.0
  },
  {
    id: '10',
    name: 'Adwoa Sarpong',
    role: 'Cleaner',
    status: 'late',
    checkIn: '08:30',
    site: 'Office Building',
    avatar: '/avatars/adwoa.jpg',
    phone: '+233 31 555 6666',
    email: 'adwoa.sarpong@company.com',
    department: 'Maintenance',
    shift: 'morning',
    lastCheckIn: '2024-01-15T08:30:00Z',
    totalHours: 7.0,
    overtime: 0
  }
];

export const mockAttendanceAlerts: AttendanceAlert[] = [
  {
    id: 'alert-1',
    type: 'late',
    message: 'Yaw Boateng arrived late at 09:15',
    workerId: '5',
    workerName: 'Yaw Boateng',
    timestamp: '2024-01-15T09:15:00Z',
    severity: 'medium'
  },
  {
    id: 'alert-2',
    type: 'absent',
    message: 'Kojo Mensah is absent today',
    workerId: '3',
    workerName: 'Kojo Mensah',
    timestamp: '2024-01-15T08:00:00Z',
    severity: 'high'
  },
  {
    id: 'alert-3',
    type: 'absent',
    message: 'Kofi Owusu is absent today',
    workerId: '7',
    workerName: 'Kofi Owusu',
    timestamp: '2024-01-15T08:00:00Z',
    severity: 'high'
  },
  {
    id: 'alert-4',
    type: 'overtime',
    message: 'Abena Kufuor is working overtime',
    workerId: '8',
    workerName: 'Abena Kufuor',
    timestamp: '2024-01-15T17:30:00Z',
    severity: 'low'
  },
  {
    id: 'alert-5',
    type: 'overtime',
    message: 'Kwesi Anane is working overtime',
    workerId: '9',
    workerName: 'Kwesi Anane',
    timestamp: '2024-01-15T18:00:00Z',
    severity: 'low'
  }
];

export const mockSites = [
  'East Wing',
  'West Wing',
  'North Wing',
  'Main Building',
  'Office Building',
  'Main Gate',
  'All Sites'
];

export const mockRoles = [
  'Mason',
  'Electrician',
  'Carpenter',
  'Plumber',
  'Laborer',
  'Painter',
  'Welder',
  'Foreman',
  'Security Guard',
  'Cleaner'
];

export const mockDepartments = [
  'Construction',
  'Electrical',
  'Woodwork',
  'Plumbing',
  'General Labor',
  'Finishing',
  'Metalwork',
  'Management',
  'Security',
  'Maintenance'
]; 