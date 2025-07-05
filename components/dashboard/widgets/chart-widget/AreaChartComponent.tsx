'use client';

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { TransformedDataPoint, ChartData } from './types';
import { transformLineData, TOOLTIP_STYLE, AXIS_STYLE, formatCurrency } from './utils';

interface AreaChartComponentProps {
  data: ChartData | any;
  className?: string;
}

export default function AreaChartComponent({ data, className = "" }: AreaChartComponentProps) {
  const chartData = data.datasets ? transformLineData(data) : data;

  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
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
          />
          
          <Legend 
            wrapperStyle={{ 
              paddingTop: '10px',
              fontSize: '12px'
            }}
          />
          
          {data.datasets && data.datasets.map((dataset: any, index: number) => {
            const gradientId = index === 0 ? 'colorRevenue' : 
                              index === 1 ? 'colorExpenses' : 'colorProfit';
            const strokeColor = dataset.borderColor || 
                              (index === 0 ? '#10b981' : 
                               index === 1 ? '#ef4444' : '#3b82f6');
            
            return (
              <Area
                key={index}
                type="monotone"
                dataKey={dataset.label.toLowerCase().replace(/[^a-z0-9]/g, '')}
                stroke={strokeColor}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                strokeWidth={2}
                dot={{ 
                  fill: strokeColor, 
                  strokeWidth: 2, 
                  r: 4,
                  stroke: '#ffffff'
                }}
                activeDot={{ 
                  r: 6, 
                  stroke: strokeColor, 
                  strokeWidth: 2,
                  fill: '#ffffff'
                }}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
} 