import { useState } from 'react';
import { Search } from 'lucide-react';

const invoices = [
  { id: 1, client: 'Acme Corp', project: 'Skyline Towers', amount: 12000, status: 'Paid', date: '2024-07-01' },
  { id: 2, client: 'Beta Ltd', project: 'Green Villas', amount: 8500, status: 'Outstanding', date: '2024-07-03' },
  { id: 3, client: 'Gamma Estates', project: 'Sunset Homes', amount: 15000, status: 'Paid', date: '2024-07-05' },
];

export default function InvoiceTableView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Invoice Table</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Client</th>
            <th className="px-4 py-2 text-left">Project</th>
            <th className="px-4 py-2 text-left">Amount (GHS)</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{inv.client}</td>
              <td className="px-4 py-2">{inv.project}</td>
              <td className="px-4 py-2">{inv.amount.toLocaleString()}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${inv.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{inv.status}</span>
              </td>
              <td className="px-4 py-2">{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 