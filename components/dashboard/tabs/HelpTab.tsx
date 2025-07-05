'use client';

import { useState } from 'react';
import { Book, FileText, HelpCircle, MessageCircle, Phone, Mail, Video } from 'lucide-react';
import HelpHeader from './help/HelpHeader';
import SearchBar from './help/SearchBar';
import CategorySidebar from './help/CategorySidebar';
import HelpContent from './help/HelpContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface HelpTabProps {
  user: User;
}

export default function HelpTab({ user }: HelpTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const helpCategories = [
    { id: 'getting-started', label: 'Getting Started', icon: Book },
    { id: 'projects', label: 'Project Management', icon: FileText },
    { id: 'financials', label: 'Financial Tools', icon: FileText },
    { id: 'employees', label: 'Employee Management', icon: FileText },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: HelpCircle }
  ];

  const helpArticles = {
    'getting-started': [
      {
        title: 'Welcome to Ghana Real Estate Platform',
        description: 'Learn the basics of navigating your dashboard',
        readTime: '5 min read',
        popular: true
      },
      {
        title: 'Setting up your first property',
        description: 'Step-by-step guide to adding properties to your portfolio',
        readTime: '8 min read',
        popular: true
      },
      {
        title: 'Understanding user roles and permissions',
        description: 'Learn about different user types and their access levels',
        readTime: '6 min read',
        popular: false
      }
    ],
    'projects': [
      {
        title: 'Creating and managing construction projects',
        description: 'Complete guide to project lifecycle management',
        readTime: '12 min read',
        popular: true
      },
      {
        title: 'Budget tracking and cost management',
        description: 'Monitor project expenses and stay within budget',
        readTime: '10 min read',
        popular: false
      },
      {
        title: 'Material procurement and vendor management',
        description: 'Best practices for sourcing materials in Ghana',
        readTime: '15 min read',
        popular: true
      }
    ],
    'financials': [
      {
        title: 'Invoice generation and payment tracking',
        description: 'Create professional invoices and track payments',
        readTime: '7 min read',
        popular: true
      },
      {
        title: 'GRA tax compliance and reporting',
        description: 'Ensure compliance with Ghana Revenue Authority',
        readTime: '20 min read',
        popular: true
      },
      {
        title: 'Profit and loss analysis',
        description: 'Understand your financial performance',
        readTime: '9 min read',
        popular: false
      }
    ],
    'employees': [
      {
        title: 'Employee onboarding and management',
        description: 'Add and manage your workforce effectively',
        readTime: '11 min read',
        popular: false
      },
      {
        title: 'Attendance tracking and payroll',
        description: 'Monitor attendance and process payroll',
        readTime: '13 min read',
        popular: true
      },
      {
        title: 'SSNIT integration and compliance',
        description: 'Manage social security contributions',
        readTime: '8 min read',
        popular: false
      }
    ],
    'troubleshooting': [
      {
        title: 'Common login and access issues',
        description: 'Resolve authentication and permission problems',
        readTime: '5 min read',
        popular: true
      },
      {
        title: 'Data sync and backup issues',
        description: 'Troubleshoot data synchronization problems',
        readTime: '7 min read',
        popular: false
      },
      {
        title: 'Performance optimization tips',
        description: 'Improve app performance and loading times',
        readTime: '6 min read',
        popular: false
      }
    ]
  };

  const contactOptions = [
    {
      type: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true
    },
    {
      type: 'Phone Support',
      description: 'Call us for urgent technical issues',
      icon: Phone,
      action: '+233 30 123 4567',
      available: true
    },
    {
      type: 'Email Support',
      description: 'Send us detailed questions or feedback',
      icon: Mail,
      action: 'support@ghana-re.com',
      available: true
    },
    {
      type: 'Video Tutorial',
      description: 'Watch step-by-step video guides',
      icon: Video,
      action: 'Watch Videos',
      available: true
    }
  ];

  const currentArticles = helpArticles[activeCategory as keyof typeof helpArticles] || [];
  const filteredArticles = currentArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategoryLabel = helpCategories.find(c => c.id === activeCategory)?.label || '';

  const handleLiveChat = () => {
    // TODO: Implement live chat functionality
    console.log('Live chat clicked');
  };

  const handleArticleClick = (article: any) => {
    // TODO: Implement article click functionality
    console.log('Article clicked:', article.title);
  };

  const handleContactClick = (option: any) => {
    // TODO: Implement contact option click functionality
    console.log('Contact option clicked:', option.type);
  };

  return (
    <div className="space-y-6">
      <HelpHeader onLiveChat={handleLiveChat} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <CategorySidebar
          categories={helpCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <HelpContent
          articles={filteredArticles}
          categoryLabel={currentCategoryLabel}
          contactOptions={contactOptions}
          onArticleClick={handleArticleClick}
          onContactClick={handleContactClick}
        />
      </div>
    </div>
  );
}