import { useState } from 'react';
import { Search } from 'lucide-react';

const invoices = [
  { id: 'INV-001', client: 'East Legon Dev.', amount: 'GHS 45,200', due: '2024-02-15', status: 'Paid' },
  { id: 'INV-002', client: 'Kumasi Properties', amount: 'GHS 28,500', due: '2024-02-20', status: 'Overdue' },
  { id: 'INV-003', client: 'Tema Industrial', amount: 'GHS 67,800', due: '2024-02-25', status: 'Pending' },
  { id: 'INV-004', client: 'Takoradi Beachfront', amount: 'GHS 12,000', due: '2024-03-01', status: 'Paid' },
  { id: 'INV-005', client: 'Airport Hills', amount: 'GHS 19,000', due: '2024-03-10', status: 'Pending' },
  { id: 'INV-006', client: 'Kumasi Gardens', amount: 'GHS 22,500', due: '2024-03-15', status: 'Paid' },
  { id: 'INV-007', client: 'Tema Industrial', amount: 'GHS 15,000', due: '2024-03-20', status: 'Overdue' },
  { id: 'INV-008', client: 'East Legon Dev.', amount: 'GHS 30,000', due: '2024-03-25', status: 'Paid' },
  { id: 'INV-009', client: 'Takoradi Beachfront', amount: 'GHS 18,000', due: '2024-03-30', status: 'Pending' },
  { id: 'INV-010', client: 'Airport Hills', amount: 'GHS 25,000', due: '2024-04-05', status: 'Paid' }
];

const statusColors = {
  Paid: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
  Overdue: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
};

export default function InvoiceTableView() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = invoices.filter(inv =>
    inv.client.toLowerCase().includes(search.toLowerCase()) ||
    inv.id.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search by client or invoice ID..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Invoice ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Client</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Due Date</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((inv, idx) => (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100 font-mono">{inv.id}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{inv.client}</td>
                <td className="px-4 py-2 text-sm text-blue-700 dark:text-blue-300 font-semibold">{inv.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{inv.due}</td>
                <td className="px-4 py-2 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[inv.status]}`}>{inv.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-gray-500 dark:text-gray-400">Page {page} of {totalPages}</span>
        <div className="space-x-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium disabled:opacity-50"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium disabled:opacity-50"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 