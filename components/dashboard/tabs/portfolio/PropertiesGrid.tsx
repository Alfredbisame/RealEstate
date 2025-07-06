'use client';

import PropertyCard from '../../widgets/PropertyCard';
import { Property } from '../../widgets/property-card/types';

interface PropertiesGridProps {
  properties: Property[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div 
          key={property.id} 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
} 