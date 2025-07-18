import { useState, useMemo } from 'react';
import { Download } from 'lucide-react';
import AttendanceHeader from '../widgets/employee-attendance/AttendanceHeader';
import AttendanceStats from '../widgets/employee-attendance/AttendanceStats';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { mockAttendanceStats, mockAttendanceData } from '../widgets/employee-attendance/mockData';
import { mockAttendanceAlerts, mockDepartments, mockRoles } from '../widgets/worker-attendance/mockData';
import { AttendanceAlerts } from '../widgets/worker-attendance/AttendanceAlerts';
import AttendanceReportsView from './attendance/AttendanceReportsView';
import { Card, CardContent } from '@/components/ui/card';

export default function HRManagerAttendanceTab() {
  const [activeView, setActiveView] = useState('late');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [selectedRole, setSelectedRole] = useState('all');

  // Filter late alerts by department/role
  const filteredLateAlerts = useMemo(() => {
    return mockAttendanceAlerts.filter(a => {
      const employee = mockAttendanceData.find(e => e.name === a.workerName);
      const departmentMatch = selectedDepartment === 'all' || (employee && employee.department === selectedDepartment);
      // For demo, role is not in mockAttendanceData, so skip role filter for now
      return a.type === 'late' && departmentMatch;
    });
  }, [selectedDepartment]);
  
  // Frequent latecomers (top 3 by count)
  const frequentLatecomers = useMemo(() => {
    const lateCounts: Record<string, { name: string; count: number; avatar?: string; department?: string }> = {};
    mockAttendanceData.forEach(e => {
      if (e.status === 'late') {
        if (!lateCounts[e.name]) lateCounts[e.name] = { name: e.name, count: 0, avatar: e.avatar, department: e.department };
        lateCounts[e.name].count++;
      }
    });
    return Object.values(lateCounts)
      .filter(e => selectedDepartment === 'all' || e.department === selectedDepartment)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  }, [selectedDepartment]);

  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
              Attendance Management
            </h1>
            <p className="opacity-90 text-pink-50">
              Track late arrivals and view monthly attendance reports for your staff.
            </p>
          </div>
          <button
            className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Download Attendance Report</span>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="w-48">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {mockDepartments.map(dep => (
                <SelectItem key={dep} value={dep}>{dep}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Role filter is present for future extensibility */}
        {/* <div className="w-48">
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger>
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {mockRoles.map(role => (
                <SelectItem key={role} value={role}>{role}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}
      </div>
      <AttendanceHeader title="Attendance" />
      <AttendanceStats stats={mockAttendanceStats} />
      {/* Frequent Latecomers */}
      {frequentLatecomers.length > 0 && (
        <Card className="bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-700">
          <CardContent className="py-4">
            <div className="flex items-center gap-4">
              <span className="text-yellow-600 dark:text-yellow-400 text-xl font-bold">⚠️ Frequent Latecomers:</span>
              {frequentLatecomers.map(e => (
                <div key={e.name} className="flex items-center gap-2">
                  <img src={e.avatar} alt={e.name} className="w-8 h-8 rounded-full border border-yellow-300" />
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">{e.name}</span>
                  <span className="text-xs text-yellow-700 dark:text-yellow-300">({e.count}x)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="late" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            Late Arrival Tracking
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            Attendance Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="late" className="mt-6">
          <AttendanceAlerts alerts={filteredLateAlerts} />
        </TabsContent>
        <TabsContent value="reports" className="mt-6">
          <AttendanceReportsView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 