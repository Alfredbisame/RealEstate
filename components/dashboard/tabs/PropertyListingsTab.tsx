'use client';

import PropertyListingScreen from '../dashboards/sales-agent/PropertyListingScreen';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface PropertyListingsTabProps {
  user: User;
}

export default function PropertyListingsTab({ user }: PropertyListingsTabProps) {
  return <PropertyListingScreen user={user} />;
} 