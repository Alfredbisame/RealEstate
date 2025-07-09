const auditTrail = [
  { id: 1, transaction: 'Income Tax Payment', amount: 150000, date: '2024-07-15', user: 'John Doe', status: 'Completed' },
  { id: 2, transaction: 'VAT Payment', amount: 75000, date: '2024-07-10', user: 'Jane Smith', status: 'Completed' },
  { id: 3, transaction: 'SSNIT Contribution', amount: 5000, date: '2024-07-15', user: 'John Doe', status: 'Completed' },
];

export default function AuditTrailView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Audit Trail Maintenance</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Transaction</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {auditTrail.map(trail => (
            <tr key={trail.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{trail.transaction}</td>
              <td className="px-4 py-2">{trail.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{trail.date}</td>
              <td className="px-4 py-2">{trail.user}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${trail.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{trail.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 