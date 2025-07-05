export interface PayrollData {
  totalPayroll: number;
  employees: number;
  avgSalary: number;
  deductions: Deductions;
  netPayroll: number;
}

export interface Deductions {
  ssnit: number;
  paye: number;
  other: number;
}

export interface DepartmentPayroll {
  department: string;
  employees: number;
  amount: number;
  percentage?: number;
}

export interface PayrollSummaryProps {
  className?: string;
  payrollData?: PayrollData;
  departmentPayroll?: DepartmentPayroll[];
}

export interface PayrollHeaderProps {
  title?: string;
  className?: string;
}

export interface PayrollOverviewProps {
  payrollData: PayrollData;
  className?: string;
}

export interface PayrollCardProps {
  title: string;
  value: string | number;
  icon: any;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red';
  subtitle?: string;
  className?: string;
}

export interface DeductionsBreakdownProps {
  deductions: Deductions;
  className?: string;
}

export interface DeductionItemProps {
  label: string;
  amount: number;
  percentage?: number;
  className?: string;
}

export interface DepartmentBreakdownProps {
  departments: DepartmentPayroll[];
  className?: string;
}

export interface DepartmentItemProps {
  department: DepartmentPayroll;
  className?: string;
}

export interface PayrollStats {
  totalDeductions: number;
  deductionPercentage: number;
  avgSalary: number;
  costPerEmployee: number;
} 