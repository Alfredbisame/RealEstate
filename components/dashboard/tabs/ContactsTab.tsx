'use client';

import { UserRole } from '@/types/roles';
import ContactsScreen from '../dashboard-screens/sales-agent/ContactsScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface ContactsTabProps {
  user: User;
}

export default function ContactsTab({ user }: ContactsTabProps) {
  return <ContactsScreen user={user} />;
}