'use client';

import { ChevronRight } from 'lucide-react';

interface HelpArticleProps {
  article: {
    title: string;
    description: string;
    readTime: string;
    popular: boolean;
  };
  onClick?: () => void;
}

export default function HelpArticle({ article, onClick }: HelpArticleProps) {
  return (
    <div 
      className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300 cursor-pointer group backdrop-blur-sm"
      onClick={onClick}
    >
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            {article.title}
          </h4>
          {article.popular && (
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full border border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800">
              Popular
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {article.description}
        </p>
        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
          {article.readTime}
        </span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
    </div>
  );
} 