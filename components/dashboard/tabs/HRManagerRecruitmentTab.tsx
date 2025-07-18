import { useState } from 'react';
import { Briefcase, Users, Calendar, UserPlus } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import JobPostingsView from './recruitment/JobPostingsView';
import ApplicationsView from './recruitment/ApplicationsView';
import InterviewScheduleView from './recruitment/InterviewScheduleView';
import CandidatePipelineView from './recruitment/CandidatePipelineView';

// Mock data for demonstration
const mockJobPostings = [
  { id: '1', title: 'Sales Agent', department: 'Sales', status: 'Open', posted: '2024-05-01' },
  { id: '2', title: 'Site Supervisor', department: 'Construction', status: 'Closed', posted: '2024-04-15' },
];
const mockApplications = [
  { id: '1', name: 'John kumah', position: 'Sales Agent', status: 'Interview Scheduled', applied: '2024-05-02' },
  { id: '2', name: 'Jane Atta', position: 'Site Supervisor', status: 'Under Review', applied: '2024-04-18' },
];
const mockInterviews = [
  { id: '1', candidate: 'Benjamin Kwashie', position: 'Sales Agent', date: '2024-05-10', time: '10:00', interviewer: 'Ama Osei' },
];
const mockPipeline = [
  { stage: 'Applied', count: 12 },
  { stage: 'Screening', count: 5 },
  { stage: 'Interview', count: 2 },
  { stage: 'Offer', count: 1 },
  { stage: 'Hired', count: 1 },
];

export default function HRManagerRecruitmentTab() {
  const [activeTab, setActiveTab] = useState('job-postings');
  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              Recruitment Management
            </h1>
            <p className="opacity-90 text-green-50">
              Manage job postings, applications, interviews, and candidate pipeline for your organization.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="job-postings" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Briefcase className="w-4 h-4 mr-1" /> Job Postings
          </TabsTrigger>
          <TabsTrigger value="applications" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Users className="w-4 h-4 mr-1" /> Applications
          </TabsTrigger>
          <TabsTrigger value="interviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Calendar className="w-4 h-4 mr-1" /> Interviews
          </TabsTrigger>
          <TabsTrigger value="pipeline" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <UserPlus className="w-4 h-4 mr-1" /> Pipeline
          </TabsTrigger>
        </TabsList>
        <TabsContent value="job-postings" className="mt-6">
          <JobPostingsView jobPostings={mockJobPostings} />
        </TabsContent>
        <TabsContent value="applications" className="mt-6">
          <ApplicationsView applications={mockApplications} />
        </TabsContent>
        <TabsContent value="interviews" className="mt-6">
          <InterviewScheduleView interviews={mockInterviews} />
        </TabsContent>
        <TabsContent value="pipeline" className="mt-6">
          <CandidatePipelineView pipeline={mockPipeline} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 