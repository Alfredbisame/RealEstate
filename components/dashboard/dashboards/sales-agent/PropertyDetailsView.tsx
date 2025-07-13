'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Download, 
  Edit,
  MoreHorizontal,
  MapPin,
  Building2,
  Home,
  Car} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface PropertyDetailsViewProps {
  user: User;
}

export default function PropertyDetailsView({ user }: PropertyDetailsViewProps) {
  const propertyDetails = [
    {
      id: '1',
      title: 'Luxury Villa in East Legon',
      type: 'Villa',
      price: 'GH₵2,500,000',
      location: 'East Legon, Accra',
      bedrooms: '5',
      bathrooms: '4',
      sqft: '450',
      yearBuilt: '2020',
      lotSize: '0.5 acres',
      parking: '3 cars',
      amenities: ['Swimming Pool', 'Garden', 'Security', 'WiFi', 'Kitchen'],
      description: 'Stunning luxury villa with modern amenities and beautiful landscaping.',
      features: ['Air Conditioning', 'Central Heating', 'Hardwood Floors', 'Walk-in Closet']
    },
    {
      id: '2',
      title: 'Modern Apartment in Airport Residential',
      type: 'Apartment',
      price: 'GH₵850,000',
      location: 'Airport Residential, Accra',
      bedrooms: '3',
      bathrooms: '2',
      sqft: '280',
      yearBuilt: '2018',
      lotSize: 'N/A',
      parking: '1 car',
      amenities: ['Gym', 'Pool', 'Security', 'WiFi', 'Balcony'],
      description: 'Modern apartment with contemporary design and city views.',
      features: ['Air Conditioning', 'Balcony', 'Built-in Wardrobes', 'Modern Kitchen']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Villa': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Apartment': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'House': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search property details..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="grid gap-4">
        {propertyDetails.map((property, index) => {
          const cardColors = [
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={property.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {property.title}
                    </h3>
                    <Badge className={getTypeColor(property.type)}>
                      {property.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="outline" className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Export Details
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Basic Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{property.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Home className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{property.bedrooms} bedrooms, {property.bathrooms} bathrooms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{property.sqft} sqft, Built in {property.yearBuilt}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Car className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">Parking: {property.parking}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {property.amenities.map((amenity, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Description</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {property.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Pricing</h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {property.price}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 