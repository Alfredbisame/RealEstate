import { PayrollData, DepartmentPayroll } from './types';

export const mockPayrollData: PayrollData = {
  totalPayroll: 85400,
  employees: 48,
  avgSalary: 1779,
  deductions: {
    ssnit: 6832,
    paye: 12810,
    other: 2150
  },
  netPayroll: 63608
};

export const mockDepartmentPayroll: DepartmentPayroll[] = [
  {
    department: 'Construction',
    employees: 24,
    amount: 38400
  },
  {
    department: 'Administration',
    employees: 8,
    amount: 18200
  },
  {
    department: 'Sales',
    employees: 6,
    amount: 12600
  },
  {
    department: 'Support',
    employees: 10,
    amount: 16200
  }
]; 