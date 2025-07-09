const graTaxes = [
  { id: 1, type: 'Income Tax', amount: 150000, rate: '25%', due: '2024-07-15', status: 'Paid' },
  { id: 2, type: 'Property Tax', amount: 25000, rate: '0.5%', due: '2024-07-20', status: 'Pending' },
  { id: 3, type: 'VAT', amount: 75000, rate: '12.5%', due: '2024-07-10', status: 'Paid' },
];

export default function GRATaxComplianceView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">GRA Tax Compliance</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Tax Type</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Rate</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {graTaxes.map(tax => (
            <tr key={tax.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{tax.type}</td>
              <td className="px-4 py-2">{tax.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{tax.rate}</td>
              <td className="px-4 py-2">{tax.due}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tax.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{tax.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 