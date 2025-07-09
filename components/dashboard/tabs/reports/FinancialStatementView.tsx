const financials = [
  { id: 1, type: 'Income', description: 'Property Sales', amount: 120000 },
  { id: 2, type: 'Income', description: 'Rent', amount: 45000 },
  { id: 3, type: 'Expense', description: 'Salaries', amount: -30000 },
  { id: 4, type: 'Expense', description: 'Maintenance', amount: -12000 },
  { id: 5, type: 'Expense', description: 'Utilities', amount: -8000 },
];

export default function FinancialStatementView({ user }: { user: any }) {
  const totalIncome = financials.filter(f => f.type === 'Income').reduce((sum, f) => sum + f.amount, 0);
  const totalExpense = financials.filter(f => f.type === 'Expense').reduce((sum, f) => sum + f.amount, 0);
  const netProfit = totalIncome + totalExpense;
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Financial Statement</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
          </tr>
        </thead>
        <tbody>
          {financials.map(item => (
            <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">{item.description}</td>
              <td className={`px-4 py-2 font-semibold ${item.amount < 0 ? 'text-red-600' : 'text-green-700'}`}>{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between font-bold text-lg">
        <span>Total Income: <span className="text-green-700">GHS {totalIncome.toLocaleString()}</span></span>
        <span>Total Expense: <span className="text-red-600">GHS {Math.abs(totalExpense).toLocaleString()}</span></span>
        <span>Net Profit: <span className={netProfit >= 0 ? 'text-green-700' : 'text-red-600'}>GHS {netProfit.toLocaleString()}</span></span>
      </div>
    </div>
  );
} 