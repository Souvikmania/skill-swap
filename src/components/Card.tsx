import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${
        hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
