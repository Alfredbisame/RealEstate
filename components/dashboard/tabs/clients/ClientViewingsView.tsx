import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, MapPin, Clock, User, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const clientViewings = [
  {
    id: 1,
    clientName: 'Ama Osei',
    propertyName: 'Luxury Villa - Trasacco Valley',
    propertyAddress: 'Trasacco Valley, Accra',
    date: '2024-03-18',
    time: '16:00',
    duration: '1 hour',
    status: 'scheduled',
    priority: 'high',
    agent: 'John Smith',
    notes: 'Client bringing family for final decision. Prepare property documents and financing options.',
    reminder: '2 hours before',
    propertyType: 'Villa',
    price: 'GH₵2,500,000',
    bedrooms: 4,
    bathrooms: 3
  },
  {
    id: 2,
    clientName: 'Sarah Johnson',
    propertyName: 'Modern Apartment - East Legon',
    propertyAddress: 'East Legon, Accra',
    date: '2024-03-20',
    time: '14:30',
    duration: '45 min',
    status: 'confirmed',
    priority: 'medium',
    agent: 'Lisa Davis',
    notes: 'Client interested in 3-bedroom options. Show security features and modern finishes.',
    reminder: '1 hour before',
    propertyType: 'Apartment',
    price: 'GH₵850,000',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    id: 3,
    clientName: 'Michael Chen',
    propertyName: 'Townhouse - Airport Residential',
    propertyAddress: 'Airport Residential Area, Accra',
    date: '2024-03-17',
    time: '10:00',
    duration: '30 min',
    status: 'completed',
    priority: 'medium',
    agent: 'David Wilson',
    notes: 'Client satisfied with property but needs financing options. Follow up with mortgage details.',
    reminder: 'Completed',
    propertyType: 'Townhouse',
    price: 'GH₵1,200,000',
    bedrooms: 3,
    bathrooms: 2.5
  },
  {
    id: 4,
    clientName: 'Grace Mensah',
    propertyName: 'Penthouse - Cantonments',
    propertyAddress: 'Cantonments, Accra',
    date: '2024-03-22',
    time: '15:00',
    duration: '1.5 hours',
    status: 'pending',
    priority: 'high',
    agent: 'John Smith',
    notes: 'High-value client. Prepare luxury property comparison and exclusive financing options.',
    reminder: '3 hours before',
    propertyType: 'Penthouse',
    price: 'GH₵3,800,000',
    bedrooms: 5,
    bathrooms: 4
  },
  {
    id: 5,
    clientName: 'David Wilson',
    propertyName: 'Garden House - Dzorwulu',
    propertyAddress: 'Dzorwulu, Accra',
    date: '2024-03-19',
    time: '11:30',
    duration: '1 hour',
    status: 'cancelled',
    priority: 'low',
    agent: 'Lisa Davis',
    notes: 'Client cancelled due to schedule conflict. Reschedule for next week.',
    reminder: 'Cancelled',
    propertyType: 'House',
    price: 'GH₵1,500,000',
    bedrooms: 4,
    bathrooms: 3
  }
];

export default function ClientViewingsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'medium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'low':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Calendar className="h-4 w-4 text-blue-600" />;
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-gray-600" />;
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
      default:
        return <Calendar className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search viewings..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <Calendar className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Viewings List */}
      <div className="space-y-4">
        {clientViewings.map((viewing) => (
          <Card key={viewing.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(viewing.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{viewing.clientName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{viewing.propertyName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(viewing.status)}>
                    {viewing.status}
                  </Badge>
                  <Badge className={getPriorityColor(viewing.priority)}>
                    {viewing.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Date & Time:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {viewing.date} at {viewing.time}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.duration}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Agent:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.agent}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Price:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.price}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Property Type:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.propertyType}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Bedrooms/Bathrooms:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.bedrooms} bed, {viewing.bathrooms} bath</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reminder:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{viewing.reminder}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Property Address:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                  {viewing.propertyAddress}
                </p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{viewing.notes}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                {viewing.status === 'scheduled' && (
                  <>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Confirm Viewing
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="h-4 w-4 mr-1" />
                      Reschedule
                    </Button>
                  </>
                )}
                {viewing.status === 'confirmed' && (
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <User className="h-4 w-4 mr-1" />
                    Start Viewing
                  </Button>
                )}
                {viewing.status === 'cancelled' && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="h-4 w-4 mr-1" />
                    Reschedule
                  </Button>
                )}
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  Set Reminder
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <MapPin className="h-4 w-4 mr-1" />
                  View Property
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 