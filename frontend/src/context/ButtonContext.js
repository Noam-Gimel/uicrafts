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
      unitsOptions: [
        { label: 'px', value: 'px' },
        { label: 'rem', value: 'rem' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
      ],
      fontOptions: [
        { label: 'None', value: 'Unset' },
        { label: 'Arial (sans-serif)', value: 'Arial, sans-serif' },
        { label: 'Verdana (sans-serif)', value: 'Verdana, sans-serif' },
        { label: 'Tahoma (sans-serif)', value: 'Tahoma, sans-serif' },
        { label: 'system-ui', value: 'system-ui' },
        { label: 'Trebuchet MS (sans-serif)', value: 'Trebuchet MS, sans-serif' },
        { label: 'Times New Roman (serif)', value: 'Times New Roman, serif' },
        { label: 'Georgia (serif)', value: 'Georgia, serif' },
        { label: 'Garamond (serif)', value: 'Garamond, serif' },
        { label: 'Courier New (monospace)', value: 'Courier New, monospace' },
        { label: 'Brush Script MT (cursive)', value: 'Brush Script MT, cursive' },
      ]
    }

  // Setting button states 
  const [buttonGeneralSettings, setButtonGeneralSettings] = useState({
    backgroundColor: '#CF6565',
    borderRadius: '0'
  });

  const [buttonTextSettings, setButtonTextSettings] = useState({
    textColor: '#ffffff',
    buttonText: 'Button',
    font: { size: 16, unit: 'px', familyType: 'system-ui', weight: '700' },
    // fontSize: '16px',
    // fontWeight: '700',
    padding: '0.9rem 1.8rem'
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

  // Enables nested value posability - updateButtonTextSettings('font.unit', e.value);
  const updateButtonTextSettings = (key, value) => {
    setButtonTextSettings((prevSettings) => {
      if (key.includes('.')) {
        const keys = key.split('.');

        let newSettings = { ...prevSettings };

        let current = newSettings;
        for (let i = 0; i < keys.length - 1; i++) {
          current[keys[i]] = { ...current[keys[i]] };
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
  
        return newSettings;
      } else {
        return { ...prevSettings, [key]: value };
      }
    });
  };

  // NO nested value posability - updateButtonTextSettings('font.unit', e.value);
  // const updateButtonTextSettings = (key, value) => {
  //   setButtonTextSettings((prevSettings) => ({
  //     ...prevSettings,
  //     [key]: value,
  //   }));
  // };

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
