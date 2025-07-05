'use client';

import { Material } from './material-tracker/types';
import { mockMaterials } from './material-tracker/mockData';
import MaterialHeader from './material-tracker/MaterialHeader';
import MaterialContent from './material-tracker/MaterialContent';

interface MaterialTrackerProps {
  materials?: Material[];
  className?: string;
}

export default function MaterialTracker({ 
  materials = mockMaterials, 
  className = "" 
}: MaterialTrackerProps) {
  return (
    <div className={`h-full ${className}`}>
      <MaterialHeader />
      <MaterialContent materials={materials} />
    </div>
  );
}