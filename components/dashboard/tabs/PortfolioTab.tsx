'use client';

import { useState } from 'react';
import { 
  Building2, MapPin, TrendingUp, DollarSign, 
  Plus, Filter, Search, Grid, List 
} from 'lucide-react';
import PropertyCard from '../widgets/PropertyCard';

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

  const portfolioStats = {
    totalValue: properties.reduce((sum, p) => sum + parseInt(p.value.replace(/[^\d]/g, '')), 0),
    totalProperties: properties.length,
    averageYield: properties.reduce((sum, p) => sum + parseFloat(p.yield), 0) / properties.length,
    monthlyIncome: properties.reduce((sum, p) => sum + parseInt(p.monthlyRent.replace(/[^\d]/g, '')), 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Property Portfolio</h1>
            <p className="opacity-90">Manage and track your real estate investments</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Property</span>
          </button>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                GHS {(portfolioStats.totalValue / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Portfolio Value</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{portfolioStats.totalProperties}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Properties</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{portfolioStats.averageYield.toFixed(1)}%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Average Yield</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                GHS {portfolioStats.monthlyIncome.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Income</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Yield</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Monthly Rent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                {filteredProperties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={property.image} alt={property.name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{property.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{property.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{property.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{property.value}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{property.yield}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        property.status === 'Occupied' ? 'bg-green-100 text-green-800' :
                        property.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{property.monthlyRent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}