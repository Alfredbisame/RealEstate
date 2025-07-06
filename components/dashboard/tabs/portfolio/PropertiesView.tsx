'use client';

import PropertiesGrid from './PropertiesGrid';
import PropertiesTable from './PropertiesTable';

interface Property {
  id: string;
  name: string;
  location: string;
  value: string;
  yield: string;
  status: 'occupied' | 'available' | 'under construction' | 'maintenance' | 'sold' | 'rented';
  image: string;
  type: string;
  bedrooms: number | null;
  bathrooms: number;
  area: string;
  monthlyRent: string;
  purchaseDate: string;
  appreciation: string;
}

interface PropertiesViewProps {
  properties: Property[];
  viewMode: 'grid' | 'list';
}

export default function PropertiesView({ properties, viewMode }: PropertiesViewProps) {
  return (
    <div className="space-y-6">
      {viewMode === 'grid' ? (
        <PropertiesGrid properties={properties as any} />
      ) : (
        <PropertiesTable properties={properties} />
      )}
      
      {properties.length === 0 && (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No properties found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
} 