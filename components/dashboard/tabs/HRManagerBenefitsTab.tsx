import { useState } from 'react';
import { Heart, PiggyBank, Calendar, Activity } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import HealthInsuranceView from './benefits/HealthInsuranceView';
import RetirementPlansView from './benefits/RetirementPlansView';
import LeaveBenefitsView from './benefits/LeaveBenefitsView';
import WellnessProgramsView from './benefits/WellnessProgramsView';

// Mock data
const mockHealthInsurance = [
  { id: '1', employee: 'Kwame Asante', plan: 'Family Plan', coverage: 'Medical + Dental', status: 'Active', premium: 'GHS 200/month' },
  { id: '2', employee: 'Ama Osei', plan: 'Individual Plan', coverage: 'Medical Only', status: 'Active', premium: 'GHS 120/month' },
];
const mockRetirementPlans = [
  { id: '1', employee: 'Kwame Asante', plan: 'SSNIT + Private', contribution: 'GHS 500/month', employerMatch: 'GHS 250/month', total: 'GHS 750/month' },
  { id: '2', employee: 'Ama Osei', plan: 'SSNIT Only', contribution: 'GHS 300/month', employerMatch: 'GHS 150/month', total: 'GHS 450/month' },
];
const mockLeaveBenefits = [
  { id: '1', employee: 'Kwame Asante', type: 'Annual Leave', days: 21, used: 5, remaining: 16 },
  { id: '2', employee: 'Ama Osei', type: 'Sick Leave', days: 10, used: 2, remaining: 8 },
];
const mockWellnessPrograms = [
  { id: '1', program: 'Gym Membership', participants: 15, cost: 'GHS 50/month', status: 'Active' },
  { id: '2', program: 'Mental Health Support', participants: 8, cost: 'GHS 100/month', status: 'Active' },
];

export default function HRManagerBenefitsTab() {
  const [activeTab, setActiveTab] = useState('health-insurance');
  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
              Employee Benefits
            </h1>
            <p className="opacity-90 text-purple-50">
              Manage health insurance, retirement plans, leave benefits, and wellness programs for your staff.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700" />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="health-insurance" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Heart className="w-4 h-4 mr-1" /> Health Insurance
          </TabsTrigger>
          <TabsTrigger value="retirement-plans" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <PiggyBank className="w-4 h-4 mr-1" /> Retirement Plans
          </TabsTrigger>
          <TabsTrigger value="leave-benefits" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Calendar className="w-4 h-4 mr-1" /> Leave Benefits
          </TabsTrigger>
          <TabsTrigger value="wellness-programs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700">
            <Activity className="w-4 h-4 mr-1" /> Wellness Programs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="health-insurance" className="mt-6">
          <HealthInsuranceView healthInsurance={mockHealthInsurance} />
        </TabsContent>
        <TabsContent value="retirement-plans" className="mt-6">
          <RetirementPlansView retirementPlans={mockRetirementPlans} />
        </TabsContent>
        <TabsContent value="leave-benefits" className="mt-6">
          <LeaveBenefitsView leaveBenefits={mockLeaveBenefits} />
        </TabsContent>
        <TabsContent value="wellness-programs" className="mt-6">
          <WellnessProgramsView wellnessPrograms={mockWellnessPrograms} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 