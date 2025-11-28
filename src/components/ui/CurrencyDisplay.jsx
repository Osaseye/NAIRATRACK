import React from 'react';

const CurrencyDisplay = ({ 
  amount, 
  size = 'medium', 
  showSymbol = true,
  className = '' 
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount || 0);
  };

  const sizes = {
    small: 'text-base',
    medium: 'text-xl',
    large: 'text-3xl font-bold',
    xlarge: 'text-4xl font-bold'
  };

  const currencyClasses = `font-secondary ${sizes[size]} ${className}`;

  return (
    <span className={currencyClasses}>
      {showSymbol && '₦'}
      {formatCurrency(amount)}
    </span>
  );
};

export default CurrencyDisplay;