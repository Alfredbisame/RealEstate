'use client';

import { UserRole } from '@/types/roles';
import CommissionsScreen from '../dashboards/sales-agent/CommissionsScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface CommissionsTabProps {
  user: User;
}

export default function CommissionsTab({ user }: CommissionsTabProps) {
  return <CommissionsScreen user={user} />;
} 