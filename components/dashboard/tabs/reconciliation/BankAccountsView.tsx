const bankAccounts = [
  { 
    id: 1, 
    bank: 'Ghana Commercial Bank', 
    accountNumber: '0012345678', 
    accountType: 'Current', 
    balance: 1250000, 
    lastReconciliation: '2024-07-15', 
    status: 'Reconciled',
    pendingItems: 0,
    discrepancies: 0
  },
  { 
    id: 2, 
    bank: 'Ecobank Ghana', 
    accountNumber: '0023456789', 
    accountType: 'Savings', 
    balance: 850000, 
    lastReconciliation: '2024-07-10', 
    status: 'Pending',
    pendingItems: 5,
    discrepancies: 2
  },
  { 
    id: 3, 
    bank: 'Standard Chartered', 
    accountNumber: '0034567890', 
    accountType: 'Current', 
    balance: 2100000, 
    lastReconciliation: '2024-07-12', 
    status: 'Reconciled',
    pendingItems: 0,
    discrepancies: 0
  },
  { 
    id: 4, 
    bank: 'Fidelity Bank', 
    accountNumber: '0045678901', 
    accountType: 'Business', 
    balance: 450000, 
    lastReconciliation: '2024-07-08', 
    status: 'Discrepancy',
    pendingItems: 3,
    discrepancies: 1
  }
];

export default function BankAccountsView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Multi-Bank Account Management</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance (GHS)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Reconciliation</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Items</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discrepancies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {bankAccounts.map(account => (
              <tr key={account.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-4 py-3 whitespace-nowrap font-medium">{account.bank}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{account.accountNumber}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{account.accountType}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{account.balance.toLocaleString()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{account.lastReconciliation}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    account.status === 'Reconciled' ? 'bg-green-100 text-green-800' :
                    account.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {account.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{account.pendingItems}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{account.discrepancies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 