import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calculator, TrendingUp, Building2, CreditCard, Target } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';

const clientBudgetTools = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah.johnson@email.com',
    toolType: 'Budget Consultation',
    propertyType: '3-Bedroom Villa',
    budget: 'GH₵1,200,000',
    estimatedCost: 'GH₵1,180,000',
    savings: 'GH₵20,000',
    status: 'completed',
    agent: 'John Smith',
    date: '2024-03-15',
    notes: 'Comprehensive budget analysis with financing options. Client satisfied with recommendations.',
    recommendations: ['Mortgage pre-approval', 'Down payment planning', 'Closing cost estimates'],
    tags: ['Completed', 'High Value', 'Financing']
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientEmail: 'michael.chen@email.com',
    toolType: 'Material Cost Estimator',
    propertyType: 'Luxury Apartment',
    budget: 'GH₵2,500,000',
    estimatedCost: 'GH₵2,650,000',
    savings: 'GH₵-150,000',
    status: 'in-progress',
    agent: 'Lisa Davis',
    date: '2024-03-18',
    notes: 'Material cost analysis in progress. Exploring alternative materials to reduce costs.',
    recommendations: ['Alternative materials', 'Bulk purchasing', 'Supplier negotiations'],
    tags: ['In Progress', 'Cost Optimization', 'Materials']
  },
  {
    id: 3,
    clientName: 'Ama Osei',
    clientEmail: 'ama.osei@email.com',
    toolType: 'ROI Calculator',
    propertyType: 'Investment Property',
    budget: 'GH₵3,800,000',
    estimatedCost: 'GH₵3,800,000',
    savings: 'GH₵0',
    status: 'completed',
    agent: 'David Wilson',
    date: '2024-03-20',
    notes: 'ROI analysis shows 12% annual return potential. Excellent investment opportunity.',
    recommendations: ['Rental market analysis', 'Property management options', 'Tax benefits'],
    tags: ['Completed', 'Investment', 'High ROI']
  },
  {
    id: 4,
    clientName: 'David Wilson',
    clientEmail: 'david.wilson@email.com',
    toolType: 'Financing Options',
    propertyType: 'Townhouse',
    budget: 'GH₵1,500,000',
    estimatedCost: 'GH₵1,500,000',
    savings: 'GH₵0',
    status: 'pending',
    agent: 'John Smith',
    date: '2024-03-22',
    notes: 'Comparing multiple financing options. Client evaluating mortgage terms and rates.',
    recommendations: ['Bank comparison', 'Interest rate analysis', 'Payment schedule planning'],
    tags: ['Pending', 'Financing', 'Comparison']
  },
  {
    id: 5,
    clientName: 'Grace Mensah',
    clientEmail: 'grace.mensah@email.com',
    toolType: 'Budget Consultation',
    propertyType: 'Penthouse',
    budget: 'GH₵4,200,000',
    estimatedCost: 'GH₵4,050,000',
    savings: 'GH₵150,000',
    status: 'completed',
    agent: 'Lisa Davis',
    date: '2024-03-12',
    notes: 'Luxury property budget consultation. Client secured favorable financing terms.',
    recommendations: ['Luxury finishes selection', 'Custom features planning', 'Premium financing'],
    tags: ['Completed', 'Luxury', 'Premium']
  }
];

export default function ClientBudgetView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getToolTypeColor = (type: string) => {
    switch (type) {
      case 'Budget Consultation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Material Cost Estimator':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'ROI Calculator':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Financing Options':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getToolTypeIcon = (type: string) => {
    switch (type) {
      case 'Budget Consultation':
        return <Calculator className="h-4 w-4 text-blue-600" />;
      case 'Material Cost Estimator':
        return <Building2 className="h-4 w-4 text-purple-600" />;
      case 'ROI Calculator':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'Financing Options':
        return <CreditCard className="h-4 w-4 text-orange-600" />;
      default:
        return <Calculator className="h-4 w-4 text-gray-600" />;
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
              placeholder="Search budget tools..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <Calculator className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Budget Tools List */}
      <div className="space-y-4">
        {clientBudgetTools.map((tool) => (
          <Card key={tool.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getToolTypeIcon(tool.toolType)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{tool.clientName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tool.toolType} - {tool.propertyType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(tool.status)}>
                    {tool.status}
                  </Badge>
                  <Badge className={getToolTypeColor(tool.toolType)}>
                    {tool.toolType}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <FaCediSign className="h-4 w-4 mr-1 text-green-600" />
                    {tool.budget}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Estimated Cost:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                    <FaCediSign className="h-4 w-4 mr-1 text-blue-600" />
                    {tool.estimatedCost}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Savings:</span>
                  <div className={`font-medium flex items-center ${
                    tool.savings.startsWith('-') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                  }`}>
                    <FaCediSign className="h-4 w-4 mr-1" />
                    {tool.savings}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Agent:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{tool.agent}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{tool.date}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100 capitalize">{tool.status}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Property Type:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{tool.propertyType}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tool.notes}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Recommendations:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tool.recommendations.map((rec, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {rec}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tool.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calculator className="h-4 w-4 mr-1" />
                  View Analysis
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Target className="h-4 w-4 mr-1" />
                  Generate Report
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaCediSign className="h-4 w-4 mr-1" />
                  Financing Options
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  ROI Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 