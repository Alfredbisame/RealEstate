'use client';

import { ProfitCalculatorProps } from './profit-calculator/types';
import ProfitHeader from './profit-calculator/ProfitHeader';
import ProfitContent from './profit-calculator/ProfitContent';

export default function ProfitCalculator({ 
  className = "",
  initialData 
}: ProfitCalculatorProps) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <ProfitHeader />
      <ProfitContent initialData={initialData} />
    </div>
  );
}