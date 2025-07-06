'use client';

import { useState, useEffect } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSidebarToggle = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const handleMobileMenuClose = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'settings') {
      setSettingsOpen(true);
      if (isMobile) {
        setSidebarOpen(false);
      }
    } else {
      setActiveTab(tab);
      if (isMobile) {
        setSidebarOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex h-screen overflow-hidden">
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={handleMobileMenuClose}
          />
        )}
        
        {/* Sidebar */}
        {isMobile ? (
          <div className={`
            fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out w-64
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <Sidebar 
              user={user}
              collapsed={false}
              onToggle={handleSidebarToggle}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        ) : (
          <Sidebar 
            user={user}
            collapsed={sidebarCollapsed}
            onToggle={handleSidebarToggle}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}
        
        {/* Main Content */}
        <div className={`
          flex-1 flex flex-col transition-all duration-300
          ${!isMobile ? (sidebarCollapsed ? 'ml-16' : 'ml-64') : ''}
        `}>
          <Header 
            user={user}
            onLogout={onLogout}
            isDarkMode={isDarkMode}
            onThemeToggle={onThemeToggle}
            onSettingsClick={() => setSettingsOpen(true)}
            onMenuClick={handleSidebarToggle}
            isMobile={isMobile}
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