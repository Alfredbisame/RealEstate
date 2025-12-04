import { Settings } from 'lucide-react';
import { useTheme } from '@/app/components/useTheme';

interface HeaderSettingsProps {
  onSettingsClick: () => void;
}

export default function HeaderSettings({ onSettingsClick }: HeaderSettingsProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <button
      onClick={onSettingsClick}
      className={`p-2.5 rounded-xl ${isDarkMode ? 'bg-gray-700/80 hover:bg-gray-600' : 'bg-gray-100/80 hover:bg-gray-200'} transition-all backdrop-blur-sm`}
    >
      <Settings size={20} />
    </button>
  );
} 