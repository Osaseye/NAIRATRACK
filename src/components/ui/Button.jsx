import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
  loading = false,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transform disabled:transform-none flex items-center justify-center space-x-2 border';
  
  const variants = {
    primary: 'bg-gradient-to-r from-emerald to-jade text-white hover:shadow-lg hover:from-emerald/90 hover:to-jade/90 focus:ring-emerald border-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:from-emerald disabled:to-jade',
    secondary: 'bg-transparent border-2 border-emerald text-emerald hover:bg-emerald hover:text-white hover:shadow-md focus:ring-emerald disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent border-transparent text-emerald hover:bg-emerald/10 hover:border-emerald/20 focus:ring-emerald/50 disabled:opacity-50',
    outline: 'bg-white border border-neutral-light-grey text-graphite hover:border-emerald hover:text-emerald hover:shadow-sm focus:ring-emerald/50 disabled:opacity-50',
    danger: 'bg-gradient-to-r from-error to-red-600 text-white hover:shadow-lg hover:from-error/90 hover:to-red-600/90 focus:ring-error border-transparent disabled:opacity-50'
  };
  
  const sizes = {
    small: 'py-2 px-4 text-sm min-h-[36px]',
    medium: 'py-3 px-6 text-base min-h-[44px]',
    large: 'py-4 px-8 text-lg min-h-[52px]',
    xl: 'py-5 px-10 text-xl min-h-[60px]'
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

export default Button;