const graComplianceData = [
  {
    category: 'Income Tax',
    status: 'Compliant',
    lastFiling: '2024-06-30',
    nextDue: '2024-09-30',
    amount: 250000,
    complianceScore: 95
  },
  {
    category: 'VAT',
    status: 'Compliant',
    lastFiling: '2024-06-15',
    nextDue: '2024-07-15',
    amount: 125000,
    complianceScore: 98
  },
  {
    category: 'NHIL',
    status: 'Pending',
    lastFiling: '2024-05-31',
    nextDue: '2024-07-31',
    amount: 45000,
    complianceScore: 85
  },
  {
    category: 'GETFL',
    status: 'Compliant',
    lastFiling: '2024-06-30',
    nextDue: '2024-09-30',
    amount: 30000,
    complianceScore: 92
  },
  {
    category: 'Withholding Tax',
    status: 'Compliant',
    lastFiling: '2024-06-30',
    nextDue: '2024-07-31',
    amount: 75000,
    complianceScore: 100
  }
];

const complianceMetrics = [
  { metric: 'Overall Compliance', value: '94.2%', status: 'Good' },
  { metric: 'Filing Deadlines', value: '100%', status: 'Excellent' },
  { metric: 'Payment Accuracy', value: '98.5%', status: 'Good' },
  { metric: 'Documentation', value: '92.1%', status: 'Good' }
];

export default function GRAComplianceView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">GRA Compliance Status</h3>
      
      {/* Compliance Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Compliance Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {complianceMetrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-green-200 dark:border-green-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-xs text-green-500 dark:text-green-300 mt-1">{metric.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GRA Compliance Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Tax Category Compliance</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Filing</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Due</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {graComplianceData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{item.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Compliant' ? 'bg-green-100 text-green-800' :
                      item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{item.lastFiling}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{item.nextDue}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{item.amount?.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            item.complianceScore >= 90 ? 'bg-green-500' :
                            item.complianceScore >= 80 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${item.complianceScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{item.complianceScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">View Details</button>
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