import { useState } from 'react';
import MaterialCostBreakdownView from './MaterialCostBreakdownView';
import LandAcquisitionView from './LandAcquisitionView';
import ProfessionalServicesView from './ProfessionalServicesView';
import PermitDocumentationView from './PermitDocumentationView';
import ContingencyPlanningView from './ContingencyPlanningView';
import ProfitCalculatorView from './ProfitCalculatorView';
import CompetitivePricingEngineView from './CompetitivePricingEngineView';

interface MaterialsContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function MaterialsContent({ activeView, onViewChange }: MaterialsContentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'cost-breakdown' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('cost-breakdown')}
        >
          Material Cost Breakdown
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'land' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('land')}
        >
          Land Acquisition Costs
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'professional' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('professional')}
        >
          Professional Services
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'permits' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('permits')}
        >
          Permits & Documentation
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'contingency' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('contingency')}
        >
          Contingency Planning
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'profit' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('profit')}
        >
          Profit Calculator
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'pricing' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('pricing')}
        >
          Competitive Pricing Engine
        </button>
      </div>
      {activeView === 'cost-breakdown' && <MaterialCostBreakdownView />}
      {activeView === 'land' && <LandAcquisitionView />}
      {activeView === 'services' && <ProfessionalServicesView />}
      {activeView === 'permit' && <PermitDocumentationView />}
      {activeView === 'contingency' && <ContingencyPlanningView />}
      {activeView === 'profit' && <ProfitCalculatorView />}
      {activeView === 'pricing' && <CompetitivePricingEngineView />}
    </div>
  );
} 