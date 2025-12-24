'use client';

import { UserRole } from '@/types/roles';
import TimelineScreen from '../dashboard-screens/project-manager/TimelineScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface TimelineTabProps {
  user: User;
}

export default function TimelineTab({ user }: TimelineTabProps) {
  return (
    <div className="max-w-full">
      <TimelineScreen user={user} />
    </div>
  );
}