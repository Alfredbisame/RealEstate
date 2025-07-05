'use client';

import NavigationTabs from './NavigationTabs';
import ViewContent from './ViewContent';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  salary: string;
  status: string;
  joinDate: string;
  avatar: string;
}

interface EmployeesContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  employees: Employee[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onViewProfile?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
  onFilterClick?: () => void;
}

export default function EmployeesContent({
  activeView,
  onViewChange,
  employees,
  searchTerm,
  onSearchChange,
  onViewProfile,
  onEdit,
  onFilterClick
}: EmployeesContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      <NavigationTabs 
        activeView={activeView} 
        onViewChange={onViewChange} 
      />
      <ViewContent
        activeView={activeView}
        employees={employees}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onViewProfile={onViewProfile}
        onEdit={onEdit}
        onFilterClick={onFilterClick}
      />
    </div>
  );
} 