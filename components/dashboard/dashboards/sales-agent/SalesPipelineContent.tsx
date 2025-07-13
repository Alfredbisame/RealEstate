'use client';

import { UserRole } from '@/types/roles';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PipelineOverviewView from './PipelineOverviewView';
import DealStagesView from './DealStagesView';
import DealForecastingView from './DealForecastingView';
import DealAnalyticsView from './DealAnalyticsView';
import DealActivitiesView from './DealActivitiesView';
import DealReportsView from './DealReportsView';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SalesPipelineContentProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SalesPipelineContent({ user, activeTab, onTabChange }: SalesPipelineContentProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-4">
      <TabsList className="grid w-full grid-cols-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-1 rounded-lg border border-purple-200 dark:border-purple-800">
        <TabsTrigger 
          value="pipeline-overview"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="deal-stages"
          className="data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Deal Stages
        </TabsTrigger>
        <TabsTrigger 
          value="forecasting"
          className="data-[state=active]:bg-rose-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Forecasting
        </TabsTrigger>
        <TabsTrigger 
          value="analytics"
          className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger 
          value="activities"
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Activities
        </TabsTrigger>
        <TabsTrigger 
          value="reports"
          className="data-[state=active]:bg-fuchsia-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Reports
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pipeline-overview" className="space-y-4">
        <PipelineOverviewView user={user} />
      </TabsContent>

      <TabsContent value="deal-stages" className="space-y-4">
        <DealStagesView user={user} />
      </TabsContent>

      <TabsContent value="forecasting" className="space-y-4">
        <DealForecastingView user={user} />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <DealAnalyticsView user={user} />
      </TabsContent>

      <TabsContent value="activities" className="space-y-4">
        <DealActivitiesView user={user} />
      </TabsContent>

      <TabsContent value="reports" className="space-y-4">
        <DealReportsView user={user} />
      </TabsContent>
    </Tabs>
  );
} 