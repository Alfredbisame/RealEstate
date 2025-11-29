'use client';

interface Transaction {
  id: string;
  title: string;
  reference: string;
  amount: string;
  status: 'Approved' | 'Verified' | 'Pending Review';
  statusColor: string;
}

export default function TransactionsList() {
  const transactions: Transaction[] = [
    {
      id: '1',
      title: 'Material Purchase',
      reference: 'INV-2024-001',
      amount: 'GHS 45,200',
      status: 'Approved',
      statusColor: 'text-green-600'
    },
    {
      id: '2',
      title: 'Contractor Payment',
      reference: 'PAY-2024-012',
      amount: 'GHS 28,500',
      status: 'Verified',
      statusColor: 'text-blue-600'
    },
    {
      id: '3',
      title: 'Permit Fee',
      reference: 'PER-2024-003',
      amount: 'GHS 3,200',
      status: 'Pending Review',
      statusColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{transaction.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.reference}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900 dark:text-white">{transaction.amount}</p>
              <p className={`text-sm ${transaction.statusColor}`}>{transaction.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 