'use client';

import { useState, useEffect } from 'react';
import AuthScreen from '@/components/auth/AuthScreen';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved authentication state
    const savedAuth = localStorage.getItem('auth');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setUser(authData.user);
      setIsAuthenticated(true);
    }
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('auth', JSON.stringify({ user: userData }));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading Ghana Real Estate...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout 
      user={user!}
      onLogout={handleLogout}
      isDarkMode={isDarkMode}
      onThemeToggle={toggleTheme}
    />
  );
}