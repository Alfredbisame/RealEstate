'use client';

import { ChartWidgetProps } from './types';
import ChartHeader from './ChartHeader';
import ChartRenderer from './ChartRenderer';

export default function ChartWidgetContent({
  title,
  data,
  type,
  className = ""
}: ChartWidgetProps) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <ChartHeader title={title} type={type} />
      <div className="flex-1 min-h-0">
        <ChartRenderer type={type} data={data} />
      </div>
    </div>
  );
} 