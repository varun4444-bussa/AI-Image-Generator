import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 focus:ring-purple-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105',
    secondary: 'bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-gray-100 hover:from-gray-300 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500 focus:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-700 focus:ring-gray-500 hover:shadow-md backdrop-blur-sm',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 focus:ring-gray-500 hover:shadow-md'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-8 py-3 text-base rounded-xl'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;