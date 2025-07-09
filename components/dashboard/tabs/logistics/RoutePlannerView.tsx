export default function RoutePlannerView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Route Planner</h3>
      <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
        <p className="mb-2">Visualize and plan optimal delivery routes for your materials.</p>
        <div className="h-40 flex items-center justify-center text-blue-400 dark:text-blue-200">
          {/* Placeholder for map/route visualization */}
          <span>Map/Route Visualization Coming Soon</span>
        </div>
      </div>
    </div>
  );
} 