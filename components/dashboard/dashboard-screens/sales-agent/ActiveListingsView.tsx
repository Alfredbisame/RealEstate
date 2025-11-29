'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Download, 
  DollarSign,
  Users,
  Eye,
  MousePointer,
  Share2,
  Target,
  TrendingUp,
  Edit,
  MoreHorizontal,
  Calendar,
  Clock,
  MapPin,
  Building2,
  Home,
  Star,
  Heart
} from 'lucide-react';
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

interface ActiveListingsViewProps {
  user: User;
}

export default function ActiveListingsView({ user }: ActiveListingsViewProps) {
  const properties = [
    {
      id: '1',
      title: 'Luxury Villa in East Legon',
      type: 'Villa',
      status: 'Active',
      price: 'GH₵2,500,000',
      location: 'East Legon, Accra',
      bedrooms: '5',
      bathrooms: '4',
      sqft: '450',
      views: '1,240',
      inquiries: '23',
      daysListed: '15',
      rating: '4.8',
      featured: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: '2',
      title: 'Modern Apartment in Airport Residential',
      type: 'Apartment',
      status: 'Active',
      price: 'GH₵850,000',
      location: 'Airport Residential, Accra',
      bedrooms: '3',
      bathrooms: '2',
      sqft: '280',
      views: '890',
      inquiries: '12',
      daysListed: '8',
      rating: '4.6',
      featured: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: '3',
      title: 'Investment Property in Cantonments',
      type: 'House',
      status: 'Active',
      price: 'GH₵1,800,000',
      location: 'Cantonments, Accra',
      bedrooms: '4',
      bathrooms: '3',
      sqft: '380',
      views: '1,560',
      inquiries: '31',
      daysListed: '22',
      rating: '4.9',
      featured: true,
      image: '/api/placeholder/400/300'
    },
    {
      id: '4',
      title: 'Studio Apartment in Osu',
      type: 'Studio',
      status: 'Active',
      price: 'GH₵450,000',
      location: 'Osu, Accra',
      bedrooms: '1',
      bathrooms: '1',
      sqft: '120',
      views: '670',
      inquiries: '8',
      daysListed: '12',
      rating: '4.4',
      featured: false,
      image: '/api/placeholder/400/300'
    },
    {
      id: '5',
      title: 'Family Home in Trasacco Valley',
      type: 'House',
      status: 'Active',
      price: 'GH₵3,200,000',
      location: 'Trasacco Valley, Accra',
      bedrooms: '6',
      bathrooms: '5',
      sqft: '520',
      views: '2,100',
      inquiries: '45',
      daysListed: '5',
      rating: '4.7',
      featured: true,
      image: '/api/placeholder/400/300'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Sold': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Villa': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Apartment': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'House': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Studio': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
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
              placeholder="Search properties..."
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
        {properties.map((property, index) => {
          const cardColors = [
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800'
          ];
          
          return (
            <Card key={property.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {property.title}
                        </h3>
                        <Badge className={getStatusColor(property.status)}>
                          {property.status}
                        </Badge>
                        <Badge className={getTypeColor(property.type)}>
                          {property.type}
                        </Badge>
                        {property.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{property.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Home className="h-3 w-3" />
                          <span>{property.bedrooms} beds, {property.bathrooms} baths, {property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {property.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Price
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {property.daysListed} days listed
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {property.views}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Views
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {property.inquiries} inquiries
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {property.rating}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Rating
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {property.type}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <Heart className="h-3 w-3" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Property
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share Listing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Performance</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {Math.round((parseInt(property.inquiries) / parseInt(property.views)) * 100)}% inquiry rate
                    </span>
                  </div>
                  <Progress value={(parseInt(property.inquiries) / parseInt(property.views)) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Listed: {property.daysListed} days ago</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {property.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Rating: {property.rating}</span>
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