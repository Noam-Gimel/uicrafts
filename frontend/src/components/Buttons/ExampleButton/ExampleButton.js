import React, { useState } from 'react';

export const ExampleButton = ({ buttonText, backgroundColor = 'rgb(252, 70, 100)', effectDirection }) => {

    const ButtonStyles = 
    `
    .DemoButton {
    display: inline-block;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    font-weight: 700;
    color: black;
    border: 3px solid ${backgroundColor};
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
    background-color: ${backgroundColor};
    transform: ${effectDirection};
    transition: all .3s;
    z-index: -1;
    }

    .DemoButton:hover::before {
    transform: translateX(0);
    }`

  return (
    <>
        <style>{ButtonStyles}</style>
        <a className={'DemoButton'}>{buttonText}</a>
    </>
  );
};

