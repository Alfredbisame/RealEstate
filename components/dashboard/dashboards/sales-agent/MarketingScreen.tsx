'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import MarketingHeader from './MarketingHeader';
import MarketingStats from './MarketingStats';
import MarketingContent from './MarketingContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface MarketingScreenProps {
  user: User;
}

export default function MarketingScreen({ user }: MarketingScreenProps) {
  const [activeTab, setActiveTab] = useState('campaign-overview');

  return (
    <div className="space-y-6">
      <MarketingHeader user={user} />
      <MarketingStats user={user} />
      <MarketingContent 
        user={user} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
} 