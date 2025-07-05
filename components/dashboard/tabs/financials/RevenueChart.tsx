'use client';

import ChartWidget from '../../widgets/ChartWidget';

export default function RevenueChart() {
  const financialData = {
    revenue: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue (GHS)',
        data: [145000, 152000, 168000, 175000, 182000, 195000],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4
      }, {
        label: 'Expenses (GHS)',
        data: [108000, 114000, 122000, 128000, 132000, 135000],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      }]
    }
  };

  return (
    <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
      <ChartWidget 
        title="Revenue vs Expenses"
        data={financialData.revenue}
        type="area"
      />
    </div>
  );
} 