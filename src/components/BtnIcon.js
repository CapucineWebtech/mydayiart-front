import React from 'react';
import '../css/btnicon.css';
import Icon from './Icon';

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

// <BtnIcon name="Créer un post avec l’image !" className="btn-secondary" icon="instagram" />