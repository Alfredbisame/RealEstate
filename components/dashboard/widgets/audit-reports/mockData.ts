import { AuditReport, AuditStats } from './types';

export const mockAuditReports: AuditReport[] = [
  {
    id: 'RPT-2024-001',
    title: 'Monthly Financial Audit',
    type: 'Financial',
    date: '2024-02-15',
    status: 'Completed',
    size: '2.4 MB',
    findings: 2
  },
  {
    id: 'RPT-2024-002',
    title: 'Project Cost Analysis',
    type: 'Project',
    date: '2024-02-12',
    status: 'Completed',
    size: '1.8 MB',
    findings: 0
  },
  {
    id: 'RPT-2024-003',
    title: 'HR Compliance Review',
    type: 'Compliance',
    date: '2024-02-10',
    status: 'In Progress',
    size: '3.2 MB',
    findings: 1
  },
  {
    id: 'RPT-2024-004',
    title: 'Tax Compliance Audit',
    type: 'Tax',
    date: '2024-02-08',
    status: 'Completed',
    size: '1.5 MB',
    findings: 0
  },
  {
    id: 'RPT-2024-005',
    title: 'Safety Protocol Audit',
    type: 'Compliance',
    date: '2024-02-05',
    status: 'Pending',
    size: '2.1 MB',
    findings: 3
  },
  {
    id: 'RPT-2024-006',
    title: 'Quarterly Revenue Analysis',
    type: 'Financial',
    date: '2024-02-01',
    status: 'Completed',
    size: '3.8 MB',
    findings: 1
  }
];

export const mockAuditStats: AuditStats = {
  completed: 12,
  inProgress: 3,
  totalFindings: 5
}; 