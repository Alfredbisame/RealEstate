'use client';

import { 
  Users, UserCheck, DollarSign, Calendar, TrendingUp, Building, Clock
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for charts
const employeeTrendData = [
  { month: 'Jan', employees: 42 },
  { month: 'Feb', employees: 44 },
  { month: 'Mar', employees: 45 },
  { month: 'Apr', employees: 46 },
  { month: 'May', employees: 48 },
  { month: 'Jun', employees: 48 },
];

const departmentData = [
  { department: 'Sales', count: 12 },
  { department: 'Construction', count: 18 },
  { department: 'Management', count: 8 },
  { department: 'Support', count: 10 },
];

const leaveTypeData = [
  { type: 'Annual Leave', count: 15 },
  { type: 'Sick Leave', count: 8 },
  { type: 'Maternity', count: 3 },
  { type: 'Other', count: 5 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Total Employees',
      value: '48',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'pink' as const
    },
    {
      title: 'Present Today',
      value: '42',
      change: '87.5%',
      changeType: 'positive' as const,
      icon: UserCheck,
      color: 'green' as const
    },
    {
      title: 'Monthly Payroll',
      value: 'GHS 85,400',
      change: '+5.2%',
      changeType: 'neutral' as const,
      icon: DollarSign,
      color: 'blue' as const
    },
    {
      title: 'Leave Requests',
      value: '6',
      change: '+2',
      changeType: 'neutral' as const,
      icon: Calendar,
      color: 'orange' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employee Growth Trend - Area Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Employee Growth Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={employeeTrendData}>
              <defs>
                <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-600" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280" 
                className="dark:stroke-gray-400"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280" 
                className="dark:stroke-gray-400"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#374151'
                }}
                labelStyle={{ color: '#374151' }}
              />
              <Area 
                type="monotone" 
                dataKey="employees" 
                stroke="#3B82F6" 
                strokeWidth={2}
                fill="url(#colorEmployees)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution - Bar Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Department Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-600" />
              <XAxis 
                dataKey="department" 
                stroke="#6b7280" 
                className="dark:stroke-gray-400"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280" 
                className="dark:stroke-gray-400"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#374151'
                }}
                labelStyle={{ color: '#374151' }}
              />
              <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Leave Types - Pie Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Leave Types</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={leaveTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
                outerRadius={60}
                fill="#8884d8"
                dataKey="count"
              >
                {leaveTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: '#374151'
                }}
                labelStyle={{ color: '#374151' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 