import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MessageSquare, Phone, Mail, Calendar, Star, User, Clock } from 'lucide-react';

const clientCommunications = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah.johnson@email.com',
    clientPhone: '+233 24 123 4567',
    type: 'call',
    status: 'completed',
    priority: 'high',
    date: '2024-03-15',
    time: '14:30',
    duration: '25 min',
    notes: 'Discussed property preferences for 3-bedroom house in East Legon. Client interested in modern finishes and security features.',
    followUp: 'Schedule viewing for next week',
    satisfaction: 5,
    tags: ['Property Inquiry', 'High Priority']
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientEmail: 'michael.chen@email.com',
    clientPhone: '+233 20 987 6543',
    type: 'email',
    status: 'pending',
    priority: 'medium',
    date: '2024-03-14',
    time: '09:15',
    duration: 'N/A',
    notes: 'Sent property listing for 2-bedroom apartment in Airport Residential Area. Awaiting response on viewing availability.',
    followUp: 'Follow up email in 2 days',
    satisfaction: null,
    tags: ['Property Listing', 'Follow Up']
  },
  {
    id: 3,
    clientName: 'Ama Osei',
    clientEmail: 'ama.osei@email.com',
    clientPhone: '+233 26 456 7890',
    type: 'meeting',
    status: 'scheduled',
    priority: 'high',
    date: '2024-03-18',
    time: '16:00',
    duration: '1 hour',
    notes: 'Scheduled property viewing for luxury villa in Trasacco Valley. Client bringing family for final decision.',
    followUp: 'Prepare property documents and financing options',
    satisfaction: null,
    tags: ['Property Viewing', 'High Value']
  },
  {
    id: 4,
    clientName: 'David Wilson',
    clientEmail: 'david.wilson@email.com',
    clientPhone: '+233 27 321 0987',
    type: 'call',
    status: 'completed',
    priority: 'low',
    date: '2024-03-13',
    time: '11:45',
    duration: '15 min',
    notes: 'Quick follow-up call about mortgage options. Client satisfied with current rates and terms.',
    followUp: 'Send mortgage application forms',
    satisfaction: 4,
    tags: ['Mortgage', 'Follow Up']
  },
  {
    id: 5,
    clientName: 'Grace Mensah',
    clientEmail: 'grace.mensah@email.com',
    clientPhone: '+233 24 789 0123',
    type: 'email',
    status: 'completed',
    priority: 'medium',
    date: '2024-03-12',
    time: '13:20',
    duration: 'N/A',
    notes: 'Sent updated property comparison for 4-bedroom houses in Cantonments. Client comparing 3 properties.',
    followUp: 'Schedule comparison meeting',
    satisfaction: 5,
    tags: ['Property Comparison', 'High Value']
  }
];

export default function ClientCommunicationView() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'call':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'email':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'meeting':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="h-4 w-4 text-green-600" />;
      case 'email':
        return <Mail className="h-4 w-4 text-blue-600" />;
      case 'meeting':
        return <Calendar className="h-4 w-4 text-purple-600" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-600" />;
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
              placeholder="Search communications..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <MessageSquare className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Communications List */}
      <div className="space-y-4">
        {clientCommunications.map((communication) => (
          <Card key={communication.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getTypeIcon(communication.type)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{communication.clientName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{communication.clientEmail} • {communication.clientPhone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getTypeColor(communication.type)}>
                    {communication.type}
                  </Badge>
                  <Badge className={getStatusColor(communication.status)}>
                    {communication.status}
                  </Badge>
                  <Badge className={getPriorityColor(communication.priority)}>
                    {communication.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Date & Time:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {communication.date} at {communication.time}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{communication.duration}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Satisfaction:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {communication.satisfaction ? (
                      <div className="flex items-center">
                        {[...Array(communication.satisfaction)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    ) : 'N/A'}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Tags:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {communication.tags.join(', ')}
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{communication.notes}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Follow Up:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{communication.followUp}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Send Message
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Calendar className="h-4 w-4 mr-1" />
                  Schedule Follow Up
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <User className="h-4 w-4 mr-1" />
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  Log Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 