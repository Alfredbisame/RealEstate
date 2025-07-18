import { useState } from 'react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TrainingProgramsView from './training/TrainingProgramsView';
import EnrollmentsView from './training/EnrollmentsView';
import ProgressTrackingView from './training/ProgressTrackingView';
import CertificatesView from './training/CertificatesView';

// Mock data
const mockPrograms = [
  { id: '1', title: 'Real Estate Sales Mastery', description: 'Comprehensive sales training for agents.', start: '2024-06-01', end: '2024-06-30', status: 'Ongoing' },
  { id: '2', title: 'Construction Safety', description: 'Mandatory safety training for site staff.', start: '2024-05-10', end: '2024-05-20', status: 'Completed' },
];
const mockEnrollments = [
  { id: '1', employee: 'Kwame Asante', program: 'Real Estate Sales Mastery', status: 'Enrolled', progress: 60 },
  { id: '2', employee: 'Ama Osei', program: 'Construction Safety', status: 'Completed', progress: 100 },
];
const mockProgress = [
  { id: '1', employee: 'Kwame Asante', program: 'Real Estate Sales Mastery', progress: 60 },
  { id: '2', employee: 'Ama Osei', program: 'Construction Safety', progress: 100 },
];
const mockCertificates = [
  { id: '1', employee: 'Ama Osei', program: 'Construction Safety', date: '2024-05-21', certificate: 'Certificate of Completion' },
];

export default function HRManagerTrainingTab() {
  const [activeTab, setActiveTab] = useState('programs');
  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Training Management
            </h1>
            <p className="opacity-90 text-blue-50">
              Manage training programs, enrollments, progress, and certificates for your staff.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="programs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <BookOpen className="w-4 h-4 mr-1" /> Programs
          </TabsTrigger>
          <TabsTrigger value="enrollments" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Users className="w-4 h-4 mr-1" /> Enrollments
          </TabsTrigger>
          <TabsTrigger value="progress" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <TrendingUp className="w-4 h-4 mr-1" /> Progress
          </TabsTrigger>
          <TabsTrigger value="certificates" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Award className="w-4 h-4 mr-1" /> Certificates
          </TabsTrigger>
        </TabsList>
        <TabsContent value="programs" className="mt-6">
          <TrainingProgramsView programs={mockPrograms} />
        </TabsContent>
        <TabsContent value="enrollments" className="mt-6">
          <EnrollmentsView enrollments={mockEnrollments} />
        </TabsContent>
        <TabsContent value="progress" className="mt-6">
          <ProgressTrackingView progress={mockProgress} />
        </TabsContent>
        <TabsContent value="certificates" className="mt-6">
          <CertificatesView certificates={mockCertificates} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 