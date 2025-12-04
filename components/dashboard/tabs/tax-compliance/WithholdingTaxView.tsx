const withholdingTaxes = [
  { id: 1, contractor: 'ABC Construction', payment: 50000, taxRate: '5%', taxAmount: 2500, due: '2024-07-20', status: 'Pending' },
  { id: 2, contractor: 'XYZ Services', payment: 75000, taxRate: '5%', taxAmount: 3750, due: '2024-07-15', status: 'Paid' },
];

export default function WithholdingTaxView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Withholding Tax Management</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Contractor</th>
            <th className="px-4 py-2 text-left">Payment (GHS)</th>
            <th className="px-4 py-2 text-left">Tax Rate</th>
            <th className="px-4 py-2 text-left">Tax Amount</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {withholdingTaxes.map(tax => (
            <tr key={tax.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{tax.contractor}</td>
              <td className="px-4 py-2">{tax.payment.toLocaleString()}</td>
              <td className="px-4 py-2">{tax.taxRate}</td>
              <td className="px-4 py-2">{tax.taxAmount.toLocaleString()}</td>
              <td className="px-4 py-2">{tax.due}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tax.status === 'Paid' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'}`}>{tax.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}