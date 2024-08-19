import React, { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonSettings, setButtonSettings] = useState({
    backgroundColor: '#CF6565',
    textColor: '#ffffff',
    buttonText: 'Button',
    borderRadius: '0',
    hoverEffectDirection: 'translateX(-100%)'
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
