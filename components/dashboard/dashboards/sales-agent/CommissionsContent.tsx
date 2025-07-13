'use client';

import { UserRole } from '@/types/roles';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommissionOverviewView from './CommissionOverviewView';
import CommissionCalculatorView from './CommissionCalculatorView';
import BonusTrackingView from './BonusTrackingView';
import CommissionHistoryView from './CommissionHistoryView';
import PerformanceRewardsView from './PerformanceRewardsView';
import CommissionReportsView from './CommissionReportsView';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface CommissionsContentProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function CommissionsContent({ user, activeTab, onTabChange }: CommissionsContentProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-4">
      <TabsList className="grid w-full grid-cols-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
        <TabsTrigger 
          value="commission-overview"
          className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="commission-calculator"
          className="data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Calculator
        </TabsTrigger>
        <TabsTrigger 
          value="bonus-tracking"
          className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Bonuses
        </TabsTrigger>
        <TabsTrigger 
          value="commission-history"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          History
        </TabsTrigger>
        <TabsTrigger 
          value="performance-rewards"
          className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Rewards
        </TabsTrigger>
        <TabsTrigger 
          value="commission-reports"
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all duration-200"
        >
          Reports
        </TabsTrigger>
      </TabsList>

      <TabsContent value="commission-overview" className="space-y-4">
        <CommissionOverviewView user={user} />
      </TabsContent>

      <TabsContent value="commission-calculator" className="space-y-4">
        <CommissionCalculatorView user={user} />
      </TabsContent>

      <TabsContent value="bonus-tracking" className="space-y-4">
        <BonusTrackingView user={user} />
      </TabsContent>

      <TabsContent value="commission-history" className="space-y-4">
        <CommissionHistoryView user={user} />
      </TabsContent>

      <TabsContent value="performance-rewards" className="space-y-4">
        <PerformanceRewardsView user={user} />
      </TabsContent>

      <TabsContent value="commission-reports" className="space-y-4">
        <CommissionReportsView user={user} />
      </TabsContent>
    </Tabs>
  );
} 