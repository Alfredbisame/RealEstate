import React from 'react';

const parcels = [
  { location: 'Downtown', size: 2, unit: 'acres', pricePerUnit: 50000 },
  { location: 'Suburb', size: 5, unit: 'acres', pricePerUnit: 30000 },
  { location: 'Industrial Area', size: 1.5, unit: 'acres', pricePerUnit: 40000 },
  { location: 'Rural', size: 10, unit: 'acres', pricePerUnit: 10000 },
];

const totalCost = parcels.reduce((sum, p) => sum + p.size * p.pricePerUnit, 0);

export default function LandAcquisitionView() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Land Acquisition Costs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Location</th>
              <th className="px-4 py-2 font-semibold">Size</th>
              <th className="px-4 py-2 font-semibold">Unit</th>
              <th className="px-4 py-2 font-semibold">Price/Unit ($)</th>
              <th className="px-4 py-2 font-semibold">Total Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{p.location}</td>
                <td className="px-4 py-2">{p.size}</td>
                <td className="px-4 py-2">{p.unit}</td>
                <td className="px-4 py-2">{p.pricePerUnit.toLocaleString()}</td>
                <td className="px-4 py-2">{(p.size * p.pricePerUnit).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2" colSpan={4}>Total Land Acquisition Cost</td>
              <td className="px-4 py-2">${totalCost.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
} 