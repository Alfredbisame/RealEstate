'use client';

import { useState } from 'react';
import { Plus, Package } from 'lucide-react';
import { Material } from './types';
import { createEmptyMaterial } from './utils';
import MaterialRow from './MaterialRow';

interface MaterialsSectionProps {
  materials: Material[];
  onMaterialsChange: (materials: Material[]) => void;
  className?: string;
}

export default function MaterialsSection({ 
  materials, 
  onMaterialsChange, 
  className = "" 
}: MaterialsSectionProps) {
  const addMaterialRow = () => {
    onMaterialsChange([...materials, createEmptyMaterial()]);
  };

  const removeMaterialRow = (index: number) => {
    onMaterialsChange(materials.filter((_, i) => i !== index));
  };

  const updateMaterial = (index: number, field: keyof Material, value: any) => {
    const updatedMaterials = materials.map((material, i) => {
      if (i === index) {
        const updated = { ...material, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updated.total = updated.quantity * updated.unitPrice;
        }
        return updated;
      }
      return material;
    });
    onMaterialsChange(updatedMaterials);
  };

  return (
    <div className={`bg-gradient-to-r from-gray-50 to-orange-50 dark:from-gray-700/50 dark:to-orange-900/10 rounded-xl p-4 border border-orange-200 dark:border-orange-800 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Package className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h4 className="font-medium text-gray-900 dark:text-white">Materials & Supplies</h4>
        </div>
        <button
          onClick={addMaterialRow}
          className="flex items-center space-x-1 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 text-sm font-medium hover:scale-105"
        >
          <Plus size={16} />
          <span>Add Item</span>
        </button>
      </div>
      
      <div className="space-y-3 max-h-48 overflow-auto">
        {materials.map((material, index) => (
          <MaterialRow
            key={index}
            material={material}
            index={index}
            onUpdate={updateMaterial}
            onRemove={removeMaterialRow}
          />
        ))}
        
        {materials.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <Package className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-sm">No materials added yet</p>
            <p className="text-xs">Click "Add Item" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
} 