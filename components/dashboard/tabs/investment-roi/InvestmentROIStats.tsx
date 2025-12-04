'use client';

import { TrendingUp, DollarSign, Percent, Target } from 'lucide-react';

export default function InvestmentROIStats() {
    const stats = [
        {
            title: 'Average ROI',
            value: '22.5%',
            change: '+3.2%',
            icon: Percent,
            color: 'blue',
            description: 'Across all properties'
        },
        {
            title: 'Total Investment',
            value: 'GHS 2.8M',
            change: '+420K',
            icon: DollarSign,
            color: 'blue',
            description: 'Capital deployed'
        },
        {
            title: 'Annual Return',
            value: 'GHS 630K',
            change: '+15.8%',
            icon: TrendingUp,
            color: 'blue',
            description: 'Year-to-date'
        },
        {
            title: 'Cash-on-Cash',
            value: '18.2%',
            change: '+2.1%',
            icon: Target,
            color: 'blue',
            description: 'Actual cash return'
        }
    ];

    const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
        blue: {
            bg: 'bg-blue-100 dark:bg-blue-900',
            icon: 'text-blue-600 dark:text-blue-400',
            badge: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
                const colors = colorClasses[stat.color];
                const Icon = stat.icon;

                return (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                <Icon className={`w-6 h-6 ${colors.icon}`} />
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                                {stat.change}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {stat.value}
                        </h3>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {stat.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {stat.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}