import React, { useState, useContext } from 'react';
import { ButtonContext } from '../../../context/ButtonContext';

export const ExampleButton = () => {
    const { buttonTextSettings, buttonGeneralSettings, hoverEffectSettings } = useContext(ButtonContext);
    // console.log(buttonTextSettings.font.size, buttonTextSettings.font.prefix, buttonTextSettings.font.weight, buttonTextSettings.font.familyType);

    const ButtonStyles = 
    `
    .DemoButton {
      display: inline-block;
      padding: 0.9rem 1.8rem;
      font-size: ${buttonTextSettings.font.size}${buttonTextSettings.font.unit};
      font-weight: ${buttonTextSettings.font.weight};
      color: ${buttonTextSettings.textColor};
      border: 3px solid ${buttonGeneralSettings.backgroundColor};
      border-radius: ${buttonGeneralSettings.borderRadius}px;
      cursor: pointer;
      position: relative;
      background-color: transparent;
      text-decoration: none;
      overflow: hidden;
      z-index: 1;
      font-family: ${buttonTextSettings.font.familyType};
      // transition: all 0.3s;
    }

    .DemoButton::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${buttonGeneralSettings.backgroundColor};
      transform: ${hoverEffectSettings.hoverEffectDirection};
      transition: ${hoverEffectSettings.transitionType.name} ${hoverEffectSettings.transitionDuration}s;
      z-index: -1;
    }

    .DemoButton:hover::before {
      transform: translateX(0);
    }
    .DemoButton:active {
      transform: scale(0.9);
    }
    `
    

  return (
    <>
        <style>{ButtonStyles}</style>
        <a className={'DemoButton'}>{buttonTextSettings.buttonText}</a>
    </>
  );
};

