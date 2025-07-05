'use client';

import { InvoiceData } from './invoice-generator/types';
import InvoiceHeader from './invoice-generator/InvoiceHeader';
import InvoiceContent from './invoice-generator/InvoiceContent';

interface InvoiceGeneratorProps {
  data: InvoiceData;
  className?: string;
}

export default function InvoiceGenerator({ data, className = "" }: InvoiceGeneratorProps) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <InvoiceHeader />
      <InvoiceContent initialData={data} />
    </div>
  );
}