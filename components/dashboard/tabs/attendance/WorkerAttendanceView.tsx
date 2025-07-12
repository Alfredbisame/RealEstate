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
  Users,
  MapPin,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface WorkerAttendance {
  id: string;
  name: string;
  avatar?: string;
  position: string;
  department: string;
  clockIn: string;
  clockOut: string;
  status: 'present' | 'absent' | 'late' | 'half-day' | 'leave';
  productivity: number;
  hoursWorked: number;
  location: string;
  project: string;
  supervisor: string;
  notes?: string;
}

const mockWorkerAttendance: WorkerAttendance[] = [
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
    location: 'Site A - Block 3',
    project: 'Residential Complex',
    supervisor: 'John Supervisor'
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
    location: 'Site B - Block 1',
    project: 'Office Building',
    supervisor: 'Sarah Manager'
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
    location: 'Site A - Block 2',
    project: 'Residential Complex',
    supervisor: 'Mike Electric'
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
    location: 'Site C - Block 4',
    project: 'Shopping Mall',
    supervisor: 'David Plumbing'
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
    location: 'Site A - Block 1',
    project: 'Residential Complex',
    supervisor: 'John Supervisor'
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
    location: 'Site B - Block 2',
    project: 'Office Building',
    supervisor: 'Sarah Manager'
  }
];

export default function WorkerAttendanceView() {
  const [workers, setWorkers] = useState<WorkerAttendance[]>(mockWorkerAttendance);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'absent':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'late':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'half-day':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'leave':
        return <Calendar className="w-4 h-4 text-blue-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      present: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      absent: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      late: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'half-day': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      leave: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || worker.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || worker.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const attendanceStats = {
    present: workers.filter(w => w.status === 'present').length,
    absent: workers.filter(w => w.status === 'absent').length,
    late: workers.filter(w => w.status === 'late').length,
    halfDay: workers.filter(w => w.status === 'half-day').length,
    leave: workers.filter(w => w.status === 'leave').length,
    total: workers.length
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Daily Worker Attendance</h2>
          <p className="text-gray-600 dark:text-gray-300">Track individual worker attendance and productivity for today</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search workers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="present">Present</SelectItem>
              <SelectItem value="absent">Absent</SelectItem>
              <SelectItem value="late">Late</SelectItem>
              <SelectItem value="half-day">Half Day</SelectItem>
              <SelectItem value="leave">Leave</SelectItem>
            </SelectContent>
          </Select>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-40 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Construction">Construction</SelectItem>
              <SelectItem value="Electrical">Electrical</SelectItem>
              <SelectItem value="Plumbing">Plumbing</SelectItem>
              <SelectItem value="Finishing">Finishing</SelectItem>
              <SelectItem value="General">General</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Total Workers</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{attendanceStats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Present</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">{attendanceStats.present}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Late</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">{attendanceStats.late}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Half Day</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">{attendanceStats.halfDay}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Absent</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">{attendanceStats.absent}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Leave</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{attendanceStats.leave}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workers Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Worker Attendance Details</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {filteredWorkers.length} workers
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Worker</TableHead>
                  <TableHead className="dark:text-gray-300">Position</TableHead>
                  <TableHead className="dark:text-gray-300">Department</TableHead>
                  <TableHead className="dark:text-gray-300">Clock In</TableHead>
                  <TableHead className="dark:text-gray-300">Clock Out</TableHead>
                  <TableHead className="dark:text-gray-300">Status</TableHead>
                  <TableHead className="dark:text-gray-300">Hours</TableHead>
                  <TableHead className="dark:text-gray-300">Productivity</TableHead>
                  <TableHead className="dark:text-gray-300">Location</TableHead>
                  <TableHead className="dark:text-gray-300">Project</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.map((worker) => (
                  <TableRow key={worker.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={worker.avatar} />
                          <AvatarFallback>
                            {worker.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{worker.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{worker.supervisor}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{worker.position}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                        {worker.department}
                      </Badge>
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
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${worker.productivity}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium dark:text-gray-300">{worker.productivity}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{worker.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{worker.project}</span>
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