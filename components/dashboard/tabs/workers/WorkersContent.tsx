'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WorkerAttendanceView from './WorkerAttendanceView';
import DisciplinaryActionsView from './DisciplinaryActionsView';
import EmployeeRecognitionView from './EmployeeRecognitionView';

interface WorkersContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function WorkersContent({ activeView, onViewChange }: WorkersContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger 
            value="attendance" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Worker Attendance
          </TabsTrigger>
          <TabsTrigger 
            value="disciplinary" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Disciplinary Actions
          </TabsTrigger>
          <TabsTrigger 
            value="recognition" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Employee Recognition
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="attendance" className="mt-6">
          <WorkerAttendanceView />
        </TabsContent>
        
        <TabsContent value="disciplinary" className="mt-6">
          <DisciplinaryActionsView />
        </TabsContent>
        
        <TabsContent value="recognition" className="mt-6">
          <EmployeeRecognitionView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 