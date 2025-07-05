'use client';

import ChartWidget from '../../widgets/ChartWidget';

export default function PortfolioChart() {
  // Transform data for Recharts AreaChart
  const chartData = [
    { name: 'Jan', propertyvalue: 2100000, monthlyincome: 38000 },
    { name: 'Feb', propertyvalue: 2150000, monthlyincome: 40000 },
    { name: 'Mar', propertyvalue: 2200000, monthlyincome: 42000 },
    { name: 'Apr', propertyvalue: 2300000, monthlyincome: 43000 },
    { name: 'May', propertyvalue: 2350000, monthlyincome: 44000 },
    { name: 'Jun', propertyvalue: 2400000, monthlyincome: 45200 },
  ];

  return (
    <ChartWidget 
      title="Portfolio Performance"
      data={chartData}
      type="area"
    />
  );
} 