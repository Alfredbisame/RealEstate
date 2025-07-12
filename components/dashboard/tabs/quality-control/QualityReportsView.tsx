import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, FileText, Download, TrendingUp, TrendingDown, Award, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const qualityReports = [
  {
    id: 1,
    title: 'Monthly Quality Assessment Report',
    description: 'Comprehensive quality control assessment for March 2024',
    type: 'monthly',
    status: 'completed',
    generatedBy: 'John Smith',
    generatedDate: '2024-03-31',
    period: 'March 2024',
    score: 94,
    compliance: 'compliant',
    issues: 3,
    recommendations: 5,
    areas: ['Foundation', 'Electrical', 'Plumbing', 'Structural'],
    summary: 'Overall quality score improved by 2% from last month. Three critical issues identified and resolved. All major systems meet compliance standards.'
  },
  {
    id: 2,
    title: 'Foundation Quality Inspection Report',
    description: 'Detailed foundation quality and structural integrity report',
    type: 'specialized',
    status: 'completed',
    generatedBy: 'David Brown',
    generatedDate: '2024-03-15',
    period: 'Foundation Phase',
    score: 98,
    compliance: 'compliant',
    issues: 1,
    recommendations: 2,
    areas: ['Foundation'],
    summary: 'Foundation work exceeds quality standards. Minor concrete curing issue noted and addressed. Structural integrity confirmed.'
  },
  {
    id: 3,
    title: 'Electrical Systems Quality Report',
    description: 'Electrical installation and safety compliance assessment',
    type: 'specialized',
    status: 'in-progress',
    generatedBy: 'Sarah Wilson',
    generatedDate: '2024-03-28',
    period: 'Electrical Phase',
    score: 87,
    compliance: 'pending',
    issues: 2,
    recommendations: 3,
    areas: ['Electrical'],
    summary: 'Electrical systems 87% complete. Two minor issues identified. Final inspection scheduled for next week.'
  },
  {
    id: 4,
    title: 'Safety Equipment Quality Report',
    description: 'Safety equipment and protective gear quality assessment',
    type: 'safety',
    status: 'completed',
    generatedBy: 'Lisa Davis',
    generatedDate: '2024-03-25',
    period: 'Safety Audit',
    score: 96,
    compliance: 'compliant',
    issues: 0,
    recommendations: 1,
    areas: ['Safety'],
    summary: 'All safety equipment meets or exceeds standards. One recommendation for additional training implemented.'
  },
  {
    id: 5,
    title: 'Plumbing Systems Quality Report',
    description: 'Plumbing installation and leak testing quality assessment',
    type: 'specialized',
    status: 'failed',
    generatedBy: 'Mike Johnson',
    generatedDate: '2024-03-14',
    period: 'Plumbing Phase',
    score: 65,
    compliance: 'non-compliant',
    issues: 3,
    recommendations: 4,
    areas: ['Plumbing'],
    summary: 'Multiple leaks detected. Requires immediate repair and reinspection. Non-compliant status until resolved.'
  }
];

export default function QualityReportsView() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'monthly':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'specialized':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'safety':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getComplianceColor = (compliance: string) => {
    switch (compliance) {
      case 'compliant':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'non-compliant':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'failed':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
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
              placeholder="Search quality reports..."
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
          Generate Report
        </Button>
      </div>

      {/* Quality Reports List */}
      <div className="space-y-4">
        {qualityReports.map((report) => (
          <Card key={report.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(report.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{report.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getTypeColor(report.type)}>
                    {report.type}
                  </Badge>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                  <Badge className={getComplianceColor(report.compliance)}>
                    {report.compliance}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Generated By:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.generatedBy}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Period:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.period}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Score:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.score}%</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Issues:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.issues}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Generated Date:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.generatedDate}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Recommendations:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.recommendations}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Areas Covered:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{report.areas.join(', ')}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Summary:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{report.summary}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Quality Score</span>
                  <span className="text-gray-900 dark:text-gray-100">{report.score}%</span>
                </div>
                <Progress value={report.score} className="h-2" />
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FileText className="h-4 w-4 mr-1" />
                  View Full Report
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Award className="h-4 w-4 mr-1" />
                  Share Report
                </Button>
                {report.status === 'failed' && (
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Address Issues
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 