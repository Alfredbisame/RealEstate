export default function LayoutTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Dashboard Layout</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="layout" value="grid" className="text-green-600" defaultChecked />
            <span className="text-sm text-gray-700 dark:text-gray-300">Grid Layout</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="layout" value="list" className="text-green-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">List Layout</span>
          </label>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Sidebar Position</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="sidebar" value="left" className="text-green-600" defaultChecked />
            <span className="text-sm text-gray-700 dark:text-gray-300">Left Sidebar</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="sidebar" value="right" className="text-green-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Right Sidebar</span>
          </label>
        </div>
      </div>
    </div>
  );
} 