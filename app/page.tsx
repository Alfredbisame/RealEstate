'use client';

import { LoadingScreen, AppContent, useAuth, useTheme } from './components';

export default function Home() {
  const { isAuthenticated, user, isLoading, login, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppContent
      isAuthenticated={isAuthenticated}
      user={user}
      isDarkMode={isDarkMode}
      onLogin={login}
      onLogout={logout}
      onThemeToggle={toggleTheme}
    />
  );
}