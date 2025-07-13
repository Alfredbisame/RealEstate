'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import SalesPipelineHeader from './SalesPipelineHeader';
import SalesPipelineStats from './SalesPipelineStats';
import SalesPipelineContent from './SalesPipelineContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SalesPipelineScreenProps {
  user: User;
}

export default function SalesPipelineScreen({ user }: SalesPipelineScreenProps) {
  const [activeTab, setActiveTab] = useState('pipeline-overview');

  return (
    <div className="space-y-6">
      <SalesPipelineHeader user={user} />
      <SalesPipelineStats user={user} />
      <SalesPipelineContent 
        user={user} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
} 