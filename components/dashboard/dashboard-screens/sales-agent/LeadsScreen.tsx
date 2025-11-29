'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import LeadsHeader from './LeadsHeader';
import LeadsStats from './LeadsStats';
import LeadsContent from './LeadsContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface LeadsScreenProps {
  user: User;
}

export default function LeadsScreen({ user }: LeadsScreenProps) {
  const [activeTab, setActiveTab] = useState('all-leads');

  return (
    <div className="space-y-6">
      <LeadsHeader user={user} />
      <LeadsStats user={user} />
      <LeadsContent 
        user={user} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
} 