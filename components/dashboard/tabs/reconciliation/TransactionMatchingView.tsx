const transactions = [
  { 
    id: 1, 
    date: '2024-07-15', 
    description: 'Payment from ABC Construction', 
    amount: 50000, 
    bankStatement: 'Bank Credit', 
    internalRecord: 'Invoice Payment', 
    status: 'Matched',
    confidence: '95%'
  },
  { 
    id: 2, 
    date: '2024-07-14', 
    description: 'Office Supplies Purchase', 
    amount: -2500, 
    bankStatement: 'Bank Debit', 
    internalRecord: 'Expense', 
    status: 'Pending',
    confidence: '75%'
  },
  { 
    id: 3, 
    date: '2024-07-13', 
    description: 'Utility Bill Payment', 
    amount: -15000, 
    bankStatement: 'Bank Debit', 
    internalRecord: 'Utility Expense', 
    status: 'Matched',
    confidence: '98%'
  },
  { 
    id: 4, 
    date: '2024-07-12', 
    description: 'Unknown Transaction', 
    amount: -5000, 
    bankStatement: 'Bank Debit', 
    internalRecord: 'Unmatched', 
    status: 'Unmatched',
    confidence: '0%'
  }
];

export default function TransactionMatchingView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Transaction Matching & Reconciliation</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (GHS)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Statement</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internal Record</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map(transaction => (
              <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.date}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.description}</td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.bankStatement}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.internalRecord}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    transaction.status === 'Matched' ? 'bg-green-100 text-green-800' :
                    transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{transaction.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 