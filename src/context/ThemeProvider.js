import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [isDay, setIsDay] = useState(
    JSON.parse(localStorage.getItem('isDay')) ?? true
  );

  useEffect(() => {
    localStorage.setItem('isDay', JSON.stringify(isDay));

    const bodyClass = document.body.classList;
    if (isDay) {
      bodyClass.add('day-theme');
      bodyClass.remove('night-theme');
    } else {
      bodyClass.add('night-theme');
      bodyClass.remove('day-theme');
    }

    return () => {
      bodyClass.remove('day-theme', 'night-theme');
    };
  }, [isDay]);

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  return (
    <ThemeContext.Provider value={{ isDay, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
