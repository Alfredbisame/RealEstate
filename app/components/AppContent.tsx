'use client';

import { User } from './types';
import AuthScreen from '@/components/auth/AuthScreen';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface AppContentProps {
  isAuthenticated: boolean;
  user: User | null;
  isDarkMode: boolean;
  onLogin: (userData: User) => void;
  onLogout: () => void;
  onThemeToggle: () => void;
  className?: string;
}

export default function AppContent({
  isAuthenticated,
  user,
  isDarkMode,
  onLogin,
  onLogout,
  onThemeToggle,
  className = ""
}: AppContentProps) {
  if (!isAuthenticated) {
    return <AuthScreen onLogin={onLogin} />;
  }

  return (
    <DashboardLayout 
      user={user!}
      onLogout={onLogout}
      isDarkMode={isDarkMode}
      onThemeToggle={onThemeToggle}
    />
  );
} 