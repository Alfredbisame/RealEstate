'use client';

import HelpArticle from './HelpArticle';

interface Article {
  title: string;
  description: string;
  readTime: string;
  popular: boolean;
}

interface HelpArticlesProps {
  articles: Article[];
  categoryLabel: string;
  onArticleClick?: (article: Article) => void;
}

export default function HelpArticles({ articles, categoryLabel, onArticleClick }: HelpArticlesProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {categoryLabel} Articles
        </h3>
      </div>
      <div className="p-6">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search terms or browse other categories
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article, index) => (
              <HelpArticle
                key={index}
                article={article}
                onClick={() => onArticleClick?.(article)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 