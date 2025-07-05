'use client';

import StatsGrid from './StatsGrid';
import LeadTracker from '../../widgets/LeadTracker';
import PropertyListings from '../../widgets/PropertyListings';
import SalesPipeline from './SalesPipeline';

interface DashboardContentProps {
  widgetType: string;
}

export default function DashboardContent({ widgetType }: DashboardContentProps) {
  switch (widgetType) {
    case 'stats':
      return <StatsGrid />;
    case 'leads':
      return <LeadTracker />;
    case 'listings':
      return <PropertyListings />;
    case 'pipeline':
      return <SalesPipeline />;
    default:
      return <div>Widget not found</div>;
  }
} 