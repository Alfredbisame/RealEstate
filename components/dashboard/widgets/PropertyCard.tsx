'use client';

import { MapPin, TrendingUp } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  location: string;
  value: string;
  yield: string;
  status: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'occupied': return 'bg-green-100 text-green-800';
      case 'available': return 'bg-blue-100 text-blue-800';
      case 'under construction': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{property.name}</h4>
        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-900 dark:text-white">{property.value}</span>
          <div className="flex items-center space-x-1 text-green-600">
            <TrendingUp size={14} />
            <span className="text-sm font-medium">{property.yield}</span>
          </div>
        </div>
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(property.status)}`}>
          {property.status}
        </span>
      </div>
    </div>
  );
}