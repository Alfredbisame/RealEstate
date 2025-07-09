import { BarChart3, FileText, Download } from 'lucide-react';

export default function AccountantReportsHeader() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Accounting Reports</h2>
        <p className="text-white/80 text-sm">View, generate, and analyze financial statements, balance sheets, and more</p>
      </div>
      <div className="flex space-x-2 mt-4 md:mt-0">
        <button className="flex items-center px-4 py-2 bg-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition">
          <Download className="w-4 h-4 mr-2" /> Export
        </button>
      </div>
    </div>
  );
} 