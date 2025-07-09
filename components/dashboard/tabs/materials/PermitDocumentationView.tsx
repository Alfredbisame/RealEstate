import React from 'react';

const permits = [
  { name: 'Building Permit', status: 'Approved', fee: 2500 },
  { name: 'Environmental Clearance', status: 'Pending', fee: 1800 },
  { name: 'Zoning Approval', status: 'Approved', fee: 1200 },
  { name: 'Fire Safety Certificate', status: 'Pending', fee: 900 },
  { name: 'Utility Connection', status: 'Approved', fee: 600 },
];

const totalFee = permits.reduce((sum, p) => sum + p.fee, 0);

export default function PermitDocumentationView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Permit & Documentation</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Permit/Document</th>
              <th className="px-4 py-2 font-semibold">Status</th>
              <th className="px-4 py-2 font-semibold">Fee ($)</th>
            </tr>
          </thead>
          <tbody>
            {permits.map((p, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">
                  <span className={
                    p.status === 'Approved'
                      ? 'text-green-600 dark:text-green-400 font-semibold'
                      : 'text-yellow-600 dark:text-yellow-400 font-semibold'
                  }>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2">{p.fee.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2" colSpan={2}>Total</td>
              <td className="px-4 py-2">${totalFee.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
