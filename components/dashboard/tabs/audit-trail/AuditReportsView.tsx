const auditReports = [
  {
    id: 1,
    reportType: 'Internal Audit',
    title: 'Q2 2024 Financial Audit Report',
    date: '2024-07-15',
    auditor: 'KPMG Ghana',
    status: 'Completed',
    findings: 12,
    criticalIssues: 2,
    recommendations: 8,
    complianceScore: 92
  },
  {
    id: 2,
    reportType: 'GRA Audit',
    title: 'VAT Compliance Audit Report',
    date: '2024-07-10',
    auditor: 'GRA Audit Team',
    status: 'In Progress',
    findings: 5,
    criticalIssues: 0,
    recommendations: 3,
    complianceScore: 98
  },
  {
    id: 3,
    reportType: 'External Audit',
    title: 'Annual Financial Statement Audit',
    date: '2024-06-30',
    auditor: 'Deloitte Ghana',
    status: 'Completed',
    findings: 8,
    criticalIssues: 1,
    recommendations: 6,
    complianceScore: 95
  },
  {
    id: 4,
    reportType: 'Compliance Review',
    title: 'Tax Compliance Review Report',
    date: '2024-06-25',
    auditor: 'Internal Audit Team',
    status: 'Pending Review',
    findings: 3,
    criticalIssues: 0,
    recommendations: 2,
    complianceScore: 100
  }
];

const reportMetrics = [
  { metric: 'Total Reports', value: '24', trend: 'This Year' },
  { metric: 'Completed Audits', value: '18', trend: '75%' },
  { metric: 'Critical Issues', value: '3', trend: 'Resolved' },
  { metric: 'Compliance Score', value: '94.2%', trend: 'Improving' }
];

export default function AuditReportsView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Audit Reports & Findings</h3>
      
      {/* Report Metrics */}
      <div>
        <h4 className="text-md font-semibold mb-3">Audit Overview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {reportMetrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</div>
              <div className="text-xs text-blue-500 dark:text-blue-300 mt-1">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Reports Table */}
      <div>
        <h4 className="text-md font-semibold mb-3">Audit Reports</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Findings</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Critical Issues</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {auditReports.map(report => (
                <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.reportType}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.title}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.auditor}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{report.findings}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      report.criticalIssues === 0 ? 'bg-green-100 text-green-800' :
                      report.criticalIssues <= 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.criticalIssues}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            report.complianceScore >= 95 ? 'bg-green-500' :
                            report.complianceScore >= 90 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${report.complianceScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{report.complianceScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">View Report</button>
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