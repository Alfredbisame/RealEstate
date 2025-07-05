export interface ProfitData {
  materials: number;
  labor: number;
  permits: number;
  clientBudget: number;
}

export interface ProfitCalculations {
  totalCosts: number;
  grossProfit: number;
  profitMargin: number;
  netProfit: number;
}

export interface ProfitCalculatorProps {
  className?: string;
  initialData?: ProfitData;
}

export interface ProfitHeaderProps {
  title?: string;
  className?: string;
}

export interface CostInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  icon?: any;
  className?: string;
}

export interface CostInputsProps {
  materials: number;
  labor: number;
  permits: number;
  clientBudget: number;
  onMaterialsChange: (value: number) => void;
  onLaborChange: (value: number) => void;
  onPermitsChange: (value: number) => void;
  onClientBudgetChange: (value: number) => void;
  className?: string;
}

export interface ResultsCardProps {
  title: string;
  value: string | number;
  color?: 'green' | 'orange' | 'red' | 'gray';
  icon?: any;
  subtitle?: string;
  className?: string;
}

export interface CalculationResultsProps {
  calculations: ProfitCalculations;
  className?: string;
}

export interface RecommendationsProps {
  profitMargin: number;
  className?: string;
}

export interface ProfitStats {
  isProfitable: boolean;
  profitLevel: 'excellent' | 'good' | 'fair' | 'poor';
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
} 