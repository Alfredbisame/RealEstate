import { Search, Filter, Download, Eye } from 'lucide-react';
import { useState } from 'react';

interface AuditTrail {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

interface AuditTrailViewProps {
  auditTrail: AuditTrail[];
}

export default function AuditTrailView({ auditTrail }: AuditTrailViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredAuditTrail = auditTrail.filter(item => {
    const matchesSearch = item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.details.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'hr' && item.user.includes('HR')) ||
                         (selectedFilter === 'safety' && item.action.includes('Safety')) ||
                         (selectedFilter === 'tax' && item.action.includes('Tax'));
    
    return matchesSearch && matchesFilter;
  });

  const handleExport = () => {
    // TODO: Implement export functionality
    alert('Export audit trail to CSV');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Audit Trail</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          onClick={handleExport}
        >
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search audit trail..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <select
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">All Actions</option>
            <option value="hr" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">HR Actions</option>
            <option value="safety" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">Safety Actions</option>
            <option value="tax" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">Tax Actions</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Action</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">User</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Timestamp</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Details</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAuditTrail.map((audit) => (
              <tr key={audit.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">{audit.action}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{audit.user}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{audit.timestamp}</td>
                <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">{audit.details}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1">
                    <Eye className="w-3 h-3" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}