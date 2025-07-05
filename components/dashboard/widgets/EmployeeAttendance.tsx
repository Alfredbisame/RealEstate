'use client';

import { Users, UserCheck, Clock, Calendar } from 'lucide-react';

export default function EmployeeAttendance() {
  const attendanceData = [
    { name: 'Kwame Asante', department: 'Construction', status: 'present', checkIn: '08:00', checkOut: '-' },
    { name: 'Ama Osei', department: 'Accounting', status: 'present', checkIn: '08:15', checkOut: '-' },
    { name: 'Kojo Mensah', department: 'Sales', status: 'absent', checkIn: '-', checkOut: '-' },
    { name: 'Akosua Frimpong', department: 'HR', status: 'present', checkIn: '07:45', checkOut: '-' },
    { name: 'Yaw Boateng', department: 'Construction', status: 'late', checkIn: '09:30', checkOut: '-' },
  ];

  const stats = {
    total: 48,
    present: 42,
    absent: 3,
    late: 3,
    onTime: 39
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present': return <UserCheck className="w-4 h-4 text-green-600" />;
      case 'absent': return <Clock className="w-4 h-4 text-red-600" />;
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

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-pink-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Employee Attendance</h3>
      </div>

      {/* Attendance Stats */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-blue-600">{stats.present}</p>
          <p className="text-xs text-blue-700 dark:text-blue-400">Present</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-green-600">{stats.onTime}</p>
          <p className="text-xs text-green-700 dark:text-green-400">On Time</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-orange-600">{stats.late}</p>
          <p className="text-xs text-orange-700 dark:text-orange-400">Late</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-red-600">{stats.absent}</p>
          <p className="text-xs text-red-700 dark:text-red-400">Absent</p>
        </div>
      </div>

      {/* Employee List */}
      <div className="space-y-2 overflow-y-auto max-h-64">
        {attendanceData.map((employee, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              {getStatusIcon(employee.status)}
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{employee.department}</p>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(employee.status)}`}>
                {employee.status}
              </span>
              {employee.checkIn !== '-' && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">In: {employee.checkIn}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Attendance Rate */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Attendance Rate</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {((stats.present / stats.total) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(stats.present / stats.total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}