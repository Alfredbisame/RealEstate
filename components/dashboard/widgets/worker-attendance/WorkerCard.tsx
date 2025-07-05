'use client';

import { UserCheck, UserX, Clock, MapPin, Phone, Mail, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { WorkerCardProps } from './types';
import { getStatusIcon, getStatusColor, getStatusLabel, formatTime, getTimeDifference } from './utils';
import { cn } from '@/lib/utils';

export function WorkerCard({
  worker,
  showDetails = false,
  showActions = false,
  onClick,
  onStatusChange,
  className = ''
}: WorkerCardProps) {
  const statusColors = getStatusColor(worker.status);
  const timeDifference = getTimeDifference(worker.checkIn);

  const handleStatusChange = (newStatus: typeof worker.status) => {
    onStatusChange?.(worker.id, newStatus);
  };

  return (
    <div
      className={cn(
        'group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer',
        className
      )}
      onClick={() => onClick?.(worker)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          {/* Avatar */}
          <Avatar className="w-12 h-12 border-2 border-gray-200 dark:border-gray-700">
            <AvatarImage src={worker.avatar} alt={worker.name} />
            <AvatarFallback className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {worker.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          {/* Worker Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                {worker.name}
              </h4>
              <Badge variant="secondary" className="text-xs">
                {worker.role}
              </Badge>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{worker.site}</span>
            </div>

            {/* Status and Time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={cn(
                  'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
                  statusColors.bg,
                  statusColors.text
                )}>
                  {worker.status === 'present' && <UserCheck className="w-3 h-3" />}
                  {worker.status === 'absent' && <UserX className="w-3 h-3" />}
                  {worker.status === 'late' && <Clock className="w-3 h-3" />}
                  <span>{getStatusLabel(worker.status)}</span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatTime(worker.checkIn)}
                </p>
                {timeDifference && worker.status !== 'absent' && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {timeDifference} ago
                  </p>
                )}
              </div>
            </div>

            {/* Additional Details */}
            {showDetails && (
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {worker.phone && (
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Phone className="w-3 h-3" />
                      <span className="truncate">{worker.phone}</span>
                    </div>
                  )}
                  {worker.email && (
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{worker.email}</span>
                    </div>
                  )}
                </div>
                
                {worker.totalHours !== undefined && (
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">Hours Today:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {worker.totalHours}h
                      {worker.overtime && worker.overtime > 0 && (
                        <span className="text-orange-600 ml-1">(+{worker.overtime}h OT)</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleStatusChange('present')}>
                <UserCheck className="w-4 h-4 mr-2" />
                Mark Present
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange('late')}>
                <Clock className="w-4 h-4 mr-2" />
                Mark Late
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange('absent')}>
                <UserX className="w-4 h-4 mr-2" />
                Mark Absent
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
} 