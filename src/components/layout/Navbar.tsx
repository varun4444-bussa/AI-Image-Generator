import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Moon, Sun, LogOut, User, Settings, Sparkles } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              AI Canvas
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive('/dashboard') 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 shadow-md' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-md'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/gallery" 
                  className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive('/gallery') 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 shadow-md' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-md'
                  }`}
                >
                  Gallery
                </Link>
                <Link 
                  to="/pricing" 
                  className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive('/pricing') 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 shadow-md' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-md'
                  }`}
                >
                  Pricing
                </Link>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 hover:shadow-md"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  
                  <div className="relative group">
                    <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 hover:shadow-md">
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">{user.displayName}</span>
                    </button>
                    
                    <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          user.subscription === 'pro' 
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-200' 
                            : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 dark:from-gray-700 dark:to-gray-600 dark:text-gray-200'
                        }`}>
                          {user.subscription === 'pro' && <Sparkles className="w-3 h-3 mr-1" />}
                          {user.subscription === 'pro' ? 'Pro Plan' : 'Free Plan'}
                        </span>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full px-3 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/pricing" 
                  className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200"
                >
                  Pricing
                </Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 hover:shadow-md"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;