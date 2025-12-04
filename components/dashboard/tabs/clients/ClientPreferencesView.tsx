import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Heart, MapPin, DollarSign, Home, Star, Users, Car } from 'lucide-react';

const clientPreferences = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah.johnson@email.com',
    budget: 'GH₵800,000 - GH₵1,200,000',
    location: 'East Legon, Cantonments, Airport Residential',
    propertyType: 'Apartment, Townhouse',
    bedrooms: '3-4',
    bathrooms: '2-3',
    amenities: ['Security', 'Modern Finishes', 'Parking', 'Garden'],
    lifestyle: 'Family with children',
    timeline: '3-6 months',
    matchScore: 95,
    recommendations: 8,
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientEmail: 'michael.chen@email.com',
    budget: 'GH₵1,500,000 - GH₵2,500,000',
    location: 'Trasacco Valley, Dzorwulu, East Legon',
    propertyType: 'Villa, Penthouse',
    bedrooms: '4-5',
    bathrooms: '3-4',
    amenities: ['Luxury Finishes', 'Swimming Pool', 'Gym', 'Security'],
    lifestyle: 'Executive couple',
    timeline: '1-3 months',
    matchScore: 88,
    recommendations: 12,
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    clientName: 'Ama Osei',
    clientEmail: 'ama.osei@email.com',
    budget: 'GH₵2,000,000 - GH₵4,000,000',
    location: 'Cantonments, Trasacco Valley, Airport Residential',
    propertyType: 'Luxury Villa, Penthouse',
    bedrooms: '5+',
    bathrooms: '4+',
    amenities: ['Luxury Finishes', 'Swimming Pool', 'Gym', 'Security', 'Staff Quarters'],
    lifestyle: 'High-net-worth family',
    timeline: 'Immediate',
    matchScore: 92,
    recommendations: 15,
    lastUpdated: '2024-03-18'
  },
  {
    id: 4,
    clientName: 'David Wilson',
    clientEmail: 'david.wilson@email.com',
    budget: 'GH₵600,000 - GH₵900,000',
    location: 'Dzorwulu, Airport Residential, East Legon',
    propertyType: 'Apartment, Townhouse',
    bedrooms: '2-3',
    bathrooms: '2',
    amenities: ['Security', 'Parking', 'Modern Kitchen'],
    lifestyle: 'Young professional',
    timeline: '6-12 months',
    matchScore: 78,
    recommendations: 6,
    lastUpdated: '2024-03-13'
  },
  {
    id: 5,
    clientName: 'Grace Mensah',
    clientEmail: 'grace.mensah@email.com',
    budget: 'GH₵1,200,000 - GH₵2,000,000',
    location: 'Cantonments, East Legon, Airport Residential',
    propertyType: 'Villa, Townhouse',
    bedrooms: '4-5',
    bathrooms: '3-4',
    amenities: ['Garden', 'Security', 'Modern Finishes', 'Parking'],
    lifestyle: 'Family with teenagers',
    timeline: '3-6 months',
    matchScore: 85,
    recommendations: 10,
    lastUpdated: '2024-03-12'
  }
];

export default function ClientPreferencesView() {
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (score >= 80) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search preferences..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <Heart className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Preferences List */}
      <div className="space-y-4">
        {clientPreferences.map((preference) => (
          <Card key={preference.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{preference.clientName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{preference.clientEmail}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getMatchScoreColor(preference.matchScore)}>
                    {preference.matchScore}% Match
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {preference.recommendations} Properties
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Match Score:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <Star className="h-4 w-4 mr-1 text-blue-500 fill-current" />
                    {preference.matchScore}%
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Budget Range:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-blue-500" />
                    {preference.budget}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Preferred Locations:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                    {preference.location}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Property Type:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <Home className="h-4 w-4 mr-1 text-blue-500" />
                    {preference.propertyType}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Bedrooms/Bathrooms:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <Users className="h-4 w-4 mr-1 text-blue-500" />
                    {preference.bedrooms} bed, {preference.bathrooms} bath
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Lifestyle:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{preference.lifestyle}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{preference.timeline}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{preference.lastUpdated}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Desired Amenities:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {preference.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-blue-500 text-blue-500">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Star className="h-4 w-4 mr-1" />
                  View Recommendations
                </Button>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Heart className="h-4 w-4 mr-1" />
                  Update Preferences
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <MapPin className="h-4 w-4 mr-1" />
                  Show Similar Properties
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Car className="h-4 w-4 mr-1" />
                  Schedule Viewing
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 