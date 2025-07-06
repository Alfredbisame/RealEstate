export default function NotificationsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Email Notifications</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Project Updates</span>
            <input type="checkbox" className="text-green-600" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Payment Notifications</span>
            <input type="checkbox" className="text-green-600" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Safety Alerts</span>
            <input type="checkbox" className="text-green-600" defaultChecked />
          </label>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Push Notifications</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Urgent Alerts</span>
            <input type="checkbox" className="text-green-600" defaultChecked />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Daily Summary</span>
            <input type="checkbox" className="text-green-600" />
          </label>
        </div>
      </div>
    </div>
  );
} 