import ChartWidget from '../../widgets/ChartWidget';

const taxData = [
  { name: 'Q1', value: 12000 },
  { name: 'Q2', value: 11000 },
  { name: 'Q3', value: 9000 },
  { name: 'Q4', value: 13000 }
];

const taxItems = [
  { type: 'Property Tax', amount: 'GHS 20,000', status: 'Paid' },
  { type: 'Income Tax', amount: 'GHS 15,000', status: 'Due' },
  { type: 'Capital Gains', amount: 'GHS 10,000', status: 'Paid' }
];

export default function TaxBreakdownView() {
  return (
    <div className="space-y-8">
      <ChartWidget 
        title="Tax Breakdown by Quarter"
        data={taxData}
        type="bar"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow border">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Tax Type</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {taxItems.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{item.type}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{item.amount}</td>
                <td className={`px-4 py-2 text-sm font-medium ${item.status === 'Paid' ? 'text-green-600' : 'text-red-500'}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 