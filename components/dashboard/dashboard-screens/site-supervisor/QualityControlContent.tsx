import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QualityInspectionsView from '../../tabs/quality-control/QualityInspectionsView';
import QualityIssuesView from '../../tabs/quality-control/QualityIssuesView';
import QualityReportsView from '../../tabs/quality-control/QualityReportsView';

interface QualityControlContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function QualityControlContent({ activeView, onViewChange }: QualityControlContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inspections" className="text-sm">
            Inspections
          </TabsTrigger>
          <TabsTrigger value="issues" className="text-sm">
            Quality Issues
          </TabsTrigger>
          <TabsTrigger value="reports" className="text-sm">
            Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inspections" className="space-y-4">
          <QualityInspectionsView />
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <QualityIssuesView />
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <QualityReportsView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 