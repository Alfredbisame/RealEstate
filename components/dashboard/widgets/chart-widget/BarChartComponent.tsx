'use client';

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ChartData } from './types';
import { transformBarData, TOOLTIP_STYLE, AXIS_STYLE, formatCurrency } from './utils';

interface BarChartComponentProps {
  data: ChartData | any;
  className?: string;
}

export default function BarChartComponent({ data, className = "" }: BarChartComponentProps) {
  const chartData = data.datasets ? transformBarData(data) : data;

  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.9}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e5e7eb" 
            strokeOpacity={0.3}
          />
          
          <XAxis 
            dataKey="name" 
            {...AXIS_STYLE}
            tick={{ fontSize: 11 }}
          />
          
          <YAxis 
            {...AXIS_STYLE}
            tickFormatter={(value) => formatCurrency(value)}
            tick={{ fontSize: 11 }}
          />
          
          <Tooltip 
            contentStyle={TOOLTIP_STYLE}
            formatter={(value: any) => [formatCurrency(value), '']}
            labelStyle={{ fontWeight: 'bold' }}
            cursor={{ 
              fill: 'rgba(59, 130, 246, 0.1)',
              stroke: '#3b82f6',
              strokeWidth: 1
            }}
          />
          
          <Bar 
            dataKey="value" 
            fill="url(#barGradient)"
            radius={[6, 6, 0, 0]}
            stroke="#3b82f6"
            strokeWidth={1}
            animationDuration={1000}
            animationBegin={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 