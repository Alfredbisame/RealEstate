'use client';

import { useState } from 'react';
import EmployeesHeader from './employees/EmployeesHeader';
import EmployeeStats from './employees/EmployeeStats';
import EmployeesContent from './employees/EmployeesContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface EmployeesTabProps {
  user: User;
}

export default function EmployeesTab({ user }: EmployeesTabProps) {
  const [activeView, setActiveView] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    {
      id: '1',
      name: 'Kwame Asante',
      position: 'Site Supervisor',
      department: 'Construction',
      email: 'kwame.asante@company.com',
      phone: '+233 24 123 4567',
      salary: 'GHS 3,500',
      status: 'Active',
      joinDate: '2023-01-15',
      avatar: 'https://ui-avatars.com/api/?name=Kwame+Asante&background=10b981&color=fff'
    },
    {
      id: '2',
      name: 'Ama Osei',
      position: 'Accountant',
      department: 'Finance',
      email: 'ama.osei@company.com',
      phone: '+233 20 987 6543',
      salary: 'GHS 4,200',
      status: 'Active',
      joinDate: '2022-08-20',
      avatar: 'https://ui-avatars.com/api/?name=Ama+Osei&background=3b82f6&color=fff'
    },
    {
      id: '3',
      name: 'Kojo Mensah',
      position: 'Sales Agent',
      department: 'Sales',
      email: 'kojo.mensah@company.com',
      phone: '+233 26 555 7890',
      salary: 'GHS 2,800',
      status: 'Active',
      joinDate: '2023-03-10',
      avatar: 'https://ui-avatars.com/api/?name=Kojo+Mensah&background=f59e0b&color=fff'
    }
  ];

  const handleAddEmployee = () => {
    // TODO: Implement add employee functionality
    console.log('Add employee clicked');
  };

  const handleViewProfile = (employee: any) => {
    // TODO: Implement view profile functionality
    console.log('View profile for:', employee.name);
  };

  const handleEdit = (employee: any) => {
    // TODO: Implement edit functionality
    console.log('Edit employee:', employee.name);
  };

  const handleFilterClick = () => {
    // TODO: Implement filter functionality
    console.log('Filter clicked');
  };

  return (
    <div className="space-y-6">
      <EmployeesHeader onAddEmployee={handleAddEmployee} />
      <EmployeeStats />
      <EmployeesContent
        activeView={activeView}
        onViewChange={setActiveView}
        employees={employees}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onViewProfile={handleViewProfile}
        onEdit={handleEdit}
        onFilterClick={handleFilterClick}
      />
    </div>
  );
}