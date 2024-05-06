import React from 'react';

const Input = ({ label, type, name, value, onChange, placeholder, required }) => {
  return (
    <div className="form-input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
