import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function AuditTrailTable({ auditTrail, onViewDetails }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      {/* Removed search input here */}
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
            {auditTrail.map(audit => (
              <tr key={audit.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{audit.action}</td>
                <td className="px-4 py-2">{audit.user}</td>
                <td className="px-4 py-2">{audit.timestamp}</td>
                <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">{audit.details}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1"
                    onClick={() => onViewDetails(audit)}
                  >
                    <Eye className="w-3 h-3" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {auditTrail.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No audit trail entries found.
        </div>
      )}
    </div>
  );
} 