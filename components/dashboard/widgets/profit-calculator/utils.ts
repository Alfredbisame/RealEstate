import { ProfitData, ProfitCalculations, ProfitStats } from './types';

export const calculateProfit = (data: ProfitData): ProfitCalculations => {
  const totalCosts = data.materials + data.labor + data.permits;
  const grossProfit = data.clientBudget - totalCosts;
  const profitMargin = data.clientBudget > 0 ? (grossProfit / data.clientBudget) * 100 : 0;
  const netProfit = grossProfit; // Assuming no additional deductions for now

  return {
    totalCosts,
    grossProfit,
    profitMargin,
    netProfit
  };
};

export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toLocaleString()}`;
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const getProfitColor = (profitMargin: number): string => {
  if (profitMargin >= 20) return 'text-green-600 dark:text-green-400';
  if (profitMargin >= 10) return 'text-orange-600 dark:text-orange-400';
  return 'text-red-600 dark:text-red-400';
};

export const getProfitLevel = (profitMargin: number): 'excellent' | 'good' | 'fair' | 'poor' => {
  if (profitMargin >= 25) return 'excellent';
  if (profitMargin >= 15) return 'good';
  if (profitMargin >= 5) return 'fair';
  return 'poor';
};

export const getRiskLevel = (profitMargin: number): 'low' | 'medium' | 'high' => {
  if (profitMargin >= 20) return 'low';
  if (profitMargin >= 10) return 'medium';
  return 'high';
};

export const getProfitStats = (calculations: ProfitCalculations): ProfitStats => {
  const isProfitable = calculations.grossProfit > 0;
  const profitLevel = getProfitLevel(calculations.profitMargin);
  const riskLevel = getRiskLevel(calculations.profitMargin);
  
  const recommendations: string[] = [];
  
  if (calculations.profitMargin < 5) {
    recommendations.push('Current margin is critically low - immediate action required');
    recommendations.push('Review pricing strategy and cost structure');
    recommendations.push('Consider renegotiating with suppliers');
  } else if (calculations.profitMargin < 10) {
    recommendations.push('Margin below recommended threshold - review pricing strategy');
    recommendations.push('Optimize operational costs');
    recommendations.push('Consider value engineering options');
  } else if (calculations.profitMargin < 20) {
    recommendations.push('Consider optimizing costs or adjusting client budget');
    recommendations.push('Look for efficiency improvements');
    recommendations.push('Review material sourcing options');
  } else {
    recommendations.push('Excellent profit margin - maintain current strategy');
    recommendations.push('Consider scaling similar projects');
    recommendations.push('Explore premium service offerings');
  }

  return {
    isProfitable,
    profitLevel,
    recommendations,
    riskLevel
  };
};

export const getColorClasses = (color: string) => {
  switch (color) {
    case 'green':
      return {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800'
      };
    case 'orange':
      return {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      };
    case 'red':
      return {
        bg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-200 dark:border-red-800'
      };
    case 'gray':
      return {
        bg: 'bg-gray-50 dark:bg-gray-900/20',
        text: 'text-gray-600 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
    default:
      return {
        bg: 'bg-gray-50 dark:bg-gray-900/20',
        text: 'text-gray-600 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800'
      };
  }
};

export const getProfitIcon = (profitMargin: number): string => {
  if (profitMargin >= 20) return '📈';
  if (profitMargin >= 10) return '📊';
  if (profitMargin >= 0) return '⚠️';
  return '📉';
};

export const getCostIcon = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'materials': return '🏗️';
    case 'labor': return '👷';
    case 'permits': return '📋';
    case 'budget': return '💰';
    default: return '💳';
  }
};

export const validateInput = (value: number): boolean => {
  return value >= 0 && !isNaN(value);
};

export const calculateBreakEven = (totalCosts: number, profitMargin: number): number => {
  if (profitMargin <= 0) return totalCosts;
  return totalCosts / (1 - profitMargin / 100);
};

export const getEfficiencyScore = (calculations: ProfitCalculations): number => {
  const { totalCosts, grossProfit, profitMargin } = calculations;
  
  if (totalCosts === 0) return 0;
  
  // Efficiency based on profit margin and cost utilization
  const marginScore = Math.min(profitMargin / 25, 1) * 50; // Max 50 points for margin
  const utilizationScore = Math.min(grossProfit / totalCosts, 1) * 50; // Max 50 points for utilization
  
  return Math.round(marginScore + utilizationScore);
}; 