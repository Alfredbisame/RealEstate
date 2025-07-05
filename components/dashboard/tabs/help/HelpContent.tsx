'use client';

import HelpArticles from './HelpArticles';
import ContactSupport from './ContactSupport';
import QuickTips from './QuickTips';

interface Article {
  title: string;
  description: string;
  readTime: string;
  popular: boolean;
}

interface ContactOption {
  type: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: string;
  available: boolean;
}

interface HelpContentProps {
  articles: Article[];
  categoryLabel: string;
  contactOptions: ContactOption[];
  onArticleClick?: (article: Article) => void;
  onContactClick?: (option: ContactOption) => void;
}

export default function HelpContent({
  articles,
  categoryLabel,
  contactOptions,
  onArticleClick,
  onContactClick
}: HelpContentProps) {
  return (
    <div className="lg:col-span-3 space-y-6">
      <HelpArticles
        articles={articles}
        categoryLabel={categoryLabel}
        onArticleClick={onArticleClick}
      />
      <ContactSupport
        contactOptions={contactOptions}
        onContactClick={onContactClick}
      />
      <QuickTips />
    </div>
  );
} 