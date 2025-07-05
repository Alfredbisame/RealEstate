'use client';

import { Edit, Trash2, Eye, Share2, Heart, MoreVertical } from 'lucide-react';
import { ListingActionsProps } from './types';

export default function ListingActions({ 
  listing, 
  onEdit,
  onDelete,
  onView,
  className = "" 
}: ListingActionsProps) {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit(listing);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(listing.id);
    }
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onView) {
      onView(listing);
    }
  };

  return (
    <div className={`flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 ${className}`}>
      {/* Quick actions */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleView}
          className="px-3 py-1.5 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
        >
          <Eye className="w-3 h-3" />
          <span>View</span>
        </button>
        
        <button
          onClick={handleEdit}
          className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
        >
          <Edit className="w-3 h-3" />
          <span>Edit</span>
        </button>
      </div>
      
      {/* Secondary actions */}
      <div className="flex items-center space-x-1">
        <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <Heart className="w-4 h-4" />
        </button>
        
        <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <Share2 className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleDelete}
          className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors duration-200"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        
        <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 