'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IncidentReportsView from './IncidentReportsView';
import ComplianceTrackingView from './ComplianceTrackingView';

interface SafetyContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function SafetyContent({ activeView, onViewChange }: SafetyContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger 
            value="incidents" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Incidents
          </TabsTrigger>
          <TabsTrigger 
            value="compliance" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Compliance
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="incidents" className="mt-6">
          <IncidentReportsView />
        </TabsContent>
        
        <TabsContent value="compliance" className="mt-6">
          <ComplianceTrackingView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 