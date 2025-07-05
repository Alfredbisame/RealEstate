'use client';

import { useState } from 'react';
import { Lead } from './types';
import { calculatePipelineStats } from './utils';
import LeadList from './LeadList';
import PipelineSummary from './PipelineSummary';
import LeadStats from './LeadStats';

interface LeadContentProps {
  leads: Lead[];
  className?: string;
}

export default function LeadContent({ leads, className = "" }: LeadContentProps) {
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>(leads);
  
  const stats = calculatePipelineStats(filteredLeads);

  const handleCall = (lead: Lead) => {
    // TODO: Implement call functionality
    console.log('Calling lead:', lead.name, lead.contact);
  };

  const handleEmail = (lead: Lead) => {
    // TODO: Implement email functionality
    console.log('Emailing lead:', lead.name);
  };

  const handleSchedule = (lead: Lead) => {
    // TODO: Implement scheduling functionality
    console.log('Scheduling meeting with:', lead.name);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <LeadList
        leads={filteredLeads}
        onCall={handleCall}
        onEmail={handleEmail}
        onSchedule={handleSchedule}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PipelineSummary
          totalValue={stats.totalValue}
          closeRate={stats.closeRate}
        />
        <LeadStats leads={filteredLeads} />
      </div>
    </div>
  );
} 