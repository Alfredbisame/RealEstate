'use client';

import { TrendingUp, FileText, CreditCard, BarChart3, Download } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';
import StatsCard from '../../widgets/StatsCard';
import ChartWidget from '../../widgets/ChartWidget';
import { useState } from 'react';

const kpiData = [
  {
    title: 'Total Revenue',
    value: 'GHS 1.25M',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: FaCediSign,
    color: 'green' as const,
    description: 'Year-to-date revenue',
    trend: 'up',
  },
  {
    title: 'Total Expenses',
    value: 'GHS 890K',
    change: '+3.1%',
    changeType: 'negative' as const,
    icon: FileText,
    color: 'red' as const,
    description: 'Year-to-date expenses',
    trend: 'up',
  },
  {
    title: 'Profit Margin',
    value: '28.8%',
    change: '+2.4%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    color: 'blue' as const,
    description: 'Current margin',
    trend: 'up',
  },
  {
    title: 'Outstanding Invoices',
    value: 'GHS 73.7K',
    change: '-12.5%',
    changeType: 'positive' as const,
    icon: CreditCard,
    color: 'orange' as const,
    description: 'Pending payments',
    trend: 'down',
  },
];

const revenueExpensesChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue (GHS)',
      data: [195000, 210000, 225000, 240000, 255000, 270000],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
    },
    {
      label: 'Expenses (GHS)',
      data: [135000, 142000, 148000, 153000, 160000, 165000],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
  ],
};

const profitMarginChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Profit Margin (%)',
      data: [22.5, 24.1, 25.8, 26.7, 27.3, 28.8],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    },
  ],
};

const netProfitChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Net Profit (GHS)',
      data: [60000, 68000, 77000, 87000, 95000, 105000],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    },
  ],
};

const riskAssessment = {
  score: 82,
  level: 'Moderate',
  recommendations: [
    'Monitor expense growth closely.',
    'Increase revenue diversification.',
    'Review outstanding invoices monthly.',
  ],
};

const auditNotes = [
  {
    author: 'Ama Osei',
    date: '2024-07-10',
    note: 'Reviewed Q2 financials. No major discrepancies found.'
  },
  {
    author: 'Kwame Mensah',
    date: '2024-04-08',
    note: 'Expense reporting improved. One minor issue corrected.'
  },
];

const financialReviews = [
  {
    id: 'FR-2024-001',
    period: 'Q2 2024',
    reviewer: 'Ama Osei',
    date: '2024-07-10',
    status: 'Completed',
    findings: 2,
    summary: 'No major discrepancies. Recommendations for cost optimization.'
  },
  {
    id: 'FR-2024-002',
    period: 'Q1 2024',
    reviewer: 'Kwame Mensah',
    date: '2024-04-08',
    status: 'Completed',
    findings: 1,
    summary: 'Minor expense reporting issue. Corrected.'
  },
  {
    id: 'FR-2023-004',
    period: 'Q4 2023',
    reviewer: 'Jane Gush',
    date: '2024-01-12',
    status: 'Completed',
    findings: 0,
    summary: 'All records accurate.'
  },
];

// Pie chart for expense breakdown (fix: remove backgroundColor array, only use label/data)
const expenseBreakdownChart = {
  labels: ['Salaries', 'Materials', 'Utilities', 'Maintenance', 'Other'],
  datasets: [
    {
      label: 'Expenses',
      data: [42000, 32000, 12000, 8000, 6000],
    },
  ],
};

// Line chart for cash flow trend
const cashFlowTrendChart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Cash Inflow (GHS)',
      data: [120000, 135000, 140000, 150000, 160000, 170000],
      borderColor: 'rgb(34,197,94)',
      backgroundColor: 'rgba(34,197,94,0.1)',
    },
    {
      label: 'Cash Outflow (GHS)',
      data: [90000, 95000, 100000, 110000, 115000, 120000],
      borderColor: 'rgb(239,68,68)',
      backgroundColor: 'rgba(239,68,68,0.1)',
    },
  ],
};

// Bar chart for department-wise profit
const departmentProfitChart = {
  labels: ['Sales', 'Operations', 'HR', 'Finance', 'IT'],
  datasets: [
    {
      label: 'Profit (GHS)',
      data: [35000, 27000, 12000, 18000, 9000],
      borderColor: 'rgb(59,130,246)',
      backgroundColor: 'rgba(59,130,246,0.7)',
    },
  ],
};

export default function FinancialReviewScreen() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1200); // Mock download
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-2xl p-0 border border-gray-200 dark:border-gray-800 flex flex-col min-h-screen h-screen">
      <div className="bg-gradient-to-r from-green-600 to-blue-500 rounded-t-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">Financial Review & Performance</h2>
          <p className="text-white/80 text-sm md:text-base font-medium">Key financial metrics, trends, and audit findings for auditors.</p>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-white/90 hover:bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow transition disabled:opacity-60"
          disabled={downloading}
        >
          <Download className="w-5 h-5" />
          {downloading ? 'Exporting...' : 'Export Report'}
        </button>
      </div>
      <div className="flex-1 min-h-0 flex flex-col px-2 md:px-8 pt-2 md:pt-6 pb-2 md:pb-8 gap-4 md:gap-8 overflow-y-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {kpiData.map((stat, idx) => (
            <StatsCard key={idx} {...stat} />
          ))}
        </div>
        {/* Revenue vs Expenses Chart */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget 
            title="Revenue vs Expenses"
            data={revenueExpensesChart}
            type="area"
          />
        </div>
        {/* Profit Margin Chart */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget 
            title="Profit Margin Trend"
            data={profitMarginChart}
            type="bar"
          />
        </div>
        {/* Net Profit Trend Analysis */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget 
            title="Net Profit Trend"
            data={netProfitChart}
            type="area"
          />
        </div>
        {/* Financial Risk Assessment */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Financial Risk Assessment</h4>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">{riskAssessment.score}</span>
              <span className="text-base font-medium text-gray-700 dark:text-gray-200">Risk Score</span>
              <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${riskAssessment.level === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : riskAssessment.level === 'High' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{riskAssessment.level}</span>
            </div>
            <ul className="flex-1 list-disc pl-6 text-gray-700 dark:text-gray-300 text-sm space-y-1">
              {riskAssessment.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Financial Reviews Table */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Recent Financial Reviews</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Findings</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {financialReviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">{review.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">{review.period}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">{review.reviewer}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">{review.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        review.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        review.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {review.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-center">{review.findings}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">{review.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Audit Notes/Comments */}
        <div className="w-full rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Audit Notes & Comments</h4>
          <ul className="space-y-2">
            {auditNotes.map((note, idx) => (
              <li key={idx} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/40 dark:bg-blue-900/20 rounded">
                <div className="text-sm text-gray-700 dark:text-gray-200">{note.note}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">By {note.author} on {note.date}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Expense Breakdown Pie Chart */}
        <div className="w-full min-h-[320px] rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget
            title="Expense Breakdown"
            data={expenseBreakdownChart}
            type="pie"
          />
        </div>
        {/* Cash Flow Trend Line Chart */}
        <div className="w-full min-h-[320px] rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget
            title="Cash Flow Trend"
            data={cashFlowTrendChart}
            type="area"
          />
        </div>
        {/* Department-wise Profit Bar Chart */}
        <div className="w-full min-h-[320px] rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ChartWidget
            title="Department-wise Profit"
            data={departmentProfitChart}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
} 