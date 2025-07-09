const reconciliationReports = [
  { 
    id: 1, 
    reportName: 'Monthly Reconciliation Report', 
    period: 'July 2024', 
    accounts: 8, 
    transactions: 1247, 
    status: 'Completed',
    generatedDate: '2024-07-15',
    type: 'Monthly'
  },
  { 
    id: 2, 
    reportName: 'Quarterly Audit Report', 
    period: 'Q2 2024', 
    accounts: 8, 
    transactions: 3847, 
    status: 'Pending',
    generatedDate: '2024-07-10',
    type: 'Quarterly'
  },
  { 
    id: 3, 
    reportName: 'Discrepancy Analysis', 
    period: 'July 2024', 
    accounts: 3, 
    transactions: 23, 
    status: 'Completed',
    generatedDate: '2024-07-14',
    type: 'Analysis'
  },
  { 
    id: 4, 
    reportName: 'Compliance Report', 
    period: 'July 2024', 
    accounts: 8, 
    transactions: 1247, 
    status: 'Under Review',
    generatedDate: '2024-07-12',
    type: 'Compliance'
  }
];

const auditTrail = [
  { action: 'Reconciliation Started', user: 'John Doe', timestamp: '2024-07-15 09:30', details: 'Ghana Commercial Bank reconciliation initiated' },
  { action: 'Transaction Matched', user: 'System', timestamp: '2024-07-15 09:35', details: 'Auto-matched 1,247 transactions' },
  { action: 'Discrepancy Flagged', user: 'System', timestamp: '2024-07-15 09:40', details: '5 discrepancies identified for review' },
  { action: 'Manual Review', user: 'Jane Smith', timestamp: '2024-07-15 10:15', details: 'Reviewed and resolved 3 discrepancies' }
];

export default function ReconciliationReportsView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Reconciliation Reports & Audit Trail</h3>
      
      {/* Reports Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Reconciliation Reports</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accounts</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transactions</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {reconciliationReports.map(report => (
                <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{report.reportName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.period}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.accounts}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.transactions.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.type}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.generatedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Trail */}
      <div>
        <h4 className="text-md font-semibold mb-3">Audit Trail</h4>
        <div className="space-y-3">
          {auditTrail.map((trail, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{trail.action}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{trail.details}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{trail.user}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{trail.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 