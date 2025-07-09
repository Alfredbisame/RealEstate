const levies = [
  { id: 1, type: 'NHIL', amount: 15000, rate: '2.5%', due: '2024-07-15', status: 'Paid' },
  { id: 2, type: 'GETFL', amount: 12000, rate: '2.5%', due: '2024-07-15', status: 'Paid' },
];

export default function NHILGETFLView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">NHIL & GETFL Tracking</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Levy Type</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Rate</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {levies.map(levy => (
            <tr key={levy.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{levy.type}</td>
              <td className="px-4 py-2">{levy.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{levy.rate}</td>
              <td className="px-4 py-2">{levy.due}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levy.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{levy.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 