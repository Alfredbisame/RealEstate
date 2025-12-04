'use client';

import { Percent, TrendingUp, Info } from 'lucide-react';
import ChartWidget from '../../widgets/ChartWidget';

export default function CapRateView() {
    // Cap Rate Trend Data
    const trendData = [
        { name: 'Jan', value: 6.2 }, { name: 'Feb', value: 6.3 },
        { name: 'Mar', value: 6.3 }, { name: 'Apr', value: 6.4 },
        { name: 'May', value: 6.5 }, { name: 'Jun', value: 6.6 }
    ];

    // Property Performance Data
    const propertyData = [
        { name: 'Tema Industrial', value: 8.5, value_ghs: 2500000 },
        { name: 'Kumasi Complex', value: 7.1, value_ghs: 850000 },
        { name: 'Airport Residential', value: 6.2, value_ghs: 1200000 },
        { name: 'East Legon Villa', value: 5.5, value_ghs: 950000 }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Percent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Capitalization Rate (Cap Rate)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Evaluate property profitability independent of financing</p>
                </div>
            </div>

            {/* Definition Card */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-xl p-4 flex items-start space-x-3">
                <Info className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">What is Cap Rate?</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        A metric used to evaluate the profitability and return potential of a real estate investment.
                        It represents the yield of a property over a one-year time horizon, assuming the property is purchased on cash and not on loan.
                    </p>
                    <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mt-2 bg-purple-100 dark:bg-purple-900/40 inline-block px-2 py-1 rounded">
                        Formula: (Net Operating Income / Current Market Value) × 100
                    </p>
                </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Cap Rate Trend (6 Months)</h4>
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
                    <Percent className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Property Ranking by Cap Rate</h4>
                </div>

                <div className="space-y-3">
                    {propertyData.map((property, index) => {
                        const maxValue = Math.max(...propertyData.map(p => p.value));
                        const percentage = (property.value / maxValue) * 100;

                        return (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-gray-900 dark:text-white">{property.name}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Value: GHS {(property.value_ghs / 1000000).toFixed(2)}M
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                        <div
                                            className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[3rem] text-right">
                                        {property.value}%
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Insights */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Valuation Insights</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        Tema Industrial has the highest Cap Rate (8.5%), indicating higher risk-adjusted return potential.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        East Legon Villa's lower Cap Rate (5.5%) suggests high property value relative to income (premium market).
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        Market average Cap Rate for residential properties is currently around 6.0%.
                    </li>
                </ul>
            </div>
        </div>
    );
}
