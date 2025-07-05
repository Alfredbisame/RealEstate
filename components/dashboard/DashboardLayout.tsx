'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
import SettingsPanel from './SettingsPanel';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function DashboardLayout({ 
  user, 
  onLogout, 
  isDarkMode, 
  onThemeToggle 
}: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          user={user}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <Header 
            user={user}
            onLogout={onLogout}
            isDarkMode={isDarkMode}
            onThemeToggle={onThemeToggle}
            onSettingsClick={() => setSettingsOpen(true)}
          />
          
          <main className="flex-1 overflow-auto">
            <DashboardContent 
              user={user} 
              activeTab={activeTab}
            />
          </main>
        </div>
      </div>

      <SettingsPanel 
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        user={user}
      />
    </div>
  );
}