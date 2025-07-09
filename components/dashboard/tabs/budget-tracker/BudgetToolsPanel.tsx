import { Plus, Download, Settings } from 'lucide-react';

export default function BudgetToolsPanel() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Budgeting Tools</h4>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold text-sm hover:bg-yellow-600 transition">
          <Plus className="w-4 h-4 mr-2" /> Add Budget Item
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm hover:bg-green-600 transition">
          <Settings className="w-4 h-4 mr-2" /> Adjust Budget
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition">
          <Download className="w-4 h-4 mr-2" /> Export Budget
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-300 mt-4">More budgeting tools and integrations coming soon.</p>
    </div>
  );
} 