'use client';

import { Package } from 'lucide-react';
import { MaterialListProps } from './types';
import MaterialCard from './MaterialCard';

export default function MaterialList({ 
  materials, 
  onUpdate, 
  onOrder, 
  className = "" 
}: MaterialListProps) {
  if (materials.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <Package className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm font-medium">No materials found</p>
        <p className="text-xs">Add materials to start tracking inventory</p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 overflow-y-auto max-h-64 ${className}`}>
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          onUpdate={onUpdate}
          onOrder={onOrder}
        />
      ))}
    </div>
  );
} 