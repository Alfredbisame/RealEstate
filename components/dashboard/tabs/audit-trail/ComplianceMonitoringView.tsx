const complianceAlerts = [
  {
    id: 1,
    type: 'High Risk',
    title: 'VAT Filing Deadline Approaching',
    description: 'VAT return for June 2024 due in 3 days',
    date: '2024-07-15',
    priority: 'Critical',
    status: 'Active'
  },
  {
    id: 2,
    type: 'Medium Risk',
    title: 'Income Tax Payment Overdue',
    description: 'Q2 income tax payment is 5 days overdue',
    date: '2024-07-12',
    priority: 'High',
    status: 'Active'
  },
  {
    id: 3,
    type: 'Low Risk',
    title: 'Documentation Incomplete',
    description: 'Supporting documents missing for 3 transactions',
    date: '2024-07-10',
    priority: 'Medium',
    status: 'Resolved'
  },
  {
    id: 4,
    type: 'Info',
    title: 'GRA Compliance Check',
    description: 'Monthly compliance check completed successfully',
    date: '2024-07-08',
    priority: 'Low',
    status: 'Completed'
  }
];

const riskMetrics = [
  { metric: 'High Risk Items', value: '2', trend: 'Decreasing' },
  { metric: 'Medium Risk Items', value: '5', trend: 'Stable' },
  { metric: 'Low Risk Items', value: '12', trend: 'Increasing' },
  { metric: 'Compliance Score', value: '94.2%', trend: 'Improving' }
];

export default function ComplianceMonitoringView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Compliance Monitoring & Risk Assessment</h3>
      
      {/* Risk Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Risk Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {riskMetrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-xs text-orange-500 dark:text-orange-300 mt-1">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Alerts */}
      <div>
        <h4 className="text-md font-semibold mb-3">Compliance Alerts</h4>
        <div className="space-y-4">
          {complianceAlerts.map(alert => (
            <div key={alert.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full mr-3 ${
                      alert.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                      alert.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                      alert.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {alert.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      alert.status === 'Active' ? 'bg-red-100 text-red-800' :
                      alert.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{alert.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{alert.description}</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Date: {alert.date}</span>
                    <span className="mx-2">•</span>
                    <span>Type: {alert.type}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">View Details</button>
                  {alert.status === 'Active' && (
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">Resolve</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Monitoring Dashboard */}
      <div>
        <h4 className="text-md font-semibold mb-3">Real-time Compliance Dashboard</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
            <h5 className="font-semibold text-green-800 dark:text-green-200 mb-4">Compliance Status</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">VAT Compliance</span>
                <span className="text-sm font-semibold text-green-600">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Income Tax</span>
                <span className="text-sm font-semibold text-green-600">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">NHIL/GETFL</span>
                <span className="text-sm font-semibold text-yellow-600">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Documentation</span>
                <span className="text-sm font-semibold text-green-600">92%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
            <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">Risk Assessment</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">High Risk</span>
                <span className="text-sm font-semibold text-red-600">2 items</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Medium Risk</span>
                <span className="text-sm font-semibold text-yellow-600">5 items</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Low Risk</span>
                <span className="text-sm font-semibold text-green-600">12 items</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Overall Risk</span>
                <span className="text-sm font-semibold text-green-600">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 