const budgetForecasts = [
  { 
    id: 1, 
    category: 'Construction Materials', 
    currentBudget: 850000, 
    projectedSpend: 920000, 
    variance: 70000, 
    variancePercent: 8.2,
    trend: 'Increasing',
    risk: 'Medium'
  },
  { 
    id: 2, 
    category: 'Labor Costs', 
    currentBudget: 1200000, 
    projectedSpend: 1180000, 
    variance: -20000, 
    variancePercent: -1.7,
    trend: 'Stable',
    risk: 'Low'
  },
  { 
    id: 3, 
    category: 'Equipment Rental', 
    currentBudget: 450000, 
    projectedSpend: 520000, 
    variance: 70000, 
    variancePercent: 15.6,
    trend: 'Increasing',
    risk: 'High'
  },
  { 
    id: 4, 
    category: 'Administrative', 
    currentBudget: 200000, 
    projectedSpend: 185000, 
    variance: -15000, 
    variancePercent: -7.5,
    trend: 'Decreasing',
    risk: 'Low'
  }
];

const forecastingScenarios = [
  { scenario: 'Optimistic', totalBudget: 2800000, projectedSpend: 2650000, savings: 150000, overspend: null },
  { scenario: 'Realistic', totalBudget: 2800000, projectedSpend: 2800000, savings: 0, overspend: null },
  { scenario: 'Conservative', totalBudget: 2800000, projectedSpend: 2950000, savings: null, overspend: 150000 }
];

export default function BudgetForecastingView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Budget Forecasting & Projections</h3>
      
      {/* Budget Category Forecasts */}
      <div>
        <h4 className="text-md font-semibold mb-3">Category-wise Budget Forecasts</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Budget</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projected Spend</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance %</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {budgetForecasts.map(forecast => (
                <tr key={forecast.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{forecast.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{forecast.currentBudget?.toLocaleString() || '0'}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{forecast.projectedSpend?.toLocaleString() || '0'}</td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${forecast.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {forecast.variance > 0 ? '+' : ''}{forecast.variance?.toLocaleString() || '0'}
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${forecast.variancePercent > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {forecast.variancePercent > 0 ? '+' : ''}{forecast.variancePercent || '0'}%
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      forecast.trend === 'Increasing' ? 'bg-red-100 text-red-800' :
                      forecast.trend === 'Decreasing' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {forecast.trend}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      forecast.risk === 'High' ? 'bg-red-100 text-red-800' :
                      forecast.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {forecast.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Forecasting Scenarios */}
      <div>
        <h4 className="text-md font-semibold mb-3">Budget Scenarios</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {forecastingScenarios.map((scenario, idx) => (
            <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-700">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">{scenario.scenario}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <div>Total Budget: GHS {scenario.totalBudget?.toLocaleString() || '0'}</div>
                <div>Projected: GHS {scenario.projectedSpend?.toLocaleString() || '0'}</div>
                {scenario.savings ? (
                  <div className="text-green-600 font-medium">Savings: GHS {scenario.savings?.toLocaleString() || '0'}</div>
                ) : scenario.overspend ? (
                  <div className="text-red-600 font-medium">Overspend: GHS {scenario.overspend?.toLocaleString() || '0'}</div>
                ) : (
                  <div className="text-gray-600 font-medium">No variance</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 