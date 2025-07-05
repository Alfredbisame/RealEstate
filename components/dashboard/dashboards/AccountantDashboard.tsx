'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import ChartWidget from '../widgets/ChartWidget';
import InvoiceGenerator from '../widgets/InvoiceGenerator';
import PaymentTracker from '../widgets/PaymentTracker';
import CameraIntegration from '../../mobile/CameraIntegration';
import { 
  Calculator, FileText, CreditCard, PieChart, 
  TrendingUp, DollarSign, AlertCircle, CheckCircle,
  Camera
} from 'lucide-react';

export default function AccountantDashboard() {
  const [activeView, setActiveView] = useState('dashboard');
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'revenue-chart', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'invoice-generator', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'payment-tracker', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Monthly Revenue',
      value: 'GHS 180,400',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Outstanding Invoices',
      value: 'GHS 45,200',
      change: '-8.5%',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'orange'
    },
    {
      title: 'Profit Margin',
      value: '24.8%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Tax Liability',
      value: 'GHS 18,200',
      change: '+5.3%',
      changeType: 'neutral' as const,
      icon: Calculator,
      color: 'purple'
    }
  ];

  const revenueChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (GHS)',
        data: [145000, 152000, 168000, 175000, 182000, 180400],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4
      },
      {
        label: 'Expenses (GHS)',
        data: [108000, 114000, 122000, 128000, 132000, 135600],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      }
    ]
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

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'stats':
        return (
          <div className="grid grid-cols-2 gap-4 h-full">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        );
      case 'revenue-chart':
        return (
          <ChartWidget 
            title="Revenue vs Expenses"
            data={revenueChartData}
            type="line"
          />
        );
      case 'invoice-generator':
        return <InvoiceGenerator data={invoiceData} />;
      case 'payment-tracker':
        return <PaymentTracker payments={paymentData} />;
      default:
        return <div>Widget not found</div>;
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Accountant Dashboard</h1>
              <p className="opacity-90">Financial management and tax compliance</p>
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span className="text-sm">VAT Rate: 15%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span className="text-sm">GRA Compliant</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">New Invoice</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Create billing</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Tax Calculator</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GRA compliance</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Payment Gateway</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Process payments</p>
                </div>
              </button>

              <button
                onClick={() => setActiveView('receipts')}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Receipt Scanner</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Scan & digitize</p>
                </div>
              </button>
            </div>

            {/* Dashboard Grid */}
            <DashboardGrid
              widgets={widgets}
              onWidgetsChange={setWidgets}
              renderWidget={renderWidget}
            />
          </div>
        );
      case 'receipts':
        return <CameraIntegration user={{ role: 'accountant' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      {activeView !== 'dashboard' && (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-2 px-6 py-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              <Calculator size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveView('receipts')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeView === 'receipts'
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50 dark:bg-purple-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Camera size={20} />
              <span>Receipt Scanner</span>
            </button>
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
}