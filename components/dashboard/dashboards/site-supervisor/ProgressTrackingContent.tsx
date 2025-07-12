import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProgressOverviewView from '../../tabs/progress-tracking/ProgressOverviewView';
import MilestoneTrackingView from '../../tabs/progress-tracking/MilestoneTrackingView';
import TaskProgressView from '../../tabs/progress-tracking/TaskProgressView';

interface ProgressTrackingContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ProgressTrackingContent({ activeView, onViewChange }: ProgressTrackingContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="text-sm">
            Progress Overview
          </TabsTrigger>
          <TabsTrigger value="milestones" className="text-sm">
            Milestone Tracking
          </TabsTrigger>
          <TabsTrigger value="tasks" className="text-sm">
            Task Progress
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ProgressOverviewView />
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <MilestoneTrackingView />
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <TaskProgressView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 