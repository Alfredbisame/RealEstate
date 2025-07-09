import React, { useState } from 'react';

const competitors = [
  { name: 'Alpha Realty', price: 120000 },
  { name: 'Beta Estates', price: 125000 },
  { name: 'Gamma Homes', price: 119000 },
  { name: 'Delta Properties', price: 123500 },
];

export default function CompetitivePricingEngineView() {
  const [myPrice, setMyPrice] = useState(122000);
  const avgPrice = competitors.reduce((sum, c) => sum + c.price, 0) / competitors.length;

  let feedback = '';
  if (myPrice < avgPrice) feedback = 'Your price is competitive!';
  else if (myPrice > avgPrice) feedback = 'Your price is above the market average.';
  else feedback = 'Your price matches the market average.';

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">🎯 Competitive Pricing Engine</h2>
      <form className="mb-6">
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Your Price ($)</label>
        <input
          type="number"
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={myPrice}
          min={0}
          onChange={e => setMyPrice(Number(e.target.value))}
        />
      </form>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 font-semibold">Competitor</th>
              <th className="px-4 py-2 font-semibold">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2">{c.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 dark:bg-gray-800 font-bold">
              <td className="px-4 py-2">Average</td>
              <td className="px-4 py-2">${avgPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className={`p-3 rounded text-center font-semibold ${myPrice < avgPrice ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : myPrice > avgPrice ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}`}>{feedback}</div>
    </div>
  );
} 