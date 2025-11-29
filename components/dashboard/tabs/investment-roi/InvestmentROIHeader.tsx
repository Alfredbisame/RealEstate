'use client';

import { TrendingUp, Calculator, Award } from 'lucide-react';

export default function InvestmentROIHeader() {
    return (
        <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Investment ROI Analysis</h1>
                        <p className="opacity-90 text-lg">Track and optimize your investment returns</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <Calculator className="w-4 h-4" />
                        <span className="text-sm font-medium">ROI Calculator</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">Performance Metrics</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
