import React from 'react';
import Icon from './Icon';
import '../css/btnicon.css';

const BtnIcon = ({ name, className, onclick, icon }) => {
  const combinedClassName = `btn btn-icon ${className}`;
  return (
    <div className={combinedClassName} onClick={onclick}>
      <div className="btn-icon-icon">
        <Icon name={icon} color="var(--white-to-black)"/>
      </div>
      <span className="btn-icon-text">{name}</span>
    </div>
  );
};

export default BtnIcon;