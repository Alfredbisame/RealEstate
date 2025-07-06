// Main component
export { default as ProfitCalculator } from './ProfitContent';

// Sub-components
export { default as ProfitHeader } from './ProfitHeader';
export { default as CostInput } from './CostInput';
export { default as CostInputs } from './CostInputs';
export { default as ResultsCard } from './ResultsCard';
export { default as CalculationResults } from './CalculationResults';
export { default as Recommendations } from './Recommendations';
export { default as ProfitContent } from './ProfitContent';

// Types
export type {
  ProfitData,
  ProfitCalculations,
  ProfitCalculatorProps,
  ProfitHeaderProps,
  CostInputProps,
  CostInputsProps,
  ResultsCardProps,
  CalculationResultsProps,
  RecommendationsProps,
  ProfitStats
} from './types';

// Utilities
export {
  calculateProfit,
  formatCurrency,
  formatPercentage,
  getProfitColor,
  getProfitLevel,
  getRiskLevel,
  getProfitStats,
  getColorClasses,
  getProfitIcon,
  getCostIcon,
  validateInput,
  calculateBreakEven,
  getEfficiencyScore
} from './utils';

// Mock data
export { mockProfitData, sampleProjects } from './mockData'; 