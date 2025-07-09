const financialGoals = [
  { 
    id: 1, 
    goal: 'Reduce Operating Costs', 
    target: '15% reduction', 
    current: '8% achieved', 
    deadline: '2024-12-31', 
    status: 'On Track',
    priority: 'High'
  },
  { 
    id: 2, 
    goal: 'Increase Profit Margins', 
    target: '25% margin', 
    current: '22% achieved', 
    deadline: '2024-12-31', 
    status: 'On Track',
    priority: 'High'
  },
  { 
    id: 3, 
    goal: 'Optimize Cash Flow', 
    target: '30 days cycle', 
    current: '35 days', 
    deadline: '2024-10-31', 
    status: 'Behind Schedule',
    priority: 'Medium'
  },
  { 
    id: 4, 
    goal: 'Expand to New Markets', 
    target: '3 new locations', 
    current: '1 completed', 
    deadline: '2025-06-30', 
    status: 'Planning',
    priority: 'Medium'
  }
];

const cashFlowProjections = [
  { month: 'July 2024', income: 2800000, expenses: 2200000, net: 600000 },
  { month: 'August 2024', income: 2900000, expenses: 2250000, net: 650000 },
  { month: 'September 2024', income: 3000000, expenses: 2300000, net: 700000 },
  { month: 'October 2024', income: 3100000, expenses: 2350000, net: 750000 }
];

const investmentOpportunities = [
  { 
    opportunity: 'Equipment Upgrade', 
    investment: 500000, 
    expectedROI: '18%', 
    paybackPeriod: '2.5 years',
    risk: 'Low',
    recommendation: 'Proceed'
  },
  { 
    opportunity: 'Technology Implementation', 
    investment: 300000, 
    expectedROI: '25%', 
    paybackPeriod: '1.8 years',
    risk: 'Medium',
    recommendation: 'Consider'
  },
  { 
    opportunity: 'Market Expansion', 
    investment: 1200000, 
    expectedROI: '30%', 
    paybackPeriod: '3.2 years',
    risk: 'High',
    recommendation: 'Research'
  }
];

export default function FinancialPlanningView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Financial Planning & Strategy</h3>
      
      {/* Financial Goals */}
      <div>
        <h4 className="text-md font-semibold mb-3">Strategic Financial Goals</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goal</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Progress</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {financialGoals.map(goal => (
                <tr key={goal.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{goal.goal}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{goal.target}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{goal.current}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{goal.deadline}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      goal.status === 'On Track' ? 'bg-green-100 text-green-800' :
                      goal.status === 'Behind Schedule' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {goal.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      goal.priority === 'High' ? 'bg-red-100 text-red-800' :
                      goal.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {goal.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cash Flow Projections */}
      <div>
        <h4 className="text-md font-semibold mb-3">Cash Flow Projections</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expenses (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Cash Flow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {cashFlowProjections.map((projection, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{projection.month}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-green-600">{projection.income.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-red-600">{projection.expenses.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600">{projection.net.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Investment Opportunities */}
      <div>
        <h4 className="text-md font-semibold mb-3">Investment Opportunities</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opportunity</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected ROI</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payback Period</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {investmentOpportunities.map((opportunity, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{opportunity.opportunity}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{opportunity.investment.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-green-600">{opportunity.expectedROI}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{opportunity.paybackPeriod}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      opportunity.risk === 'Low' ? 'bg-green-100 text-green-800' :
                      opportunity.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {opportunity.risk}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      opportunity.recommendation === 'Proceed' ? 'bg-green-100 text-green-800' :
                      opportunity.recommendation === 'Consider' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {opportunity.recommendation}
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