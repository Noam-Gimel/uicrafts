import React, { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonSettings, setButtonSettings] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderRadius: '5px',
    // Add more states as needed
  });

  const updateButtonSettings = (key, value) => {
    setButtonSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <ButtonContext.Provider value={{ buttonSettings, updateButtonSettings }}>
      {children}
    </ButtonContext.Provider>
  );
};
