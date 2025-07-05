'use client';

import { Building2, MapPin, Eye, Heart } from 'lucide-react';

export default function PropertyListings() {
  const listings = [
    {
      id: '1',
      title: 'Modern Villa in East Legon',
      price: 'GHS 450,000',
      location: 'East Legon, Accra',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300',
      views: 45,
      interested: 8,
      status: 'active'
    },
    {
      id: '2',
      title: 'Commercial Complex',
      price: 'GHS 1,200,000',
      location: 'Spintex Road, Accra',
      bedrooms: null,
      bathrooms: 6,
      area: '8,000 sq ft',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300',
      views: 32,
      interested: 5,
      status: 'active'
    },
    {
      id: '3',
      title: 'Family Home in Kumasi',
      price: 'GHS 280,000',
      location: 'Asokore Mampong, Kumasi',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300',
      views: 28,
      interested: 12,
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'sold': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <Building2 className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Property Listings</h3>
      </div>

      <div className="space-y-4 overflow-y-auto max-h-96">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
              <img 
                src={listing.image} 
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <span className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full ${getStatusColor(listing.status)}`}>
                {listing.status}
              </span>
            </div>
            
            <div className="p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">{listing.title}</h4>
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <MapPin size={14} />
                <span>{listing.location}</span>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-green-600">{listing.price}</span>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {listing.bedrooms && `${listing.bedrooms} bed • `}
                  {listing.bathrooms} bath • {listing.area}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Eye size={14} />
                    <span>{listing.views}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-red-500">
                    <Heart size={14} />
                    <span>{listing.interested}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}