import { InvoiceData } from './types';

export const mockInvoiceData: InvoiceData = {
  clientName: 'Kwame Asante',
  projectName: 'Residential Complex - Phase 1',
  materials: [
    {
      item: 'Cement (50kg bags)',
      quantity: 100,
      unitPrice: 45,
      total: 4500
    },
    {
      item: 'Steel Reinforcement (12mm)',
      quantity: 50,
      unitPrice: 120,
      total: 6000
    },
    {
      item: 'Sand (Truck Load)',
      quantity: 20,
      unitPrice: 800,
      total: 16000
    },
    {
      item: 'Gravel (Truck Load)',
      quantity: 15,
      unitPrice: 900,
      total: 13500
    },
    {
      item: 'Electrical Wiring',
      quantity: 500,
      unitPrice: 15,
      total: 7500
    }
  ],
  labor: 25000,
  permits: 5000,
  subtotal: 72500,
  vat: 10875,
  total: 83375
}; 