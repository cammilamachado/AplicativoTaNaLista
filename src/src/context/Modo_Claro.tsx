import React, { createContext, useContext, useState, ReactNode } from 'react';

const Theme = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
