'use client';

import { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Search, 
  Filter, 
  Download,
  Calendar,
  TrendingUp,
  UserCheck,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Worker {
  id: string;
  name: string;
  avatar?: string;
  position: string;
  department: string;
  clockIn: string;
  clockOut: string;
  status: 'present' | 'absent' | 'late' | 'half-day';
  productivity: number;
  hoursWorked: number;
  location: string;
}

const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Kwame Mensah',
    position: 'Mason',
    department: 'Construction',
    clockIn: '07:45',
    clockOut: '17:30',
    status: 'present',
    productivity: 95,
    hoursWorked: 9.5,
    location: 'Site A - Block 3'
  },
  {
    id: '2',
    name: 'Ama Osei',
    position: 'Carpenter',
    department: 'Construction',
    clockIn: '08:15',
    clockOut: '17:00',
    status: 'late',
    productivity: 88,
    hoursWorked: 8.75,
    location: 'Site B - Block 1'
  },
  {
    id: '3',
    name: 'Kofi Addo',
    position: 'Electrician',
    department: 'Electrical',
    clockIn: '07:30',
    clockOut: '17:45',
    status: 'present',
    productivity: 92,
    hoursWorked: 10.25,
    location: 'Site A - Block 2'
  },
  {
    id: '4',
    name: 'Efua Tetteh',
    position: 'Plumber',
    department: 'Plumbing',
    clockIn: '08:00',
    clockOut: '17:15',
    status: 'present',
    productivity: 89,
    hoursWorked: 9.25,
    location: 'Site C - Block 4'
  },
  {
    id: '5',
    name: 'Yaw Darko',
    position: 'Laborer',
    department: 'General',
    clockIn: '07:30',
    clockOut: '16:30',
    status: 'half-day',
    productivity: 78,
    hoursWorked: 9,
    location: 'Site A - Block 1'
  },
  {
    id: '6',
    name: 'Akosua Boateng',
    position: 'Painter',
    department: 'Finishing',
    clockIn: '08:30',
    clockOut: '17:30',
    status: 'late',
    productivity: 85,
    hoursWorked: 9,
    location: 'Site B - Block 2'
  }
];

export default function WorkerAttendanceView() {
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'absent':
        return <XCircle className="w-4 h-4 text-blue-500" />;
      case 'late':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />;
      case 'half-day':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      present: 'bg-blue-100 text-blue-800',
      absent: 'bg-blue-100 text-blue-800',
      late: 'bg-blue-100 text-blue-800',
      'half-day': 'bg-blue-100 text-blue-800'
    };
    return variants[status as keyof typeof variants] || 'bg-blue-100 text-blue-800';
  };

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || worker.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const attendanceStats = {
    present: workers.filter(w => w.status === 'present').length,
    absent: workers.filter(w => w.status === 'absent').length,
    late: workers.filter(w => w.status === 'late').length,
    halfDay: workers.filter(w => w.status === 'half-day').length,
    total: workers.length
  };

  return (
    <div className="space-y-6">
      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Present</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{attendanceStats.present}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Late</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{attendanceStats.late}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Half Day</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{attendanceStats.halfDay}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Absent</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{attendanceStats.absent}</p>
              </div>
              <XCircle className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workers Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Worker Attendance</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">Track daily attendance and punctuality</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search workers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Statuses</option>
                <option value="present">Present</option>
                <option value="late">Late</option>
                <option value="half-day">Half Day</option>
                <option value="absent">Absent</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-700">
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Worker</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Position</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clock In</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Clock Out</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Hours</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Productivity</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredWorkers.map((worker) => (
                  <TableRow key={worker.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={worker.avatar} />
                          <AvatarFallback>
                            {worker.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{worker.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{worker.department}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{worker.position}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(worker.status)}
                        <span className="font-mono text-sm dark:text-gray-300">{worker.clockIn}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono text-sm dark:text-gray-300">{worker.clockOut}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(worker.status)}>
                        {worker.status.charAt(0).toUpperCase() + worker.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium dark:text-gray-300">{worker.hoursWorked}h</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${worker.productivity}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium dark:text-gray-300">{worker.productivity}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{worker.location}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}