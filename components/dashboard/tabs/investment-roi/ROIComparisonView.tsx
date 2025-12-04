'use client';

import { useState } from 'react';
import { ArrowUpDown, TrendingUp, Award } from 'lucide-react';

interface PropertyComparison {
    name: string;
    purchasePrice: number;
    monthlyRent: number;
    monthlyExpenses: number;
    roi: number;
    cashOnCash: number;
    capRate: number;
    appreciation: number;
    location: string;
    type: string;
}

export default function ROIComparisonView() {
    const [sortBy, setSortBy] = useState<'roi' | 'cashOnCash' | 'capRate'>('roi');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const properties: PropertyComparison[] = [
        {
            name: 'Tema Industrial Park',
            location: 'Tema, Greater Accra',
            type: 'Industrial',
            purchasePrice: 1200000,
            monthlyRent: 18500,
            monthlyExpenses: 3200,
            roi: 22.1,
            cashOnCash: 15.3,
            capRate: 15.3,
            appreciation: 6.8
        },
        {
            name: 'Kumasi Complex',
            location: 'Asokore Mampong, Kumasi',
            type: 'Commercial',
            purchasePrice: 320000,
            monthlyRent: 4800,
            monthlyExpenses: 900,
            roi: 18.7,
            cashOnCash: 14.6,
            capRate: 14.6,
            appreciation: 4.1
        },
        {
            name: 'Airport Residential',
            location: 'Airport Hills, Accra',
            type: 'Residential',
            purchasePrice: 680000,
            monthlyRent: 5200,
            monthlyExpenses: 1100,
            roi: 15.2,
            cashOnCash: 7.2,
            capRate: 7.2,
            appreciation: 8.0
        },
        {
            name: 'East Legon Villa',
            location: 'East Legon, Accra',
            type: 'Residential',
            purchasePrice: 450000,
            monthlyRent: 3500,
            monthlyExpenses: 800,
            roi: 12.5,
            cashOnCash: 7.2,
            capRate: 7.2,
            appreciation: 5.3
        }
    ];

    const sortedProperties = [...properties].sort((a, b) => {
        const multiplier = sortOrder === 'desc' ? -1 : 1;
        return (a[sortBy] - b[sortBy]) * multiplier;
    });

    const handleSort = (field: 'roi' | 'cashOnCash' | 'capRate') => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
        } else {
            setSortBy(field);
            setSortOrder('desc');
        }
    };

    const getPerformanceBadge = (roi: number) => {
        if (roi >= 20) return { label: 'Excellent', color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' };
        if (roi >= 15) return { label: 'Good', color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' };
        if (roi >= 10) return { label: 'Average', color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' };
        return { label: 'Below Average', color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' };
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Property ROI Comparison</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Compare performance across your portfolio</p>
                </div>
            </div>

            {/* Sort Options */}
            <div className="flex flex-wrap items-center gap-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</span>
                <button
                    onClick={() => handleSort('roi')}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${sortBy === 'roi'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                        }`}
                >
                    <span className="text-sm">Total ROI</span>
                    {sortBy === 'roi' && <ArrowUpDown size={14} />}
                </button>
                <button
                    onClick={() => handleSort('cashOnCash')}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${sortBy === 'cashOnCash'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                        }`}
                >
                    <span className="text-sm">Cash-on-Cash</span>
                    {sortBy === 'cashOnCash' && <ArrowUpDown size={14} />}
                </button>
                <button
                    onClick={() => handleSort('capRate')}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${sortBy === 'capRate'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                        }`}
                >
                    <span className="text-sm">Cap Rate</span>
                    {sortBy === 'capRate' && <ArrowUpDown size={14} />}
                </button>
            </div>

            {/* Properties Comparison Table */}
            <div className="space-y-3">
                {sortedProperties.map((property, index) => {
                    const badge = getPerformanceBadge(property.roi);
                    const annualCashFlow = (property.monthlyRent - property.monthlyExpenses) * 12;

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{property.name}</h4>
                                        {index === 0 && (
                                            <Award className="w-5 h-5 text-yellow-500" />
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{property.location}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                                    {badge.label}
                                </span>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Purchase Price</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        GHS {(property.purchasePrice / 1000).toFixed(0)}K
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Monthly Rent</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        GHS {property.monthlyRent.toLocaleString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Annual Cash Flow</p>
                                    <p className="font-semibold text-blue-600 dark:text-blue-400">
                                        GHS {annualCashFlow.toLocaleString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Property Type</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">{property.type}</p>
                                </div>
                            </div>

                            {/* ROI Metrics */}
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Total ROI</p>
                                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{property.roi}%</p>
                                </div>
                                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Cash-on-Cash</p>
                                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{property.cashOnCash}%</p>
                                </div>
                                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Cap Rate</p>
                                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{property.capRate}%</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Stats */}
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Portfolio Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average ROI</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {(properties.reduce((sum, p) => sum + p.roi, 0) / properties.length).toFixed(1)}%
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Best Performer</p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {Math.max(...properties.map(p => p.roi))}%
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Investment</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            GHS {(properties.reduce((sum, p) => sum + p.purchasePrice, 0) / 1000000).toFixed(1)}M
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Income</p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            GHS {properties.reduce((sum, p) => sum + p.monthlyRent, 0).toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}