import { Download, Trash2, CheckCircle } from 'lucide-react';

export default function InvoiceActionsPanel() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Bulk Actions & Controls</h4>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition">
          <Download className="w-4 h-4 mr-2" /> Export All
        </button>
        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold text-sm hover:bg-green-700 transition">
          <CheckCircle className="w-4 h-4 mr-2" /> Mark as Paid
        </button>
        <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-semibold text-sm hover:bg-red-700 transition">
          <Trash2 className="w-4 h-4 mr-2" /> Delete Selected
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-300 mt-4">More advanced controls and integrations coming soon.</p>
    </div>
  );
} 