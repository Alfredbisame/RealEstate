export default function ReportsAnalyticsView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Reports Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded-xl border border-indigo-200 dark:border-indigo-700">
          <div className="font-semibold mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">GHS 2,400,000</div>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="font-semibold mb-2">Total Expenses</div>
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-200">GHS 1,200,000</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-semibold mb-2">Net Profit</div>
          <div className="text-3xl font-bold text-green-700 dark:text-green-200">GHS 1,200,000</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-xl border border-purple-200 dark:border-purple-700">
          <div className="font-semibold mb-2">Reports Generated</div>
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-200">24</div>
        </div>
      </div>
    </div>
  );
} 