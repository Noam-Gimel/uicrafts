import React, { useState, useContext } from 'react';
import { ButtonContext } from '../../../context/ButtonContext';

export const ExampleButton = () => {
    const { buttonSettings } = useContext(ButtonContext);

    const ButtonStyles = 
    `
    .DemoButton {
    display: inline-block;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    font-weight: 700;
    color: ${buttonSettings.textColor};
    border: 3px solid ${buttonSettings.backgroundColor};
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
    }

    .DemoButton::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${buttonSettings.backgroundColor};
    transform: ${buttonSettings.hoverEffectDirection};
    transition: all .3s;
    z-index: -1;
    }

    .DemoButton:hover::before {
    transform: translateX(0);
    }`

  return (
    <>
        <style>{ButtonStyles}</style>
        <a className={'DemoButton'}>{buttonSettings.buttonText}</a>
    </>
  );
};

