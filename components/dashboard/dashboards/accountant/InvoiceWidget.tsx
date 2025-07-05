'use client';

import InvoiceGenerator from '../../widgets/InvoiceGenerator';

interface InvoiceWidgetProps {
  className?: string;
}

export default function InvoiceWidget({ className = '' }: InvoiceWidgetProps) {
  const invoiceData = {
    clientName: '',
    projectName: '',
    materials: [
      { item: 'Cement (50kg bags)', quantity: 100, unitPrice: 45, total: 4500 },
      { item: 'Steel Bars (12mm)', quantity: 5, unitPrice: 180, total: 900 },
      { item: 'Blocks (6inch)', quantity: 500, unitPrice: 2.5, total: 1250 }
    ],
    labor: 15000,
    permits: 2500,
    subtotal: 24150,
    vat: 3622.5,
    total: 27772.5
  };

  return (
    <InvoiceGenerator data={invoiceData} className={className} />
  );
} 