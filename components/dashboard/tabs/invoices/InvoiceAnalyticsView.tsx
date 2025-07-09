import ChartWidget from '../../widgets/ChartWidget';

const revenueByMonth = [
  { name: 'Jan', value: 200000 },
  { name: 'Feb', value: 180000 },
  { name: 'Mar', value: 220000 },
  { name: 'Apr', value: 210000 },
  { name: 'May', value: 250000 },
  { name: 'Jun', value: 240000 }
];

const statusBreakdown = [
  { name: 'Paid', value: 1000 },
  { name: 'Pending', value: 200 },
  { name: 'Overdue', value: 50 }
];

export default function InvoiceAnalyticsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
        <ChartWidget
          title="Revenue by Month"
          data={revenueByMonth}
          type="bar"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
        <ChartWidget
          title="Invoice Status Breakdown"
          data={statusBreakdown}
          type="pie"
        />
      </div>
    </div>
  );
} 