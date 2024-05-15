import React from 'react';
import '../css/popup.css';

const Popup = ({ isVisible, message, onClose, children }) => {
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="alert-close-btn" onClick={handleCloseClick}>×</button>
        <p>{message}</p>
        {children}
      </div>
    </div>
  );
};

export default Popup;
