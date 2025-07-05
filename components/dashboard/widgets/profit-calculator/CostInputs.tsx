'use client';

import { Package, Users, FileText, CreditCard } from 'lucide-react';
import CostInput from './CostInput';
import { CostInputsProps } from './types';

export default function CostInputs({
  materials,
  labor,
  permits,
  clientBudget,
  onMaterialsChange,
  onLaborChange,
  onPermitsChange,
  onClientBudgetChange,
  className = ""
}: CostInputsProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CostInput
          label="Materials (GHS)"
          value={materials}
          onChange={onMaterialsChange}
          placeholder="Enter materials cost"
          icon={Package}
          min={0}
          step={1000}
        />
        <CostInput
          label="Labor (GHS)"
          value={labor}
          onChange={onLaborChange}
          placeholder="Enter labor cost"
          icon={Users}
          min={0}
          step={1000}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CostInput
          label="Permits (GHS)"
          value={permits}
          onChange={onPermitsChange}
          placeholder="Enter permits cost"
          icon={FileText}
          min={0}
          step={1000}
        />
        <CostInput
          label="Client Budget (GHS)"
          value={clientBudget}
          onChange={onClientBudgetChange}
          placeholder="Enter client budget"
          icon={CreditCard}
          min={0}
          step={1000}
        />
      </div>
    </div>
  );
} 