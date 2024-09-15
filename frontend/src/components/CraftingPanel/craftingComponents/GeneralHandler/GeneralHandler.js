import React, { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import { ButtonContext } from "../../../../context/ButtonContext";

export function GeneralHandler() {
    const { 
      buttonTextSettings,
      updateButtonTextSettings, 
      buttonGeneralSettings, 
      updateButtonGeneralSettings,
      generalOptions
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

      const handleFontSizeChange = (e) => {
        updateButtonTextSettings('font.size', e.value);
      }
      const handleUnitTypeChange = (e) => {
        updateButtonTextSettings('font.unit', e.value);
      }
      const handleFontWeightChange = (e) => {
        updateButtonTextSettings('font.weight', e.value);
      }
      const handleFamilyFontChange = (e) => {
        updateButtonTextSettings('font.familyType', e.value);
      }

    return (
        <>
          <div className="text-divider">Text & Fonts</div>
          <div className="two-options-container">
            <div className="big-option-wrapper">
              <InputText variant="filled" id="ButtonText" placeholder="Craft" value={buttonTextSettings.buttonText} className="p-inputtext-sm" onChange={handleButtonTextChange} />
            </div>
            <div className="small-option-wrapper">
              <input 
                  type="color"
                  id="TextColor" 
                  value={buttonTextSettings.textColor}
                  onChange={handleTextColorChange}
                  className="color-input"
              />
            </div>
          </div>
          <div className="two-options-container">
            <div className="big-option-wrapper">
              <div className="input-label" >Background Color</div>
            </div>
            <div className="small-option-wrapper">
              <input 
                type="color" 
                id="bgColor" 
                value={buttonGeneralSettings.backgroundColor}
                className="color-input"
                onChange={handleBackgroundColorChange}
              />
            </div>
          </div>
          <div className="font-size-selector">
            <div className="p-field">
              <InputNumber
                id="font-size"
                value={buttonTextSettings.font.size}
                onValueChange={handleFontSizeChange}
                min={1}
                max={100}
                className="p-inputtext-sm"
              />
            </div>
            <div className="p-field">
              <Dropdown
                id="unit"
                value={buttonTextSettings.font.unit}
                options={generalOptions.unitsOptions}
                onChange={handleUnitTypeChange}
                placeholder="Select Unit"
                className="p-inputtext-sm w-full"
              />
            </div>
            <InputNumber className="p-inputtext-sm" showButtons inputStyle={{ width: '80px' }} min={100} max={900} inputId="fontWeight" step={50} value={buttonTextSettings.font.weight} onValueChange={handleFontWeightChange} />
          </div>
          <div className="p-field">
            <Dropdown
              id="font-family"
              value={buttonTextSettings.font.familyType}
              options={generalOptions.fontOptions}
              onChange={handleFamilyFontChange}
              placeholder="Select Font"
              filter
              variant="filled"
            />
          </div>
          <div className="text-divider">Border</div>
          <div className="two-options-container">
            <div className="big-option-wrapper">
              <Slider min='0' max='30' value={buttonGeneralSettings.borderRadius} onChange={handleBorderRadiusChange} className="w-full" />
            </div>
            <div className="small-option-wrapper">
              <InputNumber className="p-inputtext-sm" showButtons inputStyle={{ width: '80px' }} maxLength={3} min={0} max={30} inputId="percent" value={buttonGeneralSettings.borderRadius} onValueChange={handleBorderRadiusChange} prefix="%" />
            </div>
          </div>
          <div className="text-divider">Icon</div>


        </>
    )


}


