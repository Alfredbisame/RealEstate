const transactions = [
  { 
    id: 1, 
    date: '2024-07-15 14:30:25', 
    transactionType: 'Payment', 
    description: 'Income Tax Payment to GRA', 
    amount: 150000, 
    user: 'John Vincent',
    ipAddress: '192.168.1.100',
    sessionId: 'SESS_001',
    status: 'Completed',
    graCompliant: true,
    auditLevel: 'High'
  },
  { 
    id: 2, 
    date: '2024-07-15 13:45:12', 
    transactionType: 'Invoice', 
    description: 'VAT Invoice Generated', 
    amount: 75000, 
    user: 'Jane Gush',
    ipAddress: '192.168.1.101',
    sessionId: 'SESS_002',
    status: 'Completed',
    graCompliant: true,
    auditLevel: 'Medium'
  },
  { 
    id: 3, 
    date: '2024-07-15 12:20:08', 
    transactionType: 'Reconciliation', 
    description: 'Bank Reconciliation Completed', 
    amount: 0, 
    user: 'Kwame Mensah',
    ipAddress: '192.168.1.102',
    sessionId: 'SESS_003',
    status: 'Completed',
    graCompliant: true,
    auditLevel: 'High'
  },
  { 
    id: 4, 
    date: '2024-07-15 11:15:33', 
    transactionType: 'Expense', 
    description: 'Petty Cash Withdrawal', 
    amount: 5000, 
    user: 'Ama Osei',
    ipAddress: '192.168.1.103',
    sessionId: 'SESS_004',
    status: 'Pending Review',
    graCompliant: false,
    auditLevel: 'Medium'
  }
];

const auditMetrics = [
  { metric: 'Total Transactions', value: '12,847', trend: 'Increasing' },
  { metric: 'GRA Compliant', value: '98.5%', trend: 'Stable' },
  { metric: 'High Priority', value: '156', trend: 'Decreasing' },
  { metric: 'Pending Review', value: '23', trend: 'Stable' }
];

export default function TransactionHistoryView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Complete Transaction History</h3>
      
      {/* Audit Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Audit Trail Metrics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {auditMetrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-xs text-purple-500 dark:text-purple-300 mt-1">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Detailed Transaction History</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GRA Compliant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audit Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{transaction.transactionType}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{transaction.amount?.toLocaleString() || '0'}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.user}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">{transaction.ipAddress}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${transaction.graCompliant ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {transaction.graCompliant ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.auditLevel === 'High' ? 'bg-red-100 text-red-800' :
                      transaction.auditLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {transaction.auditLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 