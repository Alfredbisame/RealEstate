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
  Click,
  Share2,
  Target,
  TrendingUp,
  Edit,
  MoreHorizontal,
  Calendar,
  Clock,
  FileText,
  Image,
  Video,
  Palette,
  Type,
  Layout
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

interface ContentToolsViewProps {
  user: User;
}

export default function ContentToolsView({ user }: ContentToolsViewProps) {
  const contentTools = [
    {
      id: '1',
      name: 'Property Description Generator',
      type: 'Text Generator',
      status: 'Active',
      usage: '156',
      success: '142',
      successRate: '91%',
      templates: '12',
      lastUsed: '2024-01-15',
      description: 'AI-powered property descriptions'
    },
    {
      id: '2',
      name: 'Social Media Post Creator',
      type: 'Content Creator',
      status: 'Active',
      usage: '89',
      success: '78',
      successRate: '88%',
      templates: '8',
      lastUsed: '2024-01-20',
      description: 'Generate engaging social media posts'
    },
    {
      id: '3',
      name: 'Email Template Builder',
      type: 'Template Tool',
      status: 'Active',
      usage: '234',
      success: '220',
      successRate: '94%',
      templates: '15',
      lastUsed: '2024-01-18',
      description: 'Professional email templates'
    },
    {
      id: '4',
      name: 'Property Image Editor',
      type: 'Image Tool',
      status: 'Active',
      usage: '67',
      success: '62',
      successRate: '93%',
      templates: '6',
      lastUsed: '2024-01-22',
      description: 'Enhance property photos'
    },
    {
      id: '5',
      name: 'Video Content Creator',
      type: 'Video Tool',
      status: 'Draft',
      usage: '0',
      success: '0',
      successRate: '0%',
      templates: '3',
      lastUsed: '2024-02-01',
      description: 'Create property showcase videos'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Beta': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Archived': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Text Generator': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Content Creator': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Template Tool': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Image Tool': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Video Tool': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Text Generator': return FileText;
      case 'Content Creator': return Type;
      case 'Template Tool': return Layout;
      case 'Image Tool': return Image;
      case 'Video Tool': return Video;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search content tools..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
            <FileText className="h-4 w-4 mr-2" />
            New Tool
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {contentTools.map((tool, index) => {
          const TypeIcon = getTypeIcon(tool.type);
          const cardColors = [
            'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-teal-200 dark:border-teal-800',
            'bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-950 dark:to-sky-950 border-cyan-200 dark:border-cyan-800',
            'bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950 border-sky-200 dark:border-sky-800',
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={tool.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {tool.name}
                        </h3>
                        <Badge className={getStatusColor(tool.status)}>
                          {tool.status}
                        </Badge>
                        <Badge className={getTypeColor(tool.type)}>
                          {tool.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="h-3 w-3" />
                          <span>{tool.description}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Last Used: {tool.lastUsed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {tool.usage}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Usage
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Success: {tool.success}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {tool.successRate}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Success Rate
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Templates: {tool.templates}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {tool.templates}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Templates
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Type: {tool.type}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/20 dark:hover:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/30 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/20 dark:hover:bg-sky-900/30 border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-300">
                        <TypeIcon className="h-3 w-3" />
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
                            Preview Tool
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Tool
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            View Templates
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Palette className="h-4 w-4 mr-2" />
                            Customize
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{tool.successRate}</span>
                  </div>
                  <Progress value={parseFloat(tool.successRate)} className="h-2" />
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Usage</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{tool.usage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Success</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{tool.success}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Templates</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{tool.templates}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Last Used: {tool.lastUsed}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {tool.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TypeIcon className="h-3 w-3" />
                      <span>{tool.type}</span>
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