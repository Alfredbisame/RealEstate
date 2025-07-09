import React from 'react';

const contingencies = [
  { item: 'Material Price Fluctuation', risk: 'High', reserve: 5000 },
  { item: 'Labor Shortage', risk: 'Medium', reserve: 3000 },
  { item: 'Weather Delays', risk: 'Medium', reserve: 2000 },
  { item: 'Permit Delays', risk: 'Low', reserve: 1000 },
  { item: 'Unexpected Site Issues', risk: 'High', reserve: 4000 },
];

const totalReserve = contingencies.reduce((sum, c) => sum + c.reserve, 0);

export default function ContingencyPlanningView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contingency Planning</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Contingency Item</th>
              <th className="px-4 py-2 font-semibold">Risk Level</th>
              <th className="px-4 py-2 font-semibold">Reserve Fund ($)</th>
            </tr>
          </thead>
          <tbody>
            {contingencies.map((c, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{c.item}</td>
                <td className="px-4 py-2">
                  <span className={
                    c.risk === 'High'
                      ? 'text-red-600 dark:text-red-400 font-semibold'
                      : c.risk === 'Medium'
                      ? 'text-yellow-600 dark:text-yellow-400 font-semibold'
                      : 'text-green-600 dark:text-green-400 font-semibold'
                  }>
                    {c.risk}
                  </span>
                </td>
                <td className="px-4 py-2">{c.reserve.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2" colSpan={2}>Total Reserve Fund</td>
              <td className="px-4 py-2">${totalReserve.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
} 