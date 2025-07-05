'use client';

import EmployeeCard from './EmployeeCard';
import SearchAndFilter from './SearchAndFilter';

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

interface EmployeeListProps {
  employees: Employee[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onViewProfile?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
  onFilterClick?: () => void;
}

export default function EmployeeList({ 
  employees, 
  searchTerm, 
  onSearchChange, 
  onViewProfile, 
  onEdit, 
  onFilterClick 
}: EmployeeListProps) {
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <SearchAndFilter 
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onFilterClick={onFilterClick}
      />

      {filteredEmployees.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No employees found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onViewProfile={onViewProfile}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}

      {filteredEmployees.length > 0 && (
        <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredEmployees.length} of {employees.length} employees
          </p>
        </div>
      )}
    </div>
  );
} 