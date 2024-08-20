import React, { useState, useContext } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Slider } from "primereact/slider";
import { ButtonContext } from "../../../../context/ButtonContext";

export function StylingHandler() {
    const { buttonGeneralSettings, updateButtonGeneralSettings } = useContext(ButtonContext);

    const handleBorderRadiusChange = (e) => {
        updateButtonGeneralSettings('borderRadius', e.value);
    }

    return (
        <>
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


