import { PayrollData, Deductions, DepartmentPayroll, PayrollStats } from './types';

export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toLocaleString()}`;
};

export const calculatePayrollStats = (payrollData: PayrollData): PayrollStats => {
  const totalDeductions = payrollData.deductions.ssnit + payrollData.deductions.paye + payrollData.deductions.other;
  const deductionPercentage = payrollData.totalPayroll > 0 
    ? (totalDeductions / payrollData.totalPayroll) * 100 
    : 0;
  const costPerEmployee = payrollData.employees > 0 
    ? payrollData.totalPayroll / payrollData.employees 
    : 0;

  return {
    totalDeductions,
    deductionPercentage: Math.round(deductionPercentage),
    avgSalary: payrollData.avgSalary,
    costPerEmployee: Math.round(costPerEmployee)
  };
};

export const calculateDepartmentPercentages = (departments: DepartmentPayroll[]): DepartmentPayroll[] => {
  const totalAmount = departments.reduce((sum, dept) => sum + dept.amount, 0);
  
  return departments.map(dept => ({
    ...dept,
    percentage: totalAmount > 0 ? Math.round((dept.amount / totalAmount) * 100) : 0
  }));
};

export const getColorClasses = (color: string) => {
  switch (color) {
    case 'green':
      return {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        label: 'text-green-700 dark:text-green-400'
      };
    case 'blue':
      return {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        label: 'text-blue-700 dark:text-blue-400'
      };
    case 'purple':
      return {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
        label: 'text-purple-700 dark:text-purple-400'
      };
    case 'orange':
      return {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
        label: 'text-orange-700 dark:text-orange-400'
      };
    case 'red':
      return {
        bg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
        label: 'text-red-700 dark:text-red-400'
      };
    default:
      return {
        bg: 'bg-gray-50 dark:bg-gray-900/20',
        text: 'text-gray-600 dark:text-gray-400',
        label: 'text-gray-700 dark:text-gray-400'
      };
  }
};

export const getDeductionLabel = (type: keyof Deductions): string => {
  switch (type) {
    case 'ssnit': return 'SSNIT (13%)';
    case 'paye': return 'PAYE Tax';
    case 'other': return 'Other Deductions';
    default: return 'Deduction';
  }
};

export const getDeductionIcon = (type: keyof Deductions): string => {
  switch (type) {
    case 'ssnit': return '🏛️';
    case 'paye': return '💰';
    case 'other': return '📋';
    default: return '💳';
  }
};

export const getDepartmentIcon = (department: string): string => {
  switch (department.toLowerCase()) {
    case 'construction': return '🏗️';
    case 'administration': return '📊';
    case 'sales': return '💼';
    case 'support': return '🛠️';
    case 'engineering': return '⚙️';
    case 'marketing': return '📢';
    default: return '🏢';
  }
};

export const calculateNetPayroll = (totalPayroll: number, deductions: Deductions): number => {
  return totalPayroll - (deductions.ssnit + deductions.paye + deductions.other);
};

export const formatPercentage = (value: number, total: number): string => {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  return `${percentage.toFixed(1)}%`;
};

export const getPayrollHealth = (stats: PayrollStats): 'excellent' | 'good' | 'fair' | 'poor' => {
  const deductionRate = stats.deductionPercentage;
  
  if (deductionRate <= 20) return 'excellent';
  if (deductionRate <= 30) return 'good';
  if (deductionRate <= 40) return 'fair';
  return 'poor';
};

export const getHealthColor = (health: 'excellent' | 'good' | 'fair' | 'poor'): string => {
  switch (health) {
    case 'excellent': return 'text-green-600 dark:text-green-400';
    case 'good': return 'text-blue-600 dark:text-blue-400';
    case 'fair': return 'text-orange-600 dark:text-orange-400';
    case 'poor': return 'text-red-600 dark:text-red-400';
    default: return 'text-gray-600 dark:text-gray-400';
  }
}; 