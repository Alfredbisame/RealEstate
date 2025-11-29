'use client';

import ChartWidget from '../../widgets/ChartWidget';

export default function BudgetChart() {
  const budgetChartData = {
    labels: ['Materials', 'Labor', 'Equipment', 'Permits', 'Contingency'],
    datasets: [{
      label: 'Budget Allocation (GHS)',
      data: [450000, 320000, 180000, 50000, 75000],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ]
    }]
  };

  return (
    <ChartWidget 
      title="Budget Allocation"
      data={budgetChartData}
      type="doughnut"
    />
  );
} 