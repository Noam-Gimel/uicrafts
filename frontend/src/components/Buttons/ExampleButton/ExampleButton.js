import React, { useState, useContext } from 'react';
import { ButtonContext } from '../../../context/ButtonContext';

export const ExampleButton = () => {
    const { buttonTextSettings, buttonGeneralSettings, hoverEffectSettings } = useContext(ButtonContext);

    const ButtonStyles = 
    `
    .DemoButton {
    display: inline-block;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    font-weight: 700;
    color: ${buttonTextSettings.textColor};
    border: 3px solid ${buttonGeneralSettings.backgroundColor};
    border-radius: ${buttonGeneralSettings.borderRadius}px;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: system-ui;
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
    transition: ${hoverEffectSettings.transitionType.name} .3s;
    z-index: -1;
    }

    .DemoButton:hover::before {
    transform: translateX(0);
    }`

  return (
    <>
        <style>{ButtonStyles}</style>
        <a className={'DemoButton'}>{buttonTextSettings.buttonText}</a>
    </>
  );
};

