'use client';

import { PayrollData, DepartmentPayroll } from './types';
import PayrollOverview from './PayrollOverview';
import DeductionsBreakdown from './DeductionsBreakdown';
import DepartmentBreakdown from './DepartmentBreakdown';
import PayrollStats from './PayrollStats';

interface PayrollContentProps {
  payrollData: PayrollData;
  departmentPayroll: DepartmentPayroll[];
  className?: string;
}

export default function PayrollContent({ 
  payrollData, 
  departmentPayroll, 
  className = "" 
}: PayrollContentProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <PayrollOverview payrollData={payrollData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DeductionsBreakdown deductions={payrollData.deductions} />
        <PayrollStats payrollData={payrollData} />
      </div>
      
      <DepartmentBreakdown departments={departmentPayroll} />
    </div>
  );
} 