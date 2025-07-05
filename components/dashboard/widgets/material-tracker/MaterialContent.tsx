'use client';

import { useState, useEffect } from 'react';
import { Material } from './types';
import MaterialList from './MaterialList';
import MaterialStats from './MaterialStats';

interface MaterialContentProps {
  materials: Material[];
  className?: string;
}

export default function MaterialContent({ materials, className = "" }: MaterialContentProps) {
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>(materials);

  // Update filtered materials when materials prop changes
  useEffect(() => {
    if (Array.isArray(materials)) {
      setFilteredMaterials(materials);
    } else {
      console.error('MaterialContent: materials prop is not an array:', materials);
      setFilteredMaterials([]);
    }
  }, [materials]);

  const handleUpdate = (material: Material) => {
    // TODO: Implement stock update functionality
    console.log('Updating stock for:', material.name);
  };

  const handleOrder = (material: Material) => {
    // TODO: Implement ordering functionality
    console.log('Ordering more:', material.name);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <MaterialList
        materials={filteredMaterials}
        onUpdate={handleUpdate}
        onOrder={handleOrder}
      />
      
      <MaterialStats materials={filteredMaterials} />
    </div>
  );
} 