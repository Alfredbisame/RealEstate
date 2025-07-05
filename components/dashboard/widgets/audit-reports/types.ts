export interface AuditReport {
  id: string;
  title: string;
  type: 'Financial' | 'Project' | 'Compliance' | 'Tax';
  date: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  size: string;
  findings: number;
}

export interface AuditStats {
  completed: number;
  inProgress: number;
  totalFindings: number;
} 