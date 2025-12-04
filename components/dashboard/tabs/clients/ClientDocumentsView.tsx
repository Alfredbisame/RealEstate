import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, FileText, Download, Eye, Edit, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const clientDocuments = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    documentType: 'Sales Agreement',
    documentName: 'Property Purchase Agreement - East Legon Villa',
    status: 'pending',
    priority: 'high',
    dateCreated: '2024-03-15',
    dueDate: '2024-03-20',
    agent: 'John Smith',
    property: 'East Legon Villa - GH₵1,200,000',
    description: 'Standard property purchase agreement with financing terms and conditions.',
    fileSize: '2.4 MB',
    lastModified: '2024-03-15',
    tags: ['Legal', 'High Priority', 'Financing']
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    documentType: 'Title Transfer',
    documentName: 'Deed Transfer - Airport Residential Apartment',
    status: 'completed',
    priority: 'medium',
    dateCreated: '2024-03-10',
    dueDate: '2024-03-12',
    agent: 'Lisa Davis',
    property: 'Airport Residential Apartment - GH₵850,000',
    description: 'Property title transfer documentation and registration.',
    fileSize: '1.8 MB',
    lastModified: '2024-03-12',
    tags: ['Legal', 'Completed', 'Registration']
  },
  {
    id: 3,
    clientName: 'Ama Osei',
    documentType: 'Mortgage Application',
    documentName: 'Bank Loan Application - Trasacco Villa',
    status: 'in-progress',
    priority: 'high',
    dateCreated: '2024-03-18',
    dueDate: '2024-03-25',
    agent: 'David Wilson',
    property: 'Trasacco Valley Villa - GH₵2,500,000',
    description: 'Mortgage application with supporting financial documents.',
    fileSize: '3.2 MB',
    lastModified: '2024-03-18',
    tags: ['Financial', 'High Priority', 'Mortgage']
  },
  {
    id: 4,
    clientName: 'David Wilson',
    documentType: 'Legal Document',
    documentName: 'Property Survey Report - Dzorwulu House',
    status: 'pending',
    priority: 'medium',
    dateCreated: '2024-03-14',
    dueDate: '2024-03-21',
    agent: 'John Smith',
    property: 'Dzorwulu House - GH₵1,500,000',
    description: 'Professional property survey and boundary verification.',
    fileSize: '1.5 MB',
    lastModified: '2024-03-14',
    tags: ['Survey', 'Legal', 'Verification']
  },
  {
    id: 5,
    clientName: 'Grace Mensah',
    documentType: 'Insurance Certificate',
    documentName: 'Property Insurance - Cantonments Penthouse',
    status: 'completed',
    priority: 'low',
    dateCreated: '2024-03-08',
    dueDate: '2024-03-10',
    agent: 'Lisa Davis',
    property: 'Cantonments Penthouse - GH₵3,800,000',
    description: 'Comprehensive property insurance coverage certificate.',
    fileSize: '0.9 MB',
    lastModified: '2024-03-10',
    tags: ['Insurance', 'Completed', 'Coverage']
  }
];

export default function ClientDocumentsView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-gray-600" />;
      case 'in-progress':
        return <AlertTriangle className="h-4 w-4 text-blue-600" />;
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
              placeholder="Search documents..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          <FileText className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Client Documents List */}
      <div className="space-y-4">
        {clientDocuments.map((document) => (
          <Card key={document.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(document.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{document.clientName}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{document.documentName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(document.status)}>
                    {document.status}
                  </Badge>
                  <Badge className={getPriorityColor(document.priority)}>
                    {document.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Document Type:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.documentType}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Agent:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.agent}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">File Size:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.fileSize}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.dueDate}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Property:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.property}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Date Created:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.dateCreated}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Last Modified:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{document.lastModified}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Description:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{document.description}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {document.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Eye className="h-4 w-4 mr-1" />
                  View Document
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Document
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FileText className="h-4 w-4 mr-1" />
                  Send to Client
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 