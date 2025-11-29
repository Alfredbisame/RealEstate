'use client';

import { useState } from 'react';
import InvestmentROIHeader from './InvestmentROIHeader';
import InvestmentROIStats from './InvestmentROIStats';
import InvestmentROIContent from './InvestmentROIContent';

interface InvestmentROITabProps {
    user: any;
}

export default function InvestmentROITab({ user }: InvestmentROITabProps) {
    const [activeView, setActiveView] = useState('calculator');

    return (
        <div className="space-y-6">
            <InvestmentROIHeader />
            <InvestmentROIStats />
            <InvestmentROIContent activeView={activeView} onViewChange={setActiveView} />
        </div>
    );
}
