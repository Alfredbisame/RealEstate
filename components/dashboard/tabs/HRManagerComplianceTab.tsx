import { useState } from 'react';
import { Shield, FileText, CheckCircle, Eye } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import LaborLawsView from './compliance/LaborLawsView';
import SafetyRegulationsView from './compliance/SafetyRegulationsView';
import TaxComplianceView from './compliance/TaxComplianceView';
import AuditTrailView from './compliance/AuditTrailView';

const mockLaborLaws = [
  { id: '1', regulation: 'Minimum Wage Compliance', status: 'Compliant', lastReview: '2024-01-15', nextReview: '2024-07-15', risk: 'Low' },
  { id: '2', regulation: 'Working Hours Limits', status: 'Compliant', lastReview: '2024-02-01', nextReview: '2024-08-01', risk: 'Low' },
  { id: '3', regulation: 'Overtime Pay Requirements', status: 'Review Required', lastReview: '2024-01-20', nextReview: '2024-07-20', risk: 'Medium' },
  { id: '4', regulation: 'Employee Contract Standards', status: 'Compliant', lastReview: '2024-03-10', nextReview: '2024-09-10', risk: 'Low' },
];

const mockSafetyRegulations = [
  { id: '1', regulation: 'Workplace Safety Standards', status: 'Compliant', lastInspection: '2024-02-15', nextInspection: '2024-08-15', risk: 'Low' },
  { id: '2', regulation: 'Personal Protective Equipment', status: 'Compliant', lastInspection: '2024-03-01', nextInspection: '2024-09-01', risk: 'Low' },
  { id: '3', regulation: 'Emergency Response Procedures', status: 'Action Required', lastInspection: '2024-02-28', nextInspection: '2024-08-28', risk: 'High' },
  { id: '4', regulation: 'Hazard Communication', status: 'Compliant', lastInspection: '2024-01-30', nextInspection: '2024-07-30', risk: 'Medium' },
];

const mockTaxCompliance = [
  { id: '1', requirement: 'PAYE Tax Deductions', status: 'Compliant', lastFiling: '2024-03-31', nextFiling: '2024-04-30', risk: 'Low' },
  { id: '2', requirement: 'SSNIT Contributions', status: 'Compliant', lastFiling: '2024-03-31', nextFiling: '2024-04-30', risk: 'Low' },
  { id: '3', requirement: 'VAT Registration', status: 'Review Required', lastFiling: '2024-02-28', nextFiling: '2024-05-31', risk: 'Medium' },
  { id: '4', requirement: 'Corporate Tax Filing', status: 'Compliant', lastFiling: '2024-03-31', nextFiling: '2024-09-30', risk: 'Low' },
];

const mockAuditTrail = [
  { id: '1', action: 'Employee Contract Updated', user: 'HR Manager', timestamp: '2024-05-15 14:30', details: 'Updated contract terms for John Doe' },
  { id: '2', action: 'Safety Inspection Completed', user: 'Safety Officer', timestamp: '2024-05-14 10:15', details: 'Monthly safety inspection at Site A' },
  { id: '3', action: 'Tax Filing Submitted', user: 'Accountant', timestamp: '2024-05-13 16:45', details: 'PAYE tax filing for March 2024' },
  { id: '4', action: 'Compliance Review', user: 'HR Manager', timestamp: '2024-05-12 09:20', details: 'Quarterly compliance review completed' },
];

export default function HRManagerComplianceTab() {
  const [activeTab, setActiveTab] = useState('labor-laws');

  return (
    <div className="space-y-6">
      {/* Beautiful Heading Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 rounded-lg p-3">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">HR Compliance Management</h1>
            <p className="text-blue-100">Ensure adherence to labor laws, safety regulations, and tax requirements</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-blue-100">Active Regulations</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm text-blue-100">Compliance Rate</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-blue-100">Pending Reviews</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-blue-100">High Risk Items</div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="labor-laws">
            <FileText className="w-4 h-4 mr-2" />
            Labor Laws
          </TabsTrigger>
          <TabsTrigger value="safety-regulations">
            <Shield className="w-4 h-4 mr-2" />
            Safety Regulations
          </TabsTrigger>
          <TabsTrigger value="tax-compliance">
            <CheckCircle className="w-4 h-4 mr-2" />
            Tax Compliance
          </TabsTrigger>
          <TabsTrigger value="audit-trail">
            <Eye className="w-4 h-4 mr-2" />
            Audit Trail
          </TabsTrigger>
        </TabsList>

        <TabsContent value="labor-laws">
          <LaborLawsView laborLaws={mockLaborLaws} />
        </TabsContent>
        <TabsContent value="safety-regulations">
          <SafetyRegulationsView safetyRegulations={mockSafetyRegulations} />
        </TabsContent>
        <TabsContent value="tax-compliance">
          <TaxComplianceView taxCompliance={mockTaxCompliance} />
        </TabsContent>
        <TabsContent value="audit-trail">
          <AuditTrailView auditTrail={mockAuditTrail} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 