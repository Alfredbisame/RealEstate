export type ComplianceStatus = 'compliant' | 'warning' | 'pending' | 'overdue';

export interface ComplianceItem {
  name: string;
  status: ComplianceStatus;
  dueDate: string;
  lastUpdate: string;
}

export interface ComplianceCategory {
  category: string;
  items: ComplianceItem[];
}

export interface ComplianceTrackerProps {
  data?: ComplianceCategory[];
  className?: string;
}

export interface ComplianceScore {
  overall: number;
  compliant: number;
  total: number;
  percentage: number;
} 