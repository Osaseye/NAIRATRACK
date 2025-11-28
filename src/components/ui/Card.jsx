import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseStyles = 'bg-background-card rounded-card shadow-card';
  
  const variants = {
    default: 'p-6',
    compact: 'p-4',
    'emerald-header': 'overflow-hidden border-t-4 border-emerald p-6',
    'no-padding': 'p-0'
  };
  
  const cardClasses = `${baseStyles} ${variants[variant]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;