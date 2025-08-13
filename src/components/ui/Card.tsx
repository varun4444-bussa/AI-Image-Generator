import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50',
        hover && 'hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;