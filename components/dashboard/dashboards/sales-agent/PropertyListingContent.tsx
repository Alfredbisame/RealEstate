'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ActiveListingsView from './ActiveListingsView';
import PropertyDetailsView from './PropertyDetailsView';
import PhotoGalleryView from './PhotoGalleryView';
import PricingView from './PricingView';
import InquiriesView from './InquiriesView';
import AnalyticsView from './PropertyAnalyticsView';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface PropertyListingContentProps {
  user: User;
}

export default function PropertyListingContent({ user }: PropertyListingContentProps) {
  const [activeTab, setActiveTab] = useState('active-listings');

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger 
            value="active-listings"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Active Listings
          </TabsTrigger>
          <TabsTrigger 
            value="property-details"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Property Details
          </TabsTrigger>
          <TabsTrigger 
            value="photo-gallery"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Photo Gallery
          </TabsTrigger>
          <TabsTrigger 
            value="pricing"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Pricing
          </TabsTrigger>
          <TabsTrigger 
            value="inquiries"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Inquiries
          </TabsTrigger>
          <TabsTrigger 
            value="analytics"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active-listings" className="mt-6">
          <ActiveListingsView user={user} />
        </TabsContent>

        <TabsContent value="property-details" className="mt-6">
          <PropertyDetailsView user={user} />
        </TabsContent>

        <TabsContent value="photo-gallery" className="mt-6">
          <PhotoGalleryView user={user} />
        </TabsContent>

        <TabsContent value="pricing" className="mt-6">
          <PricingView user={user} />
        </TabsContent>

        <TabsContent value="inquiries" className="mt-6">
          <InquiriesView user={user} />
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <AnalyticsView user={user} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 