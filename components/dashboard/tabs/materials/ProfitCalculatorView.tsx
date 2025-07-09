import React, { useState } from 'react';

export default function ProfitCalculatorView() {
  const [revenue, setRevenue] = useState(100000);
  const [cost, setCost] = useState(75000);

  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">💡 Instant Profit Calculator</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Revenue ($)</label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={revenue}
            min={0}
            onChange={e => setRevenue(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Total Cost ($)</label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={cost}
            min={0}
            onChange={e => setCost(Number(e.target.value))}
          />
        </div>
      </form>
      <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-900 rounded-lg text-center">
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Profit: <span className={profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>${profit.toLocaleString()}</span></div>
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Profit Margin: <span className="font-bold">{margin.toFixed(2)}%</span></div>
      </div>
    </div>
  );
} 