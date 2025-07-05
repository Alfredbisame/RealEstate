'use client';

import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartData, ChartType } from './types';
import { transformPieData, TOOLTIP_STYLE, PIE_CHART_COLORS, formatCurrency } from './utils';

interface PieChartComponentProps {
  data: ChartData | any;
  type: 'pie' | 'doughnut';
  className?: string;
}

export default function PieChartComponent({ data, type, className = "" }: PieChartComponentProps) {
  const chartData = data.datasets ? transformPieData(data) : data;

  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            {PIE_CHART_COLORS.map((color, index) => (
              <linearGradient key={index} id={`pieGradient${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="100%" stopColor={color} stopOpacity={1}/>
              </linearGradient>
            ))}
          </defs>
          
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={type === 'doughnut' ? 60 : 0}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationDuration={1000}
            animationBegin={0}
          >
            {chartData.map((entry: any, index: number) => (
              <Cell 
                key={`cell-${index}`} 
                fill={`url(#pieGradient${index % PIE_CHART_COLORS.length})`}
                stroke="#ffffff"
                strokeWidth={2}
              />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={TOOLTIP_STYLE}
            formatter={(value: any) => [formatCurrency(value), '']}
            labelStyle={{ fontWeight: 'bold' }}
          />
          
          <Legend 
            wrapperStyle={{ 
              paddingTop: '10px',
              fontSize: '12px'
            }}
            formatter={(value: any, entry: any) => [
              <span style={{ color: PIE_CHART_COLORS[entry.payload.index % PIE_CHART_COLORS.length] }}>
                {value}
              </span>
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 