import { ComplianceStatus, ComplianceCategory, ComplianceScore } from './types';

export const getStatusIcon = (status: ComplianceStatus) => {
  const iconClasses = {
    compliant: 'w-4 h-4 text-green-600 dark:text-green-400',
    warning: 'w-4 h-4 text-orange-600 dark:text-orange-400',
    pending: 'w-4 h-4 text-blue-600 dark:text-blue-400',
    overdue: 'w-4 h-4 text-red-600 dark:text-red-400'
  };
  
  return iconClasses[status] || 'w-4 h-4 text-gray-600 dark:text-gray-400';
};

export const getStatusColor = (status: ComplianceStatus) => {
  const colorClasses = {
    compliant: 'text-green-600 bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    pending: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    overdue: 'text-red-600 bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  };
  
  return colorClasses[status] || 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
};

export const getStatusLabel = (status: ComplianceStatus) => {
  const labels = {
    compliant: 'Compliant',
    warning: 'Warning',
    pending: 'Pending',
    overdue: 'Overdue'
  };
  
  return labels[status] || 'Unknown';
};

export const calculateComplianceScore = (data: ComplianceCategory[]): ComplianceScore => {
  const allItems = data.flatMap(cat => cat.items);
  const compliantItems = allItems.filter(item => item.status === 'compliant').length;
  const totalItems = allItems.length;
  const percentage = totalItems > 0 ? Math.round((compliantItems / totalItems) * 100) : 0;
  
  return {
    overall: percentage,
    compliant: compliantItems,
    total: totalItems,
    percentage
  };
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getDaysUntilDue = (dueDate: string) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getUrgencyLevel = (dueDate: string, status: ComplianceStatus) => {
  if (status === 'compliant') return 'low';
  
  const daysUntilDue = getDaysUntilDue(dueDate);
  
  if (daysUntilDue < 0) return 'critical';
  if (daysUntilDue <= 7) return 'high';
  if (daysUntilDue <= 14) return 'medium';
  return 'low';
}; 