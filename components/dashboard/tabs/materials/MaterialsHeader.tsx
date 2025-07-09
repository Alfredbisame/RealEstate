import { Plus, Download, Settings } from 'lucide-react';

export default function MaterialsHeader() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Materials & Costs</h2>
        <p className="text-white/80 text-sm">Breakdown, plan, and optimize all material and project costs</p>
      </div>
      <div className="flex space-x-2 mt-4 md:mt-0">
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Plus className="w-4 h-4 mr-2" /> Add Material
        </button>
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Download className="w-4 h-4 mr-2" /> Export
        </button>
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Settings className="w-4 h-4 mr-2" /> Tools
        </button>
      </div>
    </div>
  );
} 