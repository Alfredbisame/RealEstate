export default function LogisticsAnalyticsView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Logistics Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-xl border border-purple-200 dark:border-purple-700">
          <div className="font-semibold mb-2">Delivery Success Rate</div>
          <div className="text-3xl font-bold text-purple-700 dark:text-purple-200">97%</div>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-xl border border-yellow-200 dark:border-yellow-700">
          <div className="font-semibold mb-2">Avg. Cost per Km</div>
          <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-200">GHS 6.20</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-semibold mb-2">On-Time Deliveries</div>
          <div className="text-3xl font-bold text-green-700 dark:text-green-200">89%</div>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="font-semibold mb-2">Total Distance Covered</div>
          <div className="text-3xl font-bold text-blue-700 dark:text-blue-200">1,540 km</div>
        </div>
      </div>
    </div>
  );
} 