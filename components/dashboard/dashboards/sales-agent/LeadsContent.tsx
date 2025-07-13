'use client';

import { User } from '@/types/roles';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AllLeadsView from './AllLeadsView';
import HotLeadsView from './HotLeadsView';
import LeadSourcesView from './LeadSourcesView';
import LeadScoringView from './LeadScoringView';
import LeadAnalyticsView from './LeadAnalyticsView';
import LeadFollowUpView from './LeadFollowUpView';

interface LeadsContentProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function LeadsContent({ user, activeTab, onTabChange }: LeadsContentProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-4">
      <TabsList className="grid w-full grid-cols-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-1 rounded-lg border border-blue-200 dark:border-blue-800">
        <TabsTrigger 
          value="all-leads"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          All Leads
        </TabsTrigger>
        <TabsTrigger 
          value="hot-leads"
          className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Hot Leads
        </TabsTrigger>
        <TabsTrigger 
          value="sources"
          className="data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Sources
        </TabsTrigger>
        <TabsTrigger 
          value="scoring"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Scoring
        </TabsTrigger>
        <TabsTrigger 
          value="analytics"
          className="data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger 
          value="follow-up"
          className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Follow-up
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all-leads" className="space-y-4">
        <AllLeadsView user={user} />
      </TabsContent>

      <TabsContent value="hot-leads" className="space-y-4">
        <HotLeadsView user={user} />
      </TabsContent>

      <TabsContent value="sources" className="space-y-4">
        <LeadSourcesView user={user} />
      </TabsContent>

      <TabsContent value="scoring" className="space-y-4">
        <LeadScoringView user={user} />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <LeadAnalyticsView user={user} />
      </TabsContent>

      <TabsContent value="follow-up" className="space-y-4">
        <LeadFollowUpView user={user} />
      </TabsContent>
    </Tabs>
  );
} 