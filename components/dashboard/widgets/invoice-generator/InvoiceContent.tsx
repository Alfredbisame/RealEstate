'use client';

import { useState, useMemo } from 'react';
import { Material, ClientInfo, CostBreakdown as CostBreakdownType, InvoiceCalculations } from './types';
import { calculateInvoice, createEmptyMaterial } from './utils';
import ClientInfo from './ClientInfo';
import MaterialsSection from './MaterialsSection';
import CostBreakdown from './CostBreakdown';
import InvoiceSummary from './InvoiceSummary';
import ActionButtons from './ActionButtons';
import ProfitAnalysis from './ProfitAnalysis';

interface InvoiceContentProps {
  initialData: {
    clientName: string;
    projectName: string;
    materials: Material[];
    labor: number;
    permits: number;
  };
  className?: string;
}

export default function InvoiceContent({ 
  initialData, 
  className = "" 
}: InvoiceContentProps) {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    clientName: initialData.clientName,
    projectName: initialData.projectName
  });
  
  const [materials, setMaterials] = useState<Material[]>(initialData.materials);
  const [costs, setCosts] = useState<CostBreakdownType>({
    labor: initialData.labor,
    permits: initialData.permits
  });

  const calculations = useMemo(() => {
    return calculateInvoice(materials, costs.labor, costs.permits);
  }, [materials, costs.labor, costs.permits]);

  const handleClientInfoChange = (field: keyof ClientInfo, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCostsChange = (field: keyof CostBreakdownType, value: number) => {
    setCosts(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = () => {
    // TODO: Implement PDF generation
    console.log('Downloading invoice...', { clientInfo, materials, costs, calculations });
  };

  const handleSend = () => {
    // TODO: Implement email sending
    console.log('Sending invoice...', { clientInfo, materials, costs, calculations });
  };

  return (
    <div className={`flex-1 space-y-6 overflow-auto ${className}`}>
      <ClientInfo
        clientInfo={clientInfo}
        onClientInfoChange={handleClientInfoChange}
      />

      <MaterialsSection
        materials={materials}
        onMaterialsChange={setMaterials}
      />

      <CostBreakdown
        costs={costs}
        onCostsChange={handleCostsChange}
      />

      <InvoiceSummary
        calculations={calculations}
      />

      <ActionButtons
        onDownload={handleDownload}
        onSend={handleSend}
      />

      <ProfitAnalysis
        calculations={calculations}
      />
    </div>
  );
} 