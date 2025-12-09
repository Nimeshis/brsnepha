import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  // Build the class name based on props
  const classNames = [
    'btn-component',
    variant,
    size,
    fullWidth && 'full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;