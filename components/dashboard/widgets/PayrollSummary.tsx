'use client';

import { DollarSign, Users, Calculator, TrendingUp } from 'lucide-react';

export default function PayrollSummary() {
  const payrollData = {
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

  const departmentPayroll = [
    { department: 'Construction', employees: 24, amount: 38400 },
    { department: 'Administration', employees: 8, amount: 18200 },
    { department: 'Sales', employees: 6, amount: 12600 },
    { department: 'Support', employees: 10, amount: 16200 }
  ];

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <DollarSign className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Payroll Summary</h3>
      </div>

      {/* Payroll Overview */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 dark:text-green-400">Total Payroll</span>
          </div>
          <p className="text-lg font-bold text-green-600">
            GHS {payrollData.totalPayroll.toLocaleString()}
          </p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 dark:text-blue-400">Employees</span>
          </div>
          <p className="text-lg font-bold text-blue-600">{payrollData.employees}</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 dark:text-purple-400">Avg Salary</span>
          </div>
          <p className="text-lg font-bold text-purple-600">
            GHS {payrollData.avgSalary.toLocaleString()}
          </p>
        </div>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-1">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-orange-700 dark:text-orange-400">Net Payroll</span>
          </div>
          <p className="text-lg font-bold text-orange-600">
            GHS {payrollData.netPayroll.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Deductions Breakdown */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Deductions</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
            <span className="text-sm text-gray-600 dark:text-gray-400">SSNIT (13%)</span>
            <span className="font-medium text-gray-900 dark:text-white">
              GHS {payrollData.deductions.ssnit.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
            <span className="text-sm text-gray-600 dark:text-gray-400">PAYE Tax</span>
            <span className="font-medium text-gray-900 dark:text-white">
              GHS {payrollData.deductions.paye.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
            <span className="text-sm text-gray-600 dark:text-gray-400">Other Deductions</span>
            <span className="font-medium text-gray-900 dark:text-white">
              GHS {payrollData.deductions.other.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Department Breakdown */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">By Department</h4>
        <div className="space-y-2 overflow-y-auto max-h-32">
          {departmentPayroll.map((dept, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">{dept.department}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{dept.employees} employees</p>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {dept.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}