'use client';

import { useState } from 'react';
import { 
  Users, UserPlus, Search, Filter, 
  Calendar, DollarSign, Award, Clock 
} from 'lucide-react';
import EmployeeAttendance from '../widgets/EmployeeAttendance';
import PayrollSummary from '../widgets/PayrollSummary';

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

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Employee Management</h1>
            <p className="opacity-90">Manage staff, attendance, and payroll</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
            <UserPlus className="w-5 h-5" />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      {/* Employee Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">48</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Employees</p>
              <p className="text-xs text-pink-600">+3 this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Present Today</p>
              <p className="text-xs text-green-600">87.5% attendance</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">GHS 85.4K</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Payroll</p>
              <p className="text-xs text-blue-600">+5.2% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">84%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Performance</p>
              <p className="text-xs text-orange-600">+2% improvement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
          {[
            { id: 'overview', label: 'Overview', icon: Users },
            { id: 'attendance', label: 'Attendance', icon: Clock },
            { id: 'payroll', label: 'Payroll', icon: DollarSign },
            { id: 'performance', label: 'Performance', icon: Award }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeView === tab.id
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeView === 'overview' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Filter size={20} />
                  <span>Filter</span>
                </button>
              </div>

              {/* Employee List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmployees.map((employee) => (
                  <div key={employee.id} className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200/50 dark:border-gray-600/50">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={employee.avatar} 
                        alt={employee.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{employee.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{employee.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Department:</span>
                        <span className="text-gray-900 dark:text-white">{employee.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Salary:</span>
                        <span className="text-gray-900 dark:text-white">{employee.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Status:</span>
                        <span className="text-green-600">{employee.status}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm">
                        View Profile
                      </button>
                      <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'attendance' && (
            <EmployeeAttendance />
          )}

          {activeView === 'payroll' && (
            <PayrollSummary />
          )}

          {activeView === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
                  <div className="space-y-3">
                    {employees.slice(0, 3).map((employee, index) => (
                      <div key={employee.id} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <img src={employee.avatar} alt={employee.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{employee.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{employee.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Overall Score</span>
                        <span className="font-medium text-gray-900 dark:text-white">84%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Productivity</span>
                        <span className="font-medium text-gray-900 dark:text-white">91%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Quality</span>
                        <span className="font-medium text-gray-900 dark:text-white">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Reviews</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm font-medium text-green-800 dark:text-green-400">Excellent Work</p>
                      <p className="text-xs text-green-600 dark:text-green-500">Kwame Asante - Q1 2024</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-400">Meets Expectations</p>
                      <p className="text-xs text-blue-600 dark:text-blue-500">Ama Osei - Q1 2024</p>
                    </div>
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <p className="text-sm font-medium text-orange-800 dark:text-orange-400">Needs Improvement</p>
                      <p className="text-xs text-orange-600 dark:text-orange-500">Kojo Mensah - Q1 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}