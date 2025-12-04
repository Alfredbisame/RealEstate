'use client';

import { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Widget {
  id: string;
  type: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface DashboardGridProps {
  widgets: Widget[];
  onWidgetsChange: (widgets: Widget[]) => void;
  renderWidget: (widget: Widget) => React.ReactNode;
}

export default function DashboardGrid({
  widgets,
  onWidgetsChange,
  renderWidget
}: DashboardGridProps) {
  const [draggedWidget, setDraggedWidget] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const GRID_COLS = 1;
  const GRID_ROW_HEIGHT = 400;
  const GRID_GAP = 24;

  const handleMouseDown = useCallback((e: React.MouseEvent, widgetId: string) => {
    // Don't start drag if clicking on input elements
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.tagName === 'BUTTON' ||
      target.closest('input') ||
      target.closest('textarea') ||
      target.closest('select') ||
      target.closest('button') ||
      target.closest('[role="button"]') ||
      target.closest('.recharts-wrapper')) {
      return;
    }

    if (e.button !== 0) return;

    const widget = widgets.find(w => w.id === widgetId);
    if (!widget) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setDraggedWidget(widgetId);
    setIsDragging(true);

    e.preventDefault();
  }, [widgets]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggedWidget || !gridRef.current || !isDragging) return;

    const gridRect = gridRef.current.getBoundingClientRect();

    // Calculate new Y position (vertical stacking)
    const y = Math.max(0, Math.floor(
      (e.clientY - gridRect.top - dragOffset.y) / (GRID_ROW_HEIGHT + GRID_GAP)
    ));

    // Find the widget being dragged
    const draggedWidgetData = widgets.find(w => w.id === draggedWidget);
    if (!draggedWidgetData) return;

    // Create new widgets array with updated position
    const updatedWidgets = widgets.map(widget => {
      if (widget.id === draggedWidget) {
        return { ...widget, x: 0, y }; // Always x: 0 for single column
      }
      return widget;
    });

    // Sort widgets by Y position and reassign positions to prevent overlap
    const sortedWidgets = updatedWidgets.sort((a, b) => a.y - b.y);
    const finalWidgets = sortedWidgets.map((widget, index) => ({
      ...widget,
      y: index,
      x: 0,
      w: 1 // Full width
    }));

    onWidgetsChange(finalWidgets);
  }, [draggedWidget, dragOffset, widgets, onWidgetsChange, isDragging]);

  const handleMouseUp = useCallback(() => {
    setDraggedWidget(null);
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const getWidgetStyle = useCallback((widget: Widget, index: number) => {
    return {
      position: 'relative' as const,
      width: '100%',
      minHeight: `${GRID_ROW_HEIGHT}px`,
      marginBottom: `${GRID_GAP}px`,
      zIndex: draggedWidget === widget.id ? 50 : 1,
      transform: draggedWidget === widget.id ? 'scale(1.02)' : 'scale(1)',
      transition: draggedWidget === widget.id ? 'none' : 'transform 0.2s ease',
    };
  }, [draggedWidget]);

  const calculateGridHeight = () => {
    const totalHeight = widgets.length * (GRID_ROW_HEIGHT + GRID_GAP);
    return Math.max(600, totalHeight);
  };

  return (
    <div
      ref={gridRef}
      className="w-full space-y-6"
      style={{ minHeight: calculateGridHeight() }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {widgets
        .sort((a, b) => a.y - b.y)
        .map((widget, index) => (
          <div
            key={widget.id}
            style={getWidgetStyle(widget, index)}
            className={cn(
              "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-200",
              draggedWidget === widget.id ? "shadow-2xl cursor-grabbing" : "cursor-grab hover:shadow-xl",
              "overflow-hidden"
            )}
            onMouseDown={(e) => handleMouseDown(e, widget.id)}
          >
            <div className="p-6 h-full overflow-auto">
              <div className="h-full">
                {renderWidget(widget)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}