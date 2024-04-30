import React, { useState, useEffect } from 'react';
import '../css/alert.css';

const Alert = ({ message, className }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, className]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const combinedClassName = `alert alert-${className}`;

  return (
    <div className={combinedClassName}>
      <span className="alert-text">{message}</span>
      <button className="alert-close-btn" onClick={handleClose}>×</button>
    </div>
  );
};

export default Alert;