const pettyCashSites = [
  { 
    id: 1, 
    site: 'Accra Site A', 
    manager: 'Kwame Mensah', 
    allocatedAmount: 15000, 
    currentBalance: 8500, 
    lastReplenishment: '2024-07-10', 
    status: 'Active',
    expenses: 6500,
    pendingRequests: 2
  },
  { 
    id: 2, 
    site: 'Kumasi Site B', 
    manager: 'Ama Osei', 
    allocatedAmount: 12000, 
    currentBalance: 3200, 
    lastReplenishment: '2024-07-08', 
    status: 'Low Balance',
    expenses: 8800,
    pendingRequests: 1
  },
  { 
    id: 3, 
    site: 'Tamale Site C', 
    manager: 'Yaw Darko', 
    allocatedAmount: 10000, 
    currentBalance: 9500, 
    lastReplenishment: '2024-07-12', 
    status: 'Active',
    expenses: 500,
    pendingRequests: 0
  },
  { 
    id: 4, 
    site: 'Cape Coast Site D', 
    manager: 'Efua Addo', 
    allocatedAmount: 8000, 
    currentBalance: 0, 
    lastReplenishment: '2024-07-05', 
    status: 'Depleted',
    expenses: 8000,
    pendingRequests: 3
  }
];

const pettyCashExpenses = [
  { 
    id: 1, 
    site: 'Accra Site A', 
    date: '2024-07-15', 
    description: 'Office Supplies', 
    amount: 250, 
    category: 'Supplies',
    approvedBy: 'Kwame Mensah',
    receipt: 'Yes'
  },
  { 
    id: 2, 
    site: 'Kumasi Site B', 
    date: '2024-07-14', 
    description: 'Transportation', 
    amount: 150, 
    category: 'Transport',
    approvedBy: 'Ama Osei',
    receipt: 'Yes'
  },
  { 
    id: 3, 
    site: 'Accra Site A', 
    date: '2024-07-13', 
    description: 'Lunch for Team', 
    amount: 300, 
    category: 'Meals',
    approvedBy: 'Kwame Mensah',
    receipt: 'Pending'
  }
];

export default function PettyCashManagementView({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold mb-4">Site-Level Petty Cash Management</h3>
      
      {/* Site Overview */}
      <div>
        <h4 className="text-md font-semibold mb-3">Site Petty Cash Overview</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocated (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Balance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expenses</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Replenishment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Requests</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pettyCashSites.map(site => (
                <tr key={site.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{site.site}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{site.manager}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{site.allocatedAmount.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{site.currentBalance.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{site.expenses.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{site.lastReplenishment}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      site.status === 'Active' ? 'bg-green-100 text-green-800' :
                      site.status === 'Low Balance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {site.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{site.pendingRequests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Expenses */}
      <div>
        <h4 className="text-md font-semibold mb-3">Recent Petty Cash Expenses</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved By</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pettyCashExpenses.map(expense => (
                <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{expense.site}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{expense.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.category}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">{expense.approvedBy}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      expense.receipt === 'Yes' ? 'bg-green-100 text-green-800' :
                      expense.receipt === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {expense.receipt}
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