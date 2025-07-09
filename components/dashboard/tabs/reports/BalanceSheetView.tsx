const assets = [
  { id: 1, name: 'Cash', amount: 50000 },
  { id: 2, name: 'Accounts Receivable', amount: 20000 },
  { id: 3, name: 'Properties', amount: 300000 },
];
const liabilities = [
  { id: 1, name: 'Loans', amount: 100000 },
  { id: 2, name: 'Accounts Payable', amount: 15000 },
];
const equity = [
  { id: 1, name: 'Owner Equity', amount: 255000 },
];

export default function BalanceSheetView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Balance Sheet</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Assets</h4>
          <ul className="bg-green-50 dark:bg-green-900 rounded-xl p-4 border border-green-200 dark:border-green-700">
            {assets.map(a => (
              <li key={a.id} className="flex justify-between mb-2"><span>{a.name}</span><span className="font-bold">GHS {a.amount.toLocaleString()}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Liabilities</h4>
          <ul className="bg-red-50 dark:bg-red-900 rounded-xl p-4 border border-red-200 dark:border-red-700">
            {liabilities.map(l => (
              <li key={l.id} className="flex justify-between mb-2"><span>{l.name}</span><span className="font-bold">GHS {l.amount.toLocaleString()}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Equity</h4>
          <ul className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
            {equity.map(e => (
              <li key={e.id} className="flex justify-between mb-2"><span>{e.name}</span><span className="font-bold">GHS {e.amount.toLocaleString()}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 