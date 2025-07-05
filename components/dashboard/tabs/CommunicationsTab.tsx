'use client';

import { useState } from 'react';
import { 
  Mail, Phone, MessageCircle, Send, 
  Users, Calendar, Bell, Search 
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface CommunicationsTabProps {
  user: User;
}

export default function CommunicationsTab({ user }: CommunicationsTabProps) {
  const [activeView, setActiveView] = useState('messages');
  const [newMessage, setNewMessage] = useState('');

  const messages = [
    {
      id: '1',
      sender: 'Kwame Asante',
      subject: 'Project Update - East Legon',
      preview: 'The foundation work has been completed ahead of schedule...',
      time: '2 hours ago',
      unread: true,
      type: 'project'
    },
    {
      id: '2',
      sender: 'Ama Osei',
      subject: 'Invoice Payment Received',
      preview: 'Payment of GHS 45,200 has been received from client...',
      time: '4 hours ago',
      unread: true,
      type: 'financial'
    },
    {
      id: '3',
      sender: 'John Mensah',
      subject: 'Material Delivery Schedule',
      preview: 'The cement delivery is scheduled for tomorrow morning...',
      time: '1 day ago',
      unread: false,
      type: 'logistics'
    }
  ];

  const contacts = [
    {
      id: '1',
      name: 'Kwame Asante',
      role: 'Site Supervisor',
      phone: '+233 24 123 4567',
      email: 'kwame@company.com',
      status: 'online'
    },
    {
      id: '2',
      name: 'Ama Osei',
      role: 'Accountant',
      phone: '+233 20 987 6543',
      email: 'ama@company.com',
      status: 'offline'
    },
    {
      id: '3',
      name: 'John Mensah',
      role: 'Project Manager',
      phone: '+233 26 555 7890',
      email: 'john@company.com',
      status: 'online'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Communications</h1>
            <p className="opacity-90">Stay connected with your team and clients</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
            <Send className="w-5 h-5" />
            <span>New Message</span>
          </button>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Unread Messages</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Missed Calls</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Chats</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">48</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
          {[
            { id: 'messages', label: 'Messages', icon: Mail },
            { id: 'contacts', label: 'Contacts', icon: Users },
            { id: 'calls', label: 'Call Log', icon: Phone },
            { id: 'notifications', label: 'Notifications', icon: Bell }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeView === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeView === 'messages' && (
            <div className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Messages List */}
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {message.sender.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                          {message.sender}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{message.time}</span>
                      </div>
                      <p className={`font-medium mb-1 ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {message.subject}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{message.preview}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          message.type === 'project' ? 'bg-blue-100 text-blue-700' :
                          message.type === 'financial' ? 'bg-green-100 text-green-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {message.type}
                        </span>
                        {message.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Reply */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Quick Reply</h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeView === 'contacts' && (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {contact.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{contact.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.role}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                      <Phone size={16} />
                    </button>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'calls' && (
            <div className="text-center py-12">
              <Phone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Log</h3>
              <p className="text-gray-600 dark:text-gray-400">Your call history will appear here</p>
            </div>
          )}

          {activeView === 'notifications' && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Notifications</h3>
              <p className="text-gray-600 dark:text-gray-400">Communication notifications will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}