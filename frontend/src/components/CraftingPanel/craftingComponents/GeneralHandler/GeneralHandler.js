import React, { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";
import { ButtonContext } from "../../../../context/ButtonContext";

export function GeneralHandler() {
    const { 
      buttonTextSettings,
      updateButtonTextSettings, 
      buttonGeneralSettings, 
      updateButtonGeneralSettings
    } = useContext(ButtonContext);

    const handleTextColorChange = (e) => {
        updateButtonTextSettings('textColor', e.target.value);
      };
      const handleButtonTextChange = (e) => {
        updateButtonTextSettings('buttonText', e.target.value);
      };
      
      const handleBackgroundColorChange = (e) => {
        updateButtonGeneralSettings('backgroundColor', e.target.value);
      };

      const handleBorderRadiusChange = (e) => {
        updateButtonGeneralSettings('borderRadius', e.value);
    }

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
            <div>Background Color</div>
              <input 
                type="color" 
                id="bgColor" 
                value={buttonGeneralSettings.backgroundColor}
                className="color-input"
                onChange={handleBackgroundColorChange}
              />

            <div className="two-options-container">
              <div className="big-option-wrapper">
                <Slider min='0' max='30' value={buttonGeneralSettings.borderRadius} onChange={handleBorderRadiusChange} className="w-full" />
              </div>
              <div className="small-option-wrapper" style={{ padding: '10px' }}>
                <InputNumber inputStyle={{ width: '80px' }} maxLength={3} max={30} inputId="percent" value={buttonGeneralSettings.borderRadius} onValueChange={handleBorderRadiusChange} prefix="%" />
              </div>
            </div>
        </>
    )


}


