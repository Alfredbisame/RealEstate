import { ChartData, TransformedDataPoint } from './types';

export const CHART_COLORS = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  accent: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444'
};

export const PIE_CHART_COLORS = [
  CHART_COLORS.success,
  CHART_COLORS.primary,
  CHART_COLORS.warning,
  CHART_COLORS.error,
  CHART_COLORS.accent
];

export const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8px)'
};

export const AXIS_STYLE = {
  stroke: '#6b7280',
  fontSize: 12,
  tickLine: false,
  axisLine: false
};

// Transform Chart.js format to Recharts format
export const transformLineData = (chartData: ChartData): TransformedDataPoint[] => {
  if (!chartData.labels || !chartData.datasets) return [];
  
  return chartData.labels.map((label: string, index: number) => {
    const dataPoint: TransformedDataPoint = { name: label };
    chartData.datasets!.forEach((dataset) => {
      const key = dataset.label.toLowerCase().replace(/[^a-z0-9]/g, '');
      dataPoint[key] = dataset.data[index];
    });
    return dataPoint;
  });
};

export const transformBarData = (chartData: ChartData): TransformedDataPoint[] => {
  if (!chartData.labels || !chartData.datasets) return [];
  
  return chartData.labels.map((label: string, index: number) => ({
    name: label,
    value: chartData.datasets![0].data[index]
  }));
};

export const transformPieData = (chartData: ChartData): TransformedDataPoint[] => {
  if (!chartData.labels || !chartData.datasets) return [];
  
  return chartData.labels.map((label: string, index: number) => ({
    name: label,
    value: chartData.datasets![0].data[index]
  }));
};

export const formatCurrency = (value: number): string => {
  return `GHS ${value.toLocaleString()}`;
};

export const getChartData = (data: ChartData | any): TransformedDataPoint[] => {
  if (data.datasets) {
    // Chart.js format
    if (data.labels && data.datasets.length > 0) {
      const firstDataset = data.datasets[0];
      if (firstDataset.data && firstDataset.data.length > 0) {
        return transformBarData(data);
      }
    }
    return [];
  }
  // Direct Recharts format
  return data;
}; 