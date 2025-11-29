'use client';

import { UserRole } from '@/types/roles';
import MarketingScreen from '../dashboard-screens/sales-agent/MarketingScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface MarketingTabProps {
  user: User;
}

export default function MarketingTab({ user }: MarketingTabProps) {
  return <MarketingScreen user={user} />;
} 