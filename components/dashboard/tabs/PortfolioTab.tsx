'use client';

import { useState } from 'react';
import PortfolioHeader from './portfolio/PortfolioHeader';
import PortfolioStats from './portfolio/PortfolioStats';
import SearchAndFilter from './portfolio/SearchAndFilter';
import PropertiesView from './portfolio/PropertiesView';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface PortfolioTabProps {
  user: User;
}

export default function PortfolioTab({ user }: PortfolioTabProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: '1',
      name: 'East Legon Villa',
      location: 'East Legon, Accra',
      value: 'GHS 450,000',
      yield: '12.5%',
      status: 'Occupied',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      monthlyRent: 'GHS 3,500',
      purchaseDate: '2023-01-15',
      appreciation: '+8.5%'
    },
    {
      id: '2',
      name: 'Airport Residential',
      location: 'Airport Hills, Accra',
      value: 'GHS 680,000',
      yield: '15.2%',
      status: 'Available',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 4,
      area: '3,200 sq ft',
      monthlyRent: 'GHS 5,200',
      purchaseDate: '2022-08-20',
      appreciation: '+12.3%'
    },
    {
      id: '3',
      name: 'Kumasi Complex',
      location: 'Asokore Mampong, Kumasi',
      value: 'GHS 320,000',
      yield: '18.7%',
      status: 'Under Construction',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Commercial',
      bedrooms: null,
      bathrooms: 6,
      area: '5,000 sq ft',
      monthlyRent: 'GHS 4,800',
      purchaseDate: '2023-03-10',
      appreciation: '+5.2%'
    },
    {
      id: '4',
      name: 'Tema Industrial Park',
      location: 'Tema, Greater Accra',
      value: 'GHS 1,200,000',
      yield: '22.1%',
      status: 'Occupied',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Industrial',
      bedrooms: null,
      bathrooms: 8,
      area: '12,000 sq ft',
      monthlyRent: 'GHS 18,500',
      purchaseDate: '2022-05-30',
      appreciation: '+15.8%'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType;
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleAddProperty = () => {
    // TODO: Implement add property functionality
    console.log('Add new property');
  };

  return (
    <div className="space-y-6">
      <PortfolioHeader onAddProperty={handleAddProperty} />
      <PortfolioStats properties={properties} />
      <SearchAndFilter
        searchTerm={searchTerm}
        filterType={filterType}
        viewMode={viewMode}
        onSearchChange={setSearchTerm}
        onFilterChange={setFilterType}
        onViewModeChange={setViewMode}
      />
      <PropertiesView 
        properties={filteredProperties} 
        viewMode={viewMode} 
      />
    </div>
  );
}