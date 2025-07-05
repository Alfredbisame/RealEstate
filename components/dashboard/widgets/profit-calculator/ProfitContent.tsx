'use client';

import { useState } from 'react';
import { ProfitData, ProfitCalculations } from './types';
import { calculateProfit } from './utils';
import CostInputs from './CostInputs';
import CalculationResults from './CalculationResults';
import Recommendations from './Recommendations';

interface ProfitContentProps {
  initialData?: ProfitData;
  className?: string;
}

export default function ProfitContent({
  initialData = {
    materials: 125000,
    labor: 85000,
    permits: 15000,
    clientBudget: 280000
  },
  className = ""
}: ProfitContentProps) {
  const [profitData, setProfitData] = useState<ProfitData>(initialData);
  
  const calculations = calculateProfit(profitData);

  const handleMaterialsChange = (value: number) => {
    setProfitData(prev => ({ ...prev, materials: value }));
  };

  const handleLaborChange = (value: number) => {
    setProfitData(prev => ({ ...prev, labor: value }));
  };

  const handlePermitsChange = (value: number) => {
    setProfitData(prev => ({ ...prev, permits: value }));
  };

  const handleClientBudgetChange = (value: number) => {
    setProfitData(prev => ({ ...prev, clientBudget: value }));
  };

  return (
    <div className={`flex-1 space-y-6 overflow-auto ${className}`}>
      {/* Cost Inputs Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Project Costs</h4>
        <CostInputs
          materials={profitData.materials}
          labor={profitData.labor}
          permits={profitData.permits}
          clientBudget={profitData.clientBudget}
          onMaterialsChange={handleMaterialsChange}
          onLaborChange={handleLaborChange}
          onPermitsChange={handlePermitsChange}
          onClientBudgetChange={handleClientBudgetChange}
        />
      </div>

      {/* Calculation Results */}
      <CalculationResults calculations={calculations} />

      {/* Recommendations */}
      <Recommendations profitMargin={calculations.profitMargin} />
    </div>
  );
} 