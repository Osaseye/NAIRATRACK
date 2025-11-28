import React from 'react';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputClasses = `w-full px-4 py-3 bg-white border rounded-button focus:outline-none focus:ring-2 focus:ring-jade focus:border-transparent transition-all duration-200 ${
    error 
      ? 'border-error focus:ring-error' 
      : 'border-neutral-light-grey'
  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <div className=\"space-y-2\">
      {label && (
        <label className=\"block text-label text-graphite font-medium\">
          {label}
          {required && <span className=\"text-error ml-1\">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className=\"text-error text-sm mt-1\">{error}</p>
      )}
    </div>
  );
};

export default Input;