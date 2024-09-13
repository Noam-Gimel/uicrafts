import React, { useState, useContext } from "react";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ButtonContext } from "../../../../context/ButtonContext";


export function EffectHandler() {
    const { hoverEffectSettings, updateHoverEffectSettings, generalOptions } = useContext(ButtonContext);

    const handleDirectionUp = () => {
        updateHoverEffectSettings('hoverEffectDirection', 'translateY(-100%)');
      }
      const handleDirectionDown = () => {
        updateHoverEffectSettings('hoverEffectDirection', 'translateY(100%)');
    
      }
      const handleDirectionLeft = () => {
        updateHoverEffectSettings('hoverEffectDirection', 'translateX(-100%)');
    
      }
      const handleDirectionRight = () => {
        updateHoverEffectSettings('hoverEffectDirection', 'translateX(100%)');
      }

      const handleTransitionTypeChange = (e) => {
        updateHoverEffectSettings('transitionType', e.value);
      }

      const handleTransitionDurationChange = (e) => {
        updateHoverEffectSettings('transitionDuration', e.value);
      }

    return (
        <>
          <div className="text-divider">Effect Direction</div>
          <div className='arrows-buttons-container'>
              <div className='arrow-button'>
                <Button className="arrow-button-style" icon="pi pi-angle-right" rounded text raised onClick={handleDirectionLeft} />
              </div>
              <div className='arrow-button'>
                <Button className="arrow-button-style" icon="pi pi-angle-left" rounded text size="small" raised onClick={handleDirectionRight}/>
              </div>                
              <div className='arrow-button'>
                <Button className="arrow-button-style" icon="pi pi-angle-down" rounded text raised onClick={handleDirectionUp} />
              </div>                
              <div className='arrow-button'>
                <Button className="arrow-button-style" icon="pi pi-angle-up" rounded text raised onClick={handleDirectionDown} />
              </div>
          </div>
          <div className="text-divider">Transition</div>
          {/* <div className="section-row">      
              <Dropdown value={hoverEffectSettings.transitionType} onChange={handleTransitionTypeChange} inputId="transitionType" options={generalOptions.transitionTypeOptions} optionLabel="name" 
                    placeholder="Transition type" className="p-inputtext-sm w-full" />      
          </div> */}

          <div className="two-options-container">
            <div className="big-option-wrapper">
              <Dropdown value={hoverEffectSettings.transitionType} onChange={handleTransitionTypeChange} inputId="transitionType" options={generalOptions.transitionTypeOptions} optionLabel="name" 
                      placeholder="Transition type" className="p-inputtext-sm w-full" />   
            </div>
            <div className="small-option-wrapper" style={{ padding: '10px' }}>
              <InputNumber className="p-inputtext-sm" showButtons inputStyle={{ width: '80px' }} min={0} max={9} inputId="transitionDuration" step={0.05} value={hoverEffectSettings.transitionDuration} onValueChange={handleTransitionDurationChange} suffix="s" />
            </div>
          </div>
        </>
    )


}


