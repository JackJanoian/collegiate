import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListChecks, ScrollText, Users, ChevronDown, School, Award, Calendar, BookOpen, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import { Brand } from './brand/Brand';

const listItems = [
  { title: 'Schools', path: '/lists/schools', icon: School },
  { title: 'Scholarships', path: '/lists/scholarships', icon: Award },
  { title: 'Extracurriculars', path: '/lists/extracurriculars', icon: School },
  { title: 'Events', path: '/lists/events', icon: Calendar },
  { title: 'Resources', path: '/lists/resources', icon: BookOpen },
  { title: 'Sample Applications', path: '/lists/applications', icon: FileText },
];

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo and Brand */}
            <Link to="/" className="flex-shrink-0">
              <Brand />
            </Link>

            {/* Navigation Items */}
            <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-8">
              <Link
                to="/join-team"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-ilm-600 dark:hover:text-ilm-400"
              >
                <Users className="h-4 w-4 mr-2" />
                Join the Team
              </Link>
              <Link
                to="/mentorship"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-ilm-600 dark:hover:text-ilm-400"
              >
                <Users className="h-4 w-4 mr-2" />
                Mentorship
              </Link>
              {/* Lists Dropdown */}
              <div className="relative">
                <button
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-ilm-600 dark:hover:text-ilm-400"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <ListChecks className="h-4 w-4 mr-2" />
                  Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute top-full left-0 w-56 mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      {listItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Theme Toggle and Auth */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-ilm-600 dark:hover:text-ilm-400"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/auth/login"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-ilm-600 dark:hover:text-ilm-400"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/signup"
                  className="text-sm bg-ilm-600 text-white px-3 py-2 rounded-md hover:bg-ilm-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}