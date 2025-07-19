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
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
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
            <tr>
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Timestamp</th>
              <th className="px-4 py-2 text-left">Details</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAuditTrail.map((audit) => (
              <tr key={audit.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{audit.action}</td>
                <td className="px-4 py-2">{audit.user}</td>
                <td className="px-4 py-2">{audit.timestamp}</td>
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

      {filteredAuditTrail.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No audit trail entries found matching your search criteria.
        </div>
      )}

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{auditTrail.length}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Total Entries</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">
            {auditTrail.filter(item => item.user.includes('HR')).length}
          </div>
          <div className="text-sm text-green-800 dark:text-green-200">HR Actions</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
            {auditTrail.filter(item => item.action.includes('Safety')).length}
          </div>
          <div className="text-sm text-yellow-800 dark:text-yellow-200">Safety Actions</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            {auditTrail.filter(item => item.action.includes('Tax')).length}
          </div>
          <div className="text-sm text-purple-800 dark:text-purple-200">Tax Actions</div>
        </div>
      </div>
    </div>
  );
} 