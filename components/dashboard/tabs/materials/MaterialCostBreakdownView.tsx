import React from 'react';

const materials = [
  { name: 'Cement', quantity: 100, unit: 'bags', unitCost: 8.5 },
  { name: 'Steel Rods', quantity: 50, unit: 'pieces', unitCost: 15.0 },
  { name: 'Bricks', quantity: 1000, unit: 'pcs', unitCost: 0.5 },
  { name: 'Sand', quantity: 10, unit: 'tons', unitCost: 30.0 },
  { name: 'Gravel', quantity: 8, unit: 'tons', unitCost: 25.0 },
];

const totalCost = materials.reduce((sum, m) => sum + m.quantity * m.unitCost, 0);

export default function MaterialCostBreakdownView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Material Cost Breakdown</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Material</th>
              <th className="px-4 py-2 font-semibold">Quantity</th>
              <th className="px-4 py-2 font-semibold">Unit</th>
              <th className="px-4 py-2 font-semibold">Unit Cost ($)</th>
              <th className="px-4 py-2 font-semibold">Total ($)</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m) => (
              <tr key={m.name} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{m.name}</td>
                <td className="px-4 py-2">{m.quantity}</td>
                <td className="px-4 py-2">{m.unit}</td>
                <td className="px-4 py-2">{m.unitCost.toFixed(2)}</td>
                <td className="px-4 py-2">{(m.quantity * m.unitCost).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2" colSpan={4}>Total Cost</td>
              <td className="px-4 py-2">${totalCost.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
} 