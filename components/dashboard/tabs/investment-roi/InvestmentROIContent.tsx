'use client';

import { Calculator, BarChart3, TrendingUp, DollarSign, Percent } from 'lucide-react';
// Import ROI Calculator View
import ROICalculatorView from './ROICalculatorView';
import ROIAnalyticsView from './ROIAnalyticsView';
import ROIComparisonView from './ROIComparisonView';
import CashOnCashView from './CashOnCashView';
import CapRateView from './CapRateView';

interface InvestmentROIContentProps {
    activeView: string;
    onViewChange: (view: string) => void;
}

export default function InvestmentROIContent({ activeView, onViewChange }: InvestmentROIContentProps) {
    const views = [
        { id: 'calculator', label: 'ROI Calculator', icon: Calculator },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'cash-on-cash', label: 'Cash on Cash', icon: DollarSign },
        { id: 'cap-rate', label: 'Cap Rate', icon: Percent },
        { id: 'comparison', label: 'Comparison', icon: TrendingUp }
    ];

    return (
        <div className="space-y-4">
            {/* View Tabs */}
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 border border-gray-200/50 dark:border-gray-700/50 overflow-x-auto">
                {views.map((view) => {
                    const Icon = view.icon;
                    return (
                        <button
                            key={view.id}
                            onClick={() => onViewChange(view.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${activeView === view.id
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            <Icon size={18} />
                            <span className="font-medium">{view.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* View Content */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                {activeView === 'calculator' && <ROICalculatorView />}
                {activeView === 'analytics' && <ROIAnalyticsView />}
                {activeView === 'cash-on-cash' && <CashOnCashView />}
                {activeView === 'cap-rate' && <CapRateView />}
                {activeView === 'comparison' && <ROIComparisonView />}
            </div>
        </div>
    );
}

