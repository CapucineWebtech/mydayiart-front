import React from 'react';

const ThemeContext = React.createContext({
  isDay: true,
  toggleTheme: () => {},
});

export default ThemeContext;