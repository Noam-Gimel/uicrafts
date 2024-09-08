import React, { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {

    // General options
    const generalOptions = {
      transitionTypeOptions: [
        {name: 'all'},
        {name: 'ease'},
        {name: 'ease-in-out'},
        {name: 'ease-in'},
        {name: 'ease-out'}
      ],
    }

  // Setting button states 
  const [buttonGeneralSettings, setButtonGeneralSettings] = useState({
    backgroundColor: '#CF6565',
    borderRadius: '0'
  });

  const [buttonTextSettings, setButtonTextSettings] = useState({
    textColor: '#ffffff',
    buttonText: 'Button',
    fontSize: '16px',
    fontWeight: '500'
  });

  const [hoverEffectSettings, setHoverEffectSettings ] = useState({
    hoverEffectDirection: 'translateX(-100%)',
    transitionType: { name: 'all' },
    transitionDuration: '0.3'
  });


  // Update functions; Used instead of setState()
  // Usage - updateButtonGeneralSettings('[Key to replace]', [New value]);
  // Ex. - updateButtonGeneralSettings('backgroundColor', e.target.value);
  const updateButtonGeneralSettings = (key, value) => {
    setButtonGeneralSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const updateButtonTextSettings = (key, value) => {
    setButtonTextSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const updateHoverEffectSettings = (key, value) => {
    setHoverEffectSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };


  return (
    <ButtonContext.Provider 
      value={{ 
        buttonGeneralSettings,
        updateButtonGeneralSettings,
        buttonTextSettings,
        updateButtonTextSettings,
        hoverEffectSettings,
        updateHoverEffectSettings,
        generalOptions
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};
