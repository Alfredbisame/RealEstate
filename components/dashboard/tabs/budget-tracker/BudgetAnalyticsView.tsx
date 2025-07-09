import ChartWidget from '../../widgets/ChartWidget';

const budgetByCategory = [
  { name: 'Maintenance', value: 50000 },
  { name: 'Utilities', value: 30000 },
  { name: 'Renovation', value: 120000 },
  { name: 'Security', value: 20000 },
  { name: 'Landscaping', value: 15000 }
];

const spentBreakdown = [
  { name: 'Spent', value: 320000 },
  { name: 'Remaining', value: 180000 }
];

export default function BudgetAnalyticsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
        <ChartWidget
          title="Budget by Category"
          data={budgetByCategory}
          type="bar"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
        <ChartWidget
          title="Spent vs Remaining"
          data={spentBreakdown}
          type="pie"
        />
      </div>
    </div>
  );
} 