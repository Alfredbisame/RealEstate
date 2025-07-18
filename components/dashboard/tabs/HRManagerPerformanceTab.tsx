import { useState } from 'react';
import { Award, Target, BookOpen, AlertTriangle, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PerformanceReviewsTab from './performance/PerformanceReviewsTab';
import GoalSettingTab from './performance/GoalSettingTab';
import TrainingRecordsTab from './performance/TrainingRecordsTab';
import DisciplinaryActionsView from './workers/DisciplinaryActionsView';
import EmployeeRecognitionView from './workers/EmployeeRecognitionView';

// Mock employee list for forms
const employees = [
  { id: '1', name: 'Kwame Asante' },
  { id: '2', name: 'Ama Osei' },
  { id: '3', name: 'Kojo Mensah' },
];

// Mock reviews data
const initialReviews = [
  { id: 1, employee: 'Kwame Asante', period: 'Q1 2024', rating: 4, comments: 'Excellent teamwork and leadership.' },
  { id: 2, employee: 'Ama Osei', period: 'Q1 2024', rating: 3, comments: 'Met most goals, needs improvement in punctuality.' },
  { id: 3, employee: 'Kojo Mensah', period: 'Q1 2024', rating: 5, comments: 'Outstanding performance and exceeded all targets.' },
  { id: 4, employee: 'Kwame Asante', period: '2023 Annual', rating: 4, comments: 'Consistent high performance.' },
];

// Mock goals data
const initialGoals = [
  { id: 1, employee: 'Kwame Asante', goal: 'Increase sales by 20%', deadline: '2024-06-30', progress: 60 },
  { id: 2, employee: 'Ama Osei', goal: 'Complete PMP certification', deadline: '2024-09-01', progress: 30 },
];

// Mock training data
const initialTraining = [
  { id: 1, employee: 'Kwame Asante', course: 'Safety Training', date: '2024-02-15', status: 'Completed' },
  { id: 2, employee: 'Ama Osei', course: 'Leadership Workshop', date: '2024-03-10', status: 'In Progress' },
];

export default function HRManagerPerformanceTab() {
  const [activeTab, setActiveTab] = useState('reviews');
  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">
              Performance Management
            </h1>
            <p className="opacity-90 text-yellow-50">
              Manage reviews, goals, training, discipline, and recognition for your staff.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <FileText className="w-4 h-4 mr-1" /> Reviews
          </TabsTrigger>
          <TabsTrigger value="goals" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Target className="w-4 h-4 mr-1" /> Goals
          </TabsTrigger>
          <TabsTrigger value="training" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <BookOpen className="w-4 h-4 mr-1" /> Training
          </TabsTrigger>
          <TabsTrigger value="discipline" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <AlertTriangle className="w-4 h-4 mr-1" /> Discipline
          </TabsTrigger>
          <TabsTrigger value="recognition" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Award className="w-4 h-4 mr-1" /> Recognition
          </TabsTrigger>
        </TabsList>
        <TabsContent value="reviews" className="mt-6">
          <PerformanceReviewsTab employees={employees} initialReviews={initialReviews} />
        </TabsContent>
        <TabsContent value="goals" className="mt-6">
          <GoalSettingTab employees={employees} initialGoals={initialGoals} />
        </TabsContent>
        <TabsContent value="training" className="mt-6">
          <TrainingRecordsTab employees={employees} initialTraining={initialTraining} />
        </TabsContent>
        <TabsContent value="discipline" className="mt-6">
          <DisciplinaryActionsView />
        </TabsContent>
        <TabsContent value="recognition" className="mt-6">
          <EmployeeRecognitionView />
        </TabsContent>
      </Tabs>
    </div>
  );
} 