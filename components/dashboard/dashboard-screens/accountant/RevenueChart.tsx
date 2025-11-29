'use client';

import ChartWidget from '../../widgets/ChartWidget';

interface RevenueChartProps {
  className?: string;
}

export default function RevenueChart({ className = '' }: RevenueChartProps) {
  const revenueChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (GHS)',
        data: [145000, 152000, 168000, 175000, 182000, 180400],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4
      },
      {
        label: 'Expenses (GHS)',
        data: [108000, 114000, 122000, 128000, 132000, 135600],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      }
    ]
  };

  return (
    <ChartWidget 
      title="Revenue vs Expenses"
      data={revenueChartData}
      type="area"
    />
  );
} 