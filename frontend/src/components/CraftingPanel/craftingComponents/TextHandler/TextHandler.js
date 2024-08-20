import React, { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { ButtonContext } from "../../../../context/ButtonContext";

export function TextHandler() {
    const { buttonTextSettings, updateButtonTextSettings } = useContext(ButtonContext);

    const handleTextColorChange = (e) => {
        updateButtonTextSettings('textColor', e.target.value);
      };
      const handleButtonTextChange = (e) => {
        updateButtonTextSettings('buttonText', e.target.value);
      };

    return (
        <>
            <div className="two-options-container">
              <div className="big-option-wrapper">
                <InputText variant="filled" id="ButtonText" placeholder="Craft" value={buttonTextSettings.buttonText} className="p-inputtext-sm" onChange={handleButtonTextChange} />
              </div>
              <div className="small-option-wrapper" style={{ padding: '10px' }}>
                <input 
                    type="color"
                    id="TextColor" 
                    value={buttonTextSettings.textColor}
                    onChange={handleTextColorChange}
                    className="color-input"
                />
              </div>
            </div>



        </>
    )


}


