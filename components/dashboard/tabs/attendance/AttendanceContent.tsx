'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AttendanceReportsView from './AttendanceReportsView';
import WorkerAttendanceView from './WorkerAttendanceView';

interface AttendanceContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function AttendanceContent({ activeView, onViewChange }: AttendanceContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger 
            value="reports" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Attendance Reports
          </TabsTrigger>
          <TabsTrigger 
            value="workers" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Worker Attendance
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="reports" className="mt-6">
          <AttendanceReportsView />
        </TabsContent>
        
        <TabsContent value="workers" className="mt-6">
          <WorkerAttendanceView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 