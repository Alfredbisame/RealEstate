'use client';

import { Users, UserCheck, UserX, Clock } from 'lucide-react';

export default function WorkerAttendance() {
  const workers = [
    { id: '1', name: 'Kwame Asante', role: 'Mason', status: 'present', checkIn: '07:30', site: 'East Wing' },
    { id: '2', name: 'Ama Osei', role: 'Electrician', status: 'present', checkIn: '07:45', site: 'West Wing' },
    { id: '3', name: 'Kojo Mensah', role: 'Carpenter', status: 'absent', checkIn: '-', site: '-' },
    { id: '4', name: 'Akosua Frimpong', role: 'Plumber', status: 'present', checkIn: '08:00', site: 'Main Building' },
    { id: '5', name: 'Yaw Boateng', role: 'Laborer', status: 'late', checkIn: '09:15', site: 'East Wing' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present': return <UserCheck className="w-4 h-4 text-green-600" />;
      case 'absent': return <UserX className="w-4 h-4 text-red-600" />;
      case 'late': return <Clock className="w-4 h-4 text-orange-600" />;
      default: return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'absent': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'late': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const presentCount = workers.filter(w => w.status === 'present').length;
  const lateCount = workers.filter(w => w.status === 'late').length;
  const absentCount = workers.filter(w => w.status === 'absent').length;

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Worker Attendance</h3>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-green-600">{presentCount}</p>
          <p className="text-sm text-green-700 dark:text-green-400">Present</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-orange-600">{lateCount}</p>
          <p className="text-sm text-orange-700 dark:text-orange-400">Late</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-600">{absentCount}</p>
          <p className="text-sm text-red-700 dark:text-red-400">Absent</p>
        </div>
      </div>

      {/* Worker List */}
      <div className="space-y-2 overflow-y-auto max-h-48">
        {workers.map((worker) => (
          <div key={worker.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              {getStatusIcon(worker.status)}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{worker.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{worker.role}</p>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(worker.status)}`}>
                {worker.status}
              </span>
              {worker.checkIn !== '-' && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{worker.checkIn}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}