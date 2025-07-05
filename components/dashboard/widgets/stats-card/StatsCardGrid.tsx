'use client';

import { StatsCardGridProps, StatsCardData } from './types';
import { getGridClasses, filterMetrics, sortMetrics } from './utils';
import StatsCard from './StatsCard';

export default function StatsCardGrid({ 
  cards, 
  className = "",
  columns = 4,
  gap = 'md',
  responsive = true,
  onCardClick 
}: StatsCardGridProps) {
  const handleCardClick = (data: StatsCardData) => {
    if (onCardClick) {
      onCardClick(data);
    }
  };

  return (
    <div className={`
      ${getGridClasses(columns, gap)} ${className}
      ${responsive ? 'w-full' : ''}
    `}>
      {cards.map((card) => (
        <StatsCard
          key={card.title}
          {...card}
          onClick={handleCardClick}
          animated={true}
          showTrend={true}
        />
      ))}
    </div>
  );
} 