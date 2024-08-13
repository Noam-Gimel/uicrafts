import React, { useState } from "react";
import cn from './settingstyle.module.css';
import './SettingsBar.css';
import { Button } from 'primereact/button';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";


export function SettingsBar() {
    const [activeTab, setActiveTab] = useState('General');
    const [textValue, setTextValue] = useState('');
    const [blurValue, setBlurValue] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(null);

  return (
    <div className="settings-bar">
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
      <div className="tab-content">
        {activeTab === 'General' && (
          <div className="settings-options">
            <div className="settings-option">
                <label htmlFor="ButtonText">Text</label>
                <InputText variant="filled" id="ButtonText" placeholder="Craft" value={textValue} className="p-inputtext-sm" onChange={(e) => setTextValue(e.target.value)} />
            </div>
          </div>
        )}
        {activeTab === 'Colors' && (
          <div className="settings-options">
            <div className="settings-option">
              {/* <label htmlFor="primaryColor">Primary Color</label> */}
              <div>Primary Color</div>
              <input 
                type="color"
                id="primaryColor" 
                value={backgroundColor}
                onChange={e => setBackgroundColor(e.target.value)}
                />
            </div>
            <div className="settings-option">
              {/* <label htmlFor="secondaryColor">Secondary Color</label> */}
              <div>Secondary Color</div>
              <input type="color" id="secondaryColor" />
            </div>
          </div>
        )}
        {activeTab === 'Effects' && (
          <div className="settings-options">
            <div className="settings-option">
              {/* <label htmlFor="blurEffect">Blur Effect</label> */}
              <label htmlFor="blurValue">Blur Effect</label>
              <Slider className='slider w-14rem' id='blurValue' value={blurValue} onChange={(e) => setBlurValue(e.value)}  />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

