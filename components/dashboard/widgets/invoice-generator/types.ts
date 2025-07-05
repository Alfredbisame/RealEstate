export interface Material {
  item: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceData {
  clientName: string;
  projectName: string;
  materials: Material[];
  labor: number;
  permits: number;
  subtotal: number;
  vat: number;
  total: number;
}

export interface InvoiceGeneratorProps {
  data: InvoiceData;
  className?: string;
}

export interface InvoiceCalculations {
  materialsTotal: number;
  subtotal: number;
  vat: number;
  total: number;
  profit: number;
}

export interface ClientInfo {
  clientName: string;
  projectName: string;
}

export interface CostBreakdown {
  labor: number;
  permits: number;
} 