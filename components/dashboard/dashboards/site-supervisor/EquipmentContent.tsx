'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EquipmentInventoryView from '../../tabs/equipment/EquipmentInventoryView';
import MaintenanceTrackingView from '../../tabs/equipment/MaintenanceTrackingView';

interface EquipmentContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function EquipmentContent({ activeView, onViewChange }: EquipmentContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger 
            value="inventory" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Equipment Inventory
          </TabsTrigger>
          <TabsTrigger 
            value="maintenance" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700"
          >
            Maintenance Tracking
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="inventory" className="mt-6">
          <EquipmentInventoryView />
        </TabsContent>
        
        <TabsContent value="maintenance" className="mt-6">
          <MaintenanceTrackingView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 