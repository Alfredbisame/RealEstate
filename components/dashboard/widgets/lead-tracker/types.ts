export interface Lead {
  id: string;
  name: string;
  property: string;
  stage: LeadStage;
  value: string;
  contact: string;
  lastContact: string;
  priority: Priority;
}

export type LeadStage = 'Prospecting' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed';
export type Priority = 'high' | 'medium' | 'low';

export interface LeadTrackerProps {
  className?: string;
  leads?: Lead[];
}

export interface LeadCardProps {
  lead: Lead;
  onCall?: (lead: Lead) => void;
  onEmail?: (lead: Lead) => void;
  onSchedule?: (lead: Lead) => void;
  className?: string;
}

export interface LeadHeaderProps {
  title?: string;
  className?: string;
}

export interface LeadListProps {
  leads: Lead[];
  onCall?: (lead: Lead) => void;
  onEmail?: (lead: Lead) => void;
  onSchedule?: (lead: Lead) => void;
  className?: string;
}

export interface PipelineSummaryProps {
  totalValue: string;
  closeRate: number;
  className?: string;
}

export interface LeadStats {
  totalLeads: number;
  totalValue: string;
  closeRate: number;
  stageBreakdown: Record<LeadStage, number>;
} 