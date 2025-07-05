'use client';

import { ComplianceTrackerProps, ComplianceCategory } from './types';
import { calculateComplianceScore } from './utils';
import ComplianceHeader from './ComplianceHeader';
import ComplianceScore from './ComplianceScore';
import ComplianceList from './ComplianceList';
import { mockComplianceData } from './mockData';

export default function ComplianceTrackerContent({
  data = mockComplianceData,
  className = ""
}: ComplianceTrackerProps) {
  const score = calculateComplianceScore(data);

  return (
    <div className={`h-full ${className}`}>
      <ComplianceHeader />
      
      <ComplianceScore score={score} />
      
      <ComplianceList categories={data} />
    </div>
  );
} 