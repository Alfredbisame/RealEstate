'use client';

import PropertyListingScreen from '../dashboards/sales-agent/PropertyListingScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface PropertyListingsTabProps {
  user: User;
}

export default function PropertyListingsTab({ user }: PropertyListingsTabProps) {
  return <PropertyListingScreen user={user} />;
} 