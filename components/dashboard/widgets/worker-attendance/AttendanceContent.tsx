'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AttendanceHeader } from './AttendanceHeader';
import { AttendanceSummary } from './AttendanceSummary';
import { WorkerList } from './WorkerList';
import { AttendanceAlerts } from './AttendanceAlerts';
import { Worker, AttendanceAlert } from './types';
import { calculateAttendanceStats, generateAttendanceAlerts } from './utils';
import { mockWorkers, mockAttendanceAlerts } from './mockData';

interface AttendanceContentProps {
  workers?: Worker[];
  showDetails?: boolean;
  showActions?: boolean;
  maxWorkers?: number;
  className?: string;
  onWorkerClick?: (worker: Worker) => void;
  onStatusChange?: (workerId: string, status: Worker['status']) => void;
}

export function AttendanceContent({
  workers = mockWorkers,
  showDetails = false,
  showActions = false,
  maxWorkers,
  className = '',
  onWorkerClick,
  onStatusChange
}: AttendanceContentProps) {
  const [currentWorkers, setCurrentWorkers] = useState<Worker[]>(workers);
  const [alerts, setAlerts] = useState<AttendanceAlert[]>(mockAttendanceAlerts);
  const [isLoading, setIsLoading] = useState(false);

  const stats = calculateAttendanceStats(currentWorkers);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCurrentWorkers([...mockWorkers]); // Refresh with new data
    setAlerts(generateAttendanceAlerts(mockWorkers));
    setIsLoading(false);
  };

  const handleStatusChange = (workerId: string, newStatus: Worker['status']) => {
    setCurrentWorkers(prev => 
      prev.map(worker => 
        worker.id === workerId 
          ? { ...worker, status: newStatus }
          : worker
      )
    );
    onStatusChange?.(workerId, newStatus);
  };

  const handleWorkerClick = (worker: Worker) => {
    onWorkerClick?.(worker);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <AttendanceHeader
        title="Worker Attendance"
        subtitle={`${stats.total} workers • ${stats.percentage}% attendance rate`}
        showRefresh={true}
        onRefresh={handleRefresh}
      />

      {/* Summary Cards */}
      <AttendanceSummary stats={stats} />

      {/* Main Content Tabs */}
      <Tabs defaultValue="workers" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="workers">Workers ({currentWorkers.length})</TabsTrigger>
          <TabsTrigger value="alerts">Alerts ({alerts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="workers" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Worker List</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <WorkerList
                workers={currentWorkers}
                showDetails={showDetails}
                showActions={showActions}
                maxWorkers={maxWorkers}
                onWorkerClick={handleWorkerClick}
                onStatusChange={handleStatusChange}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="mt-4">
          <Card>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">Attendance Alerts</h3>
            </CardHeader>
            <CardContent>
              <AttendanceAlerts
                alerts={alerts}
                maxAlerts={10}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Early Birds</p>
                <p className="text-2xl font-bold text-green-600">
                  {currentWorkers.filter(w => w.status === 'present' && w.checkIn !== '-' && parseInt(w.checkIn.split(':')[0]) < 8).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">🌅</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Overtime Workers</p>
                <p className="text-2xl font-bold text-blue-600">
                  {currentWorkers.filter(w => w.overtime && w.overtime > 0).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">⏰</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sites Active</p>
                <p className="text-2xl font-bold text-purple-600">
                  {new Set(currentWorkers.filter(w => w.status !== 'absent').map(w => w.site)).size}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">🏗️</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 