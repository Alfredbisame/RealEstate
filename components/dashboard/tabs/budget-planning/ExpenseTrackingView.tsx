const expenses = [
  { 
    id: 1, 
    date: '2024-07-15', 
    description: 'Cement Purchase', 
    category: 'Materials', 
    amount: 25000, 
    site: 'Accra Site A',
    approvedBy: 'Kwame Mensah',
    status: 'Approved',
    paymentMethod: 'Bank Transfer'
  },
  { 
    id: 2, 
    date: '2024-07-14', 
    description: 'Equipment Maintenance', 
    category: 'Equipment', 
    amount: 15000, 
    site: 'Kumasi Site B',
    approvedBy: 'Ama Osei',
    status: 'Pending',
    paymentMethod: 'Petty Cash'
  },
  { 
    id: 3, 
    date: '2024-07-13', 
    description: 'Worker Safety Equipment', 
    category: 'Safety', 
    amount: 8500, 
    site: 'Tamale Site C',
    approvedBy: 'Yaw Darko',
    status: 'Approved',
    paymentMethod: 'Petty Cash'
  },
  { 
    id: 4, 
    date: '2024-07-12', 
    description: 'Office Supplies', 
    category: 'Administrative', 
    amount: 3200, 
    site: 'Cape Coast Site D',
    approvedBy: 'Efua Addo',
    status: 'Rejected',
    paymentMethod: 'Petty Cash'
  }
];

const expenseCategories = [
  { category: 'Materials', total: 125000, percentage: 35, trend: 'Increasing' },
  { category: 'Labor', total: 98000, percentage: 28, trend: 'Stable' },
  { category: 'Equipment', total: 75000, percentage: 21, trend: 'Increasing' },
  { category: 'Administrative', total: 32000, percentage: 9, trend: 'Decreasing' },
  { category: 'Safety', total: 25000, percentage: 7, trend: 'Stable' }
];

export default function ExpenseTrackingView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Expense Tracking & Analysis</h3>
      
      {/* Expense Categories Summary */}
      <div>
        <h4 className="text-md font-semibold mb-3">Expense Categories Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenseCategories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{cat.category}</div>
                <div className="text-sm text-gray-500">{cat.percentage}%</div>
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                GHS {cat.total.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Trend: <span className={`font-medium ${
                  cat.trend === 'Increasing' ? 'text-red-600' :
                  cat.trend === 'Decreasing' ? 'text-green-600' :
                  'text-blue-600'
                }`}>{cat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Expenses */}
      <div>
        <h4 className="text-md font-semibold mb-3">Recent Expenses</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved By</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {expenses.map(expense => (
                <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{expense.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.site}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.approvedBy}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      expense.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      expense.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {expense.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 