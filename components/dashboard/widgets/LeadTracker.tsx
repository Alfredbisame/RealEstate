'use client';

import { Lead } from './lead-tracker/types';
import { mockLeads } from './lead-tracker/mockData';
import LeadHeader from './lead-tracker/LeadHeader';
import LeadContent from './lead-tracker/LeadContent';

interface LeadTrackerProps {
  leads?: Lead[];
  className?: string;
}

export default function LeadTracker({ 
  leads = mockLeads, 
  className = "" 
}: LeadTrackerProps) {
  return (
    <div className={`h-full ${className}`}>
      <LeadHeader />
      <LeadContent leads={leads} />
    </div>
  );
}