'use client';

import { UserRole } from '@/types/roles';
import PropertyListingHeader from './PropertyListingHeader';
import PropertyListingStats from './PropertyListingStats';
import PropertyListingContent from './PropertyListingContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface PropertyListingScreenProps {
  user: User;
}

export default function PropertyListingScreen({ user }: PropertyListingScreenProps) {
  return (
    <div className="space-y-6">
      <PropertyListingHeader user={user} />
      <PropertyListingStats user={user} />
      <PropertyListingContent user={user} />
    </div>
  );
} 