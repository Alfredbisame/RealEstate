'use client';

import { UserRole } from '@/types/roles';
import SalesPipelineScreen from '../dashboard-screens/sales-agent/SalesPipelineScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SalesPipelineTabProps {
  user: User;
}

export default function SalesPipelineTab({ user }: SalesPipelineTabProps) {
  return <SalesPipelineScreen user={user} />;
} 