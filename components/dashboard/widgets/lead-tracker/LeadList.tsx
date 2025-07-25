'use client';

import { Lead } from './types';
import LeadCard from './LeadCard';

interface LeadListProps {
  leads: Lead[];
  onCall?: (lead: Lead) => void;
  onEmail?: (lead: Lead) => void;
  onSchedule?: (lead: Lead) => void;
  className?: string;
}

export default function LeadList({ 
  leads, 
  onCall, 
  onEmail, 
  onSchedule, 
  className = "" 
}: LeadListProps) {
  if (leads.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p className="text-sm font-medium">No leads found</p>
        <p className="text-xs">Add new leads to get started</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 overflow-y-auto max-h-80 ${className}`}>
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          onCall={onCall}
          onEmail={onEmail}
          onSchedule={onSchedule}
        />
      ))}
    </div>
  );
} 