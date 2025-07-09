const reminders = [
  { id: 1, client: 'Acme Corp', amount: 2000, due: '2024-07-10', status: 'Upcoming' },
  { id: 2, client: 'Beta Ltd', amount: 1500, due: '2024-07-05', status: 'Overdue' },
  { id: 3, client: 'Gamma Estates', amount: 3000, due: '2024-07-12', status: 'Upcoming' },
];

export default function PaymentRemindersView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Payment Reminders</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Client</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map(rem => (
            <tr key={rem.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{rem.client}</td>
              <td className="px-4 py-2">{rem.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{rem.due}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rem.status === 'Upcoming' ? 'bg-blue-200 text-blue-800' : 'bg-red-200 text-red-800'}`}>{rem.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 