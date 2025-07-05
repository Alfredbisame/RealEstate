'use client';

import ChartWidget from '../../widgets/ChartWidget';

export default function CashFlowChart() {
  const cashFlowData = [
    { name: 'Q1', value: 125000 },
    { name: 'Q2', value: 140000 },
    { name: 'Q3', value: 135000 },
    { name: 'Q4', value: 158000 }
  ];

  return (
    <ChartWidget 
      title="Cash Flow Analysis"
      data={cashFlowData}
      type="bar"
    />
  );
} 