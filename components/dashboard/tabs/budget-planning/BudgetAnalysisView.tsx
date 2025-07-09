const budgetAnalysis = [
  { 
    id: 1, 
    category: 'Construction Materials', 
    budgeted: 850000, 
    actual: 920000, 
    variance: 70000, 
    variancePercent: 8.2,
    performance: 'Over Budget',
    recommendation: 'Negotiate bulk discounts'
  },
  { 
    id: 2, 
    category: 'Labor Costs', 
    budgeted: 1200000, 
    actual: 1180000, 
    variance: -20000, 
    variancePercent: -1.7,
    performance: 'Under Budget',
    recommendation: 'Maintain current efficiency'
  },
  { 
    id: 3, 
    category: 'Equipment Rental', 
    budgeted: 450000, 
    actual: 520000, 
    variance: 70000, 
    variancePercent: 15.6,
    performance: 'Over Budget',
    recommendation: 'Review rental contracts'
  },
  { 
    id: 4, 
    category: 'Administrative', 
    budgeted: 200000, 
    actual: 185000, 
    variance: -15000, 
    variancePercent: -7.5,
    performance: 'Under Budget',
    recommendation: 'Continue cost controls'
  }
];

const performanceMetrics = [
  { metric: 'Budget Accuracy', value: '92.5%', status: 'Good', trend: 'Improving' },
  { metric: 'Cost Efficiency', value: '87.3%', status: 'Average', trend: 'Stable' },
  { metric: 'Variance Control', value: '94.1%', status: 'Excellent', trend: 'Improving' },
  { metric: 'Savings Rate', value: '5.2%', status: 'Good', trend: 'Decreasing' }
];

export default function BudgetAnalysisView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Budget Analysis & Performance</h3>
      
      {/* Performance Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Performance Metrics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">{metric.value}</div>
              <div className="flex items-center justify-between mt-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  metric.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                  metric.status === 'Good' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {metric.status}
                </span>
                <span className="text-xs text-gray-500">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Analysis Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Budget Variance Analysis</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budgeted</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance %</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {budgetAnalysis.map(analysis => (
                <tr key={analysis.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{analysis.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{analysis.budgeted.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{analysis.actual.toLocaleString()}</td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${analysis.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {analysis.variance > 0 ? '+' : ''}{analysis.variance.toLocaleString()}
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${analysis.variancePercent > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {analysis.variancePercent > 0 ? '+' : ''}{analysis.variancePercent}%
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      analysis.performance === 'Over Budget' ? 'bg-red-100 text-red-800' :
                      analysis.performance === 'Under Budget' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {analysis.performance}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{analysis.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost Optimization Insights */}
      <div>
        <h4 className="text-md font-semibold mb-3">Cost Optimization Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-700">
            <div className="font-semibold text-green-800 dark:text-green-200 mb-2">Savings Opportunities</div>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Negotiate bulk material purchases</li>
              <li>• Optimize equipment rental schedules</li>
              <li>• Implement digital expense tracking</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Risk Areas</div>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Equipment rental costs increasing</li>
              <li>• Material price fluctuations</li>
              <li>• Labor cost pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 