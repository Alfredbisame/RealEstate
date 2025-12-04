const discrepancies = [
  { 
    id: 1, 
    date: '2024-07-15', 
    description: 'Bank Service Charge', 
    bankAmount: -500, 
    internalAmount: 0, 
    difference: -500, 
    type: 'Bank Charge',
    priority: 'High',
    status: 'Pending'
  },
  { 
    id: 2, 
    date: '2024-07-14', 
    description: 'Interest Earned', 
    bankAmount: 250, 
    internalAmount: 0, 
    difference: 250, 
    type: 'Interest',
    priority: 'Medium',
    status: 'Resolved'
  },
  { 
    id: 3, 
    date: '2024-07-13', 
    description: 'Check Clearing Delay', 
    bankAmount: 15000, 
    internalAmount: 0, 
    difference: 15000, 
    type: 'Timing',
    priority: 'Low',
    status: 'Pending'
  },
  { 
    id: 4, 
    date: '2024-07-12', 
    description: 'Bank Error', 
    bankAmount: -1000, 
    internalAmount: 0, 
    difference: -1000, 
    type: 'Error',
    priority: 'High',
    status: 'Under Review'
  }
];

export default function DiscrepancyResolutionView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Discrepancy Resolution</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internal Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difference</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {discrepancies.map(discrepancy => (
              <tr key={discrepancy.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-4 py-3 whitespace-nowrap text-sm">{discrepancy.date}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{discrepancy.description}</td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${discrepancy.bankAmount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {discrepancy.bankAmount > 0 ? '+' : ''}{discrepancy.bankAmount.toLocaleString()}
                </td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${discrepancy.internalAmount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {discrepancy.internalAmount > 0 ? '+' : ''}{discrepancy.internalAmount.toLocaleString()}
                </td>
                <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${discrepancy.difference > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {discrepancy.difference > 0 ? '+' : ''}{discrepancy.difference.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">{discrepancy.type}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    discrepancy.priority === 'High' ? 'bg-blue-100 text-blue-800' :
                    discrepancy.priority === 'Medium' ? 'bg-blue-50 text-blue-700' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    {discrepancy.priority}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    discrepancy.status === 'Resolved' ? 'bg-blue-50 text-blue-700' :
                    discrepancy.status === 'Pending' ? 'bg-blue-100 text-blue-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {discrepancy.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 