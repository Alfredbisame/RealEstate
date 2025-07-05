'use client';

import { useState } from 'react';
import { 
  DollarSign, TrendingUp, CreditCard, FileText, 
  Download, Plus, Calendar, Filter 
} from 'lucide-react';
import ChartWidget from '../widgets/ChartWidget';
import InvoiceGenerator from '../widgets/InvoiceGenerator';
import PaymentTracker from '../widgets/PaymentTracker';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface FinancialsTabProps {
  user: User;
}

export default function FinancialsTab({ user }: FinancialsTabProps) {
  const [activeView, setActiveView] = useState('overview');

  const financialData = {
    revenue: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue (GHS)',
        data: [145000, 152000, 168000, 175000, 182000, 195000],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4
      }, {
        label: 'Expenses (GHS)',
        data: [108000, 114000, 122000, 128000, 132000, 135000],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      }]
    }
  };

  const invoiceData = {
    clientName: '',
    projectName: '',
    materials: [
      { item: 'Cement (50kg bags)', quantity: 100, unitPrice: 45, total: 4500 },
      { item: 'Steel Bars (12mm)', quantity: 5, unitPrice: 180, total: 900 },
      { item: 'Blocks (6inch)', quantity: 500, unitPrice: 2.5, total: 1250 }
    ],
    labor: 15000,
    permits: 2500,
    subtotal: 24150,
    vat: 3622.5,
    total: 27772.5
  };

  const paymentData = [
    {
      id: 'INV-001',
      client: 'East Legon Development',
      amount: 'GHS 45,200',
      dueDate: '2024-02-15',
      status: 'Overdue',
      type: 'Construction'
    },
    {
      id: 'INV-002',
      client: 'Kumasi Properties Ltd',
      amount: 'GHS 28,500',
      dueDate: '2024-02-20',
      status: 'Pending',
      type: 'Consultation'
    },
    {
      id: 'INV-003',
      client: 'Tema Industrial Park',
      amount: 'GHS 67,800',
      dueDate: '2024-02-25',
      status: 'Paid',
      type: 'Full Construction'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Financial Management</h1>
            <p className="opacity-90">Track revenue, expenses, and manage invoicing</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              <Plus className="w-5 h-5" />
              <span>New Invoice</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">GHS 195K</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Revenue</p>
              <p className="text-xs text-green-600">+15.2% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">GHS 135K</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Expenses</p>
              <p className="text-xs text-blue-600">-3.1% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">GHS 73.7K</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Outstanding</p>
              <p className="text-xs text-orange-600">12 pending invoices</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">30.8%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Profit Margin</p>
              <p className="text-xs text-purple-600">+2.3% improvement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
          {[
            { id: 'overview', label: 'Overview', icon: DollarSign },
            { id: 'invoices', label: 'Invoices', icon: FileText },
            { id: 'payments', label: 'Payments', icon: CreditCard },
            { id: 'reports', label: 'Reports', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeView === tab.id
                  ? 'text-green-600 border-b-2 border-green-600'
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6">
                  <ChartWidget 
                    title="Revenue vs Expenses"
                    data={financialData.revenue}
                    type="line"
                  />
                </div>
                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Cash Flow Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-green-700 dark:text-green-400">Total Inflow</span>
                      <span className="font-semibold text-green-600">GHS 195,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <span className="text-red-700 dark:text-red-400">Total Outflow</span>
                      <span className="font-semibold text-red-600">GHS 135,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-blue-700 dark:text-blue-400">Net Cash Flow</span>
                      <span className="font-semibold text-blue-600">GHS 60,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'invoices' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InvoiceGenerator data={invoiceData} />
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800 dark:text-white">Recent Invoices</h3>
                <div className="space-y-3">
                  {paymentData.map((payment) => (
                    <div key={payment.id} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{payment.client}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{payment.id}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                          payment.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">{payment.amount}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Due: {payment.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeView === 'payments' && (
            <PaymentTracker payments={paymentData} />
          )}

          {activeView === 'reports' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="p-6 bg-white/50 dark:bg-gray-700/50 rounded-xl text-left hover:shadow-lg transition-all">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Profit & Loss</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive P&L statement</p>
                </button>
                <button className="p-6 bg-white/50 dark:bg-gray-700/50 rounded-xl text-left hover:shadow-lg transition-all">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cash Flow</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Monthly cash flow analysis</p>
                </button>
                <button className="p-6 bg-white/50 dark:bg-gray-700/50 rounded-xl text-left hover:shadow-lg transition-all">
                  <CreditCard className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tax Summary</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GRA compliance report</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}