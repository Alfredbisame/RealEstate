'use client';

import { BarChart3, TrendingUp, PieChart } from 'lucide-react';
import ChartWidget from '../../widgets/ChartWidget';

export default function ROIAnalyticsView() {
    // Portfolio ROI over time
    const roiTrendData = [
        { name: 'Jan', roi: 15.2 },
        { name: 'Feb', roi: 16.8 },
        { name: 'Mar', roi: 18.1 },
        { name: 'Apr', roi: 19.5 },
        { name: 'May', roi: 21.3 },
        { name: 'Jun', roi: 22.5 }
    ];

    // Property performance comparison
    const propertyROIData = [
        { name: 'East Legon Villa', roi: 12.5, investment: 450000 },
        { name: 'Airport Residential', roi: 15.2, investment: 680000 },
        { name: 'Kumasi Complex', roi: 18.7, investment: 320000 },
        { name: 'Tema Industrial', roi: 22.1, investment: 1200000 }
    ];

    // Investment allocation
    const allocationData = [
        { name: 'Residential', value: 1130000 },
        { name: 'Commercial', value: 850000 },
        { name: 'Industrial', value: 1200000 }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">ROI Analytics</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Visualize your investment performance</p>
                </div>
            </div>

            {/* ROI Trend Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Portfolio ROI Trend</h4>
                </div>
                <ChartWidget
                    title=""
                    data={roiTrendData}
                    type="area"
                />
            </div>

            {/* Property Performance Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Property Performance</h4>
                </div>

                <div className="space-y-3">
                    {propertyROIData.map((property, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-gray-900 dark:text-white">{property.name}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Investment: GHS {(property.investment / 1000).toFixed(0)}K
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min((property.roi / 25) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                <span className={`font-bold ${property.roi >= 20 ? 'text-green-600 dark:text-green-400' :
                                    property.roi >= 15 ? 'text-blue-600 dark:text-blue-400' :
                                        'text-orange-600 dark:text-orange-400'
                                    }`}>
                                    {property.roi}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Investment Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 mb-4">
                        <PieChart className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Investment Allocation</h4>
                    </div>

                    <div className="space-y-3">
                        {allocationData.map((item, index) => {
                            const total = allocationData.reduce((sum, d) => sum + d.value, 0);
                            const percentage = ((item.value / total) * 100).toFixed(1);
                            const colors = ['from-green-500 to-green-600', 'from-blue-500 to-blue-600', 'from-purple-500 to-purple-600'];

                            return (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{percentage}%</span>
                                    </div>
                                    <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                        <div
                                            className={`bg-gradient-to-r ${colors[index]} h-2 rounded-full transition-all duration-500`}
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        GHS {(item.value / 1000).toFixed(0)}K
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Key Insights */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-green-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Key Insights</h4>

                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Top Performer</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Tema Industrial with 22.1% ROI</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Fastest Growth</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio ROI up 7.3% in 6 months</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Diversification</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Well-balanced across 3 property types</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Opportunity</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Consider increasing industrial allocation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
