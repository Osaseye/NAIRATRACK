import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-button transition-all duration-200 active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-jade text-white hover:bg-jade-hover focus:ring-jade disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-emerald text-emerald hover:bg-emerald hover:text-white focus:ring-emerald',
    ghost: 'text-emerald hover:bg-emerald/10 focus:ring-emerald/50',
    outline: 'border border-neutral-muted-grey text-graphite hover:border-emerald hover:text-emerald focus:ring-emerald/50'
  };
  
  const sizes = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;