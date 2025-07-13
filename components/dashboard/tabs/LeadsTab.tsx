'use client';

import LeadsScreen from '../dashboards/sales-agent/LeadsScreen';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface LeadsTabProps {
  user: User;
}

export default function LeadsTab({ user }: LeadsTabProps) {
  return <LeadsScreen user={user} />;
} 