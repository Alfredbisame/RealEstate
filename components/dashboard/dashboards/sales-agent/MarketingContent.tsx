'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CampaignOverviewView from './CampaignOverviewView';
import EmailMarketingView from './EmailMarketingView';
import SocialMediaView from './SocialMediaView';
import LeadGenerationView from './LeadGenerationView';
import AnalyticsView from './AnalyticsView';
import ContentToolsView from './ContentToolsView';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole; // <-- use UserRole, not string
  avatar?: string;
}

interface MarketingContentProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function MarketingContent({ user, activeTab, onTabChange }: MarketingContentProps) {
  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger 
            value="campaign-overview"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Campaign Overview
          </TabsTrigger>
          <TabsTrigger 
            value="email-marketing"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Email Marketing
          </TabsTrigger>
          <TabsTrigger 
            value="social-media"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Social Media
          </TabsTrigger>
          <TabsTrigger 
            value="lead-generation"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Lead Generation
          </TabsTrigger>
          <TabsTrigger 
            value="analytics"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger 
            value="content-tools"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Content Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campaign-overview" className="mt-6">
          <CampaignOverviewView user={user} />
        </TabsContent>

        <TabsContent value="email-marketing" className="mt-6">
          <EmailMarketingView user={user} />
        </TabsContent>

        <TabsContent value="social-media" className="mt-6">
          <SocialMediaView user={user} />
        </TabsContent>

        <TabsContent value="lead-generation" className="mt-6">
          <LeadGenerationView user={user} />
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <AnalyticsView user={user} />
        </TabsContent>

        <TabsContent value="content-tools" className="mt-6">
          <ContentToolsView user={user} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 