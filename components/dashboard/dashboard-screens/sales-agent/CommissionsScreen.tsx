'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import CommissionsHeader from './CommissionsHeader';
import CommissionsStats from './CommissionsStats';
import CommissionsContent from './CommissionsContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface CommissionsScreenProps {
  user: User;
}

export default function CommissionsScreen({ user }: CommissionsScreenProps) {
  const [activeTab, setActiveTab] = useState('commission-overview');

  return (
    <div className="space-y-6">
      <CommissionsHeader user={user} />
      <CommissionsStats user={user} />
      <CommissionsContent 
        user={user} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
} 