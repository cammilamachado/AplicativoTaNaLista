import React from 'react';
import './Input.css';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error
}) => {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`input-field ${error ? 'error' : ''}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
