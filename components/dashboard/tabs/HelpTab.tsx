'use client';

import { useState } from 'react';
import { 
  HelpCircle, Search, Book, Video, MessageCircle, 
  Phone, Mail, FileText, ExternalLink, ChevronRight 
} from 'lucide-react';

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
            <p className="opacity-90">Find answers and get assistance with your platform</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
            </div>
            <div className="p-2">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${
                    activeCategory === category.id
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon size={18} />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Help Articles */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {helpCategories.find(c => c.id === activeCategory)?.label} Articles
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{article.title}</h4>
                        {article.popular && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Popular</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{article.description}</p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Can't find what you're looking for? Get in touch with our support team.
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{option.type}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                    </div>
                    <button className="flex items-center space-x-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                      <span>{option.action}</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Use keyboard shortcuts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Press Ctrl+K to quickly search</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Customize your dashboard</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Drag and drop widgets to personalize</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}