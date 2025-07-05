export interface ChartWidgetProps {
  title: string;
  data: ChartData | any;
  type: ChartType;
  className?: string;
}

export type ChartType = 'area' | 'bar' | 'doughnut' | 'pie';

export interface ChartData {
  labels?: string[];
  datasets?: Dataset[];
}

export interface Dataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

export interface TransformedDataPoint {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface ChartColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
} 