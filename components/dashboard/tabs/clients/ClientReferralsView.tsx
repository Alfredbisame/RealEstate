import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Award, Users, DollarSign, Gift, CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';

const clientReferrals = [
  {
    id: 1,
    referrerName: 'Sarah Johnson',
    referrerEmail: 'sarah.johnson@email.com',
    referredName: 'Michael Chen',
    referredEmail: 'michael.chen@email.com',
    status: 'completed',
    date: '2024-03-15',
    propertyValue: 'GH₵850,000',
    commission: 'GH₵8,500',
    reward: 'GH₵2,000',
    agent: 'John Smith',
    notes: 'Referred by satisfied client. Property purchase completed successfully.',
    referralSource: 'Client Referral',
    rewardStatus: 'paid',
    tags: ['Completed', 'High Value', 'Paid']
  },
  {
    id: 2,
    referrerName: 'Ama Osei',
    referrerEmail: 'ama.osei@email.com',
    referredName: 'David Wilson',
    referredEmail: 'david.wilson@email.com',
    status: 'in-progress',
    date: '2024-03-18',
    propertyValue: 'GH₵1,500,000',
    commission: 'GH₵15,000',
    reward: 'GH₵3,000',
    agent: 'Lisa Davis',
    notes: 'Referral in viewing stage. High potential for conversion.',
    referralSource: 'Client Referral',
    rewardStatus: 'pending',
    tags: ['In Progress', 'High Value', 'Pending']
  },
  {
    id: 3,
    referrerName: 'Grace Mensah',
    referrerEmail: 'grace.mensah@email.com',
    referredName: 'Emma Thompson',
    referredEmail: 'emma.thompson@email.com',
    status: 'pending',
    date: '2024-03-20',
    propertyValue: 'GH₵2,200,000',
    commission: 'GH₵22,000',
    reward: 'GH₵4,000',
    agent: 'David Wilson',
    notes: 'New referral. Initial contact made, scheduling viewing.',
    referralSource: 'Client Referral',
    rewardStatus: 'pending',
    tags: ['Pending', 'High Value', 'New']
  },
  {
    id: 4,
    referrerName: 'Michael Chen',
    referrerEmail: 'michael.chen@email.com',
    referredName: 'Robert Kim',
    referredEmail: 'robert.kim@email.com',
    status: 'completed',
    date: '2024-02-28',
    propertyValue: 'GH₵1,200,000',
    commission: 'GH₵12,000',
    reward: 'GH₵2,500',
    agent: 'John Smith',
    notes: 'Successful referral. Property purchased and reward paid.',
    referralSource: 'Client Referral',
    rewardStatus: 'paid',
    tags: ['Completed', 'Paid', 'Successful']
  },
  {
    id: 5,
    referrerName: 'David Wilson',
    referrerEmail: 'david.wilson@email.com',
    referredName: 'Lisa Park',
    referredEmail: 'lisa.park@email.com',
    status: 'cancelled',
    date: '2024-03-10',
    propertyValue: 'GH₵950,000',
    commission: 'GH₵0',
    reward: 'GH₵0',
    agent: 'Lisa Davis',
    notes: 'Referral cancelled due to client change of plans.',
    referralSource: 'Client Referral',
    rewardStatus: 'cancelled',
    tags: ['Cancelled', 'No Reward']
  }
];

export default function ClientReferralsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getRewardStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
      case 'cancelled':
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
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
              placeholder="Search referrals..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <Award className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Referrals List */}
      <div className="space-y-4">
        {clientReferrals.map((referral) => (
          <Card key={referral.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(referral.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{referral.referrerName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Referred: {referral.referredName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(referral.status)}>
                    {referral.status}
                  </Badge>
                  <Badge className={getRewardStatusColor(referral.rewardStatus)}>
                    {referral.rewardStatus}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Property Value:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-blue-500" />
                    {referral.propertyValue}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Commission:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-blue-500" />
                    {referral.commission}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Referral Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                    {referral.date}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Agent:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{referral.agent}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{referral.date}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Source:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{referral.referralSource}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reward Status:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 capitalize">{referral.rewardStatus}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{referral.notes}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {referral.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Users className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Gift className="h-4 w-4 mr-1" />
                  Process Reward
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Award className="h-4 w-4 mr-1" />
                  Track Progress
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <DollarSign className="h-4 w-4 mr-1" />
                  View Commission
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 