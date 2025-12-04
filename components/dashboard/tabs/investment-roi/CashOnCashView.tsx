'use client';

import { DollarSign, TrendingUp, Info } from 'lucide-react';
import ChartWidget from '../../widgets/ChartWidget';

export default function CashOnCashView() {
    // Cash on Cash Trend Data
    const trendData = [
        { name: 'Jan', value: 8.5 }, { name: 'Feb', value: 9.2 },
        { name: 'Mar', value: 9.8 }, { name: 'Apr', value: 10.5 },
        { name: 'May', value: 11.2 }, { name: 'Jun', value: 12.1 }
    ];

    // Property Performance Data
    const propertyData = [
        { name: 'Tema Industrial', value: 14.5, investment: 1200000 },
        { name: 'Kumasi Complex', value: 11.2, investment: 320000 },
        { name: 'Airport Residential', value: 9.5, investment: 680000 },
        { name: 'East Legon Villa', value: 7.8, investment: 450000 }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cash on Cash Return</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Analyze your actual cash return on invested capital</p>
                </div>
            </div>

            {/* Definition Card */}
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 border border-blue-100 dark:border-blue-800 flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">What is Cash on Cash Return?</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        A rate of return ratio that calculates the total cash earned on the total cash invested in a property.
                        It measures the annual return the investor made on the property in relation to the amount of mortgage paid during the same year.
                    </p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-2 bg-blue-100 dark:bg-blue-900 inline-block px-2 py-1 rounded">
                        Formula: (Annual Pre-Tax Cash Flow / Total Cash Invested) × 100
                    </p>
                </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Cash on Cash Trend (6 Months)</h4>
                </div>
                <ChartWidget
                    title=""
                    data={trendData}
                    type="area"
                />
            </div>

            {/* Property Ranking */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Property Ranking by Cash on Cash</h4>
                </div>

                <div className="space-y-3">
                    {propertyData.map((property, index) => {
                        const maxValue = Math.max(...propertyData.map(p => p.value));
                        const percentage = (property.value / maxValue) * 100;

                        return (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-gray-900 dark:text-white">{property.name}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Invested: GHS {(property.investment / 1000).toFixed(0)}K
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[3rem] text-right">
                                        {property.value}%
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Insights */}
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Cash Flow Insights</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        Your industrial property is generating the highest cash yield at 14.5%.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        Portfolio average Cash on Cash return has increased by 3.6% over the last 6 months.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-blue-500">•</span>
                        Consider refinancing East Legon Villa to improve its cash efficiency.
                    </li>
                </ul>
            </div>
        </div>
    );
}