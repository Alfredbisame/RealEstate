import { BarChart3, FileText, Shield, Clock, TrendingUp } from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';
import ChartWidget from '../../widgets/ChartWidget';
import type { StatsCardProps } from '../../widgets/stats-card/types';

const transactionMetrics = [
  {
    title: 'Total Transactions',
    value: '12,847',
    change: '+3.2%',
    changeType: 'positive' as const,
    icon: BarChart3,
    color: 'blue' as const,
    description: 'All-time transactions',
    trend: 'up',
  },
  {
    title: 'GRA Compliant',
    value: '98.5%',
    change: '+0.1%',
    changeType: 'positive' as const,
    icon: Shield,
    color: 'green' as const,
    description: 'Compliant with GRA',
    trend: 'stable',
  },
  {
    title: 'High Priority',
    value: '156',
    change: '-4.2%',
    changeType: 'negative' as const,
    icon: TrendingUp,
    color: 'orange' as const,
    description: 'High audit level',
    trend: 'down',
  },
  {
    title: 'Pending Review',
    value: '23',
    change: '0%',
    changeType: 'neutral' as const,
    icon: Clock,
    color: 'purple' as const,
    description: 'Awaiting review',
    trend: 'stable',
  },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Transaction Volume',
      data: [1200, 1500, 1100, 1800, 1700, 2000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      label: 'GRA Compliant',
      data: [1150, 1480, 1080, 1750, 1650, 1980],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    },
  ],
};

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

export default function TransactionsScreen() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-2xl p-0 border border-gray-200 dark:border-gray-800 flex flex-col min-h-screen h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-t-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">Financial Transactions & Audit Trail</h2>
          <p className="text-white/80 text-sm md:text-base font-medium">Complete audit trail and analytics of all financial transactions. Read-only access for auditors.</p>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col px-2 md:px-8 pt-2 md:pt-6 pb-2 md:pb-8 gap-4 md:gap-8 overflow-y-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {transactionMetrics.map((stat, idx) => (
            <StatsCard key={idx} {...stat} />
          ))}
        </div>
        {/* Chart Section */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget 
            title="Transaction Volume & Compliance"
            data={chartData}
            type="area"
          />
        </div>
        {/* Audit Trail Table */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Detailed Transaction Audit Trail</h4>
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
    </div>
  );
} 