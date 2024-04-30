import React from 'react';

const Btn = ({ name, className, onclick }) => {
    const combinedClassName = `btn ${className}`;
    return (
      <div className={combinedClassName} onClick={onclick}>
        {name}
      </div>
    );
  };
  
  export default Btn;