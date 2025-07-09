const payments = [
  { id: 1, payer: 'Acme Corp', method: 'PayStack', amount: 5000, status: 'Successful', date: '2024-07-01' },
  { id: 2, payer: 'Beta Ltd', method: 'MTN MoMo', amount: 3200, status: 'Failed', date: '2024-07-03' },
  { id: 3, payer: 'Gamma Estates', method: 'Bank Transfer', amount: 7000, status: 'Successful', date: '2024-07-05' },
];

export default function PaymentTableView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Payment Table</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Payer</th>
            <th className="px-4 py-2 text-left">Method</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(pay => (
            <tr key={pay.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{pay.payer}</td>
              <td className="px-4 py-2">{pay.method}</td>
              <td className="px-4 py-2">{pay.amount.toLocaleString()}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pay.status === 'Successful' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{pay.status}</span>
              </td>
              <td className="px-4 py-2">{pay.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 