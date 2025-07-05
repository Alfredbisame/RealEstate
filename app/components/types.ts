import { UserRole } from '@/types/roles';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthData {
  user: User;
}

export interface ThemeState {
  isDarkMode: boolean;
  theme: 'light' | 'dark';
} 