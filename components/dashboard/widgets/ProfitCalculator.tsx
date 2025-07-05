'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, AlertCircle } from 'lucide-react';

export default function ProfitCalculator() {
  const [materials, setMaterials] = useState(125000);
  const [labor, setLabor] = useState(85000);
  const [permits, setPermits] = useState(15000);
  const [clientBudget, setClientBudget] = useState(280000);

  const totalCosts = materials + labor + permits;
  const grossProfit = clientBudget - totalCosts;
  const profitMargin = totalCosts > 0 ? (grossProfit / clientBudget) * 100 : 0;

  const getProfitColor = () => {
    if (profitMargin >= 20) return 'text-green-600';
    if (profitMargin >= 10) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="w-6 h-6 text-green-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Profit Calculator</h3>
      </div>

      <div className="flex-1 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Materials (GHS)
            </label>
            <input
              type="number"
              value={materials}
              onChange={(e) => setMaterials(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter materials cost"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Labor (GHS)
            </label>
            <input
              type="number"
              value={labor}
              onChange={(e) => setLabor(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter labor cost"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Permits (GHS)
            </label>
            <input
              type="number"
              value={permits}
              onChange={(e) => setPermits(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter permits cost"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Client Budget (GHS)
            </label>
            <input
              type="number"
              value={clientBudget}
              onChange={(e) => setClientBudget(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter client budget"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Calculation Results</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Costs</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                GHS {totalCosts.toLocaleString()}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Gross Profit</p>
              <p className={`text-xl font-bold ${getProfitColor()}`}>
                GHS {grossProfit.toLocaleString()}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Profit Margin</p>
              <div className="flex items-center justify-center space-x-2">
                {profitMargin < 10 && <AlertCircle size={20} className="text-red-600" />}
                <p className={`text-xl font-bold ${getProfitColor()}`}>
                  {profitMargin.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp size={18} className="text-green-600" />
            <h5 className="font-medium text-gray-900 dark:text-white">Recommendations</h5>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>• Target profit margin: 20%+ for healthy business</p>
            {profitMargin < 20 && (
              <p className="text-orange-600">• Consider optimizing costs or adjusting client budget for better profitability</p>
            )}
            {profitMargin < 10 && (
              <p className="text-red-600">• Current margin is below recommended threshold - review pricing strategy</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}