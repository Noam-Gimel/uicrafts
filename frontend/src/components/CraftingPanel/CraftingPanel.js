import React, { useState, useContext } from "react";
import './craftingPanel.css';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import DropdownMenu from "../OptionItemsMenu/DropdownMenu";
import { ButtonContext } from "../../context/ButtonContext";
import { Divider } from 'primereact/divider';
import { Slider } from "primereact/slider";
import { InputNumber } from 'primereact/inputnumber';
 

export function CraftingPanel() {
  const { 
    buttonGeneralSettings,
    updateButtonGeneralSettings,
    buttonTextSettings,
    updateButtonTextSettings,
    hoverEffectSettings,
    updateHoverEffectSettings

  } = useContext(ButtonContext);

  const [activeTab, setActiveTab] = useState('General');

  const handleBackgroundColorChange = (e) => {
    updateButtonGeneralSettings('backgroundColor', e.target.value);
  };
  const handleTextColorChange = (e) => {
    updateButtonTextSettings('textColor', e.target.value);
  };
  const handleButtoTextnChange = (e) => {
    updateButtonTextSettings('buttonText', e.target.value);
  };

  const handleBorderRadiusChange = (e) => {
    updateButtonGeneralSettings('borderRadius', e.value);
  }

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


  return (
    <div className="settings-bar">
      <div className="settings-bar-header">
        <h2 className="settings-title">Crafting Zone</h2>
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'General' ? 'active' : ''}`}
            onClick={() => setActiveTab('General')}
          >
            General
          </button>
          <button
            className={`tab-button ${activeTab === 'Colors' ? 'active' : ''}`}
            onClick={() => setActiveTab('Colors')}
          >
            Colors
          </button>
          <button
            className={`tab-button ${activeTab === 'Effects' ? 'active' : ''}`}
            onClick={() => setActiveTab('Effects')}
          >
            Effects
          </button>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'General' && (
          <div className="settings-options">
            <div className="settings-option">
                {/* <div className="section-divider">Button Text</div> */}
                {/* <Divider align="left">
                  <div className="inline-flex align-items-center">
                      <b>Text</b>
                  </div>
                </Divider> */}
                <label htmlFor="ButtonText">Text</label>
                <InputText variant="filled" id="ButtonText" placeholder="Craft" value={buttonTextSettings.buttonText} className="p-inputtext-sm" onChange={handleButtoTextnChange} />
            </div>
            <div className="two-options-container">
              <div className="big-option-wrapper">
                <Slider min='0' max='30' value={buttonGeneralSettings.borderRadius} onChange={handleBorderRadiusChange} className="w-full" />
              </div>
              <div className="small-option-wrapper" style={{ padding: '10px' }}>
                <InputNumber inputStyle={{ width: '80px' }} maxLength={3} max={30} inputId="percent" value={buttonGeneralSettings.borderRadius} onValueChange={handleBorderRadiusChange} prefix="%" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'Colors' && (
          <div className="settings-options">
            <div className="settings-option">
              {/* <label htmlFor="TextColor">Primary Color</label> */}
              <div>Text Color</div>
              <input 
                type="color"
                id="TextColor" 
                value={buttonTextSettings.textColor}
                onChange={handleTextColorChange}
                />
            </div>
            <div className="settings-option">
              {/* <label htmlFor="bgColor">Secondary Color</label> */}
              <div>Background Color</div>
              <input 
                type="color" 
                id="bgColor" 
                value={buttonGeneralSettings.backgroundColor}
                onChange={handleBackgroundColorChange}
                />
            </div>
            <div className="settings-option">
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
            </div>
          </div>
        )}
        {activeTab === 'Effects' && (
          <DropdownMenu />
          // <div className="settings-options">
          //   <div className="settings-option">
          //     {/* <label htmlFor="blurEffect">Blur Effect</label> */}
          //     <label htmlFor="blurValue">Blur Effect</label>
          //     <Slider className='slider w-14rem' id='blurValue' value={blurValue} onChange={(e) => setBlurValue(e.value)}  />
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
}

