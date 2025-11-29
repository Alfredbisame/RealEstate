'use client';

import { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, Home } from 'lucide-react';

export default function ROICalculatorView() {
    const [purchasePrice, setPurchasePrice] = useState('500000');
    const [downPayment, setDownPayment] = useState('100000');
    const [monthlyRent, setMonthlyRent] = useState('3500');
    const [monthlyExpenses, setMonthlyExpenses] = useState('800');
    const [appreciation, setAppreciation] = useState('5');

    // Calculate ROI metrics
    const calculateMetrics = () => {
        const price = parseFloat(purchasePrice) || 0;
        const down = parseFloat(downPayment) || 0;
        const rent = parseFloat(monthlyRent) || 0;
        const expenses = parseFloat(monthlyExpenses) || 0;
        const appreciationRate = parseFloat(appreciation) || 0;

        const annualRent = rent * 12;
        const annualExpenses = expenses * 12;
        const annualCashFlow = annualRent - annualExpenses;
        const cashOnCash = down > 0 ? ((annualCashFlow / down) * 100).toFixed(2) : '0.00';
        const capRate = price > 0 ? ((annualCashFlow / price) * 100).toFixed(2) : '0.00';
        const totalReturn = (parseFloat(cashOnCash) + appreciationRate).toFixed(2);
        const monthlyProfit = (annualCashFlow / 12).toFixed(2);

        return {
            annualCashFlow: annualCashFlow.toFixed(2),
            monthlyProfit,
            cashOnCash,
            capRate,
            totalReturn
        };
    };

    const metrics = calculateMetrics();

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">ROI Calculator</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Calculate your property investment returns</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                        <Home size={18} />
                        <span>Property Details</span>
                    </h4>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Purchase Price (GHS)
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="number"
                                value={purchasePrice}
                                onChange={(e) => setPurchasePrice(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="500000"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Down Payment (GHS)
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="100000"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Monthly Rent (GHS)
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="number"
                                value={monthlyRent}
                                onChange={(e) => setMonthlyRent(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="3500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Monthly Expenses (GHS)
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="number"
                                value={monthlyExpenses}
                                onChange={(e) => setMonthlyExpenses(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="800"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Annual Appreciation (%)
                        </label>
                        <div className="relative">
                            <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="number"
                                value={appreciation}
                                onChange={(e) => setAppreciation(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white"
                                placeholder="5"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                        <TrendingUp size={18} />
                        <span>ROI Metrics</span>
                    </h4>

                    {/* Cash Flow */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200 dark:border-green-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">Annual Cash Flow</span>
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-green-900 dark:text-green-100">GHS {metrics.annualCashFlow}</p>
                        <p className="text-sm text-green-600 dark:text-green-400">GHS {metrics.monthlyProfit}/month</p>
                    </div>

                    {/* Cash on Cash Return */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Cash-on-Cash Return</span>
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Percent className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{metrics.cashOnCash}%</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Annual return on investment</p>
                    </div>

                    {/* Cap Rate */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Capitalization Rate</span>
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{metrics.capRate}%</p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Property performance metric</p>
                    </div>

                    {/* Total Return */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Total Return (with appreciation)</span>
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                <Calculator className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">{metrics.totalReturn}%</p>
                        <p className="text-sm text-orange-600 dark:text-orange-400">Cash flow + appreciation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
