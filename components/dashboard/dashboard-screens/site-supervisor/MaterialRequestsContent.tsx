import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MaterialRequestsView from '../../tabs/material-requests/MaterialRequestsView';
import MaterialApprovalsView from '../../tabs/material-requests/MaterialApprovalsView';
import MaterialInventoryView from '../../tabs/material-requests/MaterialInventoryView';

interface MaterialRequestsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function MaterialRequestsContent({ activeView, onViewChange }: MaterialRequestsContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="requests" className="text-sm">
            Material Requests
          </TabsTrigger>
          <TabsTrigger value="approvals" className="text-sm">
            Approvals
          </TabsTrigger>
          <TabsTrigger value="inventory" className="text-sm">
            Inventory
          </TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <MaterialRequestsView />
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <MaterialApprovalsView />
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <MaterialInventoryView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 