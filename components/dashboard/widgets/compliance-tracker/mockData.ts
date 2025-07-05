import { ComplianceCategory } from './types';

export const mockComplianceData: ComplianceCategory[] = [
  {
    category: 'Tax Compliance',
    items: [
      { name: 'VAT Returns', status: 'compliant', dueDate: '2024-02-20', lastUpdate: '2024-02-15' },
      { name: 'PAYE Returns', status: 'pending', dueDate: '2024-02-25', lastUpdate: '2024-01-28' },
      { name: 'Corporate Tax', status: 'compliant', dueDate: '2024-03-31', lastUpdate: '2024-02-10' },
      { name: 'Withholding Tax', status: 'warning', dueDate: '2024-02-18', lastUpdate: '2024-02-12' }
    ]
  },
  {
    category: 'Labor Compliance',
    items: [
      { name: 'SSNIT Contributions', status: 'compliant', dueDate: '2024-02-28', lastUpdate: '2024-02-14' },
      { name: 'Workers Compensation', status: 'warning', dueDate: '2024-02-22', lastUpdate: '2024-01-30' },
      { name: 'Safety Certifications', status: 'compliant', dueDate: '2024-03-15', lastUpdate: '2024-02-05' },
      { name: 'Employment Contracts', status: 'pending', dueDate: '2024-03-01', lastUpdate: '2024-02-20' }
    ]
  },
  {
    category: 'Building Permits',
    items: [
      { name: 'Construction Permits', status: 'compliant', dueDate: '2024-04-01', lastUpdate: '2024-01-15' },
      { name: 'Environmental Clearance', status: 'pending', dueDate: '2024-02-28', lastUpdate: '2024-02-01' },
      { name: 'Fire Safety Certificate', status: 'compliant', dueDate: '2024-05-20', lastUpdate: '2024-01-20' },
      { name: 'Occupancy Certificate', status: 'overdue', dueDate: '2024-01-31', lastUpdate: '2024-01-15' }
    ]
  },
  {
    category: 'Financial Compliance',
    items: [
      { name: 'Annual Financial Statements', status: 'compliant', dueDate: '2024-03-31', lastUpdate: '2024-02-28' },
      { name: 'Audit Reports', status: 'pending', dueDate: '2024-04-15', lastUpdate: '2024-02-20' },
      { name: 'Bank Reconciliation', status: 'compliant', dueDate: '2024-02-29', lastUpdate: '2024-02-25' }
    ]
  }
]; 