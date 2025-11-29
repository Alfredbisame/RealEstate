'use client';

import PropertyCard from '../../widgets/PropertyCard';

export default function PropertiesList() {
  const properties = [
    {
      id: '1',
      name: 'East Legon Villa',
      location: 'East Legon, Accra',
      value: 'GHS 450,000',
      yield: '12.5%',
      status: 'occupied' as const,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Airport Residential',
      location: 'Airport Hills, Accra',
      value: 'GHS 680,000',
      yield: '15.2%',
      status: 'available' as const,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Kumasi Complex',
      location: 'Asokore Mampong, Kumasi',
      value: 'GHS 320,000',
      yield: '18.7%',
      status: 'under construction' as const,
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="space-y-4 h-full overflow-auto">
      <h3 className="font-semibold text-gray-800 dark:text-white">Recent Properties</h3>
      {properties.slice(0, 3).map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
} 