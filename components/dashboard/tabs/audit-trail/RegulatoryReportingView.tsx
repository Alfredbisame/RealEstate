const regulatoryReports = [
  {
    id: 1,
    reportType: 'VAT Return',
    period: 'June 2024',
    dueDate: '2024-07-15',
    submissionDate: '2024-07-12',
    status: 'Submitted',
    amount: 125000,
    complianceScore: 98
  },
  {
    id: 2,
    reportType: 'Income Tax Return',
    period: 'Q2 2024',
    dueDate: '2024-08-31',
    submissionDate: null,
    status: 'Pending',
    amount: 250000,
    complianceScore: 95
  },
  {
    id: 3,
    reportType: 'NHIL Return',
    period: 'June 2024',
    dueDate: '2024-07-31',
    submissionDate: null,
    status: 'Not Started',
    amount: 45000,
    complianceScore: 85
  },
  {
    id: 4,
    reportType: 'GETFL Return',
    period: 'Q2 2024',
    dueDate: '2024-09-30',
    submissionDate: '2024-07-01',
    status: 'Submitted',
    amount: 30000,
    complianceScore: 100
  },
  {
    id: 5,
    reportType: 'Withholding Tax',
    period: 'June 2024',
    dueDate: '2024-07-31',
    submissionDate: '2024-07-10',
    status: 'Submitted',
    amount: 75000,
    complianceScore: 100
  }
];

const reportingMetrics = [
  { metric: 'Reports Due', value: '3', trend: 'This Month' },
  { metric: 'Submitted', value: '2', trend: 'On Time' },
  { metric: 'Pending', value: '1', trend: 'Overdue' },
  { metric: 'Compliance Rate', value: '96.5%', trend: 'Excellent' }
];

export default function RegulatoryReportingView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Regulatory Reporting & Submissions</h3>
      
      {/* Reporting Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Reporting Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {reportingMetrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-xs text-indigo-500 dark:text-indigo-300 mt-1">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Regulatory Reports Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Regulatory Reports</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {regulatoryReports.map(report => (
                <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.reportType}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.period}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.dueDate}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.submissionDate || '-'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                      report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      report.status === 'Not Started' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.amount?.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            report.complianceScore >= 95 ? 'bg-green-500' :
                            report.complianceScore >= 85 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${report.complianceScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{report.complianceScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {report.status === 'Submitted' ? (
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">View Report</button>
                    ) : (
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">Prepare Report</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GRA Integration Status */}
      <div>
        <h4 className="text-md font-semibold mb-3">GRA Integration Status</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
            <h5 className="font-semibold text-green-800 dark:text-green-200 mb-4">Integration Status</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">VAT Integration</span>
                <span className="text-sm font-semibold text-green-600">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Income Tax Integration</span>
                <span className="text-sm font-semibold text-green-600">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">NHIL Integration</span>
                <span className="text-sm font-semibold text-yellow-600">Pending</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">GETFL Integration</span>
                <span className="text-sm font-semibold text-green-600">Connected</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
            <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">Submission History</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Submissions</span>
                <span className="text-sm font-semibold text-purple-600">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Successful</span>
                <span className="text-sm font-semibold text-green-600">152</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Failed</span>
                <span className="text-sm font-semibold text-red-600">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Success Rate</span>
                <span className="text-sm font-semibold text-green-600">97.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 