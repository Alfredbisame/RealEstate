'use client';

import { DollarSign, Users, TrendingUp, Calculator } from 'lucide-react';
import { PayrollOverviewProps } from './types';
import PayrollCard from './PayrollCard';

export default function PayrollOverview({ 
  payrollData, 
  className = "" 
}: PayrollOverviewProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <PayrollCard
        title="Total Payroll"
        value={payrollData.totalPayroll}
        icon={DollarSign}
        color="green"
        subtitle="Gross payroll amount"
      />
      
      <PayrollCard
        title="Employees"
        value={payrollData.employees}
        icon={Users}
        color="blue"
        subtitle="Total staff count"
      />
      
      <PayrollCard
        title="Avg Salary"
        value={payrollData.avgSalary}
        icon={TrendingUp}
        color="purple"
        subtitle="Per employee"
      />
      
      <PayrollCard
        title="Net Payroll"
        value={payrollData.netPayroll}
        icon={Calculator}
        color="orange"
        subtitle="After deductions"
      />
    </div>
  );
} 