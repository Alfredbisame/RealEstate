'use client';

import ChartWidget from '../../widgets/ChartWidget';

interface ChartsSectionProps {
  className?: string;
}

export default function ChartsSection({ className = '' }: ChartsSectionProps) {
  // Recharts format data
  const revenueData = [
    { name: 'Jan', revenue: 145000, expenses: 108000 },
    { name: 'Feb', revenue: 152000, expenses: 114000 },
    { name: 'Mar', revenue: 168000, expenses: 122000 },
    { name: 'Apr', revenue: 175000, expenses: 128000 },
    { name: 'May', revenue: 182000, expenses: 132000 },
    { name: 'Jun', revenue: 195000, expenses: 135000 },
  ];

  const propertyData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 15 },
    { name: 'Land', value: 15 },
  ];

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${className}`}>
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
        <ChartWidget 
          title="Revenue vs Expenses Trend"
          data={revenueData}
          type="area"
        />
      </div>
      
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
        <ChartWidget 
          title="Property Distribution"
          data={propertyData}
          type="doughnut"
        />
      </div>
    </div>
  );
} 