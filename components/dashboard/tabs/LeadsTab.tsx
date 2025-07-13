'use client';

import { User } from '@/types/roles';
import LeadsScreen from '../dashboards/sales-agent/LeadsScreen';

interface LeadsTabProps {
  user: User;
}

export default function LeadsTab({ user }: LeadsTabProps) {
  return <LeadsScreen user={user} />;
} 