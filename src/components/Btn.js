import React from 'react';

const Btn = ({ name, className, onclick, disabled }) => {
  const combinedClassName = `btn ${className}`;
  return (
    <div className={combinedClassName} onClick={onclick} data-disabled={disabled}>
      {name}
    </div>
  );
};

export default Btn;