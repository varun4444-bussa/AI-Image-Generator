import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden" style={{ background: '#e0f2fe' }}>
      <div className="max-w-lg mx-auto relative z-10">
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 text-red-700 dark:text-red-300 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Oops! Page Not Found</span>
            </div>
            
            <h1 className="text-8xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="w-full text-lg py-4">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;