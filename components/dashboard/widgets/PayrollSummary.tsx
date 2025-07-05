'use client';

import { PayrollData, DepartmentPayroll } from './payroll-summary/types';
import { mockPayrollData, mockDepartmentPayroll } from './payroll-summary/mockData';
import PayrollHeader from './payroll-summary/PayrollHeader';
import PayrollContent from './payroll-summary/PayrollContent';

interface PayrollSummaryProps {
  payrollData?: PayrollData;
  departmentPayroll?: DepartmentPayroll[];
  className?: string;
}

export default function PayrollSummary({ 
  payrollData = mockPayrollData, 
  departmentPayroll = mockDepartmentPayroll,
  className = "" 
}: PayrollSummaryProps) {
  return (
    <div className={`h-full ${className}`}>
      <PayrollHeader />
      <PayrollContent 
        payrollData={payrollData}
        departmentPayroll={departmentPayroll}
      />
    </div>
  );
}