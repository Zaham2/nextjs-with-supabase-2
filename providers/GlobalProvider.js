"use client";

// providers/GlobalProvider.js
import React, { useState } from 'react';
import GlobalContext from '../contexts/GlobalContext';

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme
  const [day, setDay] = useState(); // default day

  return (
    <GlobalContext.Provider value={{ day, setDay }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
