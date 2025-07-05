'use client';

import { Trash2, Package } from 'lucide-react';
import { Material } from './types';
import { formatCurrency, updateMaterialTotal } from './utils';

interface MaterialRowProps {
  material: Material;
  index: number;
  onUpdate: (index: number, field: keyof Material, value: any) => void;
  onRemove: (index: number) => void;
  className?: string;
}

export default function MaterialRow({ 
  material, 
  index, 
  onUpdate, 
  onRemove, 
  className = "" 
}: MaterialRowProps) {
  const handleFieldChange = (field: keyof Material, value: any) => {
    let updatedValue = value;
    
    if (field === 'quantity' || field === 'unitPrice') {
      updatedValue = Number(value) || 0;
    }
    
    onUpdate(index, field, updatedValue);
  };

  return (
    <div className={`grid grid-cols-12 gap-2 items-center bg-white dark:bg-gray-800 p-3 rounded-lg hover:shadow-md transition-all duration-200 ${className}`}>
      <div className="col-span-4 relative">
        <input
          type="text"
          value={material.item}
          onChange={(e) => handleFieldChange('item', e.target.value)}
          placeholder="Item name"
          className="w-full px-2 py-1 pl-8 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500 transition-all"
        />
        <Package className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
      </div>
      
      <div className="col-span-2">
        <input
          type="number"
          value={material.quantity}
          onChange={(e) => handleFieldChange('quantity', e.target.value)}
          placeholder="Qty"
          min="0"
          className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500 transition-all"
        />
      </div>
      
      <div className="col-span-2">
        <input
          type="number"
          value={material.unitPrice}
          onChange={(e) => handleFieldChange('unitPrice', e.target.value)}
          placeholder="Price"
          min="0"
          step="0.01"
          className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500 transition-all"
        />
      </div>
      
      <div className="col-span-3">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {formatCurrency(material.total)}
        </span>
      </div>
      
      <div className="col-span-1">
        <button
          onClick={() => onRemove(index)}
          className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors hover:scale-110"
          title="Remove item"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
} 