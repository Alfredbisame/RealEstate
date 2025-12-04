import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/components/useTheme';

interface HeaderThemeToggleProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function HeaderThemeToggle({ isDarkMode, onThemeToggle }: HeaderThemeToggleProps) {
  const { isDarkMode: isCurrentlyDarkMode } = useTheme();
  
  return (
    <button
      onClick={onThemeToggle}
      className={`p-2.5 rounded-xl ${isCurrentlyDarkMode ? 'bg-gray-700/80 hover:bg-gray-600' : 'bg-gray-100/80 hover:bg-gray-200'} transition-all backdrop-blur-sm`}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
} 