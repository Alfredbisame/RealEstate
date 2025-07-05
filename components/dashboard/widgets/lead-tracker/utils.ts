import { Lead, LeadStage, Priority } from './types';

export const getStageColor = (stage: LeadStage): string => {
  switch (stage.toLowerCase()) {
    case 'prospecting': 
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800';
    case 'qualified': 
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800';
    case 'proposal': 
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800';
    case 'negotiation': 
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800';
    case 'closed': 
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    default: 
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800';
  }
};

export const getPriorityColor = (priority: Priority): string => {
  switch (priority) {
    case 'high': 
      return 'w-2 h-2 bg-red-500 rounded-full shadow-sm';
    case 'medium': 
      return 'w-2 h-2 bg-orange-500 rounded-full shadow-sm';
    case 'low': 
      return 'w-2 h-2 bg-green-500 rounded-full shadow-sm';
    default: 
      return 'w-2 h-2 bg-gray-500 rounded-full shadow-sm';
  }
};

export const getPriorityLabel = (priority: Priority): string => {
  switch (priority) {
    case 'high': return 'High Priority';
    case 'medium': return 'Medium Priority';
    case 'low': return 'Low Priority';
    default: return 'Unknown Priority';
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatCurrency = (value: string): string => {
  // Extract numeric value and format
  const numericValue = value.replace(/[^\d]/g, '');
  if (numericValue.length >= 6) {
    return `GHS ${(parseInt(numericValue) / 1000000).toFixed(1)}M`;
  } else if (numericValue.length >= 3) {
    return `GHS ${(parseInt(numericValue) / 1000).toFixed(0)}K`;
  }
  return value;
};

export const calculatePipelineStats = (leads: Lead[]) => {
  const totalLeads = leads.length;
  const totalValue = leads.reduce((sum, lead) => {
    const numericValue = parseInt(lead.value.replace(/[^\d]/g, ''));
    return sum + numericValue;
  }, 0);
  
  const closedLeads = leads.filter(lead => lead.stage === 'Closed').length;
  const closeRate = totalLeads > 0 ? (closedLeads / totalLeads) * 100 : 0;
  
  const stageBreakdown = leads.reduce((acc, lead) => {
    acc[lead.stage] = (acc[lead.stage] || 0) + 1;
    return acc;
  }, {} as Record<LeadStage, number>);

  return {
    totalLeads,
    totalValue: `GHS ${totalValue.toLocaleString()}`,
    closeRate: Math.round(closeRate),
    stageBreakdown
  };
};

export const getStageIcon = (stage: LeadStage): string => {
  switch (stage.toLowerCase()) {
    case 'prospecting': return '🔍';
    case 'qualified': return '✅';
    case 'proposal': return '📋';
    case 'negotiation': return '🤝';
    case 'closed': return '🎉';
    default: return '📊';
  }
};

export const getPriorityIcon = (priority: Priority): string => {
  switch (priority) {
    case 'high': return '🔥';
    case 'medium': return '⚡';
    case 'low': return '🌱';
    default: return '📌';
  }
}; 