'use client';

import { useState, useEffect } from 'react';
import { User, AuthData } from './types';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved authentication state
    const savedAuth = localStorage.getItem('auth');
    
    if (savedAuth) {
      try {
        const authData: AuthData = JSON.parse(savedAuth);
        setUser(authData.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved auth data:', error);
        localStorage.removeItem('auth');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    const authData: AuthData = { user: userData };
    localStorage.setItem('auth', JSON.stringify(authData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    login,
    logout
  };
} 