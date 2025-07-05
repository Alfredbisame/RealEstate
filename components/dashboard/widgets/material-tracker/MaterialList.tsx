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
  // Validate materials array
  if (!Array.isArray(materials)) {
    console.error('MaterialList: materials is not an array:', materials);
    return (
      <div className={`text-center py-8 text-gray-500 dark:text-gray-400 ${className}`}>
        <p className="text-sm font-medium">Invalid materials data</p>
      </div>
    );
  }

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
      {materials.map((material, index) => {
        // Ensure each material has a valid ID
        const key = material.id || `material-${index}`;
        
        return (
          <MaterialCard
            key={key}
            material={material}
            onUpdate={onUpdate}
            onOrder={onOrder}
          />
        );
      })}
    </div>
  );
} 