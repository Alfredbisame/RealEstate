'use client';

import { Calculator, TrendingUp, AlertCircle } from 'lucide-react';
import { CalculationResultsProps } from './types';
import { getProfitColor, formatCurrency, formatPercentage } from './utils';
import ResultsCard from './ResultsCard';

export default function CalculationResults({
  calculations,
  className = ""
}: CalculationResultsProps) {
  const { totalCosts, grossProfit, profitMargin } = calculations;
  
  const getProfitColorClass = () => getProfitColor(profitMargin);
  const isProfitable = grossProfit > 0;
  const isLowMargin = profitMargin < 10;

  return (
    <div className={`
      bg-gradient-to-r from-gray-50 to-blue-50 
      dark:from-gray-700 dark:to-gray-600 
      rounded-xl p-6 space-y-4
      border border-gray-200 dark:border-gray-600
      ${className}
    `}>
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h4 className="font-semibold text-gray-900 dark:text-white">Calculation Results</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultsCard
          title="Total Costs"
          value={totalCosts}
          color="gray"
          subtitle="All expenses combined"
        />
        
        <ResultsCard
          title="Gross Profit"
          value={grossProfit}
          color={isProfitable ? 'green' : 'red'}
          subtitle={isProfitable ? 'Revenue minus costs' : 'Loss amount'}
        />
        
        <ResultsCard
          title="Profit Margin"
          value={formatPercentage(profitMargin)}
          color={isProfitable ? 'green' : 'red'}
          subtitle="Percentage of revenue"
        />
      </div>

      {/* Profit Status Indicator */}
      <div className={`
        mt-4 p-3 rounded-lg border-l-4
        ${isProfitable 
          ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
          : 'bg-red-50 dark:bg-red-900/20 border-red-500'
        }
      `}>
        <div className="flex items-center space-x-2">
          {isProfitable ? (
            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
          )}
          <span className={`
            text-sm font-medium
            ${isProfitable 
              ? 'text-green-800 dark:text-green-200' 
              : 'text-red-800 dark:text-red-200'
            }
          `}>
            {isProfitable ? 'Profitable Project' : 'Project at Loss'}
          </span>
        </div>
        <p className={`
          text-xs mt-1
          ${isProfitable 
            ? 'text-green-600 dark:text-green-300' 
            : 'text-red-600 dark:text-red-300'
          }
        `}>
          {isProfitable 
            ? `Earning ${formatCurrency(grossProfit)} with ${formatPercentage(profitMargin)} margin`
            : `Losing ${formatCurrency(Math.abs(grossProfit))} with ${formatPercentage(profitMargin)} margin`
          }
        </p>
      </div>

      {/* Margin Warning */}
      {isLowMargin && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              Low Profit Margin Warning
            </span>
          </div>
          <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">
            Current margin of {formatPercentage(profitMargin)} is below recommended 10% threshold
          </p>
        </div>
      )}
    </div>
  );
} 