const autoReconciliationRules = [
  { 
    id: 1, 
    ruleName: 'Exact Amount Match', 
    description: 'Match transactions with identical amounts', 
    confidence: '95%',
    enabled: true,
    priority: 'High'
  },
  { 
    id: 2, 
    ruleName: 'Date Range Match', 
    description: 'Match transactions within 3 days', 
    confidence: '85%',
    enabled: true,
    priority: 'Medium'
  },
  { 
    id: 3, 
    ruleName: 'Description Similarity', 
    description: 'AI-powered description matching', 
    confidence: '75%',
    enabled: true,
    priority: 'Medium'
  },
  { 
    id: 4, 
    ruleName: 'Recurring Transactions', 
    description: 'Auto-match monthly recurring payments', 
    confidence: '90%',
    enabled: false,
    priority: 'Low'
  }
];

const aiMatchingStats = [
  { label: 'Auto-Matched Transactions', value: '1,247', percentage: '78%' },
  { label: 'Manual Review Required', value: '342', percentage: '22%' },
  { label: 'Accuracy Rate', value: '94.2%', percentage: '94.2%' },
  { label: 'Time Saved', value: '12.5 hours', percentage: '85%' }
];

export default function AutoReconciliationView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Auto Reconciliation & AI Matching</h3>
      
      {/* AI Matching Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {aiMatchingStats.map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            <div className="text-xs text-blue-500 dark:text-blue-300 mt-1">{stat.percentage} accuracy</div>
          </div>
        ))}
      </div>

      {/* Auto Reconciliation Rules */}
      <div>
        <h4 className="text-md font-semibold mb-3">Reconciliation Rules</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {autoReconciliationRules.map(rule => (
                <tr key={rule.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{rule.ruleName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{rule.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{rule.confidence}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      rule.priority === 'High' ? 'bg-red-100 text-red-800' :
                      rule.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {rule.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${rule.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {rule.enabled ? 'Enabled' : 'Disabled'}
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