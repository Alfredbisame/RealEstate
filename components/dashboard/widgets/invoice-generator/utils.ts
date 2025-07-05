import { Material, InvoiceCalculations } from './types';

export const VAT_RATE = 0.15;
export const PROFIT_MARGIN = 0.25;

export const calculateInvoice = (
  materials: Material[],
  labor: number,
  permits: number
): InvoiceCalculations => {
  const materialsTotal = materials.reduce((sum, item) => sum + item.total, 0);
  const subtotal = materialsTotal + labor + permits;
  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;
  const profit = total * PROFIT_MARGIN;

  return {
    materialsTotal,
    subtotal,
    vat,
    total,
    profit
  };
};

export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toLocaleString()}`;
};

export const calculateMaterialTotal = (quantity: number, unitPrice: number): number => {
  return quantity * unitPrice;
};

export const createEmptyMaterial = (): Material => ({
  item: '',
  quantity: 0,
  unitPrice: 0,
  total: 0
});

export const updateMaterialTotal = (material: Material): Material => ({
  ...material,
  total: calculateMaterialTotal(material.quantity, material.unitPrice)
});

export const validateMaterial = (material: Material): boolean => {
  return material.item.trim() !== '' && material.quantity > 0 && material.unitPrice > 0;
};

export const getInvoiceNumber = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  return `INV-${year}${month}${day}-${random}`;
};

export const getCurrentDate = (): string => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}; 