'use client';

import { useState } from 'react';
import { 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Search, 
  Filter, 
  Download,
  Eye,
  FileText,
  Users,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DepartmentReport {
  id: string;
  department: string;
  totalWorkers: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  attendanceRate: number;
  averageHours: number;
  productivity: number;
  month: string;
  year: string;
}

const mockDepartmentReports: DepartmentReport[] = [
  {
    id: '1',
    department: 'Construction',
    totalWorkers: 45,
    presentDays: 1080,
    absentDays: 45,
    lateDays: 23,
    attendanceRate: 95.8,
    averageHours: 8.2,
    productivity: 92.5,
    month: 'January',
    year: '2024'
  },
  {
    id: '2',
    department: 'Electrical',
    totalWorkers: 28,
    presentDays: 672,
    absentDays: 28,
    lateDays: 15,
    attendanceRate: 96.0,
    averageHours: 8.5,
    productivity: 94.2,
    month: 'January',
    year: '2024'
  },
  {
    id: '3',
    department: 'Plumbing',
    totalWorkers: 32,
    presentDays: 768,
    absentDays: 32,
    lateDays: 18,
    attendanceRate: 96.0,
    averageHours: 8.3,
    productivity: 91.8,
    month: 'January',
    year: '2024'
  },
  {
    id: '4',
    department: 'Finishing',
    totalWorkers: 38,
    presentDays: 912,
    absentDays: 38,
    lateDays: 20,
    attendanceRate: 96.0,
    averageHours: 8.0,
    productivity: 89.5,
    month: 'January',
    year: '2024'
  },
  {
    id: '5',
    department: 'General Labor',
    totalWorkers: 25,
    presentDays: 600,
    absentDays: 25,
    lateDays: 12,
    attendanceRate: 96.0,
    averageHours: 7.8,
    productivity: 87.3,
    month: 'January',
    year: '2024'
  }
];

export default function AttendanceReportsView() {
  const [reports, setReports] = useState<DepartmentReport[]>(mockDepartmentReports);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || report.month === selectedMonth;
    const matchesYear = report.year === selectedYear;
    return matchesSearch && matchesMonth && matchesYear;
  });

  const overallStats = {
    totalWorkers: reports.reduce((sum, r) => sum + r.totalWorkers, 0),
    totalPresentDays: reports.reduce((sum, r) => sum + r.presentDays, 0),
    totalAbsentDays: reports.reduce((sum, r) => sum + r.absentDays, 0),
    averageAttendanceRate: reports.reduce((sum, r) => sum + r.attendanceRate, 0) / reports.length
  };

  const getAttendanceColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600 dark:text-green-400';
    if (rate >= 90) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getProductivityColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600 dark:text-green-400';
    if (rate >= 80) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Monthly Attendance Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Comprehensive attendance summaries by department</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Months</SelectItem>
              <SelectItem value="January">January</SelectItem>
              <SelectItem value="February">February</SelectItem>
              <SelectItem value="March">March</SelectItem>
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

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Total Workers</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{overallStats.totalWorkers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Present Days</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{overallStats.totalPresentDays}</p>
              </div>
              <Clock className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Absent Days</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{overallStats.totalAbsentDays}</p>
              </div>
              <Calendar className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Avg. Attendance</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{overallStats.averageAttendanceRate.toFixed(1)}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Reports Table */}
      <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="dark:text-white">Department Attendance Reports</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {filteredReports.length} departments
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">Department</TableHead>
                  <TableHead className="dark:text-gray-300">Workers</TableHead>
                  <TableHead className="dark:text-gray-300">Present Days</TableHead>
                  <TableHead className="dark:text-gray-300">Absent Days</TableHead>
                  <TableHead className="dark:text-gray-300">Late Days</TableHead>
                  <TableHead className="dark:text-gray-300">Attendance Rate</TableHead>
                  <TableHead className="dark:text-gray-300">Avg. Hours</TableHead>
                  <TableHead className="dark:text-gray-300">Productivity</TableHead>
                  <TableHead className="dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id} className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{report.department}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{report.month} {report.year}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium dark:text-gray-300">{report.totalWorkers}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">{report.presentDays}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-red-600 dark:text-red-400 font-medium">{report.absentDays}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">{report.lateDays}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getAttendanceColor(report.attendanceRate)} bg-green-50 dark:bg-green-900/20`}>
                        {report.attendanceRate}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium dark:text-gray-300">{report.averageHours}h</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getProductivityColor(report.productivity)} bg-blue-50 dark:bg-blue-900/20`}>
                        {report.productivity}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="dark:text-gray-200 dark:hover:text-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
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