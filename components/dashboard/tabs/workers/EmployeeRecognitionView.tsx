'use client';

import { useState } from 'react';
import { 
  Award, 
  Trophy, 
  Star, 
  Gift, 
  DollarSign, 
  Calendar, 
  Search, 
  Filter, 
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Users,
  Target,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface Recognition {
  id: string;
  workerId: string;
  workerName: string;
  avatar?: string;
  position: string;
  recognitionType: 'award' | 'bonus' | 'achievement' | 'promotion' | 'certificate';
  category: 'safety' | 'productivity' | 'innovation' | 'leadership' | 'excellence' | 'longevity';
  title: string;
  description: string;
  awardedBy: string;
  awardedDate: string;
  amount?: number;
  points?: number;
  status: 'active' | 'pending' | 'expired';
  achievements: string[];
  criteria: string[];
  impact: string;
  notes?: string;
}

const mockRecognitions: Recognition[] = [
  {
    id: '1',
    workerId: 'W001',
    workerName: 'Kwame Mensah',
    position: 'Mason',
    recognitionType: 'award',
    category: 'excellence',
    title: 'Employee of the Month',
    description: 'Outstanding performance in masonry work with zero safety incidents for 3 consecutive months.',
    awardedBy: 'Site Manager David',
    awardedDate: '2024-01-15',
    points: 100,
    status: 'active',
    achievements: ['Zero safety incidents', '100% attendance', 'Exceeded productivity targets'],
    criteria: ['Safety record', 'Attendance', 'Productivity', 'Team collaboration'],
    impact: 'Improved team morale and set new safety standards for the site.',
    notes: 'Kwame has consistently demonstrated leadership qualities and mentorship to junior workers.'
  },
  {
    id: '2',
    workerId: 'W002',
    workerName: 'Ama Osei',
    position: 'Carpenter',
    recognitionType: 'bonus',
    category: 'productivity',
    title: 'Performance Bonus',
    description: 'Exceptional productivity improvement and quality workmanship in carpentry projects.',
    awardedBy: 'Project Manager Mike',
    awardedDate: '2024-01-10',
    amount: 5000,
    status: 'active',
    achievements: ['20% productivity increase', 'Zero rework', 'Completed 3 projects ahead of schedule'],
    criteria: ['Productivity metrics', 'Quality standards', 'Project completion', 'Cost efficiency'],
    impact: 'Reduced project costs by 15% and improved client satisfaction.',
    notes: 'Ama\'s attention to detail and efficiency has been exemplary.'
  },
  {
    id: '3',
    workerId: 'W003',
    workerName: 'Kofi Addo',
    position: 'Electrician',
    recognitionType: 'achievement',
    category: 'innovation',
    title: 'Innovation Award',
    description: 'Developed new electrical installation technique that improved efficiency and safety.',
    awardedBy: 'Technical Director Sarah',
    awardedDate: '2024-01-08',
    points: 150,
    status: 'active',
    achievements: ['New installation method', '30% time savings', 'Enhanced safety protocols'],
    criteria: ['Innovation', 'Safety improvement', 'Efficiency gains', 'Knowledge sharing'],
    impact: 'New method adopted across all electrical teams, improving overall project efficiency.',
    notes: 'Kofi\'s innovative approach has been documented and shared with the entire electrical team.'
  },
  {
    id: '4',
    workerId: 'W004',
    workerName: 'Efua Tetteh',
    position: 'Plumber',
    recognitionType: 'certificate',
    category: 'safety',
    title: 'Safety Champion Certificate',
    description: 'Outstanding commitment to safety protocols and mentoring others in safety practices.',
    awardedBy: 'Safety Officer John',
    awardedDate: '2024-01-12',
    status: 'active',
    achievements: ['Safety training completion', 'Mentored 5 workers', 'Zero incidents'],
    criteria: ['Safety record', 'Training completion', 'Mentorship', 'Protocol adherence'],
    impact: 'Improved safety awareness across the plumbing team.',
    notes: 'Efua has been instrumental in maintaining our excellent safety record.'
  },
  {
    id: '5',
    workerId: 'W005',
    workerName: 'Yaw Darko',
    position: 'Laborer',
    recognitionType: 'promotion',
    category: 'leadership',
    title: 'Team Lead Promotion',
    description: 'Demonstrated exceptional leadership skills and was promoted to team lead position.',
    awardedBy: 'HR Manager Lisa',
    awardedDate: '2024-01-05',
    status: 'active',
    achievements: ['Leadership development', 'Team management', 'Project coordination'],
    criteria: ['Leadership potential', 'Team management', 'Communication skills', 'Problem solving'],
    impact: 'Improved team coordination and project delivery efficiency.',
    notes: 'Yaw has shown natural leadership abilities and excellent communication skills.'
  }
];

export default function EmployeeRecognitionView() {
  const [recognitions, setRecognitions] = useState<Recognition[]>(mockRecognitions);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedRecognition, setSelectedRecognition] = useState<Recognition | null>(null);

  const getRecognitionTypeColor = (type: string) => {
    const colors = {
      award: 'bg-yellow-100 text-yellow-800',
      bonus: 'bg-green-100 text-green-800',
      achievement: 'bg-blue-100 text-blue-800',
      promotion: 'bg-purple-100 text-purple-800',
      certificate: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      safety: 'bg-red-100 text-red-800',
      productivity: 'bg-green-100 text-green-800',
      innovation: 'bg-blue-100 text-blue-800',
      leadership: 'bg-purple-100 text-purple-800',
      excellence: 'bg-yellow-100 text-yellow-800',
      longevity: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      expired: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredRecognitions = recognitions.filter(recognition => {
    const matchesSearch = recognition.workerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recognition.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || recognition.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const recognitionStats = {
    total: recognitions.length,
    active: recognitions.filter(r => r.status === 'active').length,
    totalAmount: recognitions.reduce((sum, r) => sum + (r.amount || 0), 0),
    totalPoints: recognitions.reduce((sum, r) => sum + (r.points || 0), 0)
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Employee Recognition</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage awards, bonuses, and achievement tracking</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search recognitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
            <Plus className="w-4 h-4 mr-2" />
            New Recognition
          </Button>
        </div>
      </div>

      {/* Recognition Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Recognitions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{recognitionStats.total}</p>
              </div>
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{recognitionStats.active}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Bonuses</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">₵{recognitionStats.totalAmount.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Points</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{recognitionStats.totalPoints}</p>
              </div>
              <Star className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recognition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecognitions.map((recognition) => (
          <Card key={recognition.id} className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={recognition.avatar} />
                    <AvatarFallback>
                      {recognition.workerName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{recognition.workerName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{recognition.position}</p>
                  </div>
                </div>
                <Badge className={getRecognitionTypeColor(recognition.recognitionType)}>
                  {recognition.recognitionType}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{recognition.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{recognition.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(recognition.category)}>
                    {recognition.category}
                  </Badge>
                  <Badge className={getStatusColor(recognition.status)}>
                    {recognition.status}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Awarded by</span>
                  <span className="font-medium dark:text-gray-200">{recognition.awardedBy}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Date</span>
                  <span className="font-medium dark:text-gray-200">{new Date(recognition.awardedDate).toLocaleDateString()}</span>
                </div>
                
                {recognition.amount && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Bonus Amount</span>
                    <span className="font-bold text-green-600 dark:text-green-400">₵{recognition.amount.toLocaleString()}</span>
                  </div>
                )}
                
                {recognition.points && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Points Earned</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{recognition.points}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedRecognition(recognition)}
                        className="flex-1 dark:border-gray-700 dark:text-gray-200"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl dark:bg-gray-800">
                      <DialogHeader>
                        <DialogTitle className="dark:text-white">Recognition Details</DialogTitle>
                      </DialogHeader>
                      {selectedRecognition && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Worker</p>
                              <p className="text-sm dark:text-gray-200">{selectedRecognition.workerName}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Position</p>
                              <p className="text-sm dark:text-gray-200">{selectedRecognition.position}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Recognition Type</p>
                              <Badge className={getRecognitionTypeColor(selectedRecognition.recognitionType)}>
                                {selectedRecognition.recognitionType}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Category</p>
                              <Badge className={getCategoryColor(selectedRecognition.category)}>
                                {selectedRecognition.category}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Title</p>
                            <p className="text-sm font-semibold dark:text-white">{selectedRecognition.title}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Description</p>
                            <p className="text-sm dark:text-gray-200">{selectedRecognition.description}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Impact</p>
                            <p className="text-sm dark:text-gray-200">{selectedRecognition.impact}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Awarded By</p>
                              <p className="text-sm dark:text-gray-200">{selectedRecognition.awardedBy}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Awarded Date</p>
                              <p className="text-sm dark:text-gray-200">{new Date(selectedRecognition.awardedDate).toLocaleDateString()}</p>
                            </div>
                          </div>
                          {selectedRecognition.achievements.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Achievements</p>
                              <ul className="list-disc list-inside text-sm space-y-1 mt-1 dark:text-gray-200">
                                {selectedRecognition.achievements.map((achievement, index) => (
                                  <li key={index}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {selectedRecognition.criteria.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Criteria</p>
                              <ul className="list-disc list-inside text-sm space-y-1 mt-1 dark:text-gray-200">
                                {selectedRecognition.criteria.map((criterion, index) => (
                                  <li key={index}>{criterion}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {selectedRecognition.notes && (
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Notes</p>
                              <p className="text-sm dark:text-gray-200">{selectedRecognition.notes}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="sm" className="dark:text-gray-200">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 