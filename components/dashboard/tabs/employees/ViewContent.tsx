'use client';

import EmployeeList from './EmployeeList';
import PerformanceMetrics from './PerformanceMetrics';
import EmployeeAttendance from '../../widgets/EmployeeAttendance';
import PayrollSummary from '../../widgets/PayrollSummary';

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

interface ViewContentProps {
  activeView: string;
  employees: Employee[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onViewProfile?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
  onFilterClick?: () => void;
}

export default function ViewContent({
  activeView,
  employees,
  searchTerm,
  onSearchChange,
  onViewProfile,
  onEdit,
  onFilterClick
}: ViewContentProps) {
  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <EmployeeList
            employees={employees}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onViewProfile={onViewProfile}
            onEdit={onEdit}
            onFilterClick={onFilterClick}
          />
        );

      case 'attendance':
        return <EmployeeAttendance />;

      case 'payroll':
        return <PayrollSummary />;

      case 'performance':
        return <PerformanceMetrics employees={employees} />;

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Select a view to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      <div className="animate-in slide-in-from-bottom-4 duration-500">
        {renderContent()}
      </div>
    </div>
  );
} 